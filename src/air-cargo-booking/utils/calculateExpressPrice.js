import { EXPRESS_PRICING } from "../data/expressPricing";

function estimateDistance(from, to) {
  if (!from || !to) return 0;
  const s = `${from}|${to}`.toLowerCase().trim();
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  }
  return 900 + (hash % 11600);
}

export function calculateExpressPrice(form = {}) {
  const p = EXPRESS_PRICING;

  const weight = Math.max(0, parseFloat(form.weight) || 0);
  const length = Math.max(0, parseFloat(form.length) || 0);
  const width = Math.max(0, parseFloat(form.width) || 0);
  const height = Math.max(0, parseFloat(form.height) || 0);
  const declaredValue = Math.max(0, parseFloat(form.declaredValue) || 0);
  const paymentFee = Math.max(0, parseFloat(form.paymentFee) || 0);

  const volumetricWeight = (length * width * height) / p.volumetricDivisor;
  const chargeableWeight = Math.max(weight, volumetricWeight);
  const distance = estimateDistance(form.fromCountry, form.destinationCountry);

  const baseFee = p.basePrice;
  const weightFee = chargeableWeight * p.perKg;
  const distanceFee = distance * p.perKmRate;
  const insuranceFee = declaredValue * p.insuranceRate;

  const subtotal = baseFee + weightFee + distanceFee + insuranceFee;
  const total = subtotal + paymentFee;

  return {
    serviceType: p.serviceType,
    labelKey: p.labelKey,
    deliveryTimeKey: p.deliveryTimeKey,
    currency: p.currency,
    actualWeight: weight,
    volumetricWeight: Number(volumetricWeight.toFixed(2)),
    chargeableWeight: Number(chargeableWeight.toFixed(2)),
    distance: Math.round(distance),
    baseFee: Number(baseFee.toFixed(2)),
    weightFee: Number(weightFee.toFixed(2)),
    distanceFee: Number(distanceFee.toFixed(2)),
    insuranceFee: Number(insuranceFee.toFixed(2)),
    paymentFee: Number(paymentFee.toFixed(2)),
    subtotal: Number(subtotal.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}
