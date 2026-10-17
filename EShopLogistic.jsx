import { useEffect, useMemo, useRef, useState } from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import "./EShopLogistic.css";

// ============================================================
// API: запросы к EShopLogistic, DaData и Яндекс Геокодеру
// ============================================================

// Сетевые запросы к внешним сервисам: EShopLogistic, DaData, Яндекс Геокодер.
// Все функции бросают исключение при ошибке, обработка — на стороне вызывающего кода.

const ESHOP_API_URL = "https://api.esplc.ru";
const DADATA_API_URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs";
const YANDEX_GEOCODER_URL = "https://geocode-maps.yandex.ru/1.x/";
const IPIFY_URL = "https://api.ipify.org?format=json";

async function postJson(url, body, headers = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Запрос ${url} завершился с ошибкой ${response.status}`);
  }

  return response.json();
}

function dadataHeaders(token) {
  return { Authorization: `Token ${token}` };
}

// Справочник служб доставки, доступных для ключа магазина.
async function fetchClientState(token) {
  const json = await postJson(`${ESHOP_API_URL}/client/state`, { key: token });
  return json?.data?.services ?? {};
}

// Расчёт стоимости и сроков доставки одной службой.
function fetchCalculation(token, { service, to, weight, address }) {
  return postJson(`${ESHOP_API_URL}/delivery/calculation`, {
    key: token,
    service,
    to,
    weight,
    address,
  });
}

// Первая подсказка DaData по текстовому адресу (или null, если ничего не нашлось).
async function suggestAddress(token, query) {
  const json = await postJson(
    `${DADATA_API_URL}/suggest/address`,
    { query, count: 1 },
    dadataHeaders(token)
  );

  return json?.suggestions?.[0] ?? null;
}

// Примерное местоположение пользователя по IP (подсказка DaData или null).
async function detectLocationByIp(token) {
  const ipResponse = await fetch(IPIFY_URL);

  if (!ipResponse.ok) {
    throw new Error("Не удалось определить IP адрес.");
  }

  const { ip } = await ipResponse.json();
  const json = await postJson(`${DADATA_API_URL}/iplocate/address`, { ip }, dadataHeaders(token));

  return json?.location ?? null;
}

// Текстовый адрес по координатам точки на карте (или null).
async function reverseGeocode(apiKey, [lon, lat]) {
  const params = new URLSearchParams({
    apikey: apiKey,
    geocode: `${lon},${lat}`,
    format: "json",
  });

  const response = await fetch(`${YANDEX_GEOCODER_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Не удалось определить адрес по точке на карте.");
  }

  const json = await response.json();
  const geoObject = json?.response?.GeoObjectCollection?.featureMember?.[0]?.GeoObject;

  return geoObject?.metaDataProperty?.GeocoderMetaData?.text ?? null;
}

// ============================================================
// Утилиты: разбор ответов API, форматирование и валидация
// ============================================================

// Чистые функции: разбор ответов API, форматирование и валидация.

const DELIVERY_TYPES = [
  { type: "terminal", label: "до пункта выдачи" },
  { type: "door", label: "курьером" },
];

// Безопасно преобразуем значение к строке для вывода в UI.
function renderValue(value) {
  if (value == null) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function hasCoordinates(point) {
  return Number.isFinite(point?.lon) && Number.isFinite(point?.lat);
}

// ---------- DaData ----------

function getFias(data) {
  return data?.city_fias_id || data?.settlement_fias_id || data?.region_fias_id || null;
}

// Город/населённый пункт из подсказки DaData — используется для расчёта доставки.
function cityFromSuggestion(suggestion) {
  const data = suggestion?.data;
  const fias = getFias(data);

  if (!fias) {
    return null;
  }

  return {
    value: data.city_with_type || data.settlement_with_type || data.region_with_type || suggestion.value,
    fias,
    lon: Number(data.geo_lon),
    lat: Number(data.geo_lat),
  };
}

// Полный адрес курьерской доставки из подсказки DaData.
// Поля country/region/city/... нужны серверной функции createEShopDeliveryOrder.
function addressFromSuggestion(suggestion, overrides = {}) {
  const data = suggestion?.data ?? {};

  return {
    value: suggestion?.value ?? "",
    fias: getFias(data),
    lon: Number(data.geo_lon),
    lat: Number(data.geo_lat),
    country: data.country_iso_code ?? null,
    region: data.region_with_type ?? null,
    city: data.city_with_type || data.settlement_with_type || null,
    district: data.city_district ?? null,
    street: data.street_with_type ?? null,
    house: data.house ?? null,
    ...overrides,
  };
}

// ---------- EShopLogistic ----------

// Предложение службы для типа доставки ("terminal" | "door") или null.
function getDeliveryOffer(calculation, type) {
  return calculation?.data?.[type] ?? null;
}

function formatOffer(offer) {
  return `${offer?.price?.value} ${offer?.price?.unit} - ${offer?.time?.value} ${offer?.time?.unit}`;
}

function getTerminals(calculation) {
  return Object.values(calculation?.data?.terminals ?? {});
}

// Гео-объекты терминалов для кластеризатора Яндекс.Карт.
function buildTerminalFeatures(terminals) {
  return terminals.map((terminal, index) => ({
    id: `${terminal.service}-${terminal.code ?? index}`,
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [Number(terminal.lon), Number(terminal.lat)],
    },
    properties: { terminal },
  }));
}

