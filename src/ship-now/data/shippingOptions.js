import { FaGlobeAmericas, FaHome, FaPlane, FaShip, FaTruck, FaShippingFast } from "react-icons/fa";

export const DESTINATION_TYPES = [
  {
    id: "international",
    Icon: FaGlobeAmericas,
  },
  {
    id: "domestic",
    Icon: FaHome,
  },
];

export const SHIPPING_METHODS = {
  international: [
    {
      id: "air",
      Icon: FaPlane,
    },
    {
      id: "sea",
      Icon: FaShip,
    },
    {
      id: "truck",
      Icon: FaTruck,
    },
  ],
  domestic: [
    {
      id: "truck",
      Icon: FaTruck,
    },
    {
      id: "express",
      Icon: FaShippingFast,
    },
  ],
};

export const CARGO_TYPES = [
  "generalCargo",
  "documents",
  "electronics",
  "perishables",
  "fragileItems",
  "industrialParts",
  "textilesApparel",
  "hazardous",
];

export const AIR_SERVICE_TYPES = ["economy", "express"];

export const SEA_CONTAINER_TYPES = ["lcl", "fcl"];

export const TRUCK_TRANSPORT_TYPES = ["ftl", "ltl"];

export const PACKAGE_TYPES = [
  "envelope",
  "smallBox",
  "mediumBox",
  "largeBox",
  "pallet",
  "customPackaging",
];

export const PACKAGE_SIZES = [
  "extraSmall",
  "small",
  "medium",
  "large",
  "extraLarge",
];

export const DELIVERY_PRIORITIES = ["standard", "priority", "urgent"];

export const STEPS = [
  "destination",
  "method",
  "details",
  "calculate",
];

const EMPTY_VALUE = "—";

function getMethodLabelKey(destination, method) {
  if (method === "truck") {
    return `options.methods.truck.${destination}.title`;
  }
  return `options.methods.${method}.title`;
}

function getServiceDetailKey(method, formData) {
  if (method === "air") return `options.airServiceTypes.${formData.serviceType}`;
  if (method === "sea") return `options.seaContainerTypes.${formData.containerType}`;
  if (method === "truck") return `options.truckTransportTypes.${formData.transportType}`;
  if (method === "express") return `options.deliveryPriorities.${formData.deliveryPriority}`;
  return null;
}

function parseWeight(weight) {
  return Math.max(1, parseFloat(weight) || 0);
}

export function getInitialFormData(method) {
  const base = {
    cargoType: "generalCargo",
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
        packageType: "smallBox",
        weight: "",
        packageSize: "small",
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
      return EMPTY_VALUE;
  }
}

export function buildCargoSummary(method, formData) {
  switch (method) {
    case "air":
      return {
        kind: "cargo",
        cargoTypeKey: formData.cargoType,
        weight: formData.weight,
        dimensions: [formData.length, formData.width, formData.height].filter(Boolean),
      };
    case "sea":
      return {
        kind: "cargo",
        cargoTypeKey: formData.cargoType,
        weight: formData.weight,
        dimensions: formData.dimensions,
      };
    case "truck":
      return {
        kind: "cargo",
        cargoTypeKey: formData.cargoType,
        weight: formData.weight,
        dimensions: formData.dimensions,
      };
    case "express":
      return {
        kind: "package",
        packageTypeKey: formData.packageType,
        weight: formData.weight,
        packageSizeKey: formData.packageSize,
      };
    default:
      return {
        kind: "cargo",
        cargoTypeKey: formData.cargoType,
        weight: formData.weight,
        dimensions: "",
      };
  }
}

export function calculateShippingEstimate(destination, method, formData) {
  const weight = parseWeight(formData.weight);
  const serviceLabelKey = getMethodLabelKey(destination, method);
  const serviceDetailKey = getServiceDetailKey(method, formData);
  const route = buildRouteSummary(destination, method, formData);
  const cargo = buildCargoSummary(method, formData);

  const multipliers = {
    air: { economy: 4.2, express: 6.8 },
    sea: { lcl: 0.9, fcl: 1.4 },
    truck: { ftl: 2.1, ltl: 1.5 },
    express: { standard: 3.0, priority: 4.5, urgent: 6.2 },
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

  const deliveryVariant =
    method === "air"
      ? formData.serviceType
      : method === "sea"
        ? formData.containerType
        : method === "truck"
          ? formData.transportType
          : formData.deliveryPriority;
  const deliveryTimeKey = `transit.${method}.${deliveryVariant}`;

  return {
    route,
    serviceLabelKey,
    serviceDetailKey,
    cargo,
    deliveryTimeKey,
    price: Math.max(99, Math.round(basePrice)),
    destinationTypeKey: `destinationTypes.${destination}`,
  };
}
