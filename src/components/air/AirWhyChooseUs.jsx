import { useTranslation } from "react-i18next";
import { SectionHeading, ImageBlock } from "./shared";

const FEATURE_IDS = [1, 2, 3, 4, 5, 6];

const FEATURE_ICONS = {
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M2 12h20M12 2l4 10-4 10-4-10 4-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 3v5h-7V8z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  6: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 18v-6a9 9 0 0118 0v6" strokeLinecap="round" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" strokeLinecap="round" />
    </svg>
  ),
};

export default function AirWhyChooseUs() {
  const { t } = useTranslation("airCargo");

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
            src="/minibanner1.jpg"
            alt={t("whyChooseUs.imageAlt")}
            hint={t("shared.imageHint", { path: "/minibanner1.jpg" })}
            className="w-full lg:w-[420px] lg:shrink-0 h-64 sm:h-80 lg:h-[480px] rounded-2xl sm:rounded-3xl"
          />

          <div className="flex-1 min-w-0 flex flex-col gap-3 sm:gap-4">
            {FEATURE_IDS.map((id) => (
              <div
                key={id}
                className="flex items-start gap-4 bg-white rounded-2xl px-4 sm:px-5 py-4
                  hover:bg-blue-50 transition-colors duration-150 border border-gray-100"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  {FEATURE_ICONS[id]}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-blue-600 mb-0.5">{t(`whyChooseUs.features.${id}.title`)}</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{t(`whyChooseUs.features.${id}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
