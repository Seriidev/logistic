import { CARGO_TYPES, SEA_CONTAINER_TYPES } from "../data/shippingOptions";
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

export default function SeaCargoForm({ formData, onChange }) {
  const { t } = useTranslation("shipNow");
  const update = (field) => (e) => onChange(field, e.target.value);

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          {t("forms.stepLabel", { current: 3, total: 4 })}
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          {t("forms.sea.title")}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          {t("forms.sea.subtitle")}
        </p>
      </div>

      <div className="ship-now-card max-w-4xl mx-auto p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Field label={t("forms.fields.originPort")} htmlFor="originPort" required>
            <input
              id="originPort"
              type="text"
              placeholder={t("forms.placeholders.originPort")}
              value={formData.originPort}
              onChange={update("originPort")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.destinationPort")} htmlFor="destinationPort" required>
            <input
              id="destinationPort"
              type="text"
              placeholder={t("forms.placeholders.destinationPort")}
              value={formData.destinationPort}
              onChange={update("destinationPort")}
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
              placeholder={t("forms.placeholders.weightSea")}
              value={formData.weight}
              onChange={update("weight")}
              className="ship-now-input"
            />
          </Field>
        </div>

        <fieldset className="mt-5 sm:mt-6 border-none p-0 m-0">
          <legend className="ship-now-label mb-3">{t("forms.fields.containerType")}</legend>
          <div className="ship-now-radio-group ship-now-radio-group--inline">
            {SEA_CONTAINER_TYPES.map((containerId) => (
              <label
                key={containerId}
                className={`ship-now-radio-option flex-1 ${
                  formData.containerType === containerId ? "ship-now-radio-option--active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="containerType"
                  value={containerId}
                  checked={formData.containerType === containerId}
                  onChange={update("containerType")}
                />
                <span className="text-sm font-medium text-slate-800">
                  {t(`options.seaContainerTypes.${containerId}`)}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-4 sm:gap-5">
          <Field label={t("forms.fields.dimensions")} htmlFor="dimensions">
            <input
              id="dimensions"
              type="text"
              placeholder={t("forms.placeholders.dimensionsSea")}
              value={formData.dimensions}
              onChange={update("dimensions")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.specialInstructions")} htmlFor="specialInstructions">
            <textarea
              id="specialInstructions"
              placeholder={t("forms.placeholders.specialInstructionsSea")}
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
