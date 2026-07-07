export const CONTAINER_TYPES = [
  { id: "20ft", labelKey: "containerTypes.20ft", basePrice: 1200, includedWeight: 21000 },
  { id: "40ft", labelKey: "containerTypes.40ft", basePrice: 1900, includedWeight: 26000 },
  { id: "40hc", labelKey: "containerTypes.40hc", basePrice: 2150, includedWeight: 26000 },
  { id: "reefer", labelKey: "containerTypes.reefer", basePrice: 2850, includedWeight: 25000 },
];

export function getContainer(id) {
  return CONTAINER_TYPES.find((c) => c.id === id) || null;
}
