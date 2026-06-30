import { calculateLTLPrice } from "./calculateLTLPrice";
import { calculateFTLPrice } from "./calculateFTLPrice";

export function getBreakdown(service, form) {
  return service === "ftl" ? calculateFTLPrice(form) : calculateLTLPrice(form);
}
