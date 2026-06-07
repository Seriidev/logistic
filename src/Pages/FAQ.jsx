import { useCallback, useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

const FAQ_DATA = [
  {
    id: "shipping",
    title: "Shipping & Delivery",
    questions: [
      {
        q: "Which countries do you deliver to?",
        a: "We deliver to over 150 countries worldwide, including the USA, China, UAE, Germany, UK, Russia, Uzbekistan, Kazakhstan, and more. Our network covers all major continents with reliable carrier partners.",
      },
      {
        q: "How much does international shipping cost?",
        a: "Shipping costs depend on the weight, dimensions, destination, and shipping method (air, sea, or truck). You can get an instant quote using our calculator on the Ship Now page. Prices start from just $5 for small packages.",
      },
      {
        q: "How long does delivery take?",
        a: "Delivery times vary by service: Air Cargo — 3 to 7 business days. Sea Cargo — 20 to 45 days. Truck Cargo — 5 to 14 days depending on destination. Express options are available for urgent shipments.",
      },
      {
        q: "Can I track my shipment?",
        a: "Yes! Every shipment comes with a unique tracking number. You can track your parcel in real-time on our Track page or via our Telegram bot @yuusell_bot. We also send automatic SMS and email notifications.",
      },
      {
        q: "Do you offer courier pickup?",
        a: "Yes, we offer door-to-door pickup service in most major cities. You can schedule a pickup when placing your order, or drop off your package at one of our partner locations.",
      },
      {
        q: "What happens if my package is delayed?",
        a: "In case of delays due to customs, weather, or carrier issues, our support team will notify you immediately and provide an updated ETA. We work 24/7 to resolve any issues as quickly as possible.",
      },
    ],
  },
  {
    id: "orders",
    title: "Orders & Payments",
    questions: [
      {
        q: "How do I place a delivery order?",
        a: "Simply go to our Ship Now page, enter your shipment details (from, to, weight, dimensions), get an instant quote, and confirm your order. You can also contact our support team for assistance.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard), Apple Pay, Google Pay, bank transfers, and PayPal. All payments are processed securely through encrypted channels.",
      },
      {
        q: "Can I cancel or change my shipment?",
        a: "Yes, you can cancel or modify your shipment before it is picked up. Once the shipment is in transit, changes may be limited. Please contact our support team as soon as possible for assistance.",
      },
      {
        q: "Is VAT included in the price?",
        a: "VAT and customs duties depend on the destination country and the type of goods being shipped. Our system will show any applicable taxes during the checkout process. We also provide full customs documentation support.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No hidden fees! The price you see during checkout is the final price. Any additional customs or duties are clearly displayed before you confirm your order.",
      },
      {
        q: "Do you offer refunds?",
        a: "If your shipment is lost or significantly damaged due to our fault, we offer full compensation according to our insurance policy. Please file a claim within 30 days of the expected delivery date.",
      },
    ],
  },
  {
    id: "business",
    title: "Business & Integrations",
    questions: [
      {
        q: "Can I integrate YuuSell with my online store?",
        a: "Yes! We offer seamless integrations with major e-commerce platforms including Shopify, WooCommerce, Amazon, eBay, Etsy, and AliExpress. Contact our business team to set up your integration.",
      },
      {
        q: "Do you have special pricing for businesses?",
        a: "Absolutely. We offer volume discounts, dedicated account managers, and custom pricing plans for businesses with high shipping volumes. Contact us to discuss a tailored solution for your business.",
      },
      {
        q: "Can I automate shipping from my e-commerce platform?",
        a: "Yes, through our API and platform integrations, you can fully automate order fulfillment, label generation, and tracking updates directly from your store dashboard.",
      },
      {
        q: "Do you offer fulfillment services?",
        a: "Yes! Our Amazon FBA prep service handles receiving, labeling, packing, and shipping your products directly to Amazon warehouses. We are 100% compliant with Amazon requirements.",
      },
      {
        q: "How do I become a business client?",
        a: "Simply fill out the contact form on our Contact Us page or email us at info.usa@yuusell.com. Our business team will get back to you within 24 hours to discuss your needs.",
      },
      {
        q: "Do you provide customs clearance support?",
        a: "Yes, we provide full customs clearance support including documentation preparation, duty calculation, and liaison with customs authorities. Our team ensures smooth and compliant cross-border shipping.",
      },
    ],
  },
];

const SECTION_ICONS = {
  shipping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  orders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" strokeLinecap="round" />
    </svg>
  ),
  business: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const SCROLL_OFFSET = 128;

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl sm:rounded-2xl border bg-white shadow-sm transition-all duration-300 ease-out
        ${open ? "border-blue-200 shadow-md shadow-blue-500/5 ring-1 ring-blue-100" : "border-gray-100 hover:border-gray-200 hover:shadow-md"}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 sm:py-4.5
          text-left bg-transparent border-none cursor-pointer font-[inherit] min-h-[52px]"
      >
        <span
          className={`text-sm sm:text-[15px] font-medium leading-snug transition-colors duration-200 min-w-0
            ${open ? "text-blue-600" : "text-gray-800"}`}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
            ${open ? "bg-blue-500 text-white rotate-180" : "bg-gray-100 text-gray-500"}`}
        >
          <svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`faq-accordion-panel grid transition-[grid-template-rows] duration-300 ease-out
          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden min-w-0">
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
            <div className="h-px bg-gradient-to-r from-blue-100 via-blue-50 to-transparent mb-4" />
            <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarNavButton({ section, isActive, onClick, compact = false }) {
  return (
    <button
      type="button"
      onClick={() => onClick(section.id)}
      aria-current={isActive ? "true" : undefined}
      className={`
        group flex items-center gap-2.5 border-none cursor-pointer font-[inherit] transition-all duration-200
        ${compact
          ? `shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap
            ${isActive
              ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
              : "bg-white text-gray-600 border border-gray-200 hover:border-blue-200 hover:text-blue-600"}`
          : `w-full text-left px-3.5 py-3 rounded-xl text-sm
            ${isActive
              ? "bg-blue-500 text-white shadow-md shadow-blue-500/20 font-semibold"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium"}`}
      `}
    >
      <span
        className={`flex items-center justify-center w-7 h-7 rounded-lg transition-colors duration-200
          ${isActive
            ? compact ? "text-white/90" : "bg-white/20 text-white"
            : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"}`}
      >
        {SECTION_ICONS[section.id]}
      </span>
      <span className="min-w-0 leading-snug">{section.title}</span>
    </button>
  );
}

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState("shipping");
  const scrollLockRef = useRef(false);
  const scrollLockTimer = useRef(null);

  const scrollTo = useCallback((id) => {
    setActiveSection(id);
    scrollLockRef.current = true;
    if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current);

    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }

    scrollLockTimer.current = setTimeout(() => {
      scrollLockRef.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    const sectionEls = FAQ_DATA.map((s) => document.getElementById(s.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLockRef.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${SCROLL_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.5],
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current);
    };
  }, []);

  return (
    <>
      <section className="page-container min-w-0 pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16">
        <nav
          aria-label="Breadcrumb"
          className="relative z-10 flex items-center gap-2 text-sm text-gray-500 mb-8 sm:mb-10 lg:mb-12 shrink-0"
        >
          <a href="/" className="hover:text-blue-500 no-underline text-gray-500 transition-colors">
            Main
          </a>
          <span className="text-gray-300" aria-hidden="true">
            ›
          </span>
          <span className="text-gray-900 font-medium">FAQ</span>
        </nav>

        {/* Mobile / tablet horizontal category tabs */}
        <div className="lg:hidden mb-8 sm:mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-0.5 px-0.5 scrollbar-none snap-x snap-mandatory">
            {FAQ_DATA.map((section) => (
              <div key={section.id} className="snap-start">
                <SidebarNavButton
                  section={section}
                  isActive={activeSection === section.id}
                  onClick={scrollTo}
                  compact
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-start min-w-0 mt-2 sm:mt-0">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 xl:top-32 self-start">
            <div className="rounded-2xl border border-gray-100 bg-white p-3.5 sm:p-4 shadow-sm">
              <p className="px-3 pt-2 pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                Categories
              </p>
              <nav className="flex flex-col gap-1">
                {FAQ_DATA.map((section) => (
                  <SidebarNavButton
                    key={section.id}
                    section={section}
                    isActive={activeSection === section.id}
                    onClick={scrollTo}
                  />
                ))}
              </nav>
            </div>
          </aside>

          {/* FAQ content */}
          <div className="flex-1 min-w-0 w-full lg:pt-1">
            <div className="rounded-2xl sm:rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm p-5 sm:p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col gap-10 sm:gap-11 lg:gap-12 pb-2 sm:pb-4 lg:pb-6">
                {FAQ_DATA.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-32 sm:scroll-mt-36 min-w-0">
                    <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-gray-100">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-500">
                        {SECTION_ICONS[section.id]}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-3.5 sm:gap-4">
                      {section.questions.map((item, i) => (
                        <AccordionItem key={i} question={item.q} answer={item.a} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
