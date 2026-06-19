import { SectionHeading, ImageBlock } from "./shared";

const BENEFITS = [
  {
    id: 1,
    title: "Flexible Routes",
    description:
      "Custom routing across domestic highways and international corridors — optimized for your schedule, not ours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 12h4l3-8 4 16 3-8h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Fast Ground Delivery",
    description:
      "Express lanes and priority dispatch for time-critical shipments with guaranteed transit windows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Door-to-Door Service",
    description:
      "Pickup at origin and delivery to final destination — no terminal transfers unless you prefer them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Cost Effective Shipping",
    description:
      "Competitive FTL and LTL rates with transparent pricing — no hidden surcharges or surprise fees.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Real-Time Tracking",
    description:
      "GPS-enabled fleet with live milestone updates from pickup through final proof of delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Dedicated Support",
    description:
      "Personal account managers and 24/7 operations desk for booking, routing, and exception handling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 18v-6a9 9 0 0118 0v6" strokeLinecap="round" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TruckWhyChooseUs() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Why Choose Truck Cargo"
          title="Enterprise Road Freight Built for Your Business"
          description="From single pallets to full trailer loads, YuuSell delivers the reliability, visibility, and support that modern supply chains demand."
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch min-w-0">
          <ImageBlock
            src="/minibanner2.jpg"
            alt="Truck cargo logistics fleet"
            hint="Add photo: public/minibanner2.jpg"
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
