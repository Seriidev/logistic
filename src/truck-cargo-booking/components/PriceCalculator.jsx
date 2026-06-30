import { getBreakdown } from "../utils/getBreakdown";

function Row({ label, value, muted }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <span className={`text-xs sm:text-sm ${muted ? "text-gray-400" : "text-gray-600"}`}>{label}</span>
      <span className={`text-xs sm:text-sm font-medium ${muted ? "text-gray-400" : "text-gray-900"}`}>{value}</span>
    </div>
  );
}

export default function PriceCalculator({ service, formData, sticky = true }) {
  const b = getBreakdown(service, formData);
  const money = (n) => `$${n.toFixed(2)}`;

  return (
    <aside
      className={`rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6 min-w-0 ${
        sticky ? "lg:sticky lg:top-24" : ""
      }`}
      aria-label="Price estimate"
    >
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Estimated Cost</p>
        <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
          {service.toUpperCase()}
        </span>
      </div>

      <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">
        {money(b.total)}
        <span className="text-sm font-normal text-gray-500 ml-1">USD</span>
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Delivery in <strong className="text-gray-700">{b.deliveryTime}</strong>
      </p>

      <div className="h-px bg-gray-200 mb-2" />

      {service === "ftl" ? (
        <>
          <Row label={`Vehicle (${b.vehicleLabel})`} value={money(b.vehicleFee)} />
          {b.overweightFee > 0 && <Row label="Overweight surcharge" value={money(b.overweightFee)} />}
          <Row label={`Delivery (${b.deliveryLabel})`} value={money(b.deliveryFee)} />
        </>
      ) : (
        <>
          <Row label="Base service fee" value={money(b.baseFee)} />
          <Row label={`Weight (${b.chargeableWeight} kg billable)`} value={money(b.weightFee)} />
          {b.categoryFee > 0 && <Row label={`Category (${b.category})`} value={money(b.categoryFee)} />}
        </>
      )}
      <Row label={`Distance (~${b.distance.toLocaleString()} km)`} value={money(b.distanceFee)} />
      {b.insuranceFee > 0 && <Row label="Insurance" value={money(b.insuranceFee)} />}
      {b.paymentFee > 0 && <Row label="Provider fee" value={money(b.paymentFee)} />}

      <div className="h-px bg-gray-200 my-2" />
      <div className="flex items-center justify-between gap-3 pt-1">
        <span className="text-sm font-bold text-gray-900">Total</span>
        <span className="text-base font-extrabold text-gray-900">{money(b.total)}</span>
      </div>

      <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
        Preliminary estimate. Final price confirmed at checkout after route optimization.
      </p>
    </aside>
  );
}
