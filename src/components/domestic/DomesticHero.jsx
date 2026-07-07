import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function DomesticHero() {
  const { t } = useTranslation("domesticShipping");

  const heroStats = [
    { valueKey: "coverage", labelKey: "coverageLabel" },
    { valueKey: "delivery", labelKey: "deliveryLabel" },
    { valueKey: "support", labelKey: "supportLabel" },
  ];

  return (
    <div className="page-container py-4 sm:py-6 min-w-0">
      <nav
        aria-label={t("breadcrumb.ariaLabel")}
        className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 flex-wrap"
      >
        <Link to="/" className="hover:text-blue-500 transition-colors no-underline text-gray-500">
          {t("breadcrumb.main")}
        </Link>
        <span aria-hidden="true">›</span>
        <span className="text-gray-900 font-medium">{t("breadcrumb.current")}</span>
      </nav>

      <header
        className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600
          overflow-hidden px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16
          w-full max-w-[1920px] mx-auto aspect-[24/7]
          min-h-[440px] sm:min-h-[500px] lg:min-h-0 lg:h-[560px]
          flex flex-col justify-center"
      >
        <div
          className="hidden md:flex absolute right-8 lg:right-16 top-1/2 -translate-y-1/2
            w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/10 items-center justify-center pointer-events-none"
        >
          <FaHome className="w-12 h-12 lg:w-16 lg:h-16 text-white/80" aria-hidden />
        </div>

        <div className="relative z-10 w-full max-w-full lg:max-w-[580px] min-w-0">
          <p className="text-blue-100 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            {t("hero.eyebrow")}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-4 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-blue-50 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-lg">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {heroStats.map((stat) => (
              <div key={stat.labelKey} className="min-w-0">
                <p className="text-xl sm:text-2xl font-extrabold text-white">
                  {t(`hero.stats.${stat.valueKey}`)}
                </p>
                <p className="text-xs sm:text-sm text-blue-100">
                  {t(`hero.stats.${stat.labelKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
