import CalculateButton from "./CalculateButton";
import { useTranslation } from "react-i18next";

export default function EstimateSummary({
  estimate,
  calculated,
  loading,
  onCalculate,
}) {
  const { t } = useTranslation("shipNow");

  const formatCargo = (cargo) => {
    if (!cargo) return t("summary.emptyValue");

    const weightText = cargo.weight
      ? `${cargo.weight} ${t("units.kg")}`
      : t("summary.emptyValue");

    if (cargo.kind === "package") {
      return [
        t(`options.packageTypes.${cargo.packageTypeKey}`),
        weightText,
        t(`options.packageSizes.${cargo.packageSizeKey}`),
      ].join(" · ");
    }

    const cargoType = t(`options.cargoTypes.${cargo.cargoTypeKey}`);

    if (Array.isArray(cargo.dimensions)) {
      const dimensions = cargo.dimensions.filter(Boolean).join(" × ");
      return [cargoType, weightText, dimensions ? `${dimensions} ${t("units.cm")}` : null]
        .filter(Boolean)
        .join(" · ");
    }

    return [cargoType, weightText, cargo.dimensions || null].filter(Boolean).join(" · ");
  };

  const serviceLabel = estimate
    ? [
      t(estimate.serviceLabelKey),
      estimate.serviceDetailKey ? t(estimate.serviceDetailKey) : null,
    ]
      .filter(Boolean)
      .join(" — ")
    : "";

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          {t("estimate.stepLabel", { current: 4, total: 4 })}
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          {t("estimate.title")}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          {t("estimate.subtitle")}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="ship-now-card p-5 sm:p-7 lg:p-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-5 pb-4 border-b border-slate-100">
            {t("estimate.summaryTitle")}
          </h3>

          <div className="space-y-0">
            <div className="ship-now-summary-row">
              <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {t("estimate.fields.destinationType")}
              </span>
              <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                {estimate ? t(estimate.destinationTypeKey) : t("summary.emptyValue")}
              </span>
            </div>

            {estimate && (
              <>
                <div className="ship-now-summary-row">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {t("estimate.fields.route")}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                    {estimate.route}
                  </span>
                </div>

                <div className="ship-now-summary-row">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {t("estimate.fields.service")}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                    {serviceLabel}
                  </span>
                </div>

                <div className="ship-now-summary-row">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {t("estimate.fields.cargo")}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                    {formatCargo(estimate.cargo)}
                  </span>
                </div>

                <div className="ship-now-summary-row">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {t("estimate.fields.deliveryTime")}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                    {t(estimate.deliveryTimeKey)}
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
            {calculated && estimate ? (
              <div className="ship-now-price-result mb-6 rounded-2xl bg-blue-50 border border-blue-100 p-5 sm:p-6">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                  {t("estimate.priceLabel")}
                </p>
                <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  ${estimate.price.toLocaleString()}
                  <span className="text-sm sm:text-base font-normal text-gray-500 ml-1">
                    {t("estimate.currency")}
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {t("estimate.priceDisclaimer")}
                </p>
              </div>
            ) : (
              <div className="mb-6 rounded-xl bg-blue-50 border border-blue-100 p-4 sm:p-5">
                <p className="text-sm text-gray-600 m-0">
                  {t("estimate.prompt")}
                </p>
              </div>
            )}

            <div className="flex justify-center sm:justify-start">
              <CalculateButton
                onClick={onCalculate}
                loading={loading}
                calculated={calculated}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
