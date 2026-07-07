import { SHIPMENT_STEPS } from "../constants";
import { useTranslation } from "react-i18next";

export default function ShipmentStepper({ currentStep, onContinue, continueLabel, disabled = false }) {
  const { t } = useTranslation("shipment");

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col gap-6">
      <ol className="flex flex-col gap-0">
        {SHIPMENT_STEPS.map((step, index) => {
          const isActive = step.id === currentStep;
          const isDone = step.id < currentStep;
          const isLast = index === SHIPMENT_STEPS.length - 1;

          return (
            <li key={step.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span
                  className={`w-3 h-3 rounded-full shrink-0 mt-1.5 transition-colors
                    ${isActive || isDone ? "bg-blue-500" : "bg-gray-300"}`}
                  aria-hidden="true"
                />
                {!isLast && (
                  <span className={`w-0.5 flex-1 min-h-[2rem] my-1 ${isDone ? "bg-blue-500" : "bg-gray-200"}`} />
                )}
              </div>
              <p
                className={`text-sm leading-snug pb-5 ${isLast ? "pb-0" : ""}
                  ${isActive ? "font-semibold text-gray-900" : isDone ? "text-gray-700" : "text-gray-400"}`}
              >
                {t(`steps.${step.labelKey}`)}
              </p>
            </li>
          );
        })}
      </ol>

      <button
        type="button"
        onClick={onContinue}
        disabled={disabled}
        className="w-full min-h-[48px] rounded-full border-none bg-emerald-500 text-white text-sm font-bold uppercase tracking-wider cursor-pointer hover:bg-emerald-600 transition-colors font-[inherit] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {continueLabel || t("actions.continue")}
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
