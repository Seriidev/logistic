import { LCL_PRICING } from "../data/lclPricing";
import { getDeliveryType } from "../data/deliveryTypes";

function estimateDistance(from, to) {
  if (!from || !to) return 0;
  const s = `${from}|${to}`.toLowerCase().trim();
  let hash = 0;
  for (let i = 0; i < s.length; i++) hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  return 1200 + (hash % 15000);
}

function toKg(weight, unit) {
  const w = Math.max(0, parseFloat(weight) || 0);
  return unit === "lbs" ? w * 0.45359237 : w;
}

export function calculateLCLPrice(form = {}) {
  const p = LCL_PRICING;

  const weightKg = toKg(form.weight, form.weightUnit);
  const units = Math.max(0, parseInt(form.totalUnits, 10) || 0);
  const declaredValue = Math.max(0, parseFloat(form.declaredValue) || 0);
  const paymentFee = Math.max(0, parseFloat(form.paymentFee) || 0);

  const distance = estimateDistance(form.fromCountry, form.destinationCountry);
  const delivery = getDeliveryType(form.deliveryType);
  const deliveryFee = delivery ? delivery.fee : 0;

  const baseFee = p.basePrice;
  const unitsFee = units * p.perUnit;
  const weightFee = weightKg * p.perKg;
  const distanceFee = distance * p.perKmRate;
  const insuranceFee = declaredValue * p.insuranceRate;

  const subtotal = baseFee + unitsFee + weightFee + distanceFee + deliveryFee + insuranceFee;
  const total = subtotal + paymentFee;

  return {
    serviceType: p.serviceType,
    labelKey: p.labelKey,
    deliveryTimeKey: p.deliveryTimeKey,
    currency: p.currency,
    weightKg: Number(weightKg.toFixed(2)),
    units,
    distance: Math.round(distance),
    deliveryLabelKey: delivery ? delivery.labelKey : null,
    baseFee: Number(baseFee.toFixed(2)),
    unitsFee: Number(unitsFee.toFixed(2)),
    weightFee: Number(weightFee.toFixed(2)),
    distanceFee: Number(distanceFee.toFixed(2)),
    deliveryFee: Number(deliveryFee.toFixed(2)),
    insuranceFee: Number(insuranceFee.toFixed(2)),
    paymentFee: Number(paymentFee.toFixed(2)),
    subtotal: Number(subtotal.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}