// Черновик доставки до пункта выдачи.
function buildTerminalDraft(service, terminal) {
  return {
    service,
    type: "terminal",
    isPostamat: terminal.is_postamat,
    address: { value: terminal.address },
    code: terminal.code,
    price: terminal.price?.value,
    unitPrice: terminal.price?.unit,
    time: terminal.time?.value,
    unitTime: terminal.time?.unit,
    payment: terminal.payment?.methods,
  };
}

// Черновик курьерской доставки по адресу с пересчитанной стоимостью.
function buildDoorDraft(service, address, offer) {
  return {
    service,
    type: "door",
    address,
    price: offer.price?.value,
    unitPrice: offer.price?.unit,
    time: offer.time?.value,
    unitTime: offer.time?.unit,
  };
}

// ---------- Контакты получателя ----------

function getPhoneDigits(value) {
  return (value || "").replace(/\D/g, "");
}

// Маска "+7 (900) 800-70-60". Разделители добавляются только перед следующей цифрой,
// поэтому Backspace не «застревает» на скобках и дефисах.
function formatPhone(value) {
  let digits = getPhoneDigits(value);

  if (!digits) {
    return "";
  }

  if (digits[0] === "8") {
    digits = `7${digits.slice(1)}`;
  } else if (digits[0] !== "7") {
    digits = `7${digits}`;
  }

  digits = digits.slice(0, 11);

  let formatted = `+${digits[0]}`;
  if (digits.length > 1) formatted += ` (${digits.slice(1, 4)}`;
  if (digits.length > 4) formatted += `) ${digits.slice(4, 7)}`;
  if (digits.length > 7) formatted += `-${digits.slice(7, 9)}`;
  if (digits.length > 9) formatted += `-${digits.slice(9, 11)}`;

  return formatted;
}

// Возвращает объект с ключами невалидных полей: { room?, name?, phone? }.
function validateContacts(contacts, deliveryType) {
  const errors = {};

  if (deliveryType === "door" && !contacts.room.trim()) {
    errors.room = true;
  }

  if (!contacts.name.trim()) {
    errors.name = true;
  }

  if (getPhoneDigits(contacts.phone).length !== 11) {
    errors.phone = true;
  }

  return errors;
}

// ============================================================
// Хук useLatest
// ============================================================

// Ref с актуальным значением. Нужен для колбэков, которые создаются один раз
// (обработчики карты), чтобы они не работали со «старым» состоянием.
function useLatest(value) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

// ============================================================
// Хук useDeliveryCalculation
// ============================================================

