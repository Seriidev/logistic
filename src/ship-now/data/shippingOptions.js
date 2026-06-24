export const DESTINATION_TYPES = [
  {
    id: "international",
    icon: "🌍",
    title: "International Shipping",
    description: "Ship cargo across borders with global air, sea, and truck networks.",
  },
  {
    id: "domestic",
    icon: "🏠",
    title: "Domestic Shipping",
    description: "Move freight within your country via truck or express delivery.",
  },
];

export const SHIPPING_METHODS = {
  international: [
    {
      id: "air",
      icon: "✈️",
      title: "Air Cargo",
      description: "Fast international air freight for time-sensitive shipments.",
    },
    {
      id: "sea",
      icon: "🚢",
      title: "Sea Cargo",
      description: "Cost-effective ocean freight for large and heavy cargo.",
    },
    {
      id: "truck",
      icon: "🚛",
      title: "International Truck Cargo",
      description: "Cross-border road freight with customs-ready routing.",
    },
  ],
  domestic: [
    {
      id: "truck",
      icon: "🚛",
      title: "Domestic Truck Delivery",
      description: "Full or partial truck loads for domestic freight lanes.",
    },
    {
      id: "express",
      icon: "⚡",
      title: "Express Delivery",
      description: "Priority parcel and package delivery with fast transit.",
    },
  ],
};

export const CARGO_TYPES = [
  "General Cargo",
  "Documents",
  "Electronics",
  "Perishables",
  "Fragile Items",
  "Industrial Parts",
  "Textiles & Apparel",
  "Hazardous (DG)",
];

export const AIR_SERVICE_TYPES = [
  { id: "economy", label: "Economy Air Cargo" },
  { id: "express", label: "Express Air Cargo" },
];

export const SEA_CONTAINER_TYPES = [
  { id: "lcl", label: "LCL (Small Shipments)" },
  { id: "fcl", label: "FCL (Full Container)" },
];

export const TRUCK_TRANSPORT_TYPES = [
  { id: "ftl", label: "Full Truck Load (FTL)" },
  { id: "ltl", label: "Less Than Truck Load (LTL)" },
];

export const PACKAGE_TYPES = [
  "Envelope",
  "Small Box",
  "Medium Box",
  "Large Box",
  "Pallet",
  "Custom Packaging",
];

export const PACKAGE_SIZES = [
  "Extra Small (up to 1 kg)",
  "Small (1–5 kg)",
  "Medium (5–15 kg)",
  "Large (15–30 kg)",
  "Extra Large (30+ kg)",
];

export const DELIVERY_PRIORITIES = [
  { id: "standard", label: "Standard (2–3 days)" },
  { id: "priority", label: "Priority (Next day)" },
  { id: "urgent", label: "Urgent (Same day)" },
];

export const STEPS = [
  { id: 1, label: "Destination" },
  { id: 2, label: "Method" },
  { id: 3, label: "Details" },
  { id: 4, label: "Calculate" },
];

function getMethodLabel(destination, method) {
  const methods = SHIPPING_METHODS[destination] || [];
  return methods.find((m) => m.id === method)?.title || method;
}

function parseWeight(weight) {
  return Math.max(1, parseFloat(weight) || 0);
}

export function getInitialFormData(method) {
  const base = {
    cargoType: "General Cargo",
    weight: "",
    specialInstructions: "",
  };

  switch (method) {
    case "air":
      return {
        ...base,
        originCountry: "",
        destinationCountry: "",
        length: "",
        width: "",
        height: "",
        serviceType: "economy",
      };
    case "sea":
      return {
        ...base,
        originPort: "",
        destinationPort: "",
        containerType: "lcl",
        dimensions: "",
      };
    case "truck":
      return {
        ...base,
        pickupLocation: "",
        deliveryLocation: "",
        transportType: "ftl",
        dimensions: "",
      };
    case "express":
      return {
        pickupLocation: "",
        deliveryLocation: "",
        packageType: "Small Box",
        weight: "",
        packageSize: "Small (1–5 kg)",
        deliveryPriority: "standard",
        specialInstructions: "",
      };
    default:
      return base;
  }
}

export function validateFormData(method, formData) {
  const required = (value) => Boolean(String(value || "").trim());

  switch (method) {
    case "air":
      return (
        required(formData.originCountry) &&
        required(formData.destinationCountry) &&
        required(formData.weight) &&
        required(formData.length) &&
        required(formData.width) &&
        required(formData.height)
      );
    case "sea":
      return (
        required(formData.originPort) &&
        required(formData.destinationPort) &&
        required(formData.weight)
      );
    case "truck":
      return (
        required(formData.pickupLocation) &&
        required(formData.deliveryLocation) &&
        required(formData.weight)
      );
    case "express":
      return (
        required(formData.pickupLocation) &&
        required(formData.deliveryLocation) &&
        required(formData.weight)
      );
    default:
      return false;
  }
}

