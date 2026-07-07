import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

const SECTION_IDS = [
  "information",
  "how-we-use",
  "sharing",
  "security",
  "rights",
  "cookies",
  "third-party",
  "changes",
  "contact",
];

const SCROLL_OFFSET = 128;

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacy");
  const [activeId, setActiveId] = useState("information");
  const sectionRefs = useRef({});

  const sections = useMemo(
    () =>
      SECTION_IDS.map((id) => {
        const section = t(`sections.${id}`, { returnObjects: true });
        return { id, ...section };
      }),
    [t],
  );

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
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
      { rootMargin: "-20% 0px -70% 0px" },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const renderContent = (section) => {
    if (section.items) {
      return (
        <>
          <p className="text-sm text-gray-600 mb-3">{section.intro}</p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            {section.items.map((item) => (
              <li key={item} className="text-sm text-gray-600">{item}</li>
            ))}
          </ul>
        </>
      );
    }

    if (section.id === "contact") {
      return (
        <>
          <p className="text-sm text-gray-600 mb-3">
            {section.intro}
            <br />
            <strong>{section.supportName}</strong>
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li className="text-sm text-gray-600">
              <a href={`mailto:${section.email}`} className="text-blue-500 hover:underline no-underline">
                {section.email}
              </a>
            </li>
            <li className="text-sm text-gray-600">{section.regions}</li>
          </ul>
        </>
      );
    }

    return <p className="text-sm text-gray-600">{section.content}</p>;
  };

  return (
    <>
      <section className="page-container min-w-0 pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16">
        <nav
          aria-label="Breadcrumb"
          className="relative z-10 flex items-center gap-2 text-sm text-gray-500 mb-8 sm:mb-10 lg:mb-12 shrink-0"
        >
          <a href="/" className="hover:text-blue-500 no-underline text-gray-500 transition-colors">
            {t("common:common.main")}
          </a>
          <span className="text-gray-300" aria-hidden="true">›</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.title")}</span>
        </nav>

        <p className="text-sm text-gray-500 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-full lg:max-w-3xl min-w-0">
          {t("intro")}
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-start min-w-0">
          <aside className="page-sidebar page-sidebar--wide w-full shrink-0 lg:!top-28 xl:!top-32">
            <nav className="pb-1 lg:pb-0">
              {sections.map((section) => (
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
          </aside>

          <div className="flex-1 min-w-0 w-full max-w-4xl lg:pt-1">
            <div className="rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col gap-10 sm:gap-11 lg:gap-12 pb-2 sm:pb-4">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    ref={(el) => (sectionRefs.current[section.id] = el)}
                    className="scroll-mt-32 sm:scroll-mt-36 min-w-0"
                  >
                    <h2 className="text-lg font-bold text-gray-900 mb-4 sm:mb-5">{section.title}</h2>
                    {renderContent(section)}
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-6 sm:pt-8 mt-2 sm:mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    <strong>{t("effectiveDate")}</strong> {t("effectiveDateValue")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
