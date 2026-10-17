const ESHOP_ORDER_URL = "https://api.esplc.ru/delivery/order";

// Тарифы СДЭК: склад-склад и склад-дверь.
const SDEK_TARIFFS = {
  terminal: 136,
  door: 137,
};

function buildLocationFrom(companyData) {
  return companyData.pick_up === true
    ? { pick_up: true, address: companyData.address }
    : { pick_up: false };
}

function buildLocationTo(deliveryData) {
  if (deliveryData.type === "terminal") {
    return { terminal: deliveryData.code };
  }

  const address = deliveryData.address || {};

  return {
    address: {
      country: address.country,   // string  Код страны: RU, UZ, AZ, KZ, AB, TM, BY, UA, TJ, KG, AM, MD
      region: address.region,     // string  Регион. Например: Московская область
      city: address.city,         // string  Населённый пункт
      district: address.district, // string  Район
      street: address.street,     // string  Улица
      house: address.house,       // string  Номер строения
      room: deliveryData.room,    // string  Квартира / офис / помещение
    },
  };
}

function validateDeliveryData(deliveryData) {
  if (!deliveryData || !deliveryData.checked) {
    throw new Error("deliveryData is missing or was not confirmed by the customer.");
  }

  if (deliveryData.type === "terminal" && !deliveryData.code) {
    throw new Error("deliveryData.code (terminal) is required for terminal delivery.");
  }

  if (deliveryData.type === "door" && !deliveryData.address) {
    throw new Error("deliveryData.address is required for door delivery.");
  }

  if (deliveryData.type !== "terminal" && deliveryData.type !== "door") {
    throw new Error(`Unknown delivery type: ${deliveryData.type}`);
  }
}

async function readJson(response) {
  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

async function createEShopDeliveryOrder(ESHOPLOGISTIC_TOKEN, deliveryData, orderData, companyData) {
  if (!ESHOPLOGISTIC_TOKEN) {
    throw new Error("ESHOPLOGISTIC_TOKEN is required to create an EShopLogistic delivery order.");
  }

  validateDeliveryData(deliveryData);

  const order = {
    id: orderData.id,
    comment: deliveryData.comment,
  };

  let tariff;

  if (deliveryData.service === "sdek") {
    order.type = orderData.type;
    tariff = SDEK_TARIFFS[deliveryData.type];

    if (orderData.combine_places_apply === true) {
      order.combine_places = {
        apply: true,
        weight: orderData.total_weight,
        dimensions: orderData.dimensions,
      };
    }
  }

  const requestBody = {
    key: ESHOPLOGISTIC_TOKEN,
    action: "create",
    cms: "custom",
    service: deliveryData.service,
    order,
    sender: {
      name: companyData.senderName,
      phone: companyData.senderPhone,
      company: companyData.senderCompany,
    },
    receiver: {
      name: deliveryData.name,
      phone: deliveryData.phone,
    },
    places: orderData.places,
    delivery: {
      type: deliveryData.type,
      tariff,
      location_from: buildLocationFrom(companyData),
      location_to: buildLocationTo(deliveryData),
      payment: orderData.payment,
      // Стоимость приходит из браузера. Если вы берёте её с покупателя,
      // перепроверьте сумму на сервере через /delivery/calculation.
      cost: deliveryData.price,
    },
  };

  const response = await fetch(ESHOP_ORDER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });
  const result = await readJson(response);
  const deliveryId = result?.data?.order?.id;

  if (!response.ok || !deliveryId) {
    console.error("EShopLogistic order creation failed:", result);
    throw new Error(`EShopLogistic order creation failed with status ${response.status}`);
  }

  return deliveryId;
}

module.exports = {
  createEShopDeliveryOrder,
};
