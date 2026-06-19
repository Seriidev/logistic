import { SectionHeading } from "./shared";

const REGIONS = [
  {
    id: 1,
    name: "North America",
    hubs: "New York, Los Angeles, Chicago, Miami",
    transit: "1–3 days intra-region",
    coverage: "USA, Canada, Mexico",
  },
  {
    id: 2,
    name: "Europe",
    hubs: "Frankfurt, London, Amsterdam, Paris",
    transit: "2–4 days from USA",
    coverage: "EU, UK, Switzerland, Nordics",
  },
  {
    id: 3,
    name: "Asia-Pacific",
    hubs: "Hong Kong, Shanghai, Singapore, Tokyo",
    transit: "3–5 days from USA",
    coverage: "China, Japan, Korea, ASEAN",
  },
  {
    id: 4,
    name: "Middle East & Africa",
    hubs: "Dubai, Doha, Johannesburg",
    transit: "4–6 days from USA",
    coverage: "UAE, Saudi Arabia, South Africa",
  },
  {
    id: 5,
    name: "Latin America",
    hubs: "São Paulo, Bogotá, Santiago",
    transit: "3–5 days from USA",
    coverage: "Brazil, Colombia, Chile, Peru",
  },
  {
    id: 6,
    name: "Oceania",
    hubs: "Sydney, Auckland",
    transit: "5–7 days from USA",
    coverage: "Australia, New Zealand",
  },
];

const STATS = [
  { value: "180+", label: "Countries served" },
  { value: "50+", label: "Airline partners" },
  { value: "24/7", label: "Operations desk" },
  { value: "99.2%", label: "On-time performance" },
];

export default function AirGlobalCoverage() {
  return (
    <section className="bg-blue-500 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Global Coverage"
          title="Worldwide Air Cargo Network"
          description="Strategic hub partnerships and multi-carrier routing give your freight the fastest path to any destination — with full visibility from origin to arrival."
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 border border-white/20 px-4 py-5 sm:px-6 sm:py-6 text-center min-w-0"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {REGIONS.map((region) => (
            <article
              key={region.id}
              className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 min-w-0"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">{region.name}</h3>
              <dl className="space-y-2.5 text-xs sm:text-sm">
                <div>
                  <dt className="font-semibold text-blue-600">Key Hubs</dt>
                  <dd className="text-gray-600 mt-0.5">{region.hubs}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-blue-600">Typical Transit</dt>
                  <dd className="text-gray-600 mt-0.5">{region.transit}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-blue-600">Coverage</dt>
                  <dd className="text-gray-600 mt-0.5">{region.coverage}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden bg-white/10 border border-white/20 min-h-[200px] sm:min-h-[280px] flex items-center justify-center">
          <div className="text-center px-4 py-8 sm:py-12">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 opacity-60">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            <p className="text-sm sm:text-base text-blue-100 font-medium">
              Interactive global route map — ready for future media integration
            </p>
            <p className="text-xs sm:text-sm text-blue-200 mt-2">
              Visualize lanes, hubs, and live capacity across your network
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
