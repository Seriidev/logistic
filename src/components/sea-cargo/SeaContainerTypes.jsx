import { useTranslation } from "react-i18next";
import { SectionHeading, ImageBlock } from "./shared";

const CONTAINER_ITEMS = [
  { key: "20ft", image: "/container-20ft.jpg" },
  { key: "40ft", image: "/container-40ft.jpg" },
  { key: "highCube", image: "/container-highcube.jpg" },
  { key: "reefer", image: "/container-reefer.jpg" },
  { key: "openTop", image: "/container-opentop.jpg" },
  { key: "flatRack", image: "/container-flatrack.jpg" },
];

export default function SeaContainerTypes() {
  const { t } = useTranslation("seaCargo");

  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow={t("containerTypes.eyebrow")}
          title={t("containerTypes.title")}
          description={t("containerTypes.description")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {CONTAINER_ITEMS.map(({ key, image }) => (
            <article
              key={key}
              className="group flex flex-col rounded-2xl sm:rounded-3xl border border-gray-100 bg-white
                shadow-sm overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200 min-w-0"
            >
              <ImageBlock
                src={image}
                alt={t(`containerTypes.items.${key}.title`)}
                hint={t("containerTypes.photoHint", { path: image })}
                className="h-40 sm:h-44 md:h-48 shrink-0 group-hover:scale-105 transition-transform duration-300"
              />

              <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase mb-2">
                  {t(`containerTypes.items.${key}.title`)}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 flex-1">
                  {t(`containerTypes.items.${key}.description`)}
                </p>
                <p className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                  {t(`containerTypes.items.${key}.capacity`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
