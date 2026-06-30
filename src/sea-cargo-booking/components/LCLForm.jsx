import StepWrapper from "./StepWrapper";
import PriceSummary from "./PriceSummary";
import { getBreakdown } from "../utils/getBreakdown";
import { validateLCL } from "../utils/validation";
import { COMMODITY_TYPES, WEIGHT_UNITS } from "../data/commodityTypes";
import { DELIVERY_TYPES } from "../data/deliveryTypes";

const SERVICE = "lcl";

const inputClass =
  "w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900 outline-none bg-white focus:border-blue-400 transition-colors min-w-0 font-[inherit]";
const labelClass = "text-sm font-medium text-gray-700 mb-1.5 block";

export default function LCLForm({ formData, onChange, onNext }) {
  const update = (field) => (e) => onChange(field, e.target.value);
  const breakdown = getBreakdown(SERVICE, formData);
  const valid = validateLCL(formData);

  return (
    <StepWrapper
      eyebrow="LCL Ocean Freight"
      title="Shipment Details"
      description={`Shared container space for smaller shipments. Delivery in ${breakdown.deliveryTime}.`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
        <form
          onSubmit={(e) => { e.preventDefault(); if (valid) onNext(); }}
          className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-7 lg:p-8 min-w-0"
        >
          {/* Route */}
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Route</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
            <div className="min-w-0">
              <label htmlFor="fromCountry" className={labelClass}>From Country *</label>
              <input id="fromCountry" type="text" placeholder="e.g. China"
                value={formData.fromCountry || ""} onChange={update("fromCountry")} className={inputClass} />
            </div>
            <div className="min-w-0">
              <label htmlFor="zipCode" className={labelClass}>ZIP Code *</label>
              <input id="zipCode" type="text" placeholder="e.g. 200000"
                value={formData.zipCode || ""} onChange={update("zipCode")} className={inputClass} />
            </div>
            <div className="min-w-0">
              <label htmlFor="destinationCountry" className={labelClass}>Destination Country *</label>
              <input id="destinationCountry" type="text" placeholder="e.g. Netherlands"
                value={formData.destinationCountry || ""} onChange={update("destinationCountry")} className={inputClass} />
            </div>
            <div className="min-w-0">
              <label htmlFor="dateOfShipment" className={labelClass}>Date of Shipment *</label>
              <input id="dateOfShipment" type="date"
                value={formData.dateOfShipment || ""} onChange={update("dateOfShipment")} className={inputClass} />
            </div>
          </div>

          {/* Shipment */}
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Shipment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
            <div className="min-w-0">
              <label htmlFor="totalUnits" className={labelClass}>Total Units *</label>
              <input id="totalUnits" type="number" min="1" placeholder="e.g. 5"
                value={formData.totalUnits || ""} onChange={update("totalUnits")} className={inputClass} />
            </div>
            <div className="min-w-0">
              <label htmlFor="weight" className={labelClass}>Package Weight *</label>
              <div className="flex gap-2 min-w-0">
                <input id="weight" type="number" min="0" step="0.1" placeholder="0"
                  value={formData.weight || ""} onChange={update("weight")} className={inputClass} />
                <select
                  aria-label="Weight unit"
                  value={formData.weightUnit || "kg"}
                  onChange={update("weightUnit")}
                  className="h-11 sm:h-12 px-3 rounded-xl border border-gray-200 text-sm text-gray-900 bg-white outline-none cursor-pointer focus:border-blue-400 transition-colors font-[inherit] shrink-0"
                >
                  {WEIGHT_UNITS.map((u) => (
                    <option key={u.id} value={u.id}>{u.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="min-w-0">
              <label htmlFor="commodityType" className={labelClass}>Commodity Type *</label>
              <select id="commodityType" value={formData.commodityType || ""} onChange={update("commodityType")}
                className={`${inputClass} cursor-pointer`}>
                <option value="" disabled>Select commodity type</option>
                {COMMODITY_TYPES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="min-w-0">
              <label htmlFor="deliveryType" className={labelClass}>Delivery Type *</label>
              <select id="deliveryType" value={formData.deliveryType || ""} onChange={update("deliveryType")}
                className={`${inputClass} cursor-pointer`}>
                <option value="" disabled>Select delivery type</option>
                {DELIVERY_TYPES.map((d) => (
                  <option key={d.id} value={d.id}>{d.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6 min-w-0">
            <label htmlFor="commodityDescription" className={labelClass}>Commodity Description</label>
            <textarea id="commodityDescription" rows={3} placeholder="Describe the goods being shipped"
              value={formData.commodityDescription || ""} onChange={update("commodityDescription")}
              className={`${inputClass} h-auto py-3 resize-y`} />
          </div>

          {/* Insurance */}
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Insurance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
            <div className="min-w-0">
              <label htmlFor="declaredValue" className={labelClass}>Insurance Declared Value (USD)</label>
              <input id="declaredValue" type="number" min="0" step="1" placeholder="0"
                value={formData.declaredValue || ""} onChange={update("declaredValue")} className={inputClass} />
            </div>
            <div className="min-w-0">
              <label htmlFor="insuranceFee" className={labelClass}>Insurance Fee (USD)</label>
              <input id="insuranceFee" type="text" readOnly tabIndex={-1}
                value={`$${breakdown.insuranceFee.toFixed(2)}`}
                className={`${inputClass} bg-gray-50 text-gray-500 cursor-default`} />
            </div>
          </div>

          <div className="lg:hidden mb-6">
            <PriceSummary service={SERVICE} formData={formData} sticky={false} />
          </div>

          <button
            type="submit"
            disabled={!valid}
            className="w-full sm:w-auto min-h-[44px] px-10 py-3 rounded-full bg-blue-500 text-white text-sm font-bold
              uppercase tracking-wider border-none cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </form>

        <div className="hidden lg:block min-w-0">
          <PriceSummary service={SERVICE} formData={formData} />
        </div>
      </div>
    </StepWrapper>
  );
}
