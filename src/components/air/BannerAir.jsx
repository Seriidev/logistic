import { useState } from "react";
import { Link } from "react-router-dom";

const CONTINENTS = [
  "All Continents",
  "Europe",
  "Asia",
  "North America",
  "South America",
  "Africa",
  "Australia",
];

const COUNTRIES = [
  "USA", "Germany", "France", "China", "Japan", "Brazil",
  "Canada", "Australia", "India", "UAE", "UK", "Italy",
  "Spain", "Mexico", "South Korea", "Russia", "Turkey",
];

const HERO_STATS = [
  { value: "180+", label: "Countries" },
  { value: "3–7", label: "Day delivery" },
  { value: "24/7", label: "Support" },
];

export default function AirHero() {
  const [continent, setContinent] = useState("All Continents");
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filtered = COUNTRIES.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container py-4 sm:py-6 min-w-0">
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 flex-wrap">
        <Link to="/" className="hover:text-blue-500 transition-colors no-underline text-gray-500">
          Main
        </Link>
        <span aria-hidden="true">›</span>
        <span className="text-gray-900 font-medium">Air Cargo</span>
      </div>

      <div
        className="relative rounded-2xl sm:rounded-3xl bg-blue-500 overflow-hidden
          px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16
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
          src="/steps icon/air icon.png"
          alt=""
          className="hidden sm:block absolute right-4 lg:right-10 bottom-4 sm:bottom-6
            h-24 sm:h-32 md:h-40 lg:h-48 max-w-[45%] object-contain pointer-events-none opacity-90"
          onError={(e) => { e.target.style.display = "none"; }}
        />

        <div
          className="hidden md:block absolute right-16 lg:right-32 top-1/2 -translate-y-1/2
            w-28 h-28 lg:w-48 lg:h-48 rounded-full border-[20px] lg:border-[36px]
            border-white/10 pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-full lg:max-w-[560px] min-w-0 pr-0 sm:pr-28 md:pr-36">
          <p className="text-blue-200 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            Premium Air Freight
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            Fast, Secure Air Cargo to Every Corner of the World
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
            Express and standard air freight solutions with real-time tracking, customs support,
            and a global carrier network — built for businesses that cannot afford delays.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/ship-now"
            className="banner-cta inline-flex items-center justify-center w-full sm:w-auto
              bg-white text-gray-900 text-sm font-bold uppercase tracking-wider
              px-6 py-2.5 rounded-full no-underline
              hover:bg-blue-50 transition-colors duration-150 mb-6 sm:mb-8"
          >
            Ship Now
          </Link>

          <p className="text-blue-100 text-xs mb-2 font-medium">Continent of delivery</p>

          {/* <div className="flex flex-col sm:flex-row gap-3 min-w-0">
            <div className="relative w-full sm:w-auto">
              <select
                value={continent}
                onChange={(e) => setContinent(e.target.value)}
                className="w-full sm:min-w-[160px] h-11 pl-4 pr-8 rounded-full bg-white text-gray-900
                  text-sm font-medium border-none outline-none cursor-pointer
                  appearance-none font-[inherit]"
              >
                {CONTINENTS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            {/* <div className="relative flex-1 min-w-0 w-full">
              <input
                type="search"
                placeholder="Search country"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setShowResults(true); }}
                onBlur={() => setTimeout(() => setShowResults(false), 150)}
                onFocus={() => search && setShowResults(true)}
                className="h-11 w-full pl-4 pr-10 rounded-full bg-white text-gray-900
                  text-sm border-none outline-none font-[inherit] min-w-0"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>

              {showResults && search && filtered.length > 0 && (
                <div
                  className="absolute top-[calc(100%+6px)] left-0 w-full bg-white
                    rounded-2xl shadow-lg overflow-hidden z-50 border border-gray-100
                    max-h-48 overflow-y-auto"
                >
                  {filtered.map((country) => (
                    <button
                      key={country}
                      type="button"
                      onMouseDown={() => { setSearch(country); setShowResults(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50
                        hover:text-blue-500 cursor-pointer transition-colors duration-100
                        border-none bg-transparent font-[inherit]"
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
