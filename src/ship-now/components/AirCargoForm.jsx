import { CARGO_TYPES, AIR_SERVICE_TYPES } from "../data/shippingOptions";

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
  const update = (field) => (e) => onChange(field, e.target.value);

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Step 3 of 4
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          Air Cargo Details
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Enter your shipment information for an air freight quote.
        </p>
      </div>

      <div className="ship-now-card max-w-4xl mx-auto p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Field label="Origin Country" htmlFor="originCountry" required>
            <input
              id="originCountry"
              type="text"
              placeholder="e.g. United States"
              value={formData.originCountry}
              onChange={update("originCountry")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Destination Country" htmlFor="destinationCountry" required>
            <input
              id="destinationCountry"
              type="text"
              placeholder="e.g. Germany"
              value={formData.destinationCountry}
              onChange={update("destinationCountry")}
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
              placeholder="e.g. 250"
              value={formData.weight}
              onChange={update("weight")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Length (cm)" htmlFor="length" required>
            <input
              id="length"
              type="number"
              min="1"
              placeholder="Length"
              value={formData.length}
              onChange={update("length")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Width (cm)" htmlFor="width" required>
            <input
              id="width"
              type="number"
              min="1"
              placeholder="Width"
              value={formData.width}
              onChange={update("width")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Height (cm)" htmlFor="height" required>
            <input
              id="height"
              type="number"
              min="1"
              placeholder="Height"
              value={formData.height}
              onChange={update("height")}
              className="ship-now-input"
            />
          </Field>
        </div>

        <fieldset className="mt-5 sm:mt-6 border-none p-0 m-0">
          <legend className="ship-now-label mb-3">Service Type</legend>
          <div className="ship-now-radio-group ship-now-radio-group--inline">
            {AIR_SERVICE_TYPES.map((service) => (
              <label
                key={service.id}
                className={`ship-now-radio-option flex-1 ${
                  formData.serviceType === service.id ? "ship-now-radio-option--active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="serviceType"
                  value={service.id}
                  checked={formData.serviceType === service.id}
                  onChange={update("serviceType")}
                />
                <span className="text-sm font-medium text-slate-800">{service.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 sm:mt-6">
          <Field label="Special Instructions" htmlFor="specialInstructions">
            <textarea
              id="specialInstructions"
              placeholder="Handling requirements, delivery notes, etc."
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
