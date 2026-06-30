export const PAYMENT_METHODS = [
  {
    id: "yuusell",
    name: "YuuSell Pay",
    tagline: "Instant checkout · No processing fee",
    fee: 0,
    badge: "Recommended",
    initials: "YS",
  },
  {
    id: "fedex",
    name: "FedEx",
    tagline: "Pay through your FedEx account",
    fee: 4.5,
    initials: "FX",
  },
  {
    id: "ups",
    name: "UPS",
    tagline: "Pay through your UPS account",
    fee: 5.0,
    initials: "UPS",
  },
  {
    id: "post",
    name: "Post Office",
    tagline: "Pay at your local branch",
    fee: 2.0,
    initials: "PO",
  },
];

export function getPaymentMethod(id) {
  return PAYMENT_METHODS.find((m) => m.id === id) || null;
}
