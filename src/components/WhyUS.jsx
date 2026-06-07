const FEATURES = [
  {
    id: 1,
    title: "Competitive LTL and FTL shipping rates",
    description: "Affordable rates with optimized routes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Nationwide coverage with top truck freight carriers",
    description: "Seamless truck freight service across the U.S.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Easy-to-use platform with 24/7 visibility",
    description: "Amazing user experience with full visibility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Personalized support with real humans, anytime",
    description: "Dedicated logistics specialists available anytime.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Full control over cost, speed, and tracking",
    description: "Stay updated with live shipment tracking.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="page-container min-w-0 py-12">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
        Why Businesses Trust YuuSell for LTL & FTL
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch min-w-0">

        {/* Левая часть — список */}
        <div className="flex-1 flex flex-col gap-3">
          {FEATURES.map((feature) => (
            <div key={feature.id}
              className="flex items-start gap-4 bg-blue-50 rounded-2xl px-5 py-4">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                {feature.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-500 mb-0.5">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Правая часть — фото */}
        <div className="w-full lg:w-[420px] lg:shrink-0 h-64 sm:h-80 lg:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center min-w-0">
          <img
            src="/truck-why.jpg"
            alt="Truck cargo"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <div style="text-align:center;color:#9ca3af">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;margin:0 auto 12px">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <p style="font-size:13px">Add photo: public/truck-why.jpg</p>
                  <p style="font-size:11px;margin-top:4px">Recommended: 840×760px</p>
                </div>`;
            }}
          />
        </div>

      </div>
    </section>
  );
}