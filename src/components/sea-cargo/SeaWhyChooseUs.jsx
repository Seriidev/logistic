import { useTranslation } from "react-i18next";
import { SectionHeading, ImageBlock } from "./shared";

const BENEFIT_KEYS = [
  "costEffective",
  "globalCoverage",
  "largeCapacity",
  "secureTransportation",
  "customsAssistance",
  "realTimeTracking",
];

const BENEFIT_ICONS = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
    </svg>
  ),
];

export default function SeaWhyChooseUs() {
  const { t } = useTranslation("seaCargo");

  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow={t("whyChooseUs.eyebrow")}
          title={t("whyChooseUs.title")}
          description={t("whyChooseUs.description")}
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch min-w-0">
          <ImageBlock
            src="/sea-why-choose.jpg"
            alt={t("whyChooseUs.imageAlt")}
            hint={t("whyChooseUs.photoHint")}
            className="w-full lg:w-[420px] lg:shrink-0 h-64 sm:h-80 lg:h-[480px] rounded-2xl sm:rounded-3xl"
          />

          <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {BENEFIT_KEYS.map((key, index) => (
              <article
                key={key}
                className="flex items-start gap-4 bg-white rounded-2xl px-4 sm:px-5 py-4
                  hover:bg-blue-50 hover:shadow-md transition-all duration-200 border border-gray-100 min-w-0"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  {BENEFIT_ICONS[index]}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-blue-600 mb-0.5">
                    {t(`whyChooseUs.benefits.${key}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {t(`whyChooseUs.benefits.${key}.description`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
