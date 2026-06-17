import { useMemo, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import en from "react-phone-number-input/locale/en.json";
import { getDefaultCountry, getPhoneValidationError } from "../utils/phone";

const VARIANT_CLASS = {
  default: "phone-input--default",
  rounded: "phone-input--rounded",
  compact: "phone-input--compact",
  auth: "phone-input--auth",
};

export default function PhoneInputField({
  label,
  value = "",
  onChange,
  onBlur,
  error: externalError,
  required = false,
  variant = "default",
  className = "",
  id,
  placeholder,
  disabled = false,
  defaultCountry,
}) {
  const [touched, setTouched] = useState(false);
  const country = useMemo(() => defaultCountry || getDefaultCountry(), [defaultCountry]);

  const internalError = touched ? getPhoneValidationError(value, { required }) : null;
  const error = externalError || internalError;
  const inputId = id || (label ? `phone-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  const handleBlur = () => {
    setTouched(true);
    onBlur?.();
  };

  return (
    <div className={`flex flex-col gap-1.5 min-w-0 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-xs sm:text-sm font-medium text-gray-600">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div
        className={`phone-input-wrap ${VARIANT_CLASS[variant] || VARIANT_CLASS.default} ${error ? "phone-input-wrap--error" : ""} ${disabled ? "phone-input-wrap--disabled" : ""}`}
      >
        <PhoneInput
          id={inputId}
          international
          countryCallingCodeEditable
          defaultCountry={country}
          labels={en}
          placeholder={placeholder}
          value={value || undefined}
          onChange={(next) => onChange?.(next || "")}
          onBlur={handleBlur}
          disabled={disabled}
          numberInputProps={{
            "aria-invalid": Boolean(error),
            "aria-describedby": error && inputId ? `${inputId}-error` : undefined,
          }}
        />
      </div>

      {error && (
        <p id={inputId ? `${inputId}-error` : undefined} className="text-xs text-red-500 leading-snug" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
