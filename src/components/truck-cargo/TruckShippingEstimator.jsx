import { useState } from "react";
import { SectionHeading } from "./shared";

const CARGO_TYPES = [
  "General Cargo",
  "Palletized Goods",
  "Fragile Items",
  "Temperature-Sensitive",
  "Oversized / Heavy",
  "Hazardous (DG)",
];

const VEHICLE_TYPES = [
  "Small Van",
  "Medium Truck",
  "Heavy Truck",
  "Refrigerated Truck",
  "Container Truck",
  "Flatbed Truck",
];

function mockEstimate(form) {
  const weight = parseFloat(form.weight) || 0;
  const baseRate = form.vehicleType.includes("Heavy") ? 2.8 : form.vehicleType.includes("Refrigerated") ? 3.2 : 1.9;
  const distanceFactor = (form.pickup.length + form.delivery.length) % 5 + 3;
  const cargoMultiplier = form.cargoType.includes("Hazardous") ? 1.5 : form.cargoType.includes("Temperature") ? 1.3 : 1;
  const total = Math.max(150, weight * baseRate * distanceFactor * cargoMultiplier);
  const days = form.vehicleType.includes("Van") ? "1–2" : form.vehicleType.includes("Heavy") ? "3–5" : "2–4";

  return {
    price: total.toFixed(2),
    days,
    vehicle: form.vehicleType,
  };
}

export default function TruckShippingEstimator() {
  const [form, setForm] = useState({
    pickup: "",
    delivery: "",
    cargoType: "General Cargo",
    weight: "",
    vehicleType: "Medium Truck",
  });
  const [result, setResult] = useState(null);
  const [calculated, setCalculated] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setCalculated(false);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!form.pickup.trim() || !form.delivery.trim() || !form.weight.trim()) {
      alert("Please fill in pickup location, delivery location, and weight.");
      return;
    }
    setResult(mockEstimate(form));
    setCalculated(true);
  };

  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Shipping Estimator"
          title="Get an Instant Freight Estimate"
          description="Enter your shipment details for a preliminary quote. Final pricing is confirmed by our logistics team after route optimization."
        />

        <div className="max-w-4xl mx-auto min-w-0">
          <form
            onSubmit={handleCalculate}
            className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5 sm:mb-6">
              <div className="min-w-0">
                <label htmlFor="pickup" className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Pickup Location*
                </label>
                <input
                  id="pickup"
                  type="text"
                  placeholder="City, state or ZIP"
                  value={form.pickup}
                  onChange={handleChange("pickup")}
                  className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900
                    outline-none font-[inherit] focus:border-blue-400 transition-colors min-w-0"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="delivery" className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Delivery Location*
                </label>
                <input
                  id="delivery"
                  type="text"
                  placeholder="City, state or ZIP"
                  value={form.delivery}
                  onChange={handleChange("delivery")}
                  className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900
                    outline-none font-[inherit] focus:border-blue-400 transition-colors min-w-0"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="cargoType" className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Cargo Type
                </label>
                <select
                  id="cargoType"
                  value={form.cargoType}
                  onChange={handleChange("cargoType")}
                  className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900
                    outline-none bg-white cursor-pointer appearance-none font-[inherit]
                    focus:border-blue-400 transition-colors min-w-0"
                >
                  {CARGO_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="min-w-0">
                <label htmlFor="weight" className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Weight (kg)*
                </label>
                <input
                  id="weight"
                  type="number"
                  min="1"
                  placeholder="e.g. 1500"
                  value={form.weight}
                  onChange={handleChange("weight")}
                  className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900
                    outline-none font-[inherit] focus:border-blue-400 transition-colors min-w-0"
                />
              </div>
              <div className="min-w-0 sm:col-span-2">
                <label htmlFor="vehicleType" className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Vehicle Type
                </label>
                <select
                  id="vehicleType"
                  value={form.vehicleType}
                  onChange={handleChange("vehicleType")}
                  className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900
                    outline-none bg-white cursor-pointer appearance-none font-[inherit]
                    focus:border-blue-400 transition-colors min-w-0"
                >
                  {VEHICLE_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto min-h-[44px] px-8 py-3 rounded-full bg-blue-500 text-white
                text-sm font-bold uppercase tracking-wider border-none cursor-pointer
                hover:bg-blue-600 transition-colors font-[inherit]"
            >
              Calculate Estimate
            </button>

            {calculated && result && (
              <div
                className="mt-6 sm:mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-5 sm:p-6
                  animate-[fadeIn_0.3s_ease-out]"
                role="status"
              >
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                  Estimated Quote (Mock)
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                  ${result.price} <span className="text-sm font-normal text-gray-500">USD</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Estimated transit: <strong>{result.days} business days</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Recommended vehicle: <strong>{result.vehicle}</strong>
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  This is a preliminary estimate. Contact our team for a binding quote.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
