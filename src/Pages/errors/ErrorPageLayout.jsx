import { Link } from "react-router-dom";

export default function ErrorPageLayout({ illustration, title, description }) {
  return (
    <main className="page-container min-w-0 flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 lg:py-32 min-h-[calc(100dvh-8rem)]">
      {illustration}

      <h1 className="mt-8 sm:mt-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </h1>

      <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>

      <Link
        to="/"
        className="mt-8 sm:mt-10 inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-3
          bg-blue-600 text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full
          no-underline hover:bg-blue-700 transition-colors duration-150"
      >
        Home Page
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
