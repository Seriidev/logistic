export const PARCEL_SIZES = [
  {
    id: "1000kg",
  },
  {
    id: "500kg",
  },
  {
    id: "100kg",
  },
  {
    id: "30kg",
  },
];

export const SHIPMENT_STEPS = [
  { id: 1, labelKey: "parcelDetails" },
  { id: 2, labelKey: "contacts" },
  { id: 3, labelKey: "delivery" },
  { id: 4, labelKey: "payment" },
  { id: 5, labelKey: "finalInvoice" },
];

export const TRANSPORT_OPTIONS = ["copart", "airCargo", "seaCargo"];

export const OBTAIN_OPTIONS = ["departments", "doorToDoor", "delivery"];

export const SHIPPING_SPEEDS = [
  { id: "sea-econom", icon: "ship", labelKey: "seaEconom", price: 25, mode: "sea" },
  { id: "sea-express", icon: "ship", labelKey: "seaExpress", price: 25, mode: "sea" },
  { id: "air-econom", icon: "plane", labelKey: "airEconom", price: 25, mode: "air" },
  { id: "air-express", icon: "plane", labelKey: "airExpress", price: 25, mode: "air" },
];

export const CARRIERS = [
  { id: "yuusell", nameKey: "yuusell", price: 49.5 },
  { id: "fedex", nameKey: "postOffice", price: 49.5 },
  { id: "ups", nameKey: "postOffice", price: 49.5 },
  { id: "usps", nameKey: "postOffice", price: 49.5 },
];

export const US_STATES = [
  "alabama", "alaska", "arizona", "california", "colorado", "florida",
  "georgia", "illinois", "newYork", "texas", "washington",
];

export const COUNTRIES = [
  "unitedStates", "china", "uae", "germany", "turkey", "thailand",
];
