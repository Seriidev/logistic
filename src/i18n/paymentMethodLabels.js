/** Resolve payment method display labels from booking namespace */
export function getPaymentMethodLabel(t, method, field) {
  if (!method?.id) return "";
  const key = `paymentMethods.${method.id}.${field}`;
  const result = t(key, { ns: "booking", defaultValue: "" });
  return result || method.id;
}
