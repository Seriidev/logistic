import { SectionHeading, ImageBlock } from "./shared";

const SAFETY_BLOCKS = [
  {
    id: 1,
    title: "Container Security",
    description:
      "ISO-certified containers with high-security seals, terminal CCTV monitoring, and tamper-evident documentation at every handoff point.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Cargo Insurance",
    description:
      "Comprehensive marine cargo insurance covering loss, damage, and general average — with streamlined claims processing and full-value options.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "GPS Tracking",
    description:
      "Container-level tracking with vessel AIS data, port milestone alerts, and estimated arrival updates delivered to your dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Customs Compliance",
    description:
      "Expert trade compliance support — HS classification, documentation review, and regulatory alignment for import and export clearance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Professional Handling",
    description:
      "Certified stevedores, proper lashing and dunnage, temperature monitoring for reefer units, and damage-free loading protocols at every port.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SeaCargoSafety() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Cargo Safety"
          title="Your Shipment Protected Across Every Ocean Mile"
          description="Security and compliance are built into every stage of our sea cargo operations — from sealed containers and marine insurance to GPS tracking and professional port handling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-w-0 mb-8 sm:mb-10">
          <ImageBlock
            src="/sea-safety.jpg"
            alt="Secure container handling at international port"
            hint="Add photo: public/sea-safety.jpg"
            className="w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
          />

          <div className="min-w-0">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              International ocean freight demands rigorous safety standards. Our protocols align with
              IMO regulations, carrier security requirements, and international trade compliance — ensuring
              your cargo is secured, insured, and professionally handled from origin port to final delivery.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["ISO 9001", "C-TPAT Ready", "AEO Certified", "IMDG Compliant", "SOLAS Verified"].map((badge) => (
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
