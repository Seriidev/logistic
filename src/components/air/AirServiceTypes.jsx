import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const TABS = ["economy", "express"];
const ADVANTAGE_KEYS = ["0", "1", "2", "3", "4", "5"];
const EXAMPLE_KEYS = ["0", "1", "2", "3"];

const SERVICE_IMAGES = {
  economy: "/air-economy.jpg",
  express: "/air-express.jpg",
};

export default function AirServiceTypes() {
  const { t } = useTranslation("airCargo");
  const [activeTab, setActiveTab] = useState("economy");

  const active = useMemo(
    () => ({
      id: activeTab,
      label: t(`serviceTypes.${activeTab}.label`),
      shortLabel: t(`serviceTypes.${activeTab}.shortLabel`),
      description: t(`serviceTypes.${activeTab}.description`),
      delivery: t(`serviceTypes.${activeTab}.delivery`),
      pricing: t(`serviceTypes.${activeTab}.pricing`),
      image: SERVICE_IMAGES[activeTab],
      advantages: ADVANTAGE_KEYS.map((key) => t(`serviceTypes.${activeTab}.advantages.${key}`)),
      examples: EXAMPLE_KEYS.map((key) => t(`serviceTypes.${activeTab}.examples.${key}`)),
    }),
    [activeTab, t],
  );

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20" aria-labelledby="air-service-types-heading">
      <SectionHeading
        eyebrow={t("serviceTypes.eyebrow")}
        title={t("serviceTypes.title")}
        description={t("serviceTypes.description")}
      />

      <div
        role="tablist"
        aria-label={t("serviceTypes.tablistAriaLabel")}
        className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-xl mx-auto"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`air-panel-${tab}`}
            id={`air-tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-h-[44px] px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase
              tracking-wider border-none cursor-pointer font-[inherit] transition-all duration-200
              ${activeTab === tab
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {t(`serviceTypes.${tab}.label`)}
          </button>
        ))}
      </div>

      <div
        id={`air-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`air-tab-${activeTab}`}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start min-w-0
          animate-[fadeIn_0.3s_ease-out]"
      >
        <ImageBlock
          src={active.image}
          alt={t("serviceTypes.imageAlt", { service: active.shortLabel })}
          hint={t("shared.imageHint", { path: active.image })}
          className="w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
        />

        <div className="min-w-0">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            {active.shortLabel}
          </span>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            {active.description}
          </p>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 sm:p-5 mb-5 sm:mb-6 space-y-3">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{t("serviceTypes.deliveryLabel")}</p>
              <p className="text-sm text-gray-600">{active.delivery}</p>
            </div>
            <div className="h-px bg-gray-200" />
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{t("serviceTypes.pricingLabel")}</p>
              <p className="text-sm text-gray-600">{active.pricing}</p>
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-900 mb-3">{t("serviceTypes.advantagesLabel")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 sm:mb-6">
            {active.advantages.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 sm:p-5 mb-6 sm:mb-8">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">{t("serviceTypes.examplesLabel")}</p>
            <div className="flex flex-wrap gap-2">
              {active.examples.map((example) => (
                <span
                  key={example}
                  className="inline-flex px-3 py-1.5 rounded-full bg-white text-gray-600 text-xs sm:text-sm
                    border border-gray-200"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>

          <Link
            to={`/air-cargo-booking?service=${active.id}`}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5
              rounded-full bg-blue-500 text-white text-sm font-bold uppercase tracking-wider
              no-underline hover:bg-blue-600 transition-colors"
          >
            {t("serviceTypes.getQuote", { service: active.shortLabel })}
          </Link>
        </div>
      </div>
    </section>
  );
}
