import { Link } from "react-router-dom";

const ITEMS = [
  {
    id: 1,
    title: "Dimensional Weight",
    icon: "/icons/dimensional-weight.svg",
    path: "/dimensional-weight",
  },
  {
    id: 2,
    title: "Customs Declaration",
    icon: "/icons/customs-declaration.svg",
    path: "/customs-declaration",
  },
  {
    id: 3,
    title: "Prohibited Items",
    icon: "/icons/prohibited-items.svg",
    path: "/prohibited-items",
  },
  {
    id: 4,
    title: "Deliver to US Through FedEx",
    icon: "/icons/deliver-fedex.svg",
    path: "/deliver-fedex",
  },
  {
    id: 5,
    title: "Compliance",
    icon: "/icons/compliance.svg",
    path: "/compliance",
  },
  {
    id: 6,
    title: "Restricted Air Freight Items",
    icon: "/icons/restricted-air.svg",
    path: "/restricted-air",
  },
];

export default function InternationalShipping() {
  return (
    <section className="page-container min-w-0 py-12">
      <div className="bg-blue-50 rounded-2xl sm:rounded-3xl px-4 py-6 sm:px-10 sm:py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-blue-500 mb-2">
            International shipping from USA
          </h2>
          <p className="text-sm text-gray-500">
            Country-specific rules and regulations by origin and destination countries
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {ITEMS.map((item) => (
            <div key={item.id}
              className="border-2 border-dashed border-blue-200 rounded-2xl
                bg-white/60 p-5 flex flex-col items-center text-center gap-4">

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div style="width:48px;height:48px;background:#e8eaf6;border-radius:12px;
                        display:flex;align-items:center;justify-content:center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5"
                          style="width:24px;height:24px">
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <path d="M3 9h18M9 21V9"/>
                        </svg>
                      </div>`;
                  }}
                />
              </div>

              {/* Title */}
              <p className="text-xs font-extrabold text-gray-900 uppercase leading-tight">
                {item.title}
              </p>

              {/* Button */}
               <Link
                 to={item.path}
                 className="bg-blue-500 text-white text-[10px] font-bold uppercase
                   tracking-wider px-4 py-1.5 rounded-lg no-underline
                   hover:bg-blue-600 transition-colors duration-150"
               >
                 More Details
               </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}