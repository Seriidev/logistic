import { getBreakdown } from "../utils/getBreakdown";
import { Trans, useTranslation } from "react-i18next";

function Row({ label, value, muted }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <span className={`text-xs sm:text-sm ${muted ? "text-gray-400" : "text-gray-600"}`}>{label}</span>
      <span className={`text-xs sm:text-sm font-medium ${muted ? "text-gray-400" : "text-gray-900"}`}>{value}</span>
    </div>
  );
}

export default function PriceSummary({ service, formData, sticky = true }) {
  const { t } = useTranslation(["seaCargoBooking", "booking"]);
  const b = getBreakdown(service, formData);
  const money = (n) => `$${n.toFixed(2)}`;
  const deliveryTime = t(b.deliveryTimeKey, { ns: "seaCargoBooking" });
  const deliveryLabel = b.deliveryLabelKey
    ? t(b.deliveryLabelKey, { ns: "seaCargoBooking" })
    : t("common.emDash", { ns: "booking" });
  const containerLabel = b.containerLabelKey
    ? t(b.containerLabelKey, { ns: "seaCargoBooking" })
    : t("common.emDash", { ns: "booking" });

  return (
    <aside
      className={`rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6 min-w-0 ${
        sticky ? "lg:sticky lg:top-24" : ""
      }`}
      aria-label={t("aria.priceEstimate", { ns: "booking" })}
    >
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{t("priceCalculator.title", { ns: "booking" })}</p>
        <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
          {t(`serviceSelector.${service}.label`, { ns: "seaCargoBooking" })}
        </span>
      </div>

      <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">
        {money(b.total)}
        <span className="text-sm font-normal text-gray-500 ml-1">{t("priceCalculator.currency", { ns: "booking" })}</span>
      </p>
      <p className="text-xs text-gray-500 mb-4">
        <Trans
          ns="booking"
          i18nKey="priceCalculator.deliveryIn"
          values={{ time: deliveryTime }}
          components={{ strong: <strong className="text-gray-700" /> }}
        />
      </p>

      <div className="h-px bg-gray-200 mb-2" />

      {service === "fcl" ? (
        <>
          <Row
            label={t("priceCalculator.lines.container", { ns: "booking", label: containerLabel })}
            value={money(b.containerFee)}
          />
          {b.overweightFee > 0 && <Row label={t("priceCalculator.lines.overweight", { ns: "booking" })} value={money(b.overweightFee)} />}
        </>
      ) : (
        <>
          <Row label={t("priceCalculator.lines.baseFee", { ns: "booking" })} value={money(b.baseFee)} />
          <Row label={t("priceCalculator.lines.units", { ns: "booking", count: b.units })} value={money(b.unitsFee)} />
          <Row label={t("priceCalculator.lines.weightKg", { ns: "booking", kg: b.weightKg })} value={money(b.weightFee)} />
        </>
      )}
      <Row label={t("priceCalculator.lines.distance", { ns: "booking", distance: b.distance.toLocaleString() })} value={money(b.distanceFee)} />
      <Row label={t("priceCalculator.lines.delivery", { ns: "booking", label: deliveryLabel })} value={money(b.deliveryFee)} />
      {b.insuranceFee > 0 && <Row label={t("priceCalculator.lines.insurance", { ns: "booking" })} value={money(b.insuranceFee)} />}
      {b.paymentFee > 0 && <Row label={t("priceCalculator.lines.providerFee", { ns: "booking" })} value={money(b.paymentFee)} />}

      <div className="h-px bg-gray-200 my-2" />
      <div className="flex items-center justify-between gap-3 pt-1">
        <span className="text-sm font-bold text-gray-900">{t("priceCalculator.total", { ns: "booking" })}</span>
        <span className="text-base font-extrabold text-gray-900">{money(b.total)}</span>
      </div>

      <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
        {t("priceCalculator.disclaimerSea", { ns: "booking" })}
      </p>
    </aside>
  );
}
