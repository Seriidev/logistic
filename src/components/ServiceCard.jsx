import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServiceCard({ service, className = "" }) {
  const { t } = useTranslation();
  const title = t(`services.items.${service.key}.title`);
  const description = t(`services.items.${service.key}.description`);

  return (
    <article
      className={`flex flex-col h-full min-w-0 rounded-lg md:rounded-xl lg:rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden ${className}`}
    >
      <div className="relative w-full aspect-[3/2] md:aspect-[5/3] overflow-hidden shrink-0">
        <img
          src={service.image}
          alt={title}
          className="w-full h-full max-w-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-2 md:p-4 lg:p-5 min-w-0">
        <h3 className="text-[11px] md:text-base font-bold text-gray-900 uppercase leading-tight mb-1 md:mb-2 shrink-0 line-clamp-2 md:line-clamp-none">
          {title}
        </h3>

        <p className="text-[10px] md:text-sm text-gray-500 leading-snug md:leading-relaxed mb-2 md:mb-4 min-w-0 break-words flex-1 line-clamp-2 md:line-clamp-none">
          {description}
        </p>

        <Link
          to={service.path}
          className="inline-flex items-center justify-center w-full shrink-0 min-h-[32px] md:min-h-[44px] mt-auto
            bg-gray-900 text-white text-[9px] md:text-xs font-semibold uppercase tracking-wide md:tracking-wider
            px-2 py-1.5 md:px-5 md:py-2.5 rounded md:rounded-lg
            hover:bg-blue-600 transition-colors duration-150 no-underline"
        >
          {t("serviceCard.moreDetails")}
        </Link>
      </div>
    </article>
  );
}
