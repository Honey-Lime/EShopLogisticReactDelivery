// Здесь описан пример данных со стороны вашего сайта для формирования доставки





// otherData заполняем данными своего магазина, отправителя, адреса отправки заказа(если посылки у вас забирает курьер)
let otherData = {
  sender: {
    name: "Ваше имя",         // string 	Имя
    phone: "87776665544",     // string 	Телефон
    company: "Рога и копыта"  // string 	Название компании
  },
  delivery: {
    location_from: {
      pick_up: false,         // boolean 	Забор груза от отправителя
                              // true = отправляете не с пункта, а со своего адреса, 
                              // и тогда нужно заполнить address(ниже)

      address: {              // заполняем если pick_up = true
        region: "",           // string 	Регион. Например: Московская область
        city: "",             // string 	Населённый пункт
        street: "",           // string 	Улица
        house: "",            // string 	Номер строения
        room: ""              // string 	Квартира / офис / помещение
      }
    }
  }
};

let orderList = [] // массив ваших товаров

let orderData = {
  id: id,                     // string 	Идентификатор заказа на сайте.
  
  places: [],                 // array Нужно заполнить информацией о заказах 
  
  type: 1,                    // integer 	Тип заказа. Доступно 2 варианта: «1» - Интернет-магазин, «2» - Доставка.
  
  combine_places_apply: true, // boolean 	
                              // Объединить все грузовые места в одно.
                              // При этом внутри грузового места формируется список позиций для страховки.
                              // По умолчанию = false.

  total_weight: 0,            // Общий вес заказа

  dimensions: "10*15*",       // заготовка под рассчет общего обьема

  payment: "already_paid",    // string 	Способ оплаты
                              // Возможные варианты:
                              // already_paid - заказ уже оплачен,
                              // cash_on_receipt - наличными при получении,
                              // card_on_receipt - картой при получении,
                              // cashless - безналичный расчет
};

let real_orders = 0;
for (let i = 0; i < orderList.length; i++) {
  orderData.places.push(
    {
      article: orderList[i].article,          // string 	Идентификатор товара / груза.
      name: orderList[i].name,                // string 	Название
      count: 1,                               // integer 	Количество
      price: orderList[i].priceAtOrder,       // double 	Цена, включая НДС
      weight: orderList[i].count / 1000,      // double 	Вес, в кг.
      dimensions: "10*15*6",                  // string 	Габариты. Формат: строка вида «Д*Ш*В», в сантиметрах. Например: 15*25*10 .
      vat_rate: -1,                           // integer 	Значение ставки НДС 
                                              // Возможные варианты: 0, 5, 7, 10, 20, -1 (без НДС)
    }
  );
  if (orderList[i].isSampler == false)
  {
    real_orders++;
  }
  orderData.total_weight += orderList[i].count / 1000;
}

orderData.dimensions = `${orderData.dimensions}${real_orders * 6}`



createDeliveryOrder(deliveryData, orderData, otherData);