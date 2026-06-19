import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const SECURITY_FEATURES = [
  "Tamper-evident sealing and secure warehouse zones",
  "CCTV monitoring at all origin and transit facilities",
  "Chain-of-custody documentation for every handoff",
  "Screened cargo compliance with TSA and ICAO standards",
  "High-value cargo escort and priority handling",
  "Full cargo insurance options up to declared value",
];

const COMPLIANCE_BADGES = [
  "IATA Certified",
  "TSA Compliant",
  "C-TPAT Ready",
  "ISO 9001",
  "GDP Handling",
  "AEO Status",
];

export default function AirCargoSecurity() {
  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Cargo Security"
        title="Your Freight Protected at Every Touchpoint"
        description="Security is built into every stage of our air cargo operations — from secure intake and screening to controlled handoffs and insured delivery."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-w-0">
        <div className="order-2 lg:order-1 min-w-0">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            High-value and sensitive shipments demand more than standard handling. Our security
            protocols align with international aviation standards, ensuring your cargo is screened,
            tracked, and protected throughout its journey — with full audit trails for compliance
            and peace of mind.
          </p>

          <div className="flex flex-col gap-3 mb-6 sm:mb-8">
            {SECURITY_FEATURES.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {COMPLIANCE_BADGES.map((badge) => (
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

        <ImageBlock
          src="/minibanner4.jpg"
          alt="Secure cargo handling"
          hint="Add photo: public/minibanner4.jpg"
          className="order-1 lg:order-2 w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
        />
      </div>
    </section>
  );
}
