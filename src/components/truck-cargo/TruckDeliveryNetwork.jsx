import { SectionHeading } from "./shared";

const NETWORK_ITEMS = [
  {
    id: 1,
    title: "Domestic Transportation",
    description: "Nationwide coverage across all major highways and regional routes with daily departures from strategic hubs.",
    coverage: "USA, Canada — coast to coast",
    transit: "1–5 business days",
  },
  {
    id: 2,
    title: "International Transportation",
    description: "Cross-continental road freight connecting North America, Europe, and Asia through partner carrier networks.",
    coverage: "50+ countries via road corridors",
    transit: "5–14 business days",
  },
  {
    id: 3,
    title: "Cross-Border Shipping",
    description: "Seamless customs coordination for USA–Canada, USA–Mexico, and EU border crossings with pre-clearance support.",
    coverage: "Major border checkpoints",
    transit: "2–7 business days",
  },
  {
    id: 4,
    title: "Regional Distribution",
    description: "Last-mile and hub-to-hub distribution within metropolitan areas and regional zones for fast local delivery.",
    coverage: "200+ regional hubs",
    transit: "Same day – 3 days",
  },
];

const STATS = [
  { value: "200+", label: "Distribution hubs" },
  { value: "50+", label: "Countries served" },
  { value: "15K+", label: "Routes active" },
  { value: "98.5%", label: "On-time delivery" },
];

export default function TruckDeliveryNetwork() {
  return (
    <section className="bg-blue-500 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Delivery Network"
          title="Comprehensive Road Freight Coverage"
          description="From local distribution to international corridors — our integrated truck network connects your cargo to every destination with reliability and speed."
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {NETWORK_ITEMS.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 min-w-0
                hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
              <dl className="space-y-2 text-xs sm:text-sm">
                <div>
                  <dt className="font-semibold text-blue-600">Coverage</dt>
                  <dd className="text-gray-600 mt-0.5">{item.coverage}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-blue-600">Typical Transit</dt>
                  <dd className="text-gray-600 mt-0.5">{item.transit}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white/10 border border-white/20 min-h-[220px] sm:min-h-[320px] flex items-center justify-center">
          <div className="text-center px-4 py-8 sm:py-12">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 opacity-60">
              <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 2v16M16 6v16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-sm sm:text-base text-blue-100 font-medium">
              Interactive logistics route map — ready for future media integration
            </p>
            <p className="text-xs sm:text-sm text-blue-200 mt-2 max-w-md mx-auto">
              Visualize domestic lanes, cross-border corridors, and regional distribution hubs across our network
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
