async function createDeliveryOrder(deliveryData, orderData, otherData)
{
  const ESHOPLOGISTIC_TOKEN = "df616893f983b20fed6ac71e5f6cb9f2";

  let location_from = 
  otherData.delivery.location_from.pick_up == true 
  ? { 
    pick_up: otherData.delivery.location_from.pick_up,
    address: otherData.delivery.location_from.address
  }
  : {
    pick_up: otherData.delivery.location_from.pick_up
  };

  let location_to = 
  deliveryData.type == "terminal" 
  ? {
    terminal: deliveryData.code
  }
  : {
    address: {
      country: deliveryData.address.country,    // string 	Код страны.
                                                // Варианты: RU, UZ, AZ, KZ, AB, TM, BY, UA, TJ, KG, AM, MD 
      region: deliveryData.address.region,      // string 	Регион. Например: Московская область
      city: deliveryData.address.city,          // string 	Населённый пункт
      district: deliveryData.address.district,  // string 	Район
      street: deliveryData.address.street,      // string 	Улица
      house: deliveryData.address.house,        // string 	Номер строения
      room: deliveryData.room,                  // string 	Квартира / офис / помещение
    }
  };

  let order = {
    id: orderData.id,
    comment: deliveryData.comment // string 	Комментарий
  }
  let tariff;
  switch (deliveryData.service) {
    case "sdek":
      order.type = orderData.type;
      if (orderData.combine_places_apply == true)
      {
        order.combine_places = {};
        order.combine_places.apply = true;
        order.combine_places.weight = orderData.total_weight;
        order.combine_places.dimensions = orderData.dimensions;
      }

      if(deliveryData.type == "terminal")
      {
        tariff = 136;
      } else if(deliveryData.type == "door")
      {
        tariff = 137;
      }
      break;
  
    default:
      break;
  }

  let data = { 
    key: ESHOPLOGISTIC_TOKEN, 
    action: "create",
    cms: "custom",
    service: deliveryData.service,
    order: order,
    sender: otherData.sender,
    receiver: {
      name: deliveryData.name,
      phone: deliveryData.phone
    },
    places: orderData.places,
    delivery: {
      type: deliveryData.type,
      tariff: tariff,
      location_from: {
        pick_up: otherData.delivery.location_from.pick_up
      },
      location_to: location_to,
      payment: orderData.payment,
      cost: deliveryData.price
    }
  };
  
  console.log(data);
  let response = await fetch("https://api.esplc.ru/delivery/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  let result = await response.json();
  console.log("eshopResult", result);
}