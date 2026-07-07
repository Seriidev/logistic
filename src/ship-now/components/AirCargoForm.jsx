import { CARGO_TYPES, AIR_SERVICE_TYPES } from "../data/shippingOptions";
import { useTranslation } from "react-i18next";

function Field({ label, htmlFor, children, required }) {
  return (
    <div className="min-w-0">
      <label htmlFor={htmlFor} className="ship-now-label">
        {label}
        {required && <span className="text-blue-500"> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function AirCargoForm({ formData, onChange }) {
  const { t } = useTranslation("shipNow");
  const update = (field) => (e) => onChange(field, e.target.value);

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          {t("forms.stepLabel", { current: 3, total: 4 })}
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          {t("forms.air.title")}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          {t("forms.air.subtitle")}
        </p>
      </div>

      <div className="ship-now-card max-w-4xl mx-auto p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Field label={t("forms.fields.originCountry")} htmlFor="originCountry" required>
            <input
              id="originCountry"
              type="text"
              placeholder={t("forms.placeholders.originCountry")}
              value={formData.originCountry}
              onChange={update("originCountry")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.destinationCountry")} htmlFor="destinationCountry" required>
            <input
              id="destinationCountry"
              type="text"
              placeholder={t("forms.placeholders.destinationCountry")}
              value={formData.destinationCountry}
              onChange={update("destinationCountry")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.cargoType")} htmlFor="cargoType">
            <select
              id="cargoType"
              value={formData.cargoType}
              onChange={update("cargoType")}
              className="ship-now-input cursor-pointer"
            >
              {CARGO_TYPES.map((typeKey) => (
                <option key={typeKey} value={typeKey}>
                  {t(`options.cargoTypes.${typeKey}`)}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t("forms.fields.weightKg")} htmlFor="weight" required>
            <input
              id="weight"
              type="number"
              min="1"
              placeholder={t("forms.placeholders.weightAir")}
              value={formData.weight}
              onChange={update("weight")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.lengthCm")} htmlFor="length" required>
            <input
              id="length"
              type="number"
              min="1"
              placeholder={t("forms.placeholders.length")}
              value={formData.length}
              onChange={update("length")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.widthCm")} htmlFor="width" required>
            <input
              id="width"
              type="number"
              min="1"
              placeholder={t("forms.placeholders.width")}
              value={formData.width}
              onChange={update("width")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.heightCm")} htmlFor="height" required>
            <input
              id="height"
              type="number"
              min="1"
              placeholder={t("forms.placeholders.height")}
              value={formData.height}
              onChange={update("height")}
              className="ship-now-input"
            />
          </Field>
        </div>

        <fieldset className="mt-5 sm:mt-6 border-none p-0 m-0">
          <legend className="ship-now-label mb-3">{t("forms.fields.serviceType")}</legend>
          <div className="ship-now-radio-group ship-now-radio-group--inline">
            {AIR_SERVICE_TYPES.map((serviceId) => (
              <label
                key={serviceId}
                className={`ship-now-radio-option flex-1 ${
                  formData.serviceType === serviceId ? "ship-now-radio-option--active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="serviceType"
                  value={serviceId}
                  checked={formData.serviceType === serviceId}
                  onChange={update("serviceType")}
                />
                <span className="text-sm font-medium text-slate-800">
                  {t(`options.airServiceTypes.${serviceId}`)}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 sm:mt-6">
          <Field label={t("forms.fields.specialInstructions")} htmlFor="specialInstructions">
            <textarea
              id="specialInstructions"
              placeholder={t("forms.placeholders.specialInstructionsAir")}
              value={formData.specialInstructions}
              onChange={update("specialInstructions")}
              className="ship-now-input ship-now-textarea"
              rows={3}
            />
          </Field>
        </div>
      </div>
    </div>
  );
}
