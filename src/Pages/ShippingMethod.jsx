import { useState } from "react";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    id: "shipping-options",
    title: "Shipping Methods & Options",
    questions: [
      {
        q: "1. What shipping options does YuuSell offer from China to the USA?",
        a: (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-600">YuuSell offers three main types of international shipping:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm text-gray-600">
              <li><strong>Sea Freight</strong> — Best for large and heavy shipments. Lower cost, but slower delivery.</li>
              <li><strong>Air Freight</strong> — Clear features of speed and low cost. Ideal for medium-sized parcels.</li>
              <li><strong>Express Delivery</strong> — The quickest option for time-sensitive deliveries or smaller parcels.</li>
            </ul>
            <p className="text-sm text-gray-600">Each method has its benefits depending on your budget, volume, and urgency.</p>
            <div className="rounded-xl overflow-hidden h-40 bg-gray-100">
              <img src="/shipping/sea-freight.jpg" alt="Sea freight"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = "none"; }} />
            </div>
          </div>
        ),
      },
      {
        q: "2. What is the difference between FCL and LCL sea freight?",
        a: (
          <div className="flex flex-col gap-3">
            <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm text-gray-600">
              <li><strong>FCL (Full Container Load)</strong> — You book the entire container, giving you exclusive use. This is usually more cost-effective for shipments that fill most or all of a container. It offers faster transit and less handling.</li>
              <li><strong>LCL (Less than Container Load)</strong> — Your goods share space with other shippers' shipments. For small shipments under 15CBM, LCL delivery may be slower due to consolidation stops.</li>
            </ul>
            <div className="rounded-xl overflow-hidden h-40 bg-gray-100">
              <img src="/shipping/fcl-lcl.jpg" alt="FCL vs LCL"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = "none"; }} />
            </div>
            <p className="text-sm text-gray-600">
              It is important to note that in LCL shipping, your goods are placed with other people's goods
              and the wait time can double to triple and delivery dates take twice as long.
            </p>
            <p className="text-sm text-gray-600">
              If you are looking for port-to-port or door-to-door sea freight from China to the USA with the
              fastest delivery, hassle-free customs clearance, and budget-friendly costs, then our YuuSell
              Freight are the best option for you.
            </p>
            <div className="rounded-xl overflow-hidden h-40 bg-gray-100">
              <img src="/shipping/fcl-lcl-calc.jpg" alt="FCL LCL Calculation"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = "none"; }} />
            </div>
          </div>
        ),
      },
      {
        q: "3. How long does delivery take from China to the USA?",
        a: (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-600">Delivery time depends on your selected shipping method. Here's a general overview:</p>
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-2.5 text-gray-600 font-semibold">Shipping Method</th>
                    <th className="text-left px-4 py-2.5 text-gray-600 font-semibold">Delivery Time</th>
                    <th className="text-left px-4 py-2.5 text-gray-600 font-semibold">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Express Delivery", "3–7 days", "##"],
                    ["Air Freight", "7–14 days (door-to-door)", "##"],
                    ["Sea Freight", "25–35 days", "##"],
                  ].map(([method, time, priority], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2.5 text-gray-700">{method}</td>
                      <td className="px-4 py-2.5 text-gray-700">{time}</td>
                      <td className="px-4 py-2.5 text-gray-700">{priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        q: "4. What is the most cost-effective way to ship?",
        a: <p className="text-sm text-gray-600">Sea freight LCL or FCL is the most cost-effective for large shipments. For smaller packages, our consolidated air freight offers the best balance of price and speed. Use our calculator to compare options instantly.</p>,
      },
      {
        q: "5. What is DDU shipping and do you offer it?",
        a: <p className="text-sm text-gray-600">DDU (Delivered Duty Unpaid) means the buyer is responsible for paying import duties upon arrival. We offer both DDU and DDP (Delivered Duty Paid) options. With DDP, we handle all customs fees upfront so you have no surprises at delivery.</p>,
      },
      {
        q: "6. What is D2D shipping and do you offer it?",
        a: <p className="text-sm text-gray-600">D2D (Door-to-Door) shipping means we pick up from the seller's location in China and deliver directly to your door in the USA. Yes, we fully offer door-to-door service for air, sea, and express shipments.</p>,
      },
    ],
  },
  {
    id: "how-to-ship",
    title: "How to Ship with YuuSell",
    questions: [
      {
        q: "6. Step by Step: How Shipping Works with YuuSell",
        a: (
          <ol className="list-decimal pl-5 flex flex-col gap-2 text-sm text-gray-600">
            <li>Get an instant quote on our Ship Now page</li>
            <li>Book your shipment and choose your service</li>
            <li>We arrange pickup from the supplier or warehouse</li>
            <li>Your goods are packed, labeled, and documented</li>
            <li>Shipment is dispatched and tracked in real-time</li>
            <li>Customs clearance handled by our team</li>
            <li>Delivered to your door with full tracking</li>
          </ol>
        ),
      },
      {
        q: "7. How do I calculate a shipping cost?",
        a: <p className="text-sm text-gray-600">Use our free shipping calculator on the Ship Now page. Enter origin, destination, weight, and dimensions to get an instant quote. You can also contact our team for a custom quote for large or complex shipments.</p>,
      },
      {
        q: "8. How can I track my shipment?",
        a: <p className="text-sm text-gray-600">Every shipment gets a unique tracking number. Track in real-time on our Track page, via our Telegram bot @yuusell_bot, or through automatic SMS/email notifications we send at every stage of delivery.</p>,
      },
      {
        q: "9. Do I need cargo insurance?",
        a: <p className="text-sm text-gray-600">Cargo insurance is optional but highly recommended, especially for high-value goods. We offer comprehensive cargo insurance that covers loss, damage, and theft during transit. Ask our team for details when booking.</p>,
      },
      {
        q: "10. What documents do I need?",
        a: (
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm text-gray-600">
            <li>Commercial Invoice</li>
            <li>Packing List</li>
            <li>Bill of Lading (for sea) or Airway Bill (for air)</li>
            <li>Certificate of Origin (if required)</li>
            <li>Import/Export License (for regulated goods)</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "customs",
    title: "Customs, Delivery, and Troubleshooting",
    questions: [
      {
        q: "11. What about customs clearance?",
        a: <p className="text-sm text-gray-600">Our team handles full customs clearance including documentation, duty calculation, and direct communication with customs authorities. We ensure your shipment complies with all import/export regulations to avoid delays.</p>,
      },
      {
        q: "12. Are there shipping delays to be aware of?",
        a: <p className="text-sm text-gray-600">Delays can occur due to customs inspections, port congestion, weather, or peak seasons (Chinese New Year, Golden Week). We monitor all shipments and proactively notify you of any delays with updated ETAs.</p>,
      },
      {
        q: "13. What is the best way to ship to ensure it is free from China?",
        a: <p className="text-sm text-gray-600">To minimize costs, consider consolidating multiple orders into one shipment, choosing sea freight for non-urgent goods, and shipping during off-peak periods. Our team can advise the most cost-effective strategy for your specific needs.</p>,
      },
      {
        q: "14. What's the best shipping method for me?",
        a: <p className="text-sm text-gray-600">It depends on your priorities. If speed is critical — choose express or air freight. If cost is the main concern — sea freight LCL or FCL is best. Our team can analyze your shipment details and recommend the optimal solution.</p>,
      },
      {
        q: "15. Need help choosing the right option?",
        a: (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-600">Our logistics experts are available 24/7 to help you choose the best shipping option. Contact us via:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm text-gray-600">
              <li>Live chat on our website</li>
              <li>Email: info.usa@yuusell.com</li>
              <li>Phone: +1 862-652-1545</li>
              <li>Telegram: @yuusell_bot</li>
            </ul>
          </div>
        ),
      },
    ],
  },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-2xl border transition-all duration-200
      ${open ? "border-blue-200 bg-blue-50" : "border-gray-100 bg-gray-50"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 rounded-full
          text-left bg-transparent border-none cursor-pointer font-[inherit]"
      >
        <span className={`text-sm font-medium transition-colors duration-150 pr-4 min-w-0
          ${open ? "text-blue-500" : "text-gray-800"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center
          justify-center transition-all duration-200
          ${open ? "bg-blue-500" : "bg-gray-200"}`}>
          <svg viewBox="0 0 24 24" fill="none" width="12" height="12"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
            <path d="M6 9l6 6 6-6" stroke={open ? "white" : "#6b7280"}
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <div className="h-px bg-blue-200 mb-4" />
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ShippingMethodsPage() {
  const [activeSection, setActiveSection] = useState("shipping-options");

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
    <section className="page-container min-w-0 py-6">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-blue-500 no-underline text-gray-500">Main</a>
        <span>›</span>
        <a href="/discounts" className="hover:text-blue-500 no-underline text-gray-500">Discounts</a>
        <span>›</span>
        <span className="text-gray-900 font-medium">Shipping Methods & Options</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch min-w-0">

        {/* Sticky sidebar */}
        <div className="page-sidebar page-sidebar--wide">
          <nav>
            {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`
                    text-left text-sm px-3 py-2 rounded-full transition-all duration-150
                    border-none cursor-pointer font-[inherit] leading-snug
                    ${activeSection === section.id
                      ? "bg-blue-50 text-blue-500 font-semibold"
                      : "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"}
                  `}
                >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-12 pb-20">
          {SECTIONS.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.questions.map((item, i) => (
                  <AccordionItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}