export function buildRouteSummary(destination, method, formData) {
  switch (method) {
    case "air":
      return `${formData.originCountry} → ${formData.destinationCountry}`;
    case "sea":
      return `${formData.originPort} → ${formData.destinationPort}`;
    case "truck":
    case "express":
      return `${formData.pickupLocation} → ${formData.deliveryLocation}`;
    default:
      return "—";
  }
}

export function buildCargoSummary(method, formData) {
  const weight = formData.weight ? `${formData.weight} kg` : "—";

  switch (method) {
    case "air": {
      const dims = [formData.length, formData.width, formData.height]
        .filter(Boolean)
        .join(" × ");
      return `${formData.cargoType} · ${weight}${dims ? ` · ${dims} cm` : ""}`;
    }
    case "sea":
      return `${formData.cargoType} · ${weight}${formData.dimensions ? ` · ${formData.dimensions}` : ""}`;
    case "truck":
      return `${formData.cargoType} · ${weight}${formData.dimensions ? ` · ${formData.dimensions}` : ""}`;
    case "express":
      return `${formData.packageType} · ${weight} · ${formData.packageSize}`;
    default:
      return weight;
  }
}

export function calculateShippingEstimate(destination, method, formData) {
  const weight = parseWeight(formData.weight);
  const serviceLabel = getMethodLabel(destination, method);
  const route = buildRouteSummary(destination, method, formData);
  const cargo = buildCargoSummary(method, formData);

  const multipliers = {
    air: { economy: 4.2, express: 6.8 },
    sea: { lcl: 0.9, fcl: 1.4 },
    truck: { ftl: 2.1, ltl: 1.5 },
    express: { standard: 3.0, priority: 4.5, urgent: 6.2 },
  };

  const transitDays = {
    air: { economy: "5–8 business days", express: "2–4 business days" },
    sea: { lcl: "25–35 days", fcl: "18–28 days" },
    truck: { ftl: "3–6 business days", ltl: "4–8 business days" },
    express: {
      standard: "2–3 business days",
      priority: "1 business day",
      urgent: "Same day",
    },
  };

  let basePrice = 120;

  if (method === "air") {
    const rate = multipliers.air[formData.serviceType] || 4.2;
    const volume =
      (parseFloat(formData.length) || 0) *
      (parseFloat(formData.width) || 0) *
      (parseFloat(formData.height) || 0);
    basePrice = weight * rate * 12 + volume * 0.08;
    if (destination === "international") basePrice *= 1.15;
  } else if (method === "sea") {
    const rate = multipliers.sea[formData.containerType] || 0.9;
    basePrice = weight * rate * 6 + (formData.containerType === "fcl" ? 850 : 0);
  } else if (method === "truck") {
    const rate = multipliers.truck[formData.transportType] || 2.1;
    const distanceFactor =
      ((formData.pickupLocation?.length || 0) + (formData.deliveryLocation?.length || 0)) % 7 + 4;
    basePrice = weight * rate * distanceFactor;
    if (destination === "international") basePrice *= 1.25;
  } else if (method === "express") {
    const rate = multipliers.express[formData.deliveryPriority] || 3.0;
    basePrice = weight * rate * 18 + 35;
  }

  const deliveryTime =
    method === "air"
      ? transitDays.air[formData.serviceType]
      : method === "sea"
        ? transitDays.sea[formData.containerType]
        : method === "truck"
          ? transitDays.truck[formData.transportType]
          : transitDays.express[formData.deliveryPriority];

  let serviceDetail = serviceLabel;
  if (method === "air") {
    const svc = AIR_SERVICE_TYPES.find((s) => s.id === formData.serviceType);
    serviceDetail = `${serviceLabel} — ${svc?.label || ""}`;
  } else if (method === "sea") {
    const ct = SEA_CONTAINER_TYPES.find((c) => c.id === formData.containerType);
    serviceDetail = `${serviceLabel} — ${ct?.label || ""}`;
  } else if (method === "truck") {
    const tt = TRUCK_TRANSPORT_TYPES.find((t) => t.id === formData.transportType);
    serviceDetail = `${serviceLabel} — ${tt?.label || ""}`;
  } else if (method === "express") {
    const dp = DELIVERY_PRIORITIES.find((p) => p.id === formData.deliveryPriority);
    serviceDetail = `${serviceLabel} — ${dp?.label || ""}`;
  }

  return {
    route,
    service: serviceDetail,
    cargo,
    deliveryTime,
    price: Math.max(99, Math.round(basePrice)),
    destinationType: destination === "international" ? "International" : "Domestic",
  };
}
