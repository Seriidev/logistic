import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeading, ImageBlock } from "./shared";

const BENEFIT_KEYS = [
  "flexibleRoutes",
  "fastGroundDelivery",
  "doorToDoor",
  "costEffective",
  "realTimeTracking",
  "dedicatedSupport",
];

const BENEFIT_ICONS = {
  flexibleRoutes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 12h4l3-8 4 16 3-8h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  fastGroundDelivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  doorToDoor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  costEffective: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  realTimeTracking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
    </svg>
  ),
  dedicatedSupport: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 18v-6a9 9 0 0118 0v6" strokeLinecap="round" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" strokeLinecap="round" />
    </svg>
  ),
};

export default function TruckWhyChooseUs() {
  const { t } = useTranslation("truckCargo");

  const benefits = useMemo(
    () =>
      BENEFIT_KEYS.map((key) => ({
        id: key,
        title: t(`whyChooseUs.benefits.${key}.title`),
        description: t(`whyChooseUs.benefits.${key}.description`),
        icon: BENEFIT_ICONS[key],
      })),
    [t],
  );

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
            src="/minibanner2.jpg"
            alt={t("whyChooseUs.imageAlt")}
            hint={t("shared.imageHint", { path: "public/minibanner2.jpg" })}
            className="w-full lg:w-[420px] lg:shrink-0 h-64 sm:h-80 lg:h-[480px] rounded-2xl sm:rounded-3xl"
          />

          <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.id}
                className="flex items-start gap-4 bg-white rounded-2xl px-4 sm:px-5 py-4
                  hover:bg-blue-50 hover:shadow-md transition-all duration-200 border border-gray-100 min-w-0"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-blue-600 mb-0.5">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
