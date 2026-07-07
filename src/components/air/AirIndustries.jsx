import {
  LuShoppingCart,
  LuPlane,
  LuPill,
  LuLaptop,
  LuShirt,
  LuFactory,
  LuSalad,
  LuZap,
} from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./shared";

const INDUSTRY_ITEMS = [
  { id: 1, Icon: LuShoppingCart },
  { id: 2, Icon: LuPlane },
  { id: 3, Icon: LuPill },
  { id: 4, Icon: LuLaptop },
  { id: 5, Icon: LuShirt },
  { id: 6, Icon: LuFactory },
  { id: 7, Icon: LuSalad },
  { id: 8, Icon: LuZap },
];

export default function AirIndustries() {
  const { t } = useTranslation("airCargo");

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow={t("industries.eyebrow")}
        title={t("industries.title")}
        description={t("industries.description")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {INDUSTRY_ITEMS.map(({ id, Icon }) => (
          <article
            key={id}
            className="group rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-5 sm:p-6
              shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 min-w-0"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4
                text-blue-600 group-hover:bg-blue-100 transition-colors"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{t(`industries.items.${id}.title`)}</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{t(`industries.items.${id}.description`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
