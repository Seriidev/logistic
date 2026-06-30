import { calculateLCLPrice } from "./calculateLCLPrice";
import { calculateFCLPrice } from "./calculateFCLPrice";

export function getBreakdown(service, form) {
  return service === "fcl" ? calculateFCLPrice(form) : calculateLCLPrice(form);
}
