import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    id: "information",
    title: "1. Information We Collect",
    content: (
      <>
        <p className="text-sm text-gray-600 mb-3">
          We may collect the following types of personal information:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          {[
            "Name, phone number, email address, and shipping/billing addresses",
            "Payment information (processed securely via third-party providers)",
            "Package content descriptions (for customs and logistics purposes)",
            "Communication history with customer service",
            "Device and usage data (e.g., IP address, browser type, and pages visited)",
          ].map((item) => (
            <li key={item} className="text-sm text-gray-600">{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="text-sm text-gray-600 mb-3">We use your information to:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          {[
            "Process and deliver your shipments",
            "Communicate with you about your orders",
            "Improve our website and services",
            "Comply with legal obligations",
            "Send promotional offers (with your consent)",
          ].map((item) => (
            <li key={item} className="text-sm text-gray-600">{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "3. Sharing Your Information",
    content: (
      <>
        <p className="text-sm text-gray-600 mb-3">We may share your information with:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          {[
            "Shipping and logistics partners (for delivery purposes)",
            "Payment processors (for secure transactions)",
            "Government agencies (if required by customs or law)",
            "Improve our website and services",
            "Third-party service providers who assist in operating our website and services",
          ].map((item) => (
            <li key={item} className="text-sm text-gray-600">{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "4. Data Security",
    content: (
      <p className="text-sm text-gray-600">
        We implement reasonable technical and organizational measures to protect your
        personal data against unauthorized access, loss, or misuse. However, no method
        of transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    id: "rights",
    title: "5. Your Rights",
    content: (
      <>
        <p className="text-sm text-gray-600 mb-3">
          Depending on your location, you may have the right to:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          {[
            "Access or update your personal information",
            "Request deletion of your data",
            "Withdraw consent to marketing communications",
            "File a complaint with a data protection authority",
          ].map((item) => (
            <li key={item} className="text-sm text-gray-600">{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "6. Cookies and Tracking",
    content: (
      <p className="text-sm text-gray-600">
        We use cookies to improve user experience and collect anonymous traffic data.
        You can control cookies via your browser settings.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "7. Third-Party Links",
    content: (
      <p className="text-sm text-gray-600">
        Our website may contain links to third-party websites. We are not responsible
        for the privacy practices or content of those sites.
      </p>
    ),
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    content: (
      <p className="text-sm text-gray-600">
        We may update this Privacy Policy occasionally. Changes will be posted on this
        page with a new effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: (
      <>
        <p className="text-sm text-gray-600 mb-3">
          If you have any questions about this Privacy Policy, please contact us:
          <br />
          <strong>YuuSell Customer Support</strong>
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li className="text-sm text-gray-600">
             <a href="mailto:support@yuusell.com"
               className="text-blue-500 hover:underline no-underline">
               support@yuusell.com
             </a>
          </li>
          <li className="text-sm text-gray-600">USA / China</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState("information");
  const sectionRefs = useRef({});

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="page-container min-w-0 py-6">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-500 no-underline text-gray-500 rounded-full">Main</a>
        <span>›</span>
        <span className="text-gray-900 font-medium">Privacy policy</span>
      </div>

      {/* Intro */}
      <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-full lg:max-w-3xl min-w-0">
        YuuSell ("we", "our", or "us") values your privacy and is committed to protecting
        your personal information. This Privacy Policy explains how we collect, use, and
        protect your data when you use our services through our website or any other
        communication channels.
      </p>

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
                    ${activeId === section.id
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
        <div className="flex-1 min-w-0 flex flex-col gap-10 pb-20">
          {SECTIONS.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                {section.title}
              </h2>
              {section.content}
            </div>
          ))}

          {/* Footer date */}
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-500">
              <strong>Effective Date:</strong> May 15, 2025
            </p>
          </div>
        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}