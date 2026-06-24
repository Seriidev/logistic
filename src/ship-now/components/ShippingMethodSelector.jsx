import { SHIPPING_METHODS } from "../data/shippingOptions";

export default function ShippingMethodSelector({ destination, selected, onSelect }) {
  const methods = SHIPPING_METHODS[destination] || [];
  const destinationLabel = destination === "international" ? "International" : "Domestic";

  return (
    <div className="ship-now-step-enter">
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Step 2 of 4
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
          How do you want to ship?
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Select a {destinationLabel.toLowerCase()} shipping method for your cargo.
        </p>
      </div>

      <div
        className={`grid gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto ${
          methods.length === 3
            ? "grid-cols-1 md:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {methods.map((method) => {
          const isSelected = selected === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onSelect(method.id)}
              className={`ship-now-card ship-now-card--selectable p-5 sm:p-6 lg:p-7 ${
                isSelected ? "ship-now-card--selected" : ""
              }`}
              aria-pressed={isSelected}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl mb-3 block" aria-hidden="true">
                {method.icon}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                {method.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed m-0">
                {method.description}
              </p>
              {isSelected && (
                <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-blue-500">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
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
