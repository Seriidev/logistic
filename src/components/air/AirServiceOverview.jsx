import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const HIGHLIGHT_KEYS = ["0", "1", "2", "3", "4", "5"];

export default function AirServiceOverview() {
  const { t } = useTranslation("airCargo");

  const highlights = useMemo(
    () => HIGHLIGHT_KEYS.map((key) => t(`overview.highlights.${key}`)),
    [t],
  );

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow={t("overview.eyebrow")}
        title={t("overview.title")}
        description={t("overview.description")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-w-0">
        <ImageBlock
          src="/air picture.png"
          alt={t("overview.imageAlt")}
          hint={t("shared.imageHint", { path: "/air picture.png" })}
          className="w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
        />

        <div className="min-w-0">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            {t("overview.body")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {highlights.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/ship-now"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5
                rounded-full bg-blue-500 text-white text-sm font-bold uppercase tracking-wider
                no-underline hover:bg-blue-600 transition-colors"
            >
              {t("overview.getQuote")}
            </Link>
            <Link
              to="/calculate"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5
                rounded-full border border-gray-200 bg-white text-gray-900 text-sm font-bold
                uppercase tracking-wider no-underline hover:border-blue-300 hover:text-blue-600
                transition-colors"
            >
              {t("overview.calculateRates")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
