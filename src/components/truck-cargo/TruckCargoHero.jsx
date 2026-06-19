import { Link } from "react-router-dom";

const HERO_STATS = [
  { value: "50+", label: "Countries" },
  { value: "1–5", label: "Day delivery" },
  { value: "24/7", label: "Support" },
];

export default function TruckCargoHero() {
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
        <span className="text-gray-900 font-medium">Truck Cargo</span>
      </nav>

      <header
        className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900
          overflow-hidden px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16
          min-h-[min(85vh,720px)] flex flex-col justify-center"
      >
        <div className="hidden md:block absolute top-6 right-[35%] lg:right-[280px] opacity-80 pointer-events-none">
          <img
            src="/box-decor.png"
            alt=""
            className="w-12 sm:w-16"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
        <div className="hidden md:block absolute bottom-6 left-[35%] lg:left-[320px] opacity-60 pointer-events-none">
          <img
            src="/box-decor2.png"
            alt=""
            className="w-10"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

        <img
          src="/truck-hero.png"
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute right-4 lg:right-10 bottom-4 sm:bottom-6
            h-28 sm:h-36 md:h-44 lg:h-52 max-w-[50%] object-contain pointer-events-none opacity-95"
          onError={(e) => { e.target.style.display = "none"; }}
        />

        <div
          className="hidden md:block absolute right-16 lg:right-32 top-1/2 -translate-y-1/2
            w-28 h-28 lg:w-48 lg:h-48 rounded-full border-[20px] lg:border-[36px]
            border-white/10 pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-full lg:max-w-[580px] min-w-0 pr-0 sm:pr-28 md:pr-40">
          <p className="text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            Road Freight Solutions
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-4 leading-tight">
            Truck Cargo Transportation
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-lg">
            Reliable domestic and international road freight solutions for businesses and individuals.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/calculate"
              className="banner-cta inline-flex items-center justify-center w-full sm:w-auto
                bg-blue-500 text-white text-sm font-bold uppercase tracking-wider
                px-6 py-2.5 rounded-full no-underline
                hover:bg-blue-400 transition-colors duration-150"
            >
              Get Quote
            </Link>
            <Link
              to="/track"
              className="banner-cta inline-flex items-center justify-center w-full sm:w-auto
                bg-white/10 text-white text-sm font-bold uppercase tracking-wider
                px-6 py-2.5 rounded-full no-underline border border-white/30
                hover:bg-white/20 transition-colors duration-150"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
