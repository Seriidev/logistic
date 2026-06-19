import { SectionHeading, ImageBlock } from "./shared";

const SAFETY_BLOCKS = [
  {
    id: 1,
    title: "Cargo Protection",
    description:
      "Professional load securing with straps, edge protectors, and custom crating. Every shipment is inspected and documented at pickup and delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "GPS Tracking",
    description:
      "Real-time vehicle location with geofence alerts, route deviation notifications, and estimated arrival updates sent to your dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Driver Monitoring",
    description:
      "Certified drivers with background checks, hours-of-service compliance, and continuous performance monitoring for safe, reliable delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Insurance Coverage",
    description:
      "Comprehensive cargo insurance options up to full declared value — with streamlined claims processing and carrier liability coordination.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure Handling",
    description:
      "Tamper-evident seals, locked trailers, CCTV at terminals, and chain-of-custody documentation for every handoff in the supply chain.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TruckCargoSafety() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Cargo Safety"
          title="Your Freight Protected at Every Mile"
          description="Security and safety are built into every stage of our truck cargo operations — from secure loading and GPS tracking to insured delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-w-0 mb-8 sm:mb-10">
          <ImageBlock
            src="/minibanner4.jpg"
            alt="Secure truck cargo handling"
            hint="Add photo: public/minibanner4.jpg"
            className="w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
          />

          <div className="min-w-0">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              High-value and sensitive shipments demand more than standard handling. Our safety
              protocols align with international road freight standards, ensuring your cargo is
              secured, tracked, and protected throughout its journey.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["ISO 9001", "C-TPAT Ready", "GDP Handling", "AEO Status", "TAPA Certified"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700
                    text-xs font-semibold border border-blue-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {SAFETY_BLOCKS.map((block) => (
            <article
              key={block.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-5 sm:p-6
                hover:shadow-md hover:border-blue-200 transition-all duration-200 min-w-0"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {block.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{block.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{block.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
