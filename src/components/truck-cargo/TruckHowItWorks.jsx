import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./shared";

const STEP_KEYS = ["request", "collection", "planning", "delivery"];

const STEP_ICONS = {
  request: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  collection: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 3v5h-7V8z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  planning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function TruckHowItWorks() {
  const { t } = useTranslation("truckCargo");

  const steps = useMemo(
    () =>
      STEP_KEYS.map((key) => ({
        num: t(`howItWorks.steps.${key}.num`),
        title: t(`howItWorks.steps.${key}.title`),
        description: t(`howItWorks.steps.${key}.description`),
        icon: STEP_ICONS[key],
      })),
    [t],
  );

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow={t("howItWorks.eyebrow")}
        title={t("howItWorks.title")}
        description={t("howItWorks.description")}
      />

      <div className="relative min-w-0">
        <div
          className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100 -translate-y-1/2"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.num}
              className="relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6
                hover:shadow-lg hover:border-blue-100 transition-all duration-200 min-w-0"
            >
              <div
                className="absolute -top-3 left-5 sm:left-6 bg-blue-500 text-white text-xs sm:text-sm
                  font-bold w-8 h-8 rounded-full flex items-center justify-center z-10"
              >
                {step.num}
              </div>

              {index < steps.length - 1 && (
                <div
                  className="hidden sm:block lg:hidden absolute -right-3 top-1/2 -translate-y-1/2 text-blue-300 z-10"
                  aria-hidden="true"
                >
                  →
                </div>
              )}

              <div className="flex justify-center mt-4 mb-4 sm:mb-5 h-14 sm:h-16">
                {step.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
