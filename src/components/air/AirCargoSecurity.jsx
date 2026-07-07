import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const FEATURE_KEYS = ["0", "1", "2", "3", "4", "5"];
const BADGE_KEYS = ["0", "1", "2", "3", "4", "5"];

export default function AirCargoSecurity() {
  const { t } = useTranslation("airCargo");

  const features = useMemo(
    () => FEATURE_KEYS.map((key) => t(`cargoSecurity.features.${key}`)),
    [t],
  );

  const badges = useMemo(
    () => BADGE_KEYS.map((key) => t(`cargoSecurity.badges.${key}`)),
    [t],
  );

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow={t("cargoSecurity.eyebrow")}
        title={t("cargoSecurity.title")}
        description={t("cargoSecurity.description")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-w-0">
        <div className="order-2 lg:order-1 min-w-0">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            {t("cargoSecurity.body")}
          </p>

          <div className="flex flex-col gap-3 mb-6 sm:mb-8">
            {features.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

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

        <ImageBlock
          src="/minibanner4.jpg"
          alt={t("cargoSecurity.imageAlt")}
          hint={t("shared.imageHint", { path: "/minibanner4.jpg" })}
          className="order-1 lg:order-2 w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
        />
      </div>
    </section>
  );
}
