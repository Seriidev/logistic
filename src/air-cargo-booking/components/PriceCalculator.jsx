import { useTranslation, Trans } from "react-i18next";
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
  const { t } = useTranslation(["airCargoBooking", "booking"]);
  const b = getBreakdown(service, formData);
  const money = (n) => `$${n.toFixed(2)}`;
  const deliveryTime = t(b.deliveryTimeKey);

  return (
    <aside
      className={`rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6 min-w-0 ${
        sticky ? "lg:sticky lg:top-24" : ""
      }`}
      aria-label={t("aria.priceEstimate", { ns: "booking" })}
    >
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {t("priceCalculator.title", { ns: "booking" })}
        </p>
        <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
          {t(`services.${service}.shortLabel`)}
        </span>
      </div>

      <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">
        {money(b.total)}
        <span className="text-sm font-normal text-gray-500 ml-1">
          {t("priceCalculator.currency", { ns: "booking" })}
        </span>
      </p>
      <p className="text-xs text-gray-500 mb-4">
        <Trans
          i18nKey="priceCalculator.deliveryIn"
          ns="booking"
          values={{ time: deliveryTime }}
          components={{ strong: <strong className="text-gray-700" /> }}
        />
      </p>

      <div className="h-px bg-gray-200 mb-2" />

      <Row label={t("priceCalculator.lines.baseFee", { ns: "booking" })} value={money(b.baseFee)} />
      <Row
        label={t("priceCalculator.lines.weight", { ns: "booking", weight: b.chargeableWeight })}
        value={money(b.weightFee)}
      />
      <Row
        label={t("priceCalculator.lines.distance", { ns: "booking", distance: b.distance.toLocaleString() })}
        value={money(b.distanceFee)}
      />
      {b.insuranceFee > 0 && (
        <Row label={t("priceCalculator.lines.insurance", { ns: "booking" })} value={money(b.insuranceFee)} />
      )}
      {b.paymentFee > 0 && (
        <Row label={t("priceCalculator.lines.providerFee", { ns: "booking" })} value={money(b.paymentFee)} />
      )}

      <div className="h-px bg-gray-200 my-2" />
      <div className="flex items-center justify-between gap-3 pt-1">
        <span className="text-sm font-bold text-gray-900">{t("priceCalculator.total", { ns: "booking" })}</span>
        <span className="text-base font-extrabold text-gray-900">{money(b.total)}</span>
      </div>

      <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
        {t("priceCalculator.disclaimerAir", { ns: "booking", volumetric: b.volumetricWeight })}
      </p>
    </aside>
  );
}
