export const PARCEL_SIZES = [
  {
    label: "Weight up to 1000 kg",
    desc: "Maximum permissible parcel dimensions: 300 × 170 × 170 cm, weight: 1,000 kg",
  },
  {
    label: "Weight up to 500 kg",
    desc: "Maximum permissible parcel dimensions: 200 × 120 × 120 cm, weight: 500 kg",
  },
  {
    label: "Weight up to 100 kg",
    desc: "Maximum permissible parcel dimensions: 120 × 80 × 80 cm, weight: 100 kg",
  },
  {
    label: "Small parcel up to 30 kg",
    desc: "Maximum permissible parcel dimensions: 60 × 40 × 40 cm, weight: 30 kg",
  },
];

export const SHIPMENT_STEPS = [
  { id: 1, label: "Parcel details" },
  { id: 2, label: "Information about the sender/recipient" },
  { id: 3, label: "Delivery method and payment" },
  { id: 4, label: "Payment method" },
  { id: 5, label: "Final invoice" },
];

export const TRANSPORT_OPTIONS = ["Copart", "Air cargo", "Sea cargo"];

export const OBTAIN_OPTIONS = ["Departments", "Door to door", "Delivery"];

export const SHIPPING_SPEEDS = [
  { id: "sea-econom", icon: "ship", label: "Econom (10–14 days)", price: 25, mode: "sea" },
  { id: "sea-express", icon: "ship", label: "Express (7–10 days)", price: 25, mode: "sea" },
  { id: "air-econom", icon: "plane", label: "Econom (10–14 days)", price: 25, mode: "air" },
  { id: "air-express", icon: "plane", label: "Express (7–10 days)", price: 25, mode: "air" },
];

export const CARRIERS = [
  { id: "yuusell", name: "YuuSell agent", price: 49.5 },
  { id: "fedex", name: "Post office", price: 49.5 },
  { id: "ups", name: "Post office", price: 49.5 },
  { id: "usps", name: "Post office", price: 49.5 },
];

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "California", "Colorado", "Florida",
  "Georgia", "Illinois", "New York", "Texas", "Washington",
];

export const COUNTRIES = [
  "United States", "China", "United Arab Emirates", "Germany", "Turkey", "Thailand",
];
