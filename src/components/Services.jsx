import { useTranslation } from "react-i18next";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="page-container py-8 sm:py-12 min-w-0">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 uppercase tracking-wide mb-2 sm:mb-4">
          {t("services.title")}
        </h2>
        <p className="text-sm text-gray-500">
          {t("services.subtitle")}
        </p>
      </div>

      <div className="border-t border-dashed border-blue-300 mb-6 sm:mb-8" />

      <ServicesGrid />
    </section>
  );
}
