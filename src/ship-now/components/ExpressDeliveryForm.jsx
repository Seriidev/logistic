import {
  PACKAGE_TYPES,
  PACKAGE_SIZES,
  DELIVERY_PRIORITIES,
} from "../data/shippingOptions";

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
  const update = (field) => (e) => onChange(field, e.target.value);

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Step 3 of 4
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          Express Delivery Details
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Enter package and delivery information for express shipping.
        </p>
      </div>

      <div className="ship-now-card max-w-4xl mx-auto p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Field label="Pickup Location" htmlFor="pickupLocation" required>
            <input
              id="pickupLocation"
              type="text"
              placeholder="City, address or ZIP"
              value={formData.pickupLocation}
              onChange={update("pickupLocation")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Delivery Location" htmlFor="deliveryLocation" required>
            <input
              id="deliveryLocation"
              type="text"
              placeholder="City, address or ZIP"
              value={formData.deliveryLocation}
              onChange={update("deliveryLocation")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Package Type" htmlFor="packageType">
            <select
              id="packageType"
              value={formData.packageType}
              onChange={update("packageType")}
              className="ship-now-input cursor-pointer"
            >
              {PACKAGE_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </Field>

          <Field label="Weight (kg)" htmlFor="weight" required>
            <input
              id="weight"
              type="number"
              min="0.1"
              step="0.1"
              placeholder="e.g. 2.5"
              value={formData.weight}
              onChange={update("weight")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Package Size" htmlFor="packageSize">
            <select
              id="packageSize"
              value={formData.packageSize}
              onChange={update("packageSize")}
              className="ship-now-input cursor-pointer"
            >
              {PACKAGE_SIZES.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </Field>
        </div>

        <fieldset className="mt-5 sm:mt-6 border-none p-0 m-0">
          <legend className="ship-now-label mb-3">Delivery Priority</legend>
          <div className="ship-now-radio-group">
            {DELIVERY_PRIORITIES.map((priority) => (
              <label
                key={priority.id}
                className={`ship-now-radio-option ${
                  formData.deliveryPriority === priority.id ? "ship-now-radio-option--active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="deliveryPriority"
                  value={priority.id}
                  checked={formData.deliveryPriority === priority.id}
                  onChange={update("deliveryPriority")}
                />
                <span className="text-sm font-medium text-slate-800">{priority.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 sm:mt-6">
          <Field label="Special Instructions" htmlFor="specialInstructions">
            <textarea
              id="specialInstructions"
              placeholder="Signature required, fragile handling, etc."
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
