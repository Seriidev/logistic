import { LTL_PRICING, FTL_PRICING } from "../data/shippingOptions";

const OPTIONS = [
  { id: "ltl", label: "LTL", sublabel: "Less Than Truck Load", deliveryTime: LTL_PRICING.deliveryTime },
  { id: "ftl", label: "FTL", sublabel: "Full Truck Load", deliveryTime: FTL_PRICING.deliveryTime },
];

export default function ServiceTabs({ service, onSelect }) {
  return (
    <div
      role="tablist"
      aria-label="Truck cargo service type"
      className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-xl mx-auto"
    >
      {OPTIONS.map((opt) => {
        const isActive = service === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(opt.id)}
            className={`flex-1 min-h-[44px] px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase
              tracking-wider border-none cursor-pointer font-[inherit] transition-all duration-200
              ${isActive
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            <span className="block">{opt.label}</span>
            <span className="block text-[10px] sm:text-xs font-normal normal-case tracking-normal opacity-80 mt-0.5">
              {opt.sublabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}
