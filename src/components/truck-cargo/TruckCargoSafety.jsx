import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeading, ImageBlock } from "./shared";

const SAFETY_BLOCK_KEYS = [
  "cargoProtection",
  "gpsTracking",
  "driverMonitoring",
  "insurance",
  "secureHandling",
];

const SAFETY_ICONS = {
  cargoProtection: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gpsTracking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
    </svg>
  ),
  driverMonitoring: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  insurance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  secureHandling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function TruckCargoSafety() {
  const { t } = useTranslation("truckCargo");

  const safetyBlocks = useMemo(
    () =>
      SAFETY_BLOCK_KEYS.map((key) => ({
        id: key,
        title: t(`safety.blocks.${key}.title`),
        description: t(`safety.blocks.${key}.description`),
        icon: SAFETY_ICONS[key],
      })),
    [t],
  );

  const badges = useMemo(
    () => t("safety.badges", { returnObjects: true }),
    [t],
  );

  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow={t("safety.eyebrow")}
          title={t("safety.title")}
          description={t("safety.description")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-w-0 mb-8 sm:mb-10">
          <ImageBlock
            src="/minibanner4.jpg"
            alt={t("safety.imageAlt")}
            hint={t("shared.imageHint", { path: "public/minibanner4.jpg" })}
            className="w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
          />

          <div className="min-w-0">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              {t("safety.intro")}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700
                    text-xs font-semibold border border-blue-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {safetyBlocks.map((block) => (
            <article
              key={block.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-5 sm:p-6
                hover:shadow-md hover:border-blue-200 transition-all duration-200 min-w-0"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {block.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{block.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{block.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
