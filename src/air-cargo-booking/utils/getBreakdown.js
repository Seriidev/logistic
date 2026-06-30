import { calculateEconomyPrice } from "./calculateEconomyPrice";
import { calculateExpressPrice } from "./calculateExpressPrice";

export function getBreakdown(service, form) {
  return service === "express"
    ? calculateExpressPrice(form)
    : calculateEconomyPrice(form);
}
