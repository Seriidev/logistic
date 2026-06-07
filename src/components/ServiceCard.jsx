import { Link } from "react-router-dom";

export default function ServiceCard({ service, className = "" }) {
  return (
    <article
      className={`flex flex-col shrink-0 min-w-0 rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden ${className}`}
    >
      <div className="relative h-28 sm:h-32 md:h-36 lg:h-[180px] overflow-hidden shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-4 lg:p-5 min-w-0">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase mb-1.5 sm:mb-2 shrink-0">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-3.5 lg:mb-4 min-w-0 break-words line-clamp-2 md:line-clamp-3 lg:line-clamp-none">
          {service.description}
        </p>

        <Link
          to={service.path}
          className="inline-flex items-center justify-center self-start w-full sm:w-auto shrink-0 min-h-[44px]
            bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider
            px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg
            hover:bg-blue-600 transition-colors duration-150 no-underline"
        >
          More Details
        </Link>
      </div>
    </article>
  );
}
