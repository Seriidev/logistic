import PriceCalculator from "./PriceCalculator";
import { getBreakdown } from "../utils/getBreakdown";
import { COUNTRIES, CATEGORIES, WEIGHT_UNITS, DELIVERY_TYPES } from "../data/shippingOptions";

const SERVICE = "ftl";

const inputClass =
  "w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-900 outline-none bg-white focus:border-blue-400 transition-colors min-w-0 font-[inherit]";
const labelClass = "text-sm font-medium text-gray-700 mb-1.5 block";

function isValid(f) {
  const req = (v) => Boolean(String(v || "").trim());
  return (
    req(f.country) && req(f.fromLocation) && req(f.shipperInfo) && req(f.dateOfShipment) &&
    req(f.weight) && req(f.hsCode) && req(f.category) && req(f.receiverInfo) && req(f.deliveryType)
  );
}

export default function FTLForm({ formData, onChange, onNext }) {
  const update = (field) => (e) => onChange(field, e.target.value);
  const breakdown = getBreakdown(SERVICE, formData);
  const valid = isValid(formData);

  return (
    <div className="animate-[fadeIn_0.3s_ease-out]">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          FTL · Full Truck Load
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">Shipment Details</h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
          A dedicated truck for your cargo. Delivery in {breakdown.deliveryTime}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
        <form
          onSubmit={(e) => { e.preventDefault(); if (valid) onNext(); }}
          className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-7 lg:p-8 min-w-0"
        >
          {/* Origin */}
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Origin</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
            <div className="min-w-0 sm:col-span-2">
              <label htmlFor="country" className={labelClass}>Choose your country *</label>
              <select id="country" value={formData.country || ""} onChange={update("country")} className={`${inputClass} cursor-pointer`}>
                <option value="" disabled>Select country</option>
                {COUNTRIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </div>
            <div className="min-w-0">
              <label htmlFor="fromLocation" className={labelClass}>From — Location *</label>
              <input id="fromLocation" type="text" placeholder="Pickup location"
                value={formData.fromLocation || ""} onChange={update("fromLocation")} className={inputClass} />
            </div>
            <div className="min-w-0">
              <label htmlFor="fromWarehouse" className={labelClass}>From — Warehouse</label>
              <input id="fromWarehouse" type="text" placeholder="Warehouse"
                value={formData.fromWarehouse || ""} onChange={update("fromWarehouse")} className={inputClass} />
            </div>
          </div>

          {/* Shipper */}
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Shipper Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
            <div className="min-w-0 sm:col-span-2">
              <label htmlFor="shipperInfo" className={labelClass}>Shipper name &amp; address *</label>
              <textarea id="shipperInfo" rows={2} placeholder="Full name, address, phone"
                value={formData.shipperInfo || ""} onChange={update("shipperInfo")} className={`${inputClass} h-auto py-3 resize-y`} />
            </div>
            <div className="min-w-0">
              <label htmlFor="dateOfShipment" className={labelClass}>Date of Shipment *</label>
              <input id="dateOfShipment" type="date"
                value={formData.dateOfShipment || ""} onChange={update("dateOfShipment")} className={inputClass} />
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
                  {WEIGHT_UNITS.map((u) => <option key={u.id} value={u.id}>{u.label}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Customs */}
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Customs &amp; Goods</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
            <div className="min-w-0">
              <label htmlFor="hsCode" className={labelClass}>HS Code *</label>
              <input id="hsCode" type="text" placeholder="e.g. 8708.99"
                value={formData.hsCode || ""} onChange={update("hsCode")} className={inputClass} />
            </div>
            <div className="min-w-0">
              <label htmlFor="category" className={labelClass}>Category *</label>
              <select id="category" value={formData.category || ""} onChange={update("category")} className={`${inputClass} cursor-pointer`}>
                <option value="" disabled>Select category</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Receiver + delivery */}
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Receiver &amp; Delivery</h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 mb-6">
            <div className="min-w-0">
              <label htmlFor="receiverInfo" className={labelClass}>Receiver Information *</label>
              <textarea id="receiverInfo" rows={2} placeholder="Full name, address, phone"
                value={formData.receiverInfo || ""} onChange={update("receiverInfo")} className={`${inputClass} h-auto py-3 resize-y`} />
            </div>
            <div className="min-w-0">
              <label htmlFor="deliveryType" className={labelClass}>Delivery Type *</label>
              <select id="deliveryType" value={formData.deliveryType || ""} onChange={update("deliveryType")} className={`${inputClass} cursor-pointer`}>
                <option value="" disabled>Select delivery type</option>
                {DELIVERY_TYPES.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
              </select>
            </div>
          </div>

          <div className="mb-6 min-w-0">
            <label htmlFor="commodityDescription" className={labelClass}>Commodity Description</label>
            <textarea id="commodityDescription" rows={3} placeholder="Describe the goods being shipped"
              value={formData.commodityDescription || ""} onChange={update("commodityDescription")} className={`${inputClass} h-auto py-3 resize-y`} />
          </div>

          {/* Insurance */}
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Insurance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
            <div className="min-w-0">
              <label htmlFor="declaredValue" className={labelClass}>Declared Value (USD)</label>
              <input id="declaredValue" type="number" min="0" step="1" placeholder="0"
                value={formData.declaredValue || ""} onChange={update("declaredValue")} className={inputClass} />
            </div>
            <div className="min-w-0">
              <label htmlFor="insuranceFee" className={labelClass}>Insurance Fee (USD)</label>
              <input id="insuranceFee" type="text" readOnly tabIndex={-1}
                value={`$${breakdown.insuranceFee.toFixed(2)}`} className={`${inputClass} bg-gray-50 text-gray-500 cursor-default`} />
            </div>
          </div>

          <div className="lg:hidden mb-6">
            <PriceCalculator service={SERVICE} formData={formData} sticky={false} />
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
          <PriceCalculator service={SERVICE} formData={formData} />
        </div>
      </div>
    </div>
  );
}
