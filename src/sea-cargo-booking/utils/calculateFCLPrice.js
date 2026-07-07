import { FCL_PRICING } from "../data/fclPricing";
import { getContainer } from "../data/containerTypes";
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

export function calculateFCLPrice(form = {}) {
  const p = FCL_PRICING;

  const weightKg = toKg(form.weight, form.weightUnit);
  const declaredValue = Math.max(0, parseFloat(form.declaredValue) || 0);
  const paymentFee = Math.max(0, parseFloat(form.paymentFee) || 0);

  const container = getContainer(form.containerType);
  const distance = estimateDistance(form.fromCountry, form.destinationCountry);
  const delivery = getDeliveryType(form.deliveryType);
  const deliveryFee = delivery ? delivery.fee : 0;

  const containerFee = container ? container.basePrice : 0;
  const includedWeight = container ? container.includedWeight : 0;
  const overweightFee = Math.max(0, weightKg - includedWeight) * p.overweightPerKg;
  const distanceFee = distance * p.perKmRate;
  const insuranceFee = declaredValue * p.insuranceRate;

  const subtotal = containerFee + overweightFee + distanceFee + deliveryFee + insuranceFee;
  const total = subtotal + paymentFee;

  return {
    serviceType: p.serviceType,
    labelKey: p.labelKey,
    deliveryTimeKey: p.deliveryTimeKey,
    currency: p.currency,
    weightKg: Number(weightKg.toFixed(2)),
    containerLabelKey: container ? container.labelKey : null,
    distance: Math.round(distance),
    deliveryLabelKey: delivery ? delivery.labelKey : null,
    containerFee: Number(containerFee.toFixed(2)),
    overweightFee: Number(overweightFee.toFixed(2)),
    distanceFee: Number(distanceFee.toFixed(2)),
    deliveryFee: Number(deliveryFee.toFixed(2)),
    insuranceFee: Number(insuranceFee.toFixed(2)),
    paymentFee: Number(paymentFee.toFixed(2)),
    subtotal: Number(subtotal.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}
