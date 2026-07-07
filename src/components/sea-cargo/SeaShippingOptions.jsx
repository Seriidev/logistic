import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const TABS = ["lcl", "fcl"];

const TAB_CONFIG = {
  lcl: {
    image: "/sea-lcl.jpg",
    benefitKeys: ["lowerCosts", "payForSpace", "smallBusiness", "personal", "flexible"],
    exampleKeys: ["packages", "ecommerce", "retail", "personal"],
  },
  fcl: {
    image: "/sea-fcl.jpg",
    benefitKeys: ["faster", "security", "capacity", "bulk", "control"],
    exampleKeys: ["equipment", "inventory", "imports", "wholesale"],
  },
};

export default function SeaShippingOptions() {
  const { t } = useTranslation("seaCargo");
  const [activeTab, setActiveTab] = useState("lcl");

  const shippingOptions = useMemo(
    () =>
      Object.fromEntries(
        TABS.map((tab) => [
          tab,
          {
            id: tab,
            label: t(`shippingOptions.${tab}.label`),
            sublabel: t(`shippingOptions.${tab}.sublabel`),
            title: t(`shippingOptions.${tab}.title`),
            description: t(`shippingOptions.${tab}.description`),
            image: TAB_CONFIG[tab].image,
            benefits: TAB_CONFIG[tab].benefitKeys.map((key) =>
              t(`shippingOptions.${tab}.benefits.${key}`)
            ),
            examples: TAB_CONFIG[tab].exampleKeys.map((key) =>
              t(`shippingOptions.${tab}.examples.${key}`)
            ),
          },
        ])
      ),
    [t]
  );

  const active = shippingOptions[activeTab];

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20" aria-labelledby="shipping-options-heading">
      <SectionHeading
        eyebrow={t("shippingOptions.eyebrow")}
        title={t("shippingOptions.title")}
        description={t("shippingOptions.description")}
      />

      <div
        role="tablist"
        aria-label={t("shippingOptions.tabsAriaLabel")}
        className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-2xl mx-auto"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`sea-panel-${tab}`}
            id={`sea-tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-h-[44px] px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase
              tracking-wider border-none cursor-pointer font-[inherit] transition-all duration-200
              ${activeTab === tab
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            <span className="block">{shippingOptions[tab].label}</span>
            <span className="block text-[10px] sm:text-xs font-normal normal-case tracking-normal opacity-80 mt-0.5">
              {shippingOptions[tab].sublabel}
            </span>
          </button>
        ))}
      </div>

      <div
        id={`sea-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`sea-tab-${activeTab}`}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start min-w-0
          animate-[fadeIn_0.3s_ease-out]"
      >
        <ImageBlock
          src={active.image}
          alt={t("shippingOptions.imageAlt", { title: active.title })}
          hint={t("shippingOptions.photoHint", { path: active.image })}
          className="w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
        />

        <div className="min-w-0">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            {active.sublabel}
          </span>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{active.title}</h3>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            {active.description}
          </p>

          <p className="text-sm font-semibold text-gray-900 mb-3">{t("shippingOptions.benefitsLabel")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 sm:mb-6">
            {active.benefits.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 sm:p-5 mb-6 sm:mb-8">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
              {t("shippingOptions.examplesLabel")}
            </p>
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
            to={`/sea-cargo-booking?service=${activeTab}`}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5
              rounded-full bg-blue-500 text-white text-sm font-bold uppercase tracking-wider
              no-underline hover:bg-blue-600 transition-colors"
          >
            {t("shippingOptions.getQuote", { service: activeTab.toUpperCase() })}
          </Link>
        </div>
      </div>
    </section>
  );
}
