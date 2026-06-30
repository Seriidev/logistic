import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const TRANSPORT_TYPES = {
  ftl: {
    id: "ftl",
    label: "Full Truck Load (FTL)",
    shortLabel: "FTL",
    description:
      "Dedicated truck capacity for your shipment alone — ideal for large volumes, palletized goods, and time-sensitive deliveries that require direct routing without intermediate handling.",
    delivery:
      "Typical transit: 1–3 days domestic, 3–7 days cross-border. Direct point-to-point routing with no consolidation stops.",
    capacity: "Up to 24 tons · 13.6m trailer · 33 EU pallets · Full vehicle dedicated to your cargo",
    image: "/truck-ftl.jpg",
    advantages: [
      "Exclusive use of entire truck — no shared space",
      "Fastest ground delivery with direct routing",
      "Reduced handling risk and fewer touchpoints",
      "Flexible scheduling and dedicated driver assignment",
      "Ideal for high-value, fragile, or temperature-controlled goods",
      "Custom loading configurations for oversized cargo",
    ],
  },
  ltl: {
    id: "ltl",
    label: "Less Than Truck Load (LTL)",
    shortLabel: "LTL",
    description:
      "Share truck space with other shipments and pay only for the capacity you use — a cost-effective solution for smaller loads, regular shipments, and businesses optimizing freight spend.",
    delivery:
      "Typical transit: 2–5 days domestic, 5–10 days cross-border. Consolidation at regional hubs with optimized multi-stop routing.",
    capacity: "From 100 kg to 5 tons · Partial trailer space · Pallet or loose cargo accepted",
    image: "/truck-ltl.jpg",
    advantages: [
      "Significant cost savings vs. booking a full truck",
      "Flexible shipment sizes — from single pallets to partial loads",
      "Regular scheduled departures on major lanes",
      "Professional consolidation and deconsolidation at hubs",
      "Real-time tracking through every hub transfer",
      "Scalable for growing businesses with variable volumes",
    ],
  },
};

const TABS = ["ftl", "ltl"];

export default function TruckTransportTypes() {
  const [activeTab, setActiveTab] = useState("ftl");
  const active = TRANSPORT_TYPES[activeTab];

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20" aria-labelledby="transport-types-heading">
      <SectionHeading
        eyebrow="Transport Types"
        title="Full Truck Load & Less Than Truck Load"
        description="Choose the road freight model that fits your volume, budget, and delivery timeline — switch between options to compare services instantly."
      />

      <div
        role="tablist"
        aria-label="Transport type"
        className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-xl mx-auto"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab}`}
            id={`tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-h-[44px] px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase
              tracking-wider border-none cursor-pointer font-[inherit] transition-all duration-200
              ${activeTab === tab
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {TRANSPORT_TYPES[tab].label}
          </button>
        ))}
      </div>

      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start min-w-0
          animate-[fadeIn_0.3s_ease-out]"
      >
        <ImageBlock
          src={active.image}
          alt={`${active.shortLabel} truck cargo`}
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
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Capacity</p>
              <p className="text-sm text-gray-600">{active.capacity}</p>
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-900 mb-3">Key Advantages</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
            {active.advantages.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <Link
            to={`/truck-cargo-booking?service=${activeTab}`}
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
