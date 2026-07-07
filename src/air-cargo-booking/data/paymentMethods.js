export const PAYMENT_METHODS = [
  { id: "yuusell", fee: 0, badge: true, initials: "YS" },
  { id: "fedex", fee: 4.5, initials: "FX" },
  { id: "ups", fee: 5.0, initials: "UPS" },
  { id: "post", fee: 2.0, initials: "PO" },
];

export function getPaymentMethod(id) {
  return PAYMENT_METHODS.find((m) => m.id === id) || null;
}
