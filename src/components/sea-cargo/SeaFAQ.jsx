import { SectionHeading, AccordionItem } from "./shared";

const FAQ_ITEMS = [
  {
    q: "What is LCL shipping?",
    a: "LCL (Less Container Load) means your cargo shares container space with other shipments. You pay only for the volume or weight you use — ideal for smaller loads that do not require a full container.",
  },
  {
    q: "What is FCL shipping?",
    a: "FCL (Full Container Load) gives you an entire shipping container dedicated to your cargo alone. It offers faster processing, greater security, and is best suited for large-volume or high-value shipments.",
  },
  {
    q: "Which option is cheaper — LCL or FCL?",
    a: "LCL is typically more cost-effective for smaller shipments since you share container costs with other shippers. FCL becomes more economical when your cargo fills most of a container — usually above 15–20 cubic meters.",
  },
  {
    q: "How long does sea cargo take?",
    a: "Transit times vary by route. Asia to Europe typically takes 25–35 days, Asia to North America 15–25 days, and Europe to North America 10–18 days. LCL may add 3–7 days for consolidation and deconsolidation.",
  },
  {
    q: "Can I track my shipment?",
    a: "Yes. Every sea cargo booking receives a tracking reference with container-level visibility — including vessel departure, port arrivals, customs status, and final delivery milestones via email and your account dashboard.",
  },
  {
    q: "Do you provide customs assistance?",
    a: "Absolutely. Our customs team handles import/export documentation, HS code classification, duty calculation, and clearance coordination at origin and destination ports worldwide.",
  },
  {
    q: "What container types are available?",
    a: "We offer standard 20ft and 40ft containers, 40ft High Cube, refrigerated (reefer), open top, and flat rack containers — matched to your cargo dimensions, weight, and temperature requirements.",
  },
  {
    q: "Is cargo insurance available for sea freight?",
    a: "Yes. Comprehensive marine cargo insurance is available at booking, covering loss, damage, and general average events. Full declared-value coverage and streamlined claims processing are included.",
  },
  {
    q: "What documents are required for international sea shipping?",
    a: "Standard documents include commercial invoice, packing list, bill of lading, certificate of origin, and any product-specific permits. Our team guides you through country-specific requirements before departure.",
  },
  {
    q: "Can you handle hazardous or temperature-sensitive cargo?",
    a: "Yes. We manage IMDG-compliant dangerous goods and temperature-controlled reefer shipments where permitted by carrier and route regulations. Specialized documentation and handling protocols apply.",
  },
  {
    q: "How is sea freight pricing calculated?",
    a: "Rates depend on cargo volume or weight (chargeable weight), origin and destination ports, container type, and sailing schedule. LCL is priced per CBM or ton; FCL is priced per container. Use our online calculator for a preliminary quote.",
  },
  {
    q: "Do you offer door-to-door sea cargo delivery?",
    a: "Yes. Our door-to-door service includes pickup at origin, port handling, ocean transit, customs clearance, and final delivery to your address — with optional warehouse storage at origin or destination.",
  },
];

export default function SeaFAQ() {
  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions About Sea Cargo"
        description="Everything you need to know about ocean freight with YuuSell — from LCL and FCL options to transit times, tracking, customs, and container types."
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4 min-w-0">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.q} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  );
}
