export const CONTAINER_TYPES = [
  { id: "20ft", label: "20ft Standard", basePrice: 1200, includedWeight: 21000 },
  { id: "40ft", label: "40ft Standard", basePrice: 1900, includedWeight: 26000 },
  { id: "40hc", label: "40ft High Cube", basePrice: 2150, includedWeight: 26000 },
  { id: "reefer", label: "Refrigerated Container", basePrice: 2850, includedWeight: 25000 },
];

export function getContainer(id) {
  return CONTAINER_TYPES.find((c) => c.id === id) || null;
}
