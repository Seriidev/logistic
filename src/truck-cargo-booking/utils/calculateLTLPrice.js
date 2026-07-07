import { LTL_PRICING, getCountry, getCategoryMultiplier } from "../data/shippingOptions";

function toCm(value, unit) {
  const v = Math.max(0, parseFloat(value) || 0);
  return unit === "inch" ? v * 2.54 : v;
}

export function calculateLTLPrice(form = {}) {
  const p = LTL_PRICING;

  const weight = Math.max(0, parseFloat(form.weight) || 0);
  const length = toCm(form.length, form.dimensionUnit);
  const width = toCm(form.width, form.dimensionUnit);
  const height = toCm(form.height, form.dimensionUnit);
  const declaredValue = Math.max(0, parseFloat(form.declaredValue) || 0);
  const paymentFee = Math.max(0, parseFloat(form.paymentFee) || 0);

  const volumetricWeight = (length * width * height) / p.volumetricDivisor;
  const chargeableWeight = Math.max(weight, volumetricWeight);

  const country = getCountry(form.country);
  const distance = country ? country.distance : 0;
  const categoryMult = getCategoryMultiplier(form.category);

  const baseFee = p.basePrice;
  const weightFee = chargeableWeight * p.perKg;
  const distanceFee = distance * p.perKmRate;
  const cargo = baseFee + weightFee + distanceFee;
  const categoryFee = cargo * (categoryMult - 1);
  const insuranceFee = declaredValue * p.insuranceRate;

  const subtotal = cargo + categoryFee + insuranceFee;
  const total = subtotal + paymentFee;

  return {
    serviceType: p.serviceType,
    currency: p.currency,
    chargeableWeight: Number(chargeableWeight.toFixed(2)),
    volumetricWeight: Number(volumetricWeight.toFixed(2)),
    distance: Math.round(distance),
    categoryId: form.category || "",
    baseFee: Number(baseFee.toFixed(2)),
    weightFee: Number(weightFee.toFixed(2)),
    distanceFee: Number(distanceFee.toFixed(2)),
    categoryFee: Number(categoryFee.toFixed(2)),
    insuranceFee: Number(insuranceFee.toFixed(2)),
    paymentFee: Number(paymentFee.toFixed(2)),
    subtotal: Number(subtotal.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}
