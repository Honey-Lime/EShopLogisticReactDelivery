async function createOrder(ESHOPLOGISTIC_TOKEN, deliveryData, orderData, otherData, options = {}) {
  if (!ESHOPLOGISTIC_TOKEN) {
    throw new Error("ESHOPLOGISTIC_TOKEN is required to create an EShopLogistic delivery order.");
  }

  const location_from = otherData.pick_up == true
    ? {
        pick_up: otherData.pick_up,
        address: otherData.address,
      }
    : {
        pick_up: otherData.pick_up,
      };

  const location_to = deliveryData.type == "terminal"
    ? {
        terminal: deliveryData.code,
      }
    : {
        address: {
          country: deliveryData.address.country,
          region: deliveryData.address.region,
          city: deliveryData.address.city,
          district: deliveryData.address.district,
          street: deliveryData.address.street,
          house: deliveryData.address.house,
          room: deliveryData.room,
        },
      };

  const order = {
    id: orderData.id,
    comment: deliveryData.comment,
  };

  let tariff;

  switch (deliveryData.service) {
    case "sdek":
      order.type = orderData.type;

      if (orderData.combine_places_apply == true) {
        order.combine_places = {};
        order.combine_places.apply = true;
        order.combine_places.weight = orderData.total_weight;
        order.combine_places.dimensions = orderData.dimensions;
      }

      if (deliveryData.type == "terminal") {
        tariff = 136;
      } else if (deliveryData.type == "door") {
        tariff = 137;
      }

      break;

    default:
      break;
  }

  const data = {
    key: ESHOPLOGISTIC_TOKEN,
    action: "create",
    cms: "custom",
    service: deliveryData.service,
    order,
    sender: {
      name: otherData.senderName,
      phone: otherData.senderPhone,
      company: otherData.senderCompany,
    },
    receiver: {
      name: deliveryData.name,
      phone: deliveryData.phone,
    },
    places: orderData.places,
    delivery: {
      type: deliveryData.type,
      tariff,
      location_from,
      location_to,
      payment: orderData.payment,
      cost: deliveryData.price,
    },
  };

  const response = await fetch("https://api.esplc.ru/delivery/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`EShopLogistic order creation failed with status ${response.status}`);
  }

  return response.json();
}

module.exports = { createOrder };
