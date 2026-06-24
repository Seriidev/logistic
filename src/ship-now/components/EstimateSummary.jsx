import CalculateButton from "./CalculateButton";

export default function EstimateSummary({
  estimate,
  calculated,
  loading,
  onCalculate,
  destination,
}) {
  const destinationLabel = destination === "international" ? "International" : "Domestic";

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Step 4 of 4
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          Review &amp; Calculate
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Confirm your shipment details and get an estimated quote.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="ship-now-card p-5 sm:p-7 lg:p-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-5 pb-4 border-b border-slate-100">
            Shipment Summary
          </h3>

          <div className="space-y-0">
            <div className="ship-now-summary-row">
              <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                Destination Type
              </span>
              <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                {destinationLabel}
              </span>
            </div>

            {estimate && (
              <>
                <div className="ship-now-summary-row">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    Estimated Route
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                    {estimate.route}
                  </span>
                </div>

                <div className="ship-now-summary-row">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    Selected Service
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                    {estimate.service}
                  </span>
                </div>

                <div className="ship-now-summary-row">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    Cargo Information
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                    {estimate.cargo}
                  </span>
                </div>

                <div className="ship-now-summary-row">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    Estimated Delivery Time
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 text-left sm:text-right">
                    {estimate.deliveryTime}
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
            {calculated && estimate ? (
              <div className="ship-now-price-result mb-6 rounded-2xl bg-blue-50 border border-blue-100 p-5 sm:p-6">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                  Estimated Price (Mock)
                </p>
                <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  ${estimate.price.toLocaleString()}
                  <span className="text-sm sm:text-base font-normal text-gray-500 ml-1">USD</span>
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Preliminary estimate only. Final pricing confirmed by our logistics team.
                </p>
              </div>
            ) : (
              <div className="mb-6 rounded-xl bg-blue-50 border border-blue-100 p-4 sm:p-5">
                <p className="text-sm text-gray-600 m-0">
                  Click below to generate your estimated shipping cost based on the details you provided.
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
