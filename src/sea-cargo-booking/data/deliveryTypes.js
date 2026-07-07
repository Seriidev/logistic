export const DELIVERY_TYPES = [
  { id: "port-port", labelKey: "deliveryTypes.portPort", fee: 0 },
  { id: "port-door", labelKey: "deliveryTypes.portDoor", fee: 130 },
  { id: "door-port", labelKey: "deliveryTypes.doorPort", fee: 120 },
  { id: "door-door", labelKey: "deliveryTypes.doorDoor", fee: 240 },
];

export function getDeliveryType(id) {
  return DELIVERY_TYPES.find((d) => d.id === id) || null;
}
