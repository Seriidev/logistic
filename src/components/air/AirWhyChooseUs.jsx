import { SectionHeading, ImageBlock } from "./shared";

const FEATURES = [
  {
    id: 1,
    title: "Global Airline Partnerships",
    description:
      "Preferred rates and capacity with major carriers across North America, Europe, Asia, and the Middle East.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M2 12h20M12 2l4 10-4 10-4-10 4-10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Time-Definite Delivery",
    description:
      "Express lanes, next-flight-out options, and guaranteed transit windows for urgent shipments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Real-Time Visibility",
    description:
      "Track every milestone from pickup to final delivery with proactive status alerts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Flexible Cargo Options",
    description:
      "General cargo, temperature-controlled, dangerous goods (where permitted), and oversized freight.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "End-to-End Logistics",
    description:
      "Pickup, warehousing, customs clearance, last-mile delivery, and documentation — all managed in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "24/7 Expert Support",
    description:
      "Dedicated operations specialists available around the clock for booking, routing, and exception handling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 18v-6a9 9 0 0118 0v6" strokeLinecap="round" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AirWhyChooseUs() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Businesses Trust YuuSell for Air Cargo"
          description="We combine carrier-grade capacity with the agility of a modern freight forwarder — giving you speed, transparency, and control at every stage of the journey."
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch min-w-0">
          <ImageBlock
            src="/minibanner1.jpg"
            alt="Air freight logistics"
            hint="Add photo: public/minibanner1.jpg"
            className="w-full lg:w-[420px] lg:shrink-0 h-64 sm:h-80 lg:h-[480px] rounded-2xl sm:rounded-3xl"
          />

          <div className="flex-1 min-w-0 flex flex-col gap-3 sm:gap-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-4 bg-white rounded-2xl px-4 sm:px-5 py-4
                  hover:bg-blue-50 transition-colors duration-150 border border-gray-100"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-blue-600 mb-0.5">{feature.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
