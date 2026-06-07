const FEATURES = [
  {
    id: 1,
    title: "Trusted Ocean Freight Forwarder",
    description: "With 25+ years of Industry experience with a proven track record of reliability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Secure & Affordable Ocean Freight Options",
    description: "Be it FCL or LCL, YuuSell ensures security with flexible shipment facilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Real-Time Tracking & Live ETAs",
    description: "Real-Time Tracking & Live ETAs for all your shipments worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Low-Cost Ocean Freight with LCL & FCL Options",
    description: "Ideal for cost-sensitive shipments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "End-to-End Ocean Freight Logistics Company",
    description: "Handling everything from booking to compliance & delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Expert Support, 24/7",
    description: "A dedicated team ready to assist with every shipment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="page-container min-w-0 py-10 sm:py-16">

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8 sm:mb-10 px-2">
        Why Businesses Choose Yuusell for Copart
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch min-w-0">

        <div className="w-full lg:w-95 lg:shrink-0 h-64 sm:h-80 lg:h-115 rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100">
          <img
            src="/air picture.png"
            alt="Air Cargo"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.display = "flex";
              e.target.parentElement.style.alignItems = "center";
              e.target.parentElement.style.justifyContent = "center";
              e.target.parentElement.style.flexDirection = "column";
              e.target.parentElement.style.gap = "8px";
              e.target.parentElement.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5"
                  style="width:48px;height:48px">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
                <p style="font-size:12px;color:#9ca3af;text-align:center">
                  Add photo:<br/>public/air-why.jpg<br/>760×920px
                </p>`;
            }}
          />
        </div>

        {/* Правая часть — список */}
        <div className="flex-1 min-w-0 flex flex-col gap-3 sm:gap-4">
          {FEATURES.map((feature) => (
            <div key={feature.id}
              className="flex items-start gap-4 bg-gray-50 rounded-2xl px-5 py-4
                hover:bg-blue-50 transition-colors duration-150">

              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-white flex items-center
                justify-center shrink-0 shadow-sm mt-0.5">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold text-blue-500 mb-0.5">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}