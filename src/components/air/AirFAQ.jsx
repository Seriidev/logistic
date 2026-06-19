import { SectionHeading, AccordionItem } from "./shared";

const FAQ_ITEMS = [
  {
    q: "How long does air cargo delivery typically take?",
    a: "Transit times depend on origin, destination, and service level. Express air freight typically delivers in 2–5 business days, standard service in 5–10 days, and economy deferred options in 10–14 days. We provide exact ETAs at the time of booking.",
  },
  {
    q: "What is the maximum weight and size for air cargo shipments?",
    a: "We handle everything from small parcels to full pallet loads and oversized project cargo. Single pieces up to several tons can be accommodated with proper planning. Contact our team for dimensions exceeding standard pallet sizes.",
  },
  {
    q: "Do you handle dangerous goods and temperature-sensitive cargo?",
    a: "Yes, where permitted by carrier and destination regulations. Our team manages DG documentation (IATA DGR), cold-chain packaging, and temperature-controlled containers for pharmaceuticals, perishables, and specialty goods.",
  },
  {
    q: "How is air freight pricing calculated?",
    a: "Rates are based on chargeable weight — the greater of actual weight or dimensional (volumetric) weight. Factors include origin/destination, service level, fuel surcharges, and any special handling. Use our online calculator for instant estimates.",
  },
  {
    q: "What documents are required for international air shipments?",
    a: "Typically: commercial invoice, packing list, air waybill, and customs declaration. Additional certificates may be required depending on product type and destination (e.g., phytosanitary, origin certificates). Our team prepares all documentation on your behalf.",
  },
  {
    q: "Can I track my air cargo shipment in real time?",
    a: "Absolutely. Every shipment receives a tracking number with milestone updates at pickup, warehouse intake, customs clearance, departure, arrival, and final delivery. Notifications are sent via email and available in your account dashboard.",
  },
  {
    q: "What happens if my cargo is delayed or damaged?",
    a: "Our operations team proactively monitors all shipments and alerts you to any exceptions. In the rare event of delay or damage, we file claims with carriers and insurers on your behalf. Cargo insurance is available at booking for full declared value protection.",
  },
  {
    q: "Do you offer consolidation services to reduce costs?",
    a: "Yes. Our consolidation program combines multiple shipments into shared air freight loads, significantly reducing per-unit costs. Ideal for e-commerce sellers, retailers, and businesses with regular smaller shipments to the same destinations.",
  },
];

export default function AirFAQ() {
  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions About Air Cargo"
        description="Everything you need to know about shipping by air with YuuSell — from transit times and pricing to customs, tracking, and special cargo handling."
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4 min-w-0">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.q} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  );
}
