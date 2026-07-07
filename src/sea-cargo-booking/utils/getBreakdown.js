import { calculateLCLPrice } from "./calculateLCLPrice";
import { calculateFCLPrice } from "./calculateFCLPrice";

const BREAKDOWN_BY_SERVICE = {
  fcl: calculateFCLPrice,
  lcl: calculateLCLPrice,
};

export function getBreakdown(service, form) {
  const getServiceBreakdown = BREAKDOWN_BY_SERVICE[service] || calculateLCLPrice;
  return getServiceBreakdown(form);
}
