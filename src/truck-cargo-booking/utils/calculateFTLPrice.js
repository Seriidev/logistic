import { FTL_PRICING, getCountry, getDeliveryType, selectVehicle } from "../data/shippingOptions";

function toKg(weight, unit) {
  const w = Math.max(0, parseFloat(weight) || 0);
  return unit === "lbs" ? w * 0.45359237 : w;
}

export function calculateFTLPrice(form = {}) {
  const p = FTL_PRICING;

  const weightKg = toKg(form.weight, form.weightUnit);
  const declaredValue = Math.max(0, parseFloat(form.declaredValue) || 0);
  const paymentFee = Math.max(0, parseFloat(form.paymentFee) || 0);

  const vehicle = selectVehicle(weightKg);
  const country = getCountry(form.country);
  const distance = country ? country.distance : 0;
  const delivery = getDeliveryType(form.deliveryType);
  const deliveryFee = delivery ? delivery.fee : 0;

  const vehicleFee = vehicle.basePrice;
  const overweightFee = Math.max(0, weightKg - vehicle.maxWeight) * p.overweightPerKg;
  const distanceFee = distance * p.perKmRate;
  const insuranceFee = declaredValue * p.insuranceRate;

  const subtotal = vehicleFee + overweightFee + distanceFee + deliveryFee + insuranceFee;
  const total = subtotal + paymentFee;

  return {
    serviceType: p.serviceType,
    label: p.label,
    deliveryTime: p.deliveryTime,
    currency: p.currency,
    weightKg: Number(weightKg.toFixed(2)),
    vehicleLabel: vehicle.label,
    distance: Math.round(distance),
    deliveryLabel: delivery ? delivery.label : "—",
    vehicleFee: Number(vehicleFee.toFixed(2)),
    overweightFee: Number(overweightFee.toFixed(2)),
    distanceFee: Number(distanceFee.toFixed(2)),
    deliveryFee: Number(deliveryFee.toFixed(2)),
    insuranceFee: Number(insuranceFee.toFixed(2)),
    paymentFee: Number(paymentFee.toFixed(2)),
    subtotal: Number(subtotal.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}
