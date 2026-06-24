import { DESTINATION_TYPES } from "../data/shippingOptions";

export default function ShippingTypeSelector({ selected, onSelect }) {
  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Step 1 of 4
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          Where are you shipping?
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Choose your shipment destination type to see the right shipping methods.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto">
        {DESTINATION_TYPES.map((type) => {
          const isSelected = selected === type.id;

          return (
            <button
              key={type.id}
              type="button"
              onClick={() => onSelect(type.id)}
              className={`ship-now-card ship-now-card--selectable p-5 sm:p-6 lg:p-8 ${
                isSelected ? "ship-now-card--selected" : ""
              }`}
              aria-pressed={isSelected}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 block" aria-hidden="true">
                {type.icon}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2">
                {type.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed m-0">
                {type.description}
              </p>
              {isSelected && (
                <span className="inline-flex items-center gap-1.5 mt-4 text-xs sm:text-sm font-semibold text-blue-500">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Selected
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