// Загружает справочник служб и рассчитывает доставку всеми службами в выбранный город.
// calculations: { [service]: ответ API | null (ошибка) }; отсутствие ключа — расчёт ещё идёт.
function useDeliveryCalculation({ token, orderWeight, city }) {
  const [services, setServices] = useState(null);
  const [stateError, setStateError] = useState(false);
  const [calculations, setCalculations] = useState({});
  const [calculationFailed, setCalculationFailed] = useState(false);

  const cityFias = city?.fias ?? null;
  const cityNameRef = useLatest(city?.value);

  useEffect(() => {
    let cancelled = false;

    setStateError(false);
    fetchClientState(token)
      .then((nextServices) => {
        if (!cancelled) setServices(nextServices);
      })
      .catch((error) => {
        console.error("Ошибка загрузки служб доставки:", error);
        if (!cancelled) setStateError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  // Пересчитываем при смене города или веса заказа. Ответы по старому городу
  // отбрасываются, чтобы не смешивать цены разных городов.
  useEffect(() => {
    if (!services || !cityFias) {
      return;
    }

    let cancelled = false;

    setCalculations({});
    setCalculationFailed(false);

    Object.keys(services).forEach((service) => {
      fetchCalculation(token, {
        service,
        to: cityFias,
        weight: orderWeight,
        address: cityNameRef.current,
      })
        .catch((error) => {
          console.error(`Ошибка расчёта доставки ${service}:`, error);
          if (!cancelled) setCalculationFailed(true);
          return null;
        })
        .then((result) => {
          if (!cancelled) {
            setCalculations((prev) => ({ ...prev, [service]: result }));
          }
        });
    });

    return () => {
      cancelled = true;
    };
  }, [token, services, cityFias, orderWeight]);

  const isCalculating =
    Boolean(services && cityFias) && Object.keys(services).some((service) => !(service in calculations));

  return {
    services,
    isLoading: !services && !stateError,
    stateError,
    calculations,
    isCalculating,
    calculationFailed,
  };
}

// ============================================================
// Хук useDoorQuote
// ============================================================

const EMPTY_QUOTE = { offer: null, isLoading: false, error: false, unavailable: false };

// Пересчитывает стоимость курьерской доставки для конкретного адреса.
// Ответ на устаревший запрос (адрес/служба уже сменились) игнорируется.
function useDoorQuote({ token, orderWeight, service, address }) {
  const requestKey =
    service && address ? JSON.stringify([service, address.fias, address.value, orderWeight]) : null;

  const [result, setResult] = useState({ key: null, offer: null, error: false });

  useEffect(() => {
    if (!requestKey) {
      return;
    }

    let cancelled = false;

    fetchCalculation(token, {
      service,
      to: address.fias,
      weight: orderWeight,
      address: address.value,
    })
      .then((json) => {
        if (!cancelled) setResult({ key: requestKey, offer: getDeliveryOffer(json, "door"), error: false });
      })
      .catch((error) => {
        console.error("Ошибка пересчёта курьерской доставки:", error);
        if (!cancelled) setResult({ key: requestKey, offer: null, error: true });
      });

    return () => {
      cancelled = true;
    };
    // address и service уже учтены в requestKey.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestKey, token]);

  if (!requestKey) {
    return EMPTY_QUOTE;
  }

  if (result.key !== requestKey) {
    return { ...EMPTY_QUOTE, isLoading: true };
  }

  return {
    offer: result.offer,
    isLoading: false,
    error: result.error,
    unavailable: !result.error && !result.offer,
  };
}

// ============================================================
// Хук useDeliveryContacts
// ============================================================

// Ключи совпадают с прежней версией компонента, чтобы не потерять сохранённые данные.
const STORAGE_KEY = "EShopLogisticDeliveryData";

function loadContacts() {
  let saved = {};

  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    // localStorage недоступен или содержит мусор — начинаем с пустой формы.
  }

  return {
    room: saved.deliveryRoom || "",
    name: saved.deliveryName || "",
    phone: formatPhone(saved.deliveryPhone || ""),
    comment: saved.deliveryComment || "",
  };
}

function saveContacts({ room, name, phone, comment }) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        deliveryRoom: room,
        deliveryName: name,
        deliveryPhone: phone,
        deliveryComment: comment,
      })
    );
  } catch {
    // Сохранение — удобство, а не обязательная функция.
  }
}

// Контакты получателя с сохранением между визитами.
function useDeliveryContacts() {
  const [contacts, setContacts] = useState(loadContacts);

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  function setContact(field, value) {
    setContacts((prev) => ({
      ...prev,
      [field]: field === "phone" ? formatPhone(value) : value,
    }));
  }

  return { contacts, setContact };
}

// ============================================================
// Хук useYandexMap
// ============================================================

const DEFAULT_LOCATION = {
  center: [37.588144, 55.733842],
  zoom: 9,
};

const TERMINALS_SOURCE = "clusterer-source";
const ADDRESS_SOURCE = "delivery-address-source";

let cdnRegistered = false;

