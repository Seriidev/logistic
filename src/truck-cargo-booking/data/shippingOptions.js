export const COUNTRIES = [
  { id: "asia", label: "Asia", distance: 5200 },
  { id: "china", label: "China", distance: 6400 },
  { id: "turkmenistan", label: "Turkmenistan", distance: 3100 },
];

export function getCountry(id) {
  return COUNTRIES.find((c) => c.id === id) || null;
}

export const CATEGORIES = [
  "General Goods",
  "Electronics",
  "Furniture",
  "Machinery",
  "Textiles",
  "Food & Beverage",
  "Automotive Parts",
  "Construction Materials",
];

const CATEGORY_MULTIPLIERS = {
  "General Goods": 1.0,
  Electronics: 1.2,
  Furniture: 1.1,
  Machinery: 1.25,
  Textiles: 1.05,
  "Food & Beverage": 1.15,
  "Automotive Parts": 1.2,
  "Construction Materials": 1.3,
};

export function getCategoryMultiplier(category) {
  return CATEGORY_MULTIPLIERS[category] || 1.0;
}

export const DIMENSION_UNITS = [
  { id: "cm", label: "cm" },
  { id: "inch", label: "inch" },
];

export const WEIGHT_UNITS = [
  { id: "kg", label: "kg" },
  { id: "lbs", label: "lbs" },
];

export const DELIVERY_TYPES = [
  { id: "door-door", label: "Door to Door", fee: 120 },
  { id: "door-post", label: "Door to Post", fee: 80 },
  { id: "warehouse", label: "Warehouse Delivery", fee: 0 },
];

export function getDeliveryType(id) {
  return DELIVERY_TYPES.find((d) => d.id === id) || null;
}

export const VEHICLE_TYPES = [
  { id: "van", label: "Cargo Van", basePrice: 350, maxWeight: 3500 },
  { id: "medium", label: "Medium Truck", basePrice: 680, maxWeight: 10000 },
  { id: "heavy", label: "Heavy Truck", basePrice: 1150, maxWeight: 24000 },
];

export function selectVehicle(weightKg) {
  return VEHICLE_TYPES.find((v) => weightKg <= v.maxWeight) || VEHICLE_TYPES[VEHICLE_TYPES.length - 1];
}

export const LTL_PRICING = {
  serviceType: "ltl",
  label: "LTL Road Freight",
  deliveryTime: "4–8 business days",
  basePrice: 38,
  perKg: 1.4,
  volumetricDivisor: 5000,
  perKmRate: 0.02,
  insuranceRate: 0.01,
  currency: "USD",
};

export const FTL_PRICING = {
  serviceType: "ftl",
  label: "FTL Road Freight",
  deliveryTime: "2–5 business days",
  perKmRate: 0.05,
  overweightPerKg: 0.05,
  insuranceRate: 0.012,
  currency: "USD",
};

export const PAYMENT_METHODS = [
  { id: "yuusell", name: "YuuSell", tagline: "Instant checkout · No processing fee", fee: 0, badge: "Recommended", initials: "YS" },
  { id: "fedex", name: "FedEx", tagline: "Pay through your FedEx account", fee: 7.7, initials: "FX" },
  { id: "ups", name: "UPS", tagline: "Pay through your UPS account", fee: 16.7, initials: "UPS" },
  { id: "post", name: "Post Office", tagline: "Pay at your local branch", fee: 21.7, initials: "PO" },
];

export function getPaymentMethod(id) {
  return PAYMENT_METHODS.find((m) => m.id === id) || null;
}
