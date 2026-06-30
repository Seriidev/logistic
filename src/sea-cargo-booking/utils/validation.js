const req = (v) => Boolean(String(v || "").trim());

export function validateLCL(form = {}) {
  return (
    req(form.fromCountry) &&
    req(form.zipCode) &&
    req(form.destinationCountry) &&
    req(form.dateOfShipment) &&
    req(form.totalUnits) &&
    req(form.weight) &&
    req(form.commodityType) &&
    req(form.deliveryType)
  );
}

export function validateFCL(form = {}) {
  return (
    req(form.fromCountry) &&
    req(form.zipCode) &&
    req(form.destinationCountry) &&
    req(form.dateOfShipment) &&
    req(form.weight) &&
    req(form.containerType) &&
    req(form.hsCode) &&
    req(form.deliveryType)
  );
}

export function validateShipment(service, form) {
  return service === "fcl" ? validateFCL(form) : validateLCL(form);
}

export function validateCard(details = {}) {
  const digits = String(details.cardNumber || "").replace(/\s/g, "");
  return (
    digits.length >= 13 &&
    req(details.expiry) &&
    req(details.cvc) &&
    req(details.cardholderName) &&
    req(details.fullName) &&
    req(details.addressLine1) &&
    req(details.city) &&
    req(details.postalCode)
  );
}
