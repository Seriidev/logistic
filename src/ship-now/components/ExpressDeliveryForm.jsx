import {
  PACKAGE_TYPES,
  PACKAGE_SIZES,
  DELIVERY_PRIORITIES,
} from "../data/shippingOptions";
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

export default function ExpressDeliveryForm({ formData, onChange }) {
  const { t } = useTranslation("shipNow");
  const update = (field) => (e) => onChange(field, e.target.value);

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          {t("forms.stepLabel", { current: 3, total: 4 })}
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          {t("forms.express.title")}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          {t("forms.express.subtitle")}
        </p>
      </div>

      <div className="ship-now-card max-w-4xl mx-auto p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Field label={t("forms.fields.pickupLocation")} htmlFor="pickupLocation" required>
            <input
              id="pickupLocation"
              type="text"
              placeholder={t("forms.placeholders.location")}
              value={formData.pickupLocation}
              onChange={update("pickupLocation")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.deliveryLocation")} htmlFor="deliveryLocation" required>
            <input
              id="deliveryLocation"
              type="text"
              placeholder={t("forms.placeholders.location")}
              value={formData.deliveryLocation}
              onChange={update("deliveryLocation")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.packageType")} htmlFor="packageType">
            <select
              id="packageType"
              value={formData.packageType}
              onChange={update("packageType")}
              className="ship-now-input cursor-pointer"
            >
              {PACKAGE_TYPES.map((typeKey) => (
                <option key={typeKey} value={typeKey}>
                  {t(`options.packageTypes.${typeKey}`)}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t("forms.fields.weightKg")} htmlFor="weight" required>
            <input
              id="weight"
              type="number"
              min="0.1"
              step="0.1"
              placeholder={t("forms.placeholders.weightSmall")}
              value={formData.weight}
              onChange={update("weight")}
              className="ship-now-input"
            />
          </Field>

          <Field label={t("forms.fields.packageSize")} htmlFor="packageSize">
            <select
              id="packageSize"
              value={formData.packageSize}
              onChange={update("packageSize")}
              className="ship-now-input cursor-pointer"
            >
              {PACKAGE_SIZES.map((sizeKey) => (
                <option key={sizeKey} value={sizeKey}>
                  {t(`options.packageSizes.${sizeKey}`)}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <fieldset className="mt-5 sm:mt-6 border-none p-0 m-0">
          <legend className="ship-now-label mb-3">{t("forms.fields.deliveryPriority")}</legend>
          <div className="ship-now-radio-group">
            {DELIVERY_PRIORITIES.map((priorityId) => (
              <label
                key={priorityId}
                className={`ship-now-radio-option ${
                  formData.deliveryPriority === priorityId ? "ship-now-radio-option--active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="deliveryPriority"
                  value={priorityId}
                  checked={formData.deliveryPriority === priorityId}
                  onChange={update("deliveryPriority")}
                />
                <span className="text-sm font-medium text-slate-800">
                  {t(`options.deliveryPriorities.${priorityId}`)}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 sm:mt-6">
          <Field label={t("forms.fields.specialInstructions")} htmlFor="specialInstructions">
            <textarea
              id="specialInstructions"
              placeholder={t("forms.placeholders.specialInstructionsExpress")}
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
