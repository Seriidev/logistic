import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./shared";

const OTHER_SERVICES = [
  { id: 1, image: "/minibanner3.jpg", path: "/sea-cargo" },
  { id: 2, image: "/minibanner2.jpg", path: "/truck-cargo" },
  { id: 3, image: "/minibanner4.jpg", path: "/express-delivery" },
  { id: 4, image: "/truck-ftl.jpg", path: "/full-truck-load" },
  { id: 5, image: "/truck-ltl.jpg", path: "/partial-load" },
  { id: 6, image: "/minibanner6.jpg", path: "/warehouse-services" },
];

export default function AirOtherServices() {
  const { t } = useTranslation("airCargo");

  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow={t("otherServices.eyebrow")}
          title={t("otherServices.title")}
          description={t("otherServices.description")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {OTHER_SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-2xl sm:rounded-3xl border border-gray-100 bg-white
                shadow-sm overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200 min-w-0"
            >
              <div className="relative h-36 sm:h-40 md:h-44 lg:h-48 overflow-hidden shrink-0 bg-gray-100">
                <img
                  src={service.image}
                  alt={t(`otherServices.items.${service.id}.title`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase mb-2">
                  {t(`otherServices.items.${service.id}.title`)}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {t(`otherServices.items.${service.id}.description`)}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center justify-center self-start w-full sm:w-auto min-h-[44px]
                    bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider
                    px-5 py-2.5 rounded-lg no-underline
                    hover:bg-blue-600 transition-colors duration-150"
                >
                  {t("otherServices.learnMore")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
