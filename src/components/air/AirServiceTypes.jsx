import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const SERVICE_TYPES = {
  economy: {
    id: "economy",
    label: "Economy Air Cargo",
    shortLabel: "Economy",
    description:
      "Cost-effective air freight for shipments where budget matters more than speed — consolidated loads on scheduled flights with reliable, predictable transit.",
    delivery:
      "Typical transit: 5–8 business days. Consolidated cargo on scheduled departures with optimized routing through major hubs.",
    pricing: "Lowest air freight rates · Shared capacity · Ideal for non-urgent and high-volume cargo",
    image: "/air-economy.jpg",
    advantages: [
      "Most affordable air freight option",
      "Reliable scheduled flight departures",
      "Ideal for non-time-critical shipments",
      "Great for bulk and high-volume cargo",
      "Full tracking from origin to destination",
      "Lower cost per kilogram on large loads",
    ],
    examples: [
      "Bulk inventory",
      "E-commerce restocking",
      "Non-urgent freight",
      "Seasonal stock",
    ],
  },
  express: {
    id: "express",
    label: "Express Air Cargo",
    shortLabel: "Express",
    description:
      "Priority air freight for time-critical shipments — next-flight-out options, guaranteed transit windows, and expedited handling from pickup to delivery.",
    delivery:
      "Typical transit: 2–4 business days. Priority booking, next-flight-out availability, and expedited customs clearance.",
    pricing: "Premium rates · Guaranteed capacity · Ideal for urgent and high-value cargo",
    image: "/air-express.jpg",
    advantages: [
      "Fastest air freight delivery available",
      "Priority space on the next flight out",
      "Guaranteed transit time windows",
      "Expedited customs and clearance handling",
      "Ideal for urgent and high-value goods",
      "Dedicated priority support and monitoring",
    ],
    examples: [
      "AOG / spare parts",
      "Medical supplies",
      "Perishables",
      "High-value goods",
    ],
  },
};

const TABS = ["economy", "express"];

export default function AirServiceTypes() {
  const [activeTab, setActiveTab] = useState("economy");
  const active = SERVICE_TYPES[activeTab];

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20" aria-labelledby="air-service-types-heading">
      <SectionHeading
        eyebrow="Service Types"
        title="Economy & Express Air Cargo"
        description="Choose the air freight service that fits your timeline and budget — switch between options to compare delivery speed and pricing instantly."
      />

      <div
        role="tablist"
        aria-label="Air cargo service type"
        className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-xl mx-auto"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`air-panel-${tab}`}
            id={`air-tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-h-[44px] px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase
              tracking-wider border-none cursor-pointer font-[inherit] transition-all duration-200
              ${activeTab === tab
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {SERVICE_TYPES[tab].label}
          </button>
        ))}
      </div>

      <div
        id={`air-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`air-tab-${activeTab}`}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start min-w-0
          animate-[fadeIn_0.3s_ease-out]"
      >
        <ImageBlock
          src={active.image}
          alt={`${active.shortLabel} air cargo`}
          hint={`Add photo: public${active.image}`}
          className="w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
        />

        <div className="min-w-0">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            {active.shortLabel}
          </span>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            {active.description}
          </p>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 sm:p-5 mb-5 sm:mb-6 space-y-3">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Delivery</p>
              <p className="text-sm text-gray-600">{active.delivery}</p>
            </div>
            <div className="h-px bg-gray-200" />
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Pricing</p>
              <p className="text-sm text-gray-600">{active.pricing}</p>
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-900 mb-3">Key Advantages</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 sm:mb-6">
            {active.advantages.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 sm:p-5 mb-6 sm:mb-8">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">Examples</p>
            <div className="flex flex-wrap gap-2">
              {active.examples.map((example) => (
                <span
                  key={example}
                  className="inline-flex px-3 py-1.5 rounded-full bg-white text-gray-600 text-xs sm:text-sm
                    border border-gray-200"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>

          <Link
            to={`/air-cargo-booking?service=${active.id}`}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5
              rounded-full bg-blue-500 text-white text-sm font-bold uppercase tracking-wider
              no-underline hover:bg-blue-600 transition-colors"
          >
            Get {active.shortLabel} Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
