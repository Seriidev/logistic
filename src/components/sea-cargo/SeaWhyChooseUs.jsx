import { SectionHeading, ImageBlock } from "./shared";

const BENEFITS = [
  {
    id: 1,
    title: "Cost Effective",
    description:
      "Ocean freight delivers the lowest cost per kilogram for large and heavy shipments — ideal for bulk imports and exports.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Global Coverage",
    description:
      "Direct and transshipment services to major ports across Asia, Europe, the Americas, Africa, and the Middle East.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Large Capacity",
    description:
      "Move everything from palletized goods to oversized project cargo with 20ft, 40ft, and specialized container options.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Secure Transportation",
    description:
      "Sealed containers, terminal security protocols, and professional stowage protect cargo throughout ocean transit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Customs Assistance",
    description:
      "Expert documentation, duty guidance, and clearance coordination at origin and destination ports worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M16 13H8M16 17H8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Real-Time Tracking",
    description:
      "Container-level visibility with milestone updates from booking through vessel departure, port arrival, and delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function SeaWhyChooseUs() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Why Choose Sea Cargo"
          title="Enterprise Ocean Freight Built for Global Trade"
          description="From single-carton LCL consolidations to full-container industrial shipments, YuuSell delivers the reliability, visibility, and port expertise that international supply chains require."
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch min-w-0">
          <ImageBlock
            src="/sea-why-choose.jpg"
            alt="Container ship at international port"
            hint="Add photo: public/sea-why-choose.jpg"
            className="w-full lg:w-[420px] lg:shrink-0 h-64 sm:h-80 lg:h-[480px] rounded-2xl sm:rounded-3xl"
          />

          <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {BENEFITS.map((benefit) => (
              <article
                key={benefit.id}
                className="flex items-start gap-4 bg-white rounded-2xl px-4 sm:px-5 py-4
                  hover:bg-blue-50 hover:shadow-md transition-all duration-200 border border-gray-100 min-w-0"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-blue-600 mb-0.5">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
