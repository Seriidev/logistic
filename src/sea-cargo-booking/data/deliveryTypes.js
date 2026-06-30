export const DELIVERY_TYPES = [
  { id: "port-port", label: "Port to Port", fee: 0 },
  { id: "port-door", label: "Port to Door", fee: 130 },
  { id: "door-port", label: "Door to Port", fee: 120 },
  { id: "door-door", label: "Door to Door", fee: 240 },
];

export function getDeliveryType(id) {
  return DELIVERY_TYPES.find((d) => d.id === id) || null;
}