function loadYandexMapsScript(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.ymaps3) {
      resolve();
      return;
    }

    const existingScript = document.querySelector('script[src^="https://api-maps.yandex.ru/v3/"]');

    if (existingScript) {
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function loadYandexModules(apiKey) {
  await loadYandexMapsScript(apiKey);
  await window.ymaps3.ready;

  if (!cdnRegistered) {
    window.ymaps3.import.registerCdn(
      "https://cdn.jsdelivr.net/npm/{package}",
      "@yandex/ymaps3-default-ui-theme@latest"
    );
    cdnRegistered = true;
  }

  const [{ YMapZoomControl }, clustererModule] = await Promise.all([
    window.ymaps3.import("@yandex/ymaps3-default-ui-theme"),
    window.ymaps3.import("@yandex/ymaps3-clusterer@0.0.1"),
  ]);

  return { ymaps3: window.ymaps3, YMapZoomControl, clustererModule };
}

function isSameCode(a, b) {
  return a != null && b != null && String(a) === String(b);
}

// Управляет картой декларативно: компонент передаёт центр, терминалы, выбранный
// терминал и точку адреса, а хук синхронизирует с ними объекты Яндекс.Карт.
function useYandexMap({
  apiKey,
  enabled,
  center,
  terminals,
  selectedTerminalCode,
  addressPoint,
  onMapClick,
  onTerminalClick,
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const modulesRef = useRef(null);
  const clustererRef = useRef(null);
  const addressMarkerRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const onMapClickRef = useLatest(onMapClick);
  const onTerminalClickRef = useLatest(onTerminalClick);
  const selectedTerminalCodeRef = useLatest(selectedTerminalCode);

  // Инициализация карты.
  useEffect(() => {
    if (!enabled) {
      return;
    }

    let cancelled = false;

    loadYandexModules(apiKey)
      .then((modules) => {
        if (cancelled || !containerRef.current) {
          return;
        }

        const { ymaps3, YMapZoomControl } = modules;
        const {
          YMap,
          YMapDefaultSchemeLayer,
          YMapDefaultFeaturesLayer,
          YMapFeatureDataSource,
          YMapLayer,
          YMapListener,
          YMapControls,
        } = ymaps3;

        const map = new YMap(containerRef.current, { location: DEFAULT_LOCATION });

        map
          .addChild(new YMapDefaultSchemeLayer())
          .addChild(new YMapDefaultFeaturesLayer())
          .addChild(new YMapFeatureDataSource({ id: TERMINALS_SOURCE }))
          .addChild(new YMapLayer({ source: TERMINALS_SOURCE, type: "markers", zIndex: 1800 }))
          .addChild(new YMapFeatureDataSource({ id: ADDRESS_SOURCE }))
          .addChild(new YMapLayer({ source: ADDRESS_SOURCE, type: "markers", zIndex: 1900 }))
          .addChild(
            new YMapControls({ position: "right", orientation: "vertical" }, [
              new YMapZoomControl({ easing: "linear" }),
            ])
          )
          .addChild(
            new YMapListener({
              layer: "any",
              onClick: (object, event) => onMapClickRef.current?.(event.coordinates),
            })
          );

        modulesRef.current = modules;
        mapRef.current = map;
        setLoadError(false);
        setIsReady(true);
      })
      .catch((error) => {
        console.error("Ошибка загрузки Яндекс.Карт:", error);
        if (!cancelled) setLoadError(true);
      });

    return () => {
      cancelled = true;
      mapRef.current?.destroy();
      mapRef.current = null;
      clustererRef.current = null;
      addressMarkerRef.current = null;
      setIsReady(false);
    };
    // Обработчики читаются через ref, пересоздавать карту из-за них не нужно.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, apiKey]);

  // Центр карты.
  const centerLon = center?.lon;
  const centerLat = center?.lat;

  useEffect(() => {
    if (isReady && hasCoordinates({ lon: centerLon, lat: centerLat })) {
      mapRef.current.setLocation({ center: [centerLon, centerLat] });
    }
  }, [isReady, centerLon, centerLat]);

  // Кластеры пунктов выдачи.
  useEffect(() => {
    const map = mapRef.current;

    if (!isReady || !map) {
      return;
    }

    const { ymaps3, clustererModule } = modulesRef.current;
    const { YMapMarker } = ymaps3;
    const { YMapClusterer, clusterByGrid } = clustererModule;

    const createMarker = (feature) => {
      const { terminal } = feature.properties;
      const element = document.createElement("img");

      element.className = "ymap-marker";
      element.src = terminal.image;
      element.dataset.code = String(terminal.code);
      element.classList.toggle("active", isSameCode(terminal.code, selectedTerminalCodeRef.current));
      element.onclick = () => onTerminalClickRef.current?.(terminal);

      return new YMapMarker({ coordinates: feature.geometry.coordinates, source: TERMINALS_SOURCE }, element);
    };

    const createCluster = (coordinates, features) => {
      const element = document.createElement("div");

      element.className = "ymap-cluster";
      element.textContent = features.length;

      return new YMapMarker({ coordinates, source: TERMINALS_SOURCE }, element);
    };

    if (terminals?.length) {
      clustererRef.current = new YMapClusterer({
        method: clusterByGrid({ gridSize: 128 }),
        features: buildTerminalFeatures(terminals),
        marker: createMarker,
        cluster: createCluster,
      });
      map.addChild(clustererRef.current);
    }

    return () => {
      if (clustererRef.current && mapRef.current) {
        mapRef.current.removeChild(clustererRef.current);
      }
      clustererRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady, terminals]);

  // Подсветка выбранного пункта выдачи (только внутри этой карты).
  useEffect(() => {
    containerRef.current?.querySelectorAll(".ymap-marker").forEach((element) => {
      element.classList.toggle("active", isSameCode(element.dataset.code, selectedTerminalCode));
    });
  }, [selectedTerminalCode, isReady]);

  // Маркер адреса курьерской доставки.
  const addressLon = addressPoint?.lon;
  const addressLat = addressPoint?.lat;

  useEffect(() => {
    const map = mapRef.current;

    if (!isReady || !map || !hasCoordinates({ lon: addressLon, lat: addressLat })) {
      return;
    }

    const { YMapMarker } = modulesRef.current.ymaps3;
    const element = document.createElement("div");
    element.className = "delivery-address-marker";

    addressMarkerRef.current = new YMapMarker(
      { coordinates: [addressLon, addressLat], source: ADDRESS_SOURCE },
      element
    );
    map.addChild(addressMarkerRef.current);

    return () => {
      if (addressMarkerRef.current && mapRef.current) {
        mapRef.current.removeChild(addressMarkerRef.current);
      }
      addressMarkerRef.current = null;
    };
  }, [isReady, addressLon, addressLat]);

  return { containerRef, isReady, loadError };
}

// ============================================================
// Компонент StatusMessage
// ============================================================

// Сообщение о текущем шаге или ошибке. type: "info" | "success" | "error".
function StatusMessage({ type, text, reloadRecommended = false }) {
  return (
    <div className={`deliveryStatus deliveryStatus--${type}`}>
      <div>{text}</div>
      {reloadRecommended && (
        <div className="deliveryStatusHint">Если проблема повторяется, попробуйте перезагрузить страницу.</div>
      )}
    </div>
  );
}

// ============================================================
// Компонент DeliveryMethodList
// ============================================================

// Список доступных способов доставки по всем службам.
function DeliveryMethodList({ services, calculations, selectedMethod, onSelect }) {
  const items = Object.keys(services).flatMap((service) =>
    DELIVERY_TYPES.map(({ type, label }) => ({
      service,
      type,
      label,
      offer: getDeliveryOffer(calculations[service], type),
    })).filter((item) => item.offer)
  );

  if (!items.length) {
    return null;
  }

  return (
    <ul className="deliveryCalculation">
      {items.map(({ service, type, label, offer }) => {
        const isActive = selectedMethod?.service === service && selectedMethod?.type === type;

        return (
          <li
            key={`${service}-${type}`}
            className={`deliveryMethod${isActive ? " active" : ""}`}
            onClick={() => onSelect(service, type)}
          >
            <span>
              {services[service]?.name ?? service} {label}: {formatOffer(offer)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

// ============================================================
// Компонент PointInfo
// ============================================================

// Карточка рядом с картой: выбранный пункт выдачи или адрес курьерской доставки.
function PointInfo({ terminal, serviceInfo, address }) {
  if (terminal) {
    return (
      <ul className="pointInfo">
        <li>
          <img src={terminal.image} alt={terminal.service} />
        </li>
        <li>{terminal.is_postamat ? "Постамат" : "Пункт выдачи"}</li>
        <li>{renderValue(terminal.address)}</li>
        <li>{renderValue(terminal.workTime)}</li>
        <li>
          Номер: {Array.isArray(terminal.phones) ? terminal.phones.join(", ") : renderValue(terminal.phones)}
        </li>
        {terminal.note && <q>{renderValue(terminal.note)}</q>}
      </ul>
    );
  }

  if (address && serviceInfo) {
    return (
      <ul className="pointInfo">
        <li>
          <img src={serviceInfo.logo} alt={serviceInfo.name} />
        </li>
        <li>{serviceInfo.name}</li>
        <li>{address.value}</li>
      </ul>
    );
  }

  return <ul className="pointInfo" />;
}

// ============================================================
// Компонент DeliveryConfirmForm
// ============================================================

function ContactField({ label, required, className, hasError, value, onChange, ...inputProps }) {
  return (
    <div>
      {required && <span className="red">*</span>}
      {label}:{" "}
      <input
        className={`${className}${hasError ? " inputError" : ""}`}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        {...inputProps}
      />
    </div>
  );
}

function getHeading(draft) {
  if (draft.type === "door") return "Курьер";
  return draft.isPostamat ? "Постамат" : "Пункт выдачи";
}

// Итог выбранной доставки и контакты получателя.
function DeliveryConfirmForm({ draft, serviceInfo, contacts, errors, onContactChange }) {
  return (
    <div className="prooveDelivery">
      {serviceInfo?.logo && <img src={serviceInfo.logo} alt={draft.service} />}
      <div className="heading">
        {getHeading(draft)} {serviceInfo?.name}
      </div>
      <div className="address">{draft.address.value}</div>

      {draft.type === "door" && (
        <ContactField
          label="Квартира"
          required
          className="room"
          placeholder="№"
          hasError={errors.room}
          value={contacts.room}
          onChange={(value) => onContactChange("room", value)}
        />
      )}

      <ContactField
        label="Имя"
        required
        className="name"
        placeholder="Сайтама"
        hasError={errors.name}
        value={contacts.name}
        onChange={(value) => onContactChange("name", value)}
      />

      <ContactField
        label="Телефон"
        required
        className="phone"
        inputMode="tel"
        placeholder="+7 (900) 800-70-60"
        hasError={errors.phone}
        value={contacts.phone}
        onChange={(value) => onContactChange("phone", value)}
      />

      <ContactField
        label="Комментарий"
        className="comment"
        placeholder="Комментарий к доставке (укажите особенности адреса)"
        value={contacts.comment}
        onChange={(value) => onContactChange("comment", value)}
      />

      <div className="time">{`${draft.time} ${draft.unitTime}`}</div>
      <div className="price">{`${draft.price} ${draft.unitPrice}`}</div>
    </div>
  );
}

// ============================================================
// Главный компонент EShopLogistic
// ============================================================

// Подсказка о текущем шаге оформления доставки.
function getProgressStatus({
  delivery,
  city,
  hasOffers,
  selectedMethod,
  terminals,
  selectedTerminal,
  doorAddress,
  doorQuote,
  isResolvingAddress,
  draft,
  isContactsValid,
}) {
  const info = (text) => ({ type: "info", text });

  if (delivery.isLoading) return info("Загружаем варианты доставки...");
  if (!delivery.services) return null;
  if (!city) return info("Укажите город или адрес доставки в строке поиска.");
  if (!selectedMethod && delivery.isCalculating) return info("Рассчитываем стоимость и сроки доставки...");
  if (!hasOffers) return info("Для этого города нет доступных способов доставки. Попробуйте указать другой адрес.");
  if (!selectedMethod) return info("Выберите способ доставки.");

  if (selectedMethod.type === "terminal") {
    if (!terminals.length) return info("Для выбранного способа нет точек выдачи. Попробуйте другой вариант.");
    if (!selectedTerminal) return info("Выберите удобный пункт выдачи на карте.");
  }

  if (selectedMethod.type === "door") {
    if (isResolvingAddress) return info("Определяем адрес по выбранной точке на карте...");
    if (!doorAddress) return info("Выберите адрес на карте или введите его в строке поиска.");
    if (doorQuote.isLoading) return info("Пересчитываем стоимость доставки для адреса...");
    if (doorQuote.unavailable) {
      return info("Курьерская доставка этой службы недоступна по выбранному адресу. Выберите другой адрес или способ.");
    }
  }

  if (!draft) return null;
  if (!isContactsValid) return info("Заполните обязательные поля доставки.");

  return { type: "success", text: "Доставка подтверждена." };
}

const EShopLogistic = ({ DADATA_TOKEN, ESHOPLOGISTIC_TOKEN, YANDEX_API_KEY, orderWeight, onDeliveryConfirm }) => {
  // Шаг 1. Город и расчёт доставки всеми службами.
  const [city, setCity] = useState(null);
  const cityRef = useLatest(city);
  const delivery = useDeliveryCalculation({ token: ESHOPLOGISTIC_TOKEN, orderWeight, city });

  // Шаг 2. Способ доставки и точка получения (пункт выдачи или адрес курьера).
  const [selectedMethod, setSelectedMethod] = useState(null); // { service, type }
  const [selectedTerminal, setSelectedTerminal] = useState(null);
  const [doorAddress, setDoorAddress] = useState(null);
  const [isResolvingAddress, setIsResolvingAddress] = useState(false);
  const [mapClickError, setMapClickError] = useState(false);
  const [notice, setNotice] = useState(null);
  const mapClickIdRef = useRef(0);

  const isDoorMode = selectedMethod?.type === "door";
  const selectedService = selectedMethod ? delivery.services?.[selectedMethod.service] : null;
  const methodCalculation = selectedMethod ? delivery.calculations[selectedMethod.service] : undefined;

  const terminals = useMemo(
    () => (selectedMethod?.type === "terminal" ? getTerminals(methodCalculation) : []),
    [selectedMethod?.type, methodCalculation]
  );

  const doorQuote = useDoorQuote({
    token: ESHOPLOGISTIC_TOKEN,
    orderWeight,
    service: isDoorMode ? selectedMethod.service : null,
    address: isDoorMode ? doorAddress : null,
  });

  // Шаг 3. Контакты получателя.
  const { contacts, setContact } = useDeliveryContacts();

  // Черновик доставки — выводится из выбора пользователя, без отдельного state.
  const draft = useMemo(() => {
    if (selectedMethod?.type === "terminal" && selectedTerminal) {
      return buildTerminalDraft(selectedMethod.service, selectedTerminal);
    }

    if (selectedMethod?.type === "door" && doorAddress && doorQuote.offer) {
      return buildDoorDraft(selectedMethod.service, doorAddress, doorQuote.offer);
    }

    return null;
  }, [selectedMethod, selectedTerminal, doorAddress, doorQuote.offer]);

  const contactErrors = draft ? validateContacts(contacts, draft.type) : {};
  const isContactsValid = Object.keys(contactErrors).length === 0;

  const confirmedDelivery = useMemo(() => {
    if (!draft || !isContactsValid) {
      return null;
    }

    return {
      ...draft,
      room: draft.type === "door" ? contacts.room.trim() : "",
      name: contacts.name.trim(),
      phone: contacts.phone.trim(),
      comment: contacts.comment.trim() || null,
      checked: true,
    };
  }, [draft, isContactsValid, contacts]);

  // ---------- Обработчики ----------

  function selectCity(nextCity) {
    if (nextCity.fias !== cityRef.current?.fias) {
      setSelectedTerminal(null);
      setDoorAddress((prev) => (prev?.fias === nextCity.fias ? prev : null));
    }

    setCity(nextCity);
  }

  function selectDoorAddress(address) {
    const fias = address.fias || cityRef.current?.fias;

    if (!fias) {
      setMapClickError(true);
      return;
    }

    selectCity({
      value: address.city || address.region || address.value,
      fias,
      lon: address.lon,
      lat: address.lat,
    });
    setDoorAddress({ ...address, fias });
  }

  function handleSearchSelect(suggestion) {
    setNotice(null);
    setMapClickError(false);

    // В режиме курьера адрес с номером дома становится адресом доставки,
    // а всё менее точное — просто сменой города.
    if (isDoorMode && suggestion?.data?.house) {
      selectDoorAddress(addressFromSuggestion(suggestion));
      return;
    }

    const nextCity = cityFromSuggestion(suggestion);

    if (!nextCity) {
      return;
    }

    selectCity(nextCity);

    if (isDoorMode) {
      setNotice({ type: "info", text: "Уточните адрес до номера дома или выберите точку на карте." });
    }
  }

  async function handleMapClick(coordinates) {
    if (!isDoorMode) {
      return;
    }

    const requestId = ++mapClickIdRef.current;
    const isLatestRequest = () => requestId === mapClickIdRef.current;

    setNotice(null);
    setMapClickError(false);
    setIsResolvingAddress(true);

    try {
      const addressText = await reverseGeocode(YANDEX_API_KEY, coordinates);

      if (!addressText) {
        throw new Error("Геокодер не вернул адрес.");
      }

      // Подсказка DaData нужна для FIAS и структурированных полей адреса.
      // Если она недоступна, оставляем текст геокодера и FIAS текущего города.
      const suggestion = await suggestAddress(DADATA_TOKEN, addressText).catch((error) => {
        console.warn("Не удалось уточнить адрес в DaData:", error);
        return null;
      });

      if (!isLatestRequest()) {
        return;
      }

      const [lon, lat] = coordinates;
      selectDoorAddress(addressFromSuggestion(suggestion, { value: addressText, lon, lat }));
    } catch (error) {
      console.error("Ошибка выбора адреса на карте:", error);
      if (isLatestRequest()) setMapClickError(true);
    } finally {
      if (isLatestRequest()) setIsResolvingAddress(false);
    }
  }

  function handleMethodSelect(service, type) {
    if (selectedMethod?.service === service && selectedMethod?.type === type) {
      return;
    }

    setSelectedMethod({ service, type });
    setSelectedTerminal(null);
    setNotice(null);
    setMapClickError(false);
  }

  function handleTerminalSelect(terminal) {
    setSelectedTerminal(terminal);
    setNotice(null);
  }

  // ---------- Эффекты ----------

  // Пробуем определить город по IP, если пользователь ещё не выбрал его сам.
  useEffect(() => {
    let cancelled = false;

    detectLocationByIp(DADATA_TOKEN)
      .then((location) => {
        const detectedCity = cityFromSuggestion(location);
        if (!cancelled && detectedCity) setCity((prev) => prev ?? detectedCity);
      })
      .catch((error) => console.warn("Не удалось определить город по IP:", error));

    return () => {
      cancelled = true;
    };
  }, [DADATA_TOKEN]);

  // После пересчёта выбранный способ может стать недоступным — сбрасываем выбор.
  useEffect(() => {
    if (!selectedMethod || methodCalculation === undefined) {
      return;
    }

    if (getDeliveryOffer(methodCalculation, selectedMethod.type)) {
      return;
    }

    setSelectedMethod(null);
    setSelectedTerminal(null);
    setNotice({
      type: "info",
      text: "Выбранный способ доставки недоступен для текущего адреса. Пожалуйста, выберите другой вариант.",
    });
  }, [selectedMethod, methodCalculation]);

  // Сообщаем наружу актуальные данные доставки: объект, когда всё заполнено, иначе null.
  const onDeliveryConfirmRef = useLatest(onDeliveryConfirm);
  const lastConfirmedRef = useRef(JSON.stringify(null));

  useEffect(() => {
    const serialized = JSON.stringify(confirmedDelivery);

    if (serialized === lastConfirmedRef.current) {
      return;
    }

    lastConfirmedRef.current = serialized;
    onDeliveryConfirmRef.current?.(confirmedDelivery);
  }, [confirmedDelivery, onDeliveryConfirmRef]);

  const map = useYandexMap({
    apiKey: YANDEX_API_KEY,
    enabled: Boolean(delivery.services),
    center: isDoorMode && doorAddress ? doorAddress : city,
    terminals,
    selectedTerminalCode: selectedTerminal?.code,
    addressPoint: isDoorMode ? doorAddress : null,
    onMapClick: handleMapClick,
    onTerminalClick: handleTerminalSelect,
  });

  // ---------- Сообщения ----------

  const errors = [
    delivery.stateError && { text: "Не удалось загрузить службы доставки.", reloadRecommended: true },
    delivery.calculationFailed && {
      text: "Не удалось рассчитать доставку для части служб. Попробуйте выбрать другой способ.",
      reloadRecommended: true,
    },
    map.loadError && {
      text: "Не удалось загрузить карту. Вы всё равно можете выбрать город и адрес через поиск.",
      reloadRecommended: true,
    },
    mapClickError && { text: "Не удалось определить адрес по выбранной точке. Попробуйте выбрать другое место." },
    doorQuote.error && { text: "Не удалось пересчитать стоимость доставки для адреса.", reloadRecommended: true },
  ].filter(Boolean);

  const progressStatus = getProgressStatus({
    delivery,
    city,
    hasOffers: Object.values(delivery.calculations).some(
      (calculation) => getDeliveryOffer(calculation, "terminal") || getDeliveryOffer(calculation, "door")
    ),
    selectedMethod,
    terminals,
    selectedTerminal,
    doorAddress,
    doorQuote,
    isResolvingAddress,
    draft,
    isContactsValid,
  });

  // Стабильные ссылки: react-dadata перезаписывает текст в поле при смене объекта value.
  const terminalSearchValue = useMemo(
    () => (selectedTerminal ? { value: selectedTerminal.address } : null),
    [selectedTerminal]
  );
  const searchValue = terminalSearchValue || (isDoorMode && doorAddress) || city || undefined;

  return (
    <div className="EShopLogistic">
      {delivery.isLoading && <div className="deliveryLoading">Загрузка...</div>}

      {delivery.services && (
        <>
          <AddressSuggestions
            token={DADATA_TOKEN}
            onChange={handleSearchSelect}
            inputProps={{ placeholder: isDoorMode ? "Введите адрес доставки" : "Выберите город или адрес доставки" }}
            value={searchValue}
            delay={300}
          />

          <div className="deliverySettings">
            <DeliveryMethodList
              services={delivery.services}
              calculations={delivery.calculations}
              selectedMethod={selectedMethod}
              onSelect={handleMethodSelect}
            />
          </div>

          <div className="deliveryInfo">
            <div className="ymap" ref={map.containerRef} />
            <PointInfo
              terminal={selectedTerminal}
              serviceInfo={selectedService}
              address={isDoorMode ? doorAddress : null}
            />
          </div>

          {draft && (
            <DeliveryConfirmForm
              draft={draft}
              serviceInfo={delivery.services[draft.service]}
              contacts={contacts}
              errors={contactErrors}
              onContactChange={setContact}
            />
          )}
        </>
      )}

      {errors.map((error) => (
        <StatusMessage key={error.text} type="error" {...error} />
      ))}
      {notice && <StatusMessage {...notice} />}
      {progressStatus && <StatusMessage {...progressStatus} />}
    </div>
  );
};

export { EShopLogistic };
