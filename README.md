# eshoplogistic-react

Пакет экспортирует клиентский React-компонент и серверную функцию отдельными точками входа:

```js
import { EShopLogistic } from "eshoplogistic-react/client";
const { createOrder } = require("eshoplogistic-react/server");
```

## Установка

```bash
npm install eshoplogistic-react
```

Пакет ожидает, что в проекте уже установлены `react` и `react-dom`. Они указаны как `peerDependencies`, чтобы библиотека использовала React из вашего приложения.

## React-компонент `EShopLogistic`

Компонент показывает выбор города, способов доставки, пунктов выдачи/курьерской доставки и возвращает выбранные пользователем данные через callback.

### Импорт

```jsx
import { EShopLogistic } from "eshoplogistic-react/client";
```

Стили уже импортируются внутри компонента из `EShopLogistic.jsx`. Если ваш сборщик требует явного CSS-импорта из пакета, можно дополнительно подключить:

```js
import "eshoplogistic-react/styles.css";
```

### Пример использования компонента

```jsx
import { useState } from "react";
import { EShopLogistic } from "eshoplogistic-react/client";

export function DeliveryBlock() {
  const [deliveryData, setDeliveryData] = useState(null);

  // Оформление заказа
  const handlePlaceOrder = async () => {
    try {
      await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          deliveryData
        }),
      });
    } catch (error) {
      console.error("Ошибка оформления доставки:", error);
    }
  };

  return (
    <>
      <EShopLogistic
        DADATA_TOKEN="ваш-dadata-token"
        ESHOPLOGISTIC_TOKEN="ваш-public-token-для-расчётов"
        YANDEX_API_KEY="ваш-yandex-api-key"
        orderWeight={1.2}
        onDeliveryConfirm={(deliveryData) => {
          setDeliveryData(deliveryData);
        }}
      />
      
      <button
        className="btn-pay"
        onClick={() => {
          handlePlaceOrder();
        }}
      >
        Оформить доставку
      </button>
    </>
  );
}
```


### Пример использования серверной функции

```js
const { createOrder } = require("eshoplogistic-react/server");

app.post("/api/test", async (req, res) => {
  const { deliveryData } = req.body; // Получаем из EShopLogistic компонента

  const ESHOPLOGISTIC_TOKEN = process.env.ESHOPLOGISTIC_TOKEN;


  // otherData заполняем данными своего магазина, отправителя, адреса отправки заказа(если посылки у вас забирает курьер)
  let companyData = {
    senderName: "Ваше имя",                       // string 	Имя
    senderPhone: "Ваш телефон",                   // string 	Телефон
    senderCompany: "Ваше название компании",      // string 	Название компании
    
    pick_up: false,                               // boolean 	Забор груза от отправителя
    address: {      // заполняем если pick_up = true
      region: "",   // string 	Регион. Например: Московская область
      city: "",     // string 	Населённый пункт
      street: "",   // string 	Улица
      house: "",    // string 	Номер строения
      room: ""      // string 	Квартира / офис / помещение
    }
  };

  let orderData = {
    id: id,               // string 	Идентификатор заказа на сайте.
    places: [{            // array Нужно заполнить информацией о заказах 
        article: "",      // string 	Идентификатор товара / груза.
        name: "",         // string 	Название
        count: 1,         // integer 	Количество
        price: 100.5,     // double 	Цена, включая НДС
        weight: 0.15,     // double 	Вес, в кг.
        dimensions: "",   // string 	Габариты. Формат: строка вида «Д*Ш*В», в сантиметрах. Например: 15*25*10 .
        vat_rate: -1,     // integer 	Значение ставки НДС 
                          // Возможные варианты: 0, 5, 7, 10, 20, -1 (без НДС)
      }],                 
    type: 1,                    // integer 	Тип заказа. Доступно 2 варианта: «1» - Интернет-магазин, «2» - Доставка.
    combine_places_apply: true, // boolean 	
                                // Объединить все грузовые места в одно.
                                // При этом внутри грузового места формируется список позиций для страховки.
                                // По умолчанию = false.
    total_weight: 0,            // Общий вес заказа
    dimensions: "",       // заготовка под рассчет общего обьема
    payment: "already_paid",    // string 	Способ оплаты
                                // Возможные варианты:
                                // already_paid - заказ уже оплачен,
                                // cash_on_receipt - наличными при получении,
                                // card_on_receipt - картой при получении,
                                // cashless - безналичный расчет
  };

  const result = await createOrder(ESHOPLOGISTIC_TOKEN, deliveryData, orderData, companyData);

  console.log(result);

  res.status(200).json("OK");
});
```

### Props

| Prop | Тип | Обязательный | Описание |
| --- | --- | --- | --- |
| `DADATA_TOKEN` | `string` | Да | Токен DaData для подсказок адресов. |
| `ESHOPLOGISTIC_TOKEN` | `string` | Да | Токен EShopLogistic для расчёта доставки в браузере. Не передавайте сюда секретный серверный токен, если он не предназначен для публичного клиента. |
| `YANDEX_API_KEY` | `string` | Да | Ключ API Яндекс.Карт/геокодера. |
| `orderWeight` | `number` | Да | Вес заказа в килограммах для расчёта доставки. |
| `onDeliveryConfirm` | `(deliveryData) => void` | Нет | Callback, который вызывается после подтверждения доставки пользователем. |

## Серверная функция `createOrder`

`createOrder` создаёт заказ доставки через API EShopLogistic. Эту функцию нужно вызывать на сервере, а не в браузере, потому что она использует токен создания заказа.

### Импорт

CommonJS backend:

```js
const { createOrder } = require("eshoplogistic-react/server");
```

ES modules:

```js
import { createOrder } from "eshoplogistic-react/server";
```

### Пример использования

```js
const { createOrder } = require("eshoplogistic-react/server");

const result = await createOrder(
  process.env.ESHOPLOGISTIC_TOKEN,
  deliveryData,
  orderData,
  otherData
);

console.log(result);
```

Токен создания заказа передаётся первым аргументом. Не храните его в клиентском коде.

### Сигнатура

```js
createOrder(ESHOPLOGISTIC_TOKEN, deliveryData, orderData, otherData)
```

| Параметр | Тип | Описание |
| --- | --- | --- |
| `ESHOPLOGISTIC_TOKEN` | `string` | Токен EShopLogistic для создания заказа. Передавайте его только на сервере. |
| `deliveryData` | `object` | Данные выбранной доставки: служба, тип доставки, адрес/терминал, цена, получатель, комментарий. |
| `orderData` | `object` | Данные заказа: id, товары/грузовые места, вес, габариты, оплата. |
| `otherData` | `object` | Данные магазина/отправителя и адреса отправки. |

Пример структуры `orderData` и `otherData` показан выше в разделе «Пример использования серверной функции».

## Важное про безопасность

В публичной версии пакета токен создания заказа не хранится в коде. Передавайте его только на сервере, например через `process.env.ESHOPLOGISTIC_TOKEN`.

Не добавляйте секретный токен в React-компонент, если этот токен не должен быть виден пользователям сайта.
