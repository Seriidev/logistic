
const ROUTES = [
  { id: 1, from: "New York", fromDate: "June 17 2025", to: "Dubai", toDate: "June 19 2025", type: "air", price: "180$" },
  { id: 2, from: "Las Vegas", fromDate: "June 17 2025", to: "Denver", toDate: "June 20 2025", type: "truck", price: "162$" },
  { id: 3, from: "New York", fromDate: "June 17 2025", to: "Dubai", toDate: "June 19 2025", type: "air", price: "134$" },
  { id: 4, from: "Las Vegas", fromDate: "June 17 2025", to: "Denver", toDate: "June 20 2025", type: "truck", price: "321$" },
];

const TypeIcon = ({ type }) => {
  if (type === "air") return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/70">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
  if (type === "truck") return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/70">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/70">
      <path d="M20 21H4a2 2 0 01-2-2V5l2-3h16l2 3v14a2 2 0 01-2 2zM4 8h16M8 8v13M16 8v13" />
    </svg>
  );
};

export default function PromoBanner() {
  return (
    <section className="page-container py-6 sm:py-8 min-w-0">
      <div className="relative rounded-2xl sm:rounded-3xl bg-blue-500 overflow-hidden flex flex-col lg:flex-row lg:min-h-70">

        <div className="flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-10 z-10 w-full lg:max-w-[320px] shrink-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase leading-tight mb-3">
            Get 24% Off Shipping to USA!
          </h2>
          <p className="text-blue-100 text-sm mb-5 sm:mb-6">Celebrate with YuuSell</p>
          <button
            type="button"
            className="banner-cta w-full sm:w-fit bg-white text-gray-900 text-sm font-bold uppercase
            tracking-wider px-6 py-2.5 rounded-full hover:bg-blue-50
            transition-colors duration-150 cursor-pointer border-none"
          >
            More details...
          </button>
        </div>

        <div className="hidden sm:block flex-1 relative min-h-[120px] lg:min-h-0">
          <img
            src="/picto.png"
            alt="Promo"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 max-h-full w-auto object-contain pointer-events-none"
          />
        </div>

        <div className="flex flex-col justify-center gap-2.5 sm:gap-3 px-4 pb-6 sm:px-6 sm:pb-8 lg:py-8 z-10 w-full lg:w-auto lg:min-w-0 lg:flex-1 min-w-0">
          {ROUTES.map((route) => (
            <div
              key={route.id}
              className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm
                border border-white/20 rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 min-w-0"
            >
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">{route.from}</p>
                <p className="text-blue-100 text-xs">{route.fromDate}</p>
              </div>
              <div className="shrink-0">
                <TypeIcon type={route.type} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">{route.to}</p>
                <p className="text-blue-100 text-xs">{route.toDate}</p>
              </div>
              <div className="shrink-0 text-white font-bold text-sm">
                {route.price}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block absolute right-[18rem] top-1/2 -translate-y-1/2 w-60 h-60 xl:w-75 xl:h-75
          rounded-full border-[40px] border-white/10 pointer-events-none" />
      </div>
    </section>
  );
}
