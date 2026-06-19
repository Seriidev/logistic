import { SectionHeading } from "./shared";

const INDUSTRIES = [
  {
    id: 1,
    title: "E-Commerce & Retail",
    description: "Fast replenishment, FBA prep, and cross-border parcel consolidation for online sellers.",
    icon: "🛒",
  },
  {
    id: 2,
    title: "Automotive & Aerospace",
    description: "Critical spare parts, AOG shipments, and just-in-time component delivery.",
    icon: "✈️",
  },
  {
    id: 3,
    title: "Pharmaceuticals & Healthcare",
    description: "Temperature-controlled lanes, GDP-compliant handling, and priority routing.",
    icon: "💊",
  },
  {
    id: 4,
    title: "Electronics & Technology",
    description: "Secure transport for high-value devices, semiconductors, and sensitive equipment.",
    icon: "💻",
  },
  {
    id: 5,
    title: "Fashion & Luxury Goods",
    description: "Seasonal collections, showroom samples, and time-sensitive retail launches.",
    icon: "👗",
  },
  {
    id: 6,
    title: "Industrial & Manufacturing",
    description: "Heavy machinery parts, production materials, and project cargo coordination.",
    icon: "🏭",
  },
  {
    id: 7,
    title: "Food & Perishables",
    description: "Cold-chain air freight for fresh produce, seafood, and specialty foods.",
    icon: "🥗",
  },
  {
    id: 8,
    title: "Energy & Mining",
    description: "Urgent equipment, drilling components, and remote-site delivery support.",
    icon: "⚡",
  },
];

export default function AirIndustries() {
  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Specialized Air Freight Across Every Sector"
        description="Our team understands the compliance, handling, and timing requirements unique to each industry — delivering tailored solutions that keep your supply chain moving."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {INDUSTRIES.map((item) => (
          <article
            key={item.id}
            className="group rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-5 sm:p-6
              shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 min-w-0"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-4">
              {item.icon}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
