import { SectionHeading } from "./shared";

const REGIONS = [
  {
    id: 1,
    title: "Asia",
    description:
      "Direct services to Shanghai, Singapore, Hong Kong, Busan, and Mumbai — the world's busiest manufacturing and transshipment hubs.",
    ports: "120+ port pairs · Weekly sailings",
    transit: "15–25 days to Europe / Americas",
  },
  {
    id: 2,
    title: "Europe",
    description:
      "Full coverage of Rotterdam, Hamburg, Antwerp, Felixstowe, and Mediterranean gateways with inland rail and truck connections.",
    ports: "80+ European ports · Daily departures",
    transit: "20–35 days from Asia / Americas",
  },
  {
    id: 3,
    title: "Middle East",
    description:
      "Strategic access to Jebel Ali, Jeddah, and Dammam — connecting Asia-Europe trade lanes and regional distribution centers.",
    ports: "35+ Gulf & Red Sea ports",
    transit: "12–22 days from Asia / Europe",
  },
  {
    id: 4,
    title: "North America",
    description:
      "Coast-to-coast coverage via Los Angeles, Long Beach, New York, Savannah, and Vancouver with customs pre-clearance support.",
    ports: "60+ US & Canada ports",
    transit: "18–30 days from Asia · 10–18 from Europe",
  },
  {
    id: 5,
    title: "South America",
    description:
      "Regular sailings to Santos, Buenos Aires, Callao, and Cartagena — linking Atlantic and Pacific trade corridors.",
    ports: "40+ Latin American ports",
    transit: "25–40 days from Asia / Europe",
  },
  {
    id: 6,
    title: "Africa",
    description:
      "Growing network to Durban, Mombasa, Lagos, and Tanger Med — supporting emerging market imports and resource exports.",
    ports: "30+ African ports · Expanding coverage",
    transit: "20–35 days from Asia / Europe",
  },
];

const STATS = [
  { value: "120+", label: "Global ports" },
  { value: "6", label: "Continents served" },
  { value: "500+", label: "Trade lanes" },
  { value: "99.2%", label: "On-time sailing" },
];

export default function SeaGlobalNetwork() {
  return (
    <section className="bg-blue-500 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Global Shipping Network"
          title="Worldwide Ocean Freight Coverage"
          description="From major transshipment hubs to emerging market gateways — our integrated sea cargo network connects your cargo to every continent with reliability and competitive transit times."
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {REGIONS.map((region) => (
            <article
              key={region.id}
              className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 min-w-0
                hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">{region.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">{region.description}</p>
              <dl className="space-y-2 text-xs sm:text-sm">
                <div>
                  <dt className="font-semibold text-blue-600">Network</dt>
                  <dd className="text-gray-600 mt-0.5">{region.ports}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-blue-600">Typical Transit</dt>
                  <dd className="text-gray-600 mt-0.5">{region.transit}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white/10 border border-white/20 min-h-[220px] sm:min-h-[360px] flex items-center justify-center">
          <div className="text-center px-4 py-8 sm:py-12 w-full max-w-2xl">
            <svg
              viewBox="0 0 400 200"
              fill="none"
              className="w-full max-w-md mx-auto mb-4 sm:mb-6 opacity-70"
              aria-hidden="true"
            >
              <ellipse cx="200" cy="100" rx="190" ry="90" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M60 80 Q120 60 180 75 T300 70 Q340 85 350 100" stroke="white" strokeWidth="1" opacity="0.5" />
              <path d="M50 120 Q150 140 250 115 T370 125" stroke="white" strokeWidth="1" opacity="0.5" />
              <circle cx="120" cy="75" r="4" fill="white" opacity="0.8" />
              <circle cx="200" cy="65" r="4" fill="white" opacity="0.8" />
              <circle cx="280" cy="80" r="4" fill="white" opacity="0.8" />
              <circle cx="160" cy="130" r="4" fill="white" opacity="0.8" />
              <circle cx="240" cy="120" r="4" fill="white" opacity="0.8" />
              <circle cx="320" cy="110" r="4" fill="white" opacity="0.8" />
            </svg>
            <p className="text-sm sm:text-base text-blue-100 font-medium">
              Interactive world shipping map — ready for future media integration
            </p>
            <p className="text-xs sm:text-sm text-blue-200 mt-2 max-w-md mx-auto">
              Visualize trade lanes, port connections, and sailing schedules across our global ocean freight network
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
