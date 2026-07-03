import {
  LuShoppingCart,
  LuPlane,
  LuPill,
  LuLaptop,
  LuShirt,
  LuFactory,
  LuSalad,
  LuZap,
} from "react-icons/lu";
import { SectionHeading } from "./shared";

const INDUSTRIES = [
  {
    id: 1,
    title: "E-Commerce & Retail",
    description: "Fast replenishment, FBA prep, and cross-border parcel consolidation for online sellers.",
    Icon: LuShoppingCart,
  },
  {
    id: 2,
    title: "Automotive & Aerospace",
    description: "Critical spare parts, AOG shipments, and just-in-time component delivery.",
    Icon: LuPlane,
  },
  {
    id: 3,
    title: "Pharmaceuticals & Healthcare",
    description: "Temperature-controlled lanes, GDP-compliant handling, and priority routing.",
    Icon: LuPill,
  },
  {
    id: 4,
    title: "Electronics & Technology",
    description: "Secure transport for high-value devices, semiconductors, and sensitive equipment.",
    Icon: LuLaptop,
  },
  {
    id: 5,
    title: "Fashion & Luxury Goods",
    description: "Seasonal collections, showroom samples, and time-sensitive retail launches.",
    Icon: LuShirt,
  },
  {
    id: 6,
    title: "Industrial & Manufacturing",
    description: "Heavy machinery parts, production materials, and project cargo coordination.",
    Icon: LuFactory,
  },
  {
    id: 7,
    title: "Food & Perishables",
    description: "Cold-chain air freight for fresh produce, seafood, and specialty foods.",
    Icon: LuSalad,
  },
  {
    id: 8,
    title: "Energy & Mining",
    description: "Urgent equipment, drilling components, and remote-site delivery support.",
    Icon: LuZap,
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
        {INDUSTRIES.map(({ id, title, description, Icon }) => (
          <article
            key={id}
            className="group rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-5 sm:p-6
              shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 min-w-0"
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
