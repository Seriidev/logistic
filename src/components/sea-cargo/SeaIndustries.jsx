import { SectionHeading } from "./shared";

const INDUSTRIES = [
  {
    id: 1,
    title: "Retail",
    description:
      "Seasonal inventory, store replenishment, and wholesale imports with flexible LCL and FCL scheduling to major retail hubs.",
    icon: "🏪",
  },
  {
    id: 2,
    title: "Manufacturing",
    description:
      "Raw materials inbound and finished goods export — optimized container utilization for production supply chains worldwide.",
    icon: "🏭",
  },
  {
    id: 3,
    title: "Automotive",
    description:
      "Parts, components, and finished vehicles with specialized handling, secure stowage, and just-in-time port delivery.",
    icon: "🚗",
  },
  {
    id: 4,
    title: "Agriculture",
    description:
      "Bulk commodities, packaged produce, and farm equipment with reefer and standard container options available.",
    icon: "🌾",
  },
  {
    id: 5,
    title: "Construction",
    description:
      "Building materials, steel, machinery, and project cargo via flat rack, open top, and standard container solutions.",
    icon: "🏗️",
  },
  {
    id: 6,
    title: "E-commerce",
    description:
      "High-volume marketplace imports, fulfillment center replenishment, and consolidated LCL for growing online sellers.",
    icon: "📦",
  },
];

export default function SeaIndustries() {
  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Ocean Freight Solutions Across Every Sector"
        description="Our team understands the unique compliance, timing, and handling requirements of each industry — delivering tailored sea cargo services that keep global supply chains moving."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {INDUSTRIES.map((item) => (
          <article
            key={item.id}
            className="group rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-5 sm:p-6
              shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5
              transition-all duration-200 min-w-0"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-4
                group-hover:bg-blue-100 transition-colors"
            >
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
