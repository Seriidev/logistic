import { CARGO_TYPES, SEA_CONTAINER_TYPES } from "../data/shippingOptions";

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
  const update = (field) => (e) => onChange(field, e.target.value);

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Step 3 of 4
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          Sea Cargo Details
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Enter your ocean freight shipment information.
        </p>
      </div>

      <div className="ship-now-card max-w-4xl mx-auto p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Field label="Origin Port" htmlFor="originPort" required>
            <input
              id="originPort"
              type="text"
              placeholder="e.g. Port of Shanghai"
              value={formData.originPort}
              onChange={update("originPort")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Destination Port" htmlFor="destinationPort" required>
            <input
              id="destinationPort"
              type="text"
              placeholder="e.g. Port of Rotterdam"
              value={formData.destinationPort}
              onChange={update("destinationPort")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Cargo Type" htmlFor="cargoType">
            <select
              id="cargoType"
              value={formData.cargoType}
              onChange={update("cargoType")}
              className="ship-now-input cursor-pointer"
            >
              {CARGO_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </Field>

          <Field label="Weight (kg)" htmlFor="weight" required>
            <input
              id="weight"
              type="number"
              min="1"
              placeholder="e.g. 5000"
              value={formData.weight}
              onChange={update("weight")}
              className="ship-now-input"
            />
          </Field>
        </div>

        <fieldset className="mt-5 sm:mt-6 border-none p-0 m-0">
          <legend className="ship-now-label mb-3">Container Type</legend>
          <div className="ship-now-radio-group ship-now-radio-group--inline">
            {SEA_CONTAINER_TYPES.map((container) => (
              <label
                key={container.id}
                className={`ship-now-radio-option flex-1 ${
                  formData.containerType === container.id ? "ship-now-radio-option--active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="containerType"
                  value={container.id}
                  checked={formData.containerType === container.id}
                  onChange={update("containerType")}
                />
                <span className="text-sm font-medium text-slate-800">{container.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-4 sm:gap-5">
          <Field label="Dimensions" htmlFor="dimensions">
            <input
              id="dimensions"
              type="text"
              placeholder="e.g. 120 × 80 × 100 cm or 15 CBM"
              value={formData.dimensions}
              onChange={update("dimensions")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Special Instructions" htmlFor="specialInstructions">
            <textarea
              id="specialInstructions"
              placeholder="Loading requirements, customs notes, etc."
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
