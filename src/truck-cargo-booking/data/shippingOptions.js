export const COUNTRIES = [
  { id: "asia", distance: 5200 },
  { id: "china", distance: 6400 },
  { id: "turkmenistan", distance: 3100 },
];

export function getCountry(id) {
  return COUNTRIES.find((c) => c.id === id) || null;
}

export const CATEGORIES = [
  "generalGoods",
  "electronics",
  "furniture",
  "machinery",
  "textiles",
  "foodBeverage",
  "automotiveParts",
  "constructionMaterials",
];

const CATEGORY_MULTIPLIERS = {
  generalGoods: 1.0,
  electronics: 1.2,
  furniture: 1.1,
  machinery: 1.25,
  textiles: 1.05,
  foodBeverage: 1.15,
  automotiveParts: 1.2,
  constructionMaterials: 1.3,
};

export function getCategoryMultiplier(category) {
  return CATEGORY_MULTIPLIERS[category] || 1.0;
}

export const DIMENSION_UNITS = [
  { id: "cm" },
  { id: "inch" },
];

export const WEIGHT_UNITS = [
  { id: "kg" },
  { id: "lbs" },
];

export const DELIVERY_TYPES = [
  { id: "doorToDoor", fee: 120 },
  { id: "doorToPost", fee: 80 },
  { id: "warehouseDelivery", fee: 0 },
];

export function getDeliveryType(id) {
  return DELIVERY_TYPES.find((d) => d.id === id) || null;
}

export const VEHICLE_TYPES = [
  { id: "cargoVan", basePrice: 350, maxWeight: 3500 },
  { id: "mediumTruck", basePrice: 680, maxWeight: 10000 },
  { id: "heavyTruck", basePrice: 1150, maxWeight: 24000 },
];

export function selectVehicle(weightKg) {
  return VEHICLE_TYPES.find((v) => weightKg <= v.maxWeight) || VEHICLE_TYPES[VEHICLE_TYPES.length - 1];
}

export const LTL_PRICING = {
  serviceType: "ltl",
  basePrice: 38,
  perKg: 1.4,
  volumetricDivisor: 5000,
  perKmRate: 0.02,
  insuranceRate: 0.01,
  currency: "USD",
};

export const FTL_PRICING = {
  serviceType: "ftl",
  perKmRate: 0.05,
  overweightPerKg: 0.05,
  insuranceRate: 0.012,
  currency: "USD",
};

export const PAYMENT_METHODS = [
  { id: "yuusell", fee: 0, initials: "YS", recommended: true },
  { id: "fedex", fee: 7.7, initials: "FX" },
  { id: "ups", fee: 16.7, initials: "UPS" },
  { id: "post", fee: 21.7, initials: "PO" },
];

export function getPaymentMethod(id) {
  return PAYMENT_METHODS.find((m) => m.id === id) || null;
}
