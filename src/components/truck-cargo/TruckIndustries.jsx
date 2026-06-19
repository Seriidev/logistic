import { SectionHeading } from "./shared";

const INDUSTRIES = [
  {
    id: 1,
    title: "Retail",
    description: "Store replenishment, seasonal inventory, and distribution center transfers with flexible scheduling.",
    icon: "🏪",
  },
  {
    id: 2,
    title: "Manufacturing",
    description: "Raw materials inbound and finished goods outbound — just-in-time delivery to production lines.",
    icon: "🏭",
  },
  {
    id: 3,
    title: "Construction",
    description: "Building materials, equipment, and project cargo delivered directly to job sites on schedule.",
    icon: "🏗️",
  },
  {
    id: 4,
    title: "Agriculture",
    description: "Farm produce, feed, and agricultural machinery with refrigerated and flatbed options available.",
    icon: "🌾",
  },
  {
    id: 5,
    title: "E-commerce",
    description: "Fulfillment center transfers, last-mile hub distribution, and returns logistics at scale.",
    icon: "📦",
  },
  {
    id: 6,
    title: "Wholesale Distribution",
    description: "High-volume pallet movements between warehouses, distributors, and retail partners nationwide.",
    icon: "🚛",
  },
];

export default function TruckIndustries() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Road Freight Solutions Across Every Sector"
          description="Our team understands the unique handling, compliance, and timing requirements of each industry — delivering tailored truck cargo services that keep your operations moving."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {INDUSTRIES.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-5 sm:p-6
                shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5
                transition-all duration-200 min-w-0"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-4
                group-hover:bg-blue-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
