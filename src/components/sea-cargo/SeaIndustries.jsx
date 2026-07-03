import {
  LuStore,
  LuFactory,
  LuCar,
  LuWheat,
  LuHardHat,
  LuPackage,
} from "react-icons/lu";
import { SectionHeading } from "./shared";

const INDUSTRIES = [
  {
    id: 1,
    title: "Retail",
    description:
      "Seasonal inventory, store replenishment, and wholesale imports with flexible LCL and FCL scheduling to major retail hubs.",
    Icon: LuStore,
  },
  {
    id: 2,
    title: "Manufacturing",
    description:
      "Raw materials inbound and finished goods export — optimized container utilization for production supply chains worldwide.",
    Icon: LuFactory,
  },
  {
    id: 3,
    title: "Automotive",
    description:
      "Parts, components, and finished vehicles with specialized handling, secure stowage, and just-in-time port delivery.",
    Icon: LuCar,
  },
  {
    id: 4,
    title: "Agriculture",
    description:
      "Bulk commodities, packaged produce, and farm equipment with reefer and standard container options available.",
    Icon: LuWheat,
  },
  {
    id: 5,
    title: "Construction",
    description:
      "Building materials, steel, machinery, and project cargo via flat rack, open top, and standard container solutions.",
    Icon: LuHardHat,
  },
  {
    id: 6,
    title: "E-commerce",
    description:
      "High-volume marketplace imports, fulfillment center replenishment, and consolidated LCL for growing online sellers.",
    Icon: LuPackage,
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
        {INDUSTRIES.map(({ id, title, description, Icon }) => (
          <article
            key={id}
            className="group rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-5 sm:p-6
              shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5
              transition-all duration-200 min-w-0"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4
                text-blue-600 group-hover:bg-blue-100 transition-colors"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
