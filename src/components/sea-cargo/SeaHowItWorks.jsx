import { useTranslation } from "react-i18next";
import { SectionHeading } from "./shared";

const STEP_KEYS = ["booking", "loading", "transportation", "customs", "delivery"];

const STEP_ICONS = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2M12 12v4" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <path d="M2 20h20M4 18l2-8h12l2 8M6 10l3-6h6l3 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

export default function SeaHowItWorks() {
  const { t } = useTranslation("seaCargo");

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow={t("howItWorks.eyebrow")}
        title={t("howItWorks.title")}
        description={t("howItWorks.description")}
      />

      <div className="relative min-w-0">
        <div
          className="hidden xl:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-blue-100 -translate-y-1/2"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {STEP_KEYS.map((key, index) => (
            <article
              key={key}
              className="relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6
                hover:shadow-lg hover:border-blue-100 transition-all duration-200 min-w-0"
            >
              <div
                className="absolute -top-3 left-5 sm:left-6 bg-blue-500 text-white text-xs sm:text-sm
                  font-bold w-8 h-8 rounded-full flex items-center justify-center z-10"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {index < STEP_KEYS.length - 1 && (
                <div
                  className="hidden sm:block xl:hidden absolute -right-3 top-1/2 -translate-y-1/2 text-blue-300 z-10"
                  aria-hidden="true"
                >
                  →
                </div>
              )}

              <div className="flex justify-center mt-4 mb-4 sm:mb-5 h-14 sm:h-16">
                {STEP_ICONS[index]}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-2">
                {t(`howItWorks.steps.${key}.title`)}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
                {t(`howItWorks.steps.${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
