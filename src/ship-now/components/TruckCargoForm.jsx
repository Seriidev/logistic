import { CARGO_TYPES, TRUCK_TRANSPORT_TYPES } from "../data/shippingOptions";

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

export default function TruckCargoForm({ formData, onChange, isInternational }) {
  const update = (field) => (e) => onChange(field, e.target.value);
  const title = isInternational ? "International Truck Cargo" : "Domestic Truck Delivery";

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Step 3 of 4
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          {title} Details
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Enter pickup, delivery, and cargo information for your truck shipment.
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
              placeholder="e.g. 1500"
              value={formData.weight}
              onChange={update("weight")}
              className="ship-now-input"
            />
          </Field>
        </div>

        <fieldset className="mt-5 sm:mt-6 border-none p-0 m-0">
          <legend className="ship-now-label mb-3">Transport Type</legend>
          <div className="ship-now-radio-group ship-now-radio-group--inline">
            {TRUCK_TRANSPORT_TYPES.map((transport) => (
              <label
                key={transport.id}
                className={`ship-now-radio-option flex-1 ${
                  formData.transportType === transport.id ? "ship-now-radio-option--active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="transportType"
                  value={transport.id}
                  checked={formData.transportType === transport.id}
                  onChange={update("transportType")}
                />
                <span className="text-sm font-medium text-slate-800">{transport.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-4 sm:gap-5">
          <Field label="Dimensions" htmlFor="dimensions">
            <input
              id="dimensions"
              type="text"
              placeholder="e.g. 12 pallets · 240 × 120 × 150 cm"
              value={formData.dimensions}
              onChange={update("dimensions")}
              className="ship-now-input"
            />
          </Field>

          <Field label="Special Instructions" htmlFor="specialInstructions">
            <textarea
              id="specialInstructions"
              placeholder="Loading dock info, appointment times, etc."
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
