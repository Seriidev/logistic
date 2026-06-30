import { Link } from "react-router-dom";

const HERO_STATS = [
  { value: "120+", label: "Global ports" },
  { value: "15–45", label: "Day transit" },
  { value: "24/7", label: "Operations" },
];

export default function SeaCargoHero() {
  return (
    <div className="page-container py-4 sm:py-6 min-w-0">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 flex-wrap"
      >
        <Link to="/" className="hover:text-blue-500 transition-colors no-underline text-gray-500">
          Main
        </Link>
        <span aria-hidden="true">›</span>
        <span className="text-gray-900 font-medium">Sea Cargo</span>
      </nav>

      <header
        className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900
          overflow-hidden px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16
          w-full max-w-[1920px] mx-auto aspect-[24/7]
          min-h-[440px] sm:min-h-[500px] lg:min-h-0 lg:h-[560px]
          flex flex-col justify-center"
      >
        <div
          className="hidden md:block absolute inset-0 opacity-20 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(56,189,248,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 45%)",
          }}
        />

        <img
          src="/sea-hero.jpg"
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute right-0 lg:right-4 bottom-0
            h-40 sm:h-52 md:h-64 lg:h-72 max-w-[55%] object-contain pointer-events-none opacity-90"
          onError={(e) => { e.target.style.display = "none"; }}
        />

        <div
          className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2
            w-32 h-32 xl:w-44 xl:h-44 rounded-full border-[24px] xl:border-[32px]
            border-white/10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-full lg:max-w-[620px] min-w-0 pr-0 sm:pr-24 md:pr-36">
          <p className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            Ocean Freight Solutions
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-4 leading-tight">
            Global Sea Cargo Solutions
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-lg">
            Reliable and cost-effective international ocean freight services for businesses and individuals worldwide.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-cyan-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
