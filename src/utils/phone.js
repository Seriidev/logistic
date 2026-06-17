import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

export function getDefaultCountry() {
  if (typeof navigator === "undefined") return "US";
  try {
    const locale = navigator.language || "en-US";
    const region = new Intl.Locale(locale).region;
    return region || "US";
  } catch {
    return "US";
  }
}

/** Returns an error message or null if valid. */
export function getPhoneValidationError(value, { required = false } = {}) {
  if (!value || !String(value).trim()) {
    return required ? "Phone number is required." : null;
  }
  if (!isValidPhoneNumber(value)) {
    return "Please enter a valid phone number for the selected country.";
  }
  return null;
}

export function toE164(value) {
  if (!value) return "";
  try {
    const parsed = parsePhoneNumber(value);
    return parsed?.format("E.164") ?? value;
  } catch {
    return value;
  }
}

export function formatPhoneInternational(value) {
  if (!value) return "";
  try {
    const parsed = parsePhoneNumber(value);
    return parsed?.formatInternational() ?? value;
  } catch {
    return value;
  }
}
