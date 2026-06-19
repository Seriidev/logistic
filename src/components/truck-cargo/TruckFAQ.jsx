import { SectionHeading, AccordionItem } from "./shared";

const FAQ_ITEMS = [
  {
    q: "What is FTL (Full Truck Load)?",
    a: "FTL means you book an entire truck exclusively for your shipment. The vehicle travels directly from pickup to delivery without sharing space with other cargo — ideal for large volumes, time-sensitive deliveries, and high-value goods.",
  },
  {
    q: "What is LTL (Less Than Truck Load)?",
    a: "LTL allows you to share truck space with other shipments and pay only for the capacity you use. Cargo is consolidated at regional hubs and routed efficiently — a cost-effective option for smaller or irregular shipments.",
  },
  {
    q: "How long does truck cargo delivery take?",
    a: "Domestic deliveries typically take 1–5 business days depending on distance and service level. Cross-border and international road freight ranges from 3–14 business days. Express options are available on major lanes.",
  },
  {
    q: "Can I track my shipment in real time?",
    a: "Yes. Every shipment receives a tracking number with GPS-enabled milestone updates at pickup, hub transfers, border crossings, and final delivery. Notifications are sent via email and available in your account dashboard.",
  },
  {
    q: "Do you offer cargo insurance?",
    a: "Comprehensive cargo insurance is available at booking, covering up to full declared value. Our team handles claims processing and coordinates with carriers on your behalf in the event of loss or damage.",
  },
  {
    q: "What types of cargo can you transport by truck?",
    a: "We handle general cargo, palletized goods, temperature-sensitive items, oversized machinery, construction materials, and more. Hazardous goods (DG) are accepted where permitted by route and regulations.",
  },
  {
    q: "Do you provide door-to-door delivery?",
    a: "Yes. Our standard service includes pickup at origin and delivery to the final destination address. Terminal-to-terminal options are also available for cost-sensitive shipments.",
  },
  {
    q: "How is truck freight pricing calculated?",
    a: "Rates depend on distance, weight, cargo type, vehicle required, and service level (FTL vs LTL). Fuel surcharges and special handling fees may apply. Use our online estimator for a preliminary quote.",
  },
  {
    q: "Can you handle cross-border shipments?",
    a: "Absolutely. We manage USA–Canada, USA–Mexico, and European border crossings with full customs documentation, pre-clearance support, and coordinated handoffs at checkpoint facilities.",
  },
  {
    q: "What vehicle types are available in your fleet?",
    a: "Our fleet includes small vans, medium trucks, heavy trucks, refrigerated units, container trucks, and flatbeds — ensuring the right equipment for every cargo type and volume.",
  },
  {
    q: "How do I get a binding quote?",
    a: "Submit your shipment details through our online calculator or contact form. Our logistics team confirms routing, vehicle assignment, and final pricing within hours — often same-day for standard lanes.",
  },
];

export default function TruckFAQ() {
  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions About Truck Cargo"
        description="Everything you need to know about road freight with YuuSell — from FTL and LTL options to tracking, insurance, and cross-border delivery."
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4 min-w-0">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.q} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  );
}
