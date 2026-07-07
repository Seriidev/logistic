import { useState } from "react";
import { useTranslation } from "react-i18next";
import yuuLogo from "../logo/logo.svg";
import { ReviewModal } from "./ReviewModal";

const LINK_COLUMNS = [
  [
    { labelKey: "aboutUs", href: "/aboutus" },
    { labelKey: "services", href: "/serviceshead" },
    { labelKey: "support", href: "/support" },
    { labelKey: "news", href: "/news" },
    { labelKey: "faq", href: "/faq" },
  ],
  [
    { labelKey: "yuuSellShopping", href: "/online-stores" },
    { labelKey: "privacyPolicy", href: "/privacy" },
    { labelKey: "prohibitedItems", href: "/prohibited-items" },
    { labelKey: "shippingMethods", href: "/shippingmethod" },
  ],
];

function FooterAccordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="lg:hidden border-b border-gray-200/80 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer font-[inherit]"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">{title}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden min-w-0">{children}</div>
      </div>
    </div>
  );
}

function FooterLinksContent() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 sm:gap-x-14">
      {LINK_COLUMNS.map((column, i) => (
        <ul key={i} className="flex flex-col gap-2.5 min-w-[8.5rem]">
          {column.map((link) => (
            <li key={link.labelKey}>
              <a
                href={link.href}
                className="text-xs font-semibold text-blue-500 uppercase tracking-wide no-underline hover:text-blue-700 hover:translate-x-0.5 inline-block transition-all duration-150"
              >
                {t(`footer.links.${link.labelKey}`)}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

function FooterContactContent() {
  const { t } = useTranslation();

  const contact = [
    {
      labelKey: "email",
      href: "mailto:info@yuusell.com",
      value: "info@yuusell.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
          <path d="M4 4h16v16H4z" />
          <path d="M4 8l8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      labelKey: "phone",
      href: "tel:+19412889573",
      value: "(+1) 941 288 95 73",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      labelKey: "location",
      value: t("footer.contact.locationValue"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
          <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <ul className="flex flex-col gap-4">
      {contact.map((item) => (
        <li key={item.labelKey} className="flex items-start gap-3">
          <span className="w-9 h-9 shrink-0 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
            {item.icon}
          </span>
          <div className="min-w-0 pt-0.5">
            <p className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-0.5">
              {t(`footer.contact.${item.labelKey}`)}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-gray-500 no-underline hover:text-blue-500 transition-colors break-all"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm text-gray-500">{item.value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function FooterNewsletter({ name, setName, email, setEmail, agreeEmail, setAgreeEmail, agreePhone, setAgreePhone }) {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-500 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-4 shadow-lg shadow-blue-500/20 h-full">
      <div>
        <h3 className="text-white font-bold text-sm uppercase tracking-wide text-center mb-2">
          {t("footer.newsletter.title")}
        </h3>
        <p className="text-blue-100 text-xs text-center leading-relaxed">
          {t("footer.newsletter.description")}
        </p>
      </div>

      <input
        type="text"
        placeholder={t("footer.newsletter.namePlaceholder")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full min-h-[44px] px-4 rounded-xl bg-white border-none outline-none text-sm text-gray-900 font-[inherit] placeholder:text-gray-400"
      />

      <input
        type="email"
        placeholder={t("footer.newsletter.emailPlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full min-h-[44px] px-4 rounded-xl bg-white border-none outline-none text-sm text-gray-900 font-[inherit] placeholder:text-gray-400"
      />

      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          checked={agreeEmail}
          onChange={(e) => setAgreeEmail(e.target.checked)}
          className="mt-1 shrink-0 accent-white w-4 h-4"
        />
        <span className="text-xs text-blue-100 leading-relaxed">
          {t("footer.newsletter.agreeEmail")}
        </span>
      </label>

      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          checked={agreePhone}
          onChange={(e) => setAgreePhone(e.target.checked)}
          className="mt-1 shrink-0 accent-white w-4 h-4"
        />
        <span className="text-xs text-blue-100 leading-relaxed">
          {t("footer.newsletter.agreePhone")}
        </span>
      </label>

      <button
        type="button"
        className="w-full min-h-[44px] bg-white text-blue-500 text-sm font-bold uppercase tracking-wider rounded-full border-none cursor-pointer hover:bg-blue-50 hover:shadow-md active:scale-[0.98] transition-all duration-150 font-[inherit] mt-1"
      >
        {t("footer.newsletter.subscribe")}
      </button>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreeEmail, setAgreeEmail] = useState(false);
  const [agreePhone, setAgreePhone] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const newsletterProps = {
    name,
    setName,
    email,
    setEmail,
    agreeEmail,
    setAgreeEmail,
    agreePhone,
    setAgreePhone,
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200/80 min-w-0">
      <div className="page-container py-10 sm:py-14">
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-10 min-w-0">
          <div className="lg:col-span-3 flex flex-col gap-5 min-w-0">
            <a href="/" className="inline-flex items-center gap-2.5 no-underline w-fit group">
              <img src={yuuLogo} alt="" className="h-9 w-auto transition-transform duration-200 group-hover:scale-105" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("footer.brand.tagline")}
            </p>
            <button
              type="button"
              onClick={() => setReviewOpen(true)}
              className="w-fit min-h-[44px] px-5 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full border-none cursor-pointer hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all duration-150 font-[inherit]"
            >
              {t("footer.brand.writeReview")}
            </button>
          </div>

          <div className="lg:col-span-2 min-w-0">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-5">
              {t("footer.sections.usefulLinks")}
            </h2>
            <FooterLinksContent />
          </div>

          <div className="lg:col-span-3 min-w-0">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-5">
              {t("footer.sections.contactUs")}
            </h2>
            <FooterContactContent />
          </div>

          <div className="lg:col-span-4 min-w-0">
            <FooterNewsletter {...newsletterProps} />
          </div>
        </div>

        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 min-w-0">
          <div className="flex flex-col gap-5 min-w-0">
            <a href="/" className="inline-flex items-center gap-2.5 no-underline w-fit">
              <img src={yuuLogo} alt="" className="h-9 w-auto" />
              <span className="text-lg font-bold text-gray-900">{t("footer.brand.name")}</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("footer.brand.tagline")}
            </p>
            <button
              type="button"
              onClick={() => setReviewOpen(true)}
              className="w-fit min-h-[44px] px-5 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full border-none cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
            >
              {t("footer.brand.writeReview")}
            </button>
          </div>
          <FooterNewsletter {...newsletterProps} />
          <div className="min-w-0">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              {t("footer.sections.usefulLinks")}
            </h2>
            <FooterLinksContent />
          </div>
          <div className="min-w-0">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              {t("footer.sections.contactUs")}
            </h2>
            <FooterContactContent />
          </div>
        </div>

        <div className="md:hidden min-w-0">
          <div className="flex flex-col gap-5 pb-6 border-b border-gray-200/80 mb-2">
            <a href="/" className="inline-flex items-center gap-2.5 no-underline w-fit">
              <img src={yuuLogo} alt="" className="h-9 w-auto" />
              <span className="text-lg font-bold text-gray-900">{t("footer.brand.name")}</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("footer.brand.tagline")}
            </p>
            <button
              type="button"
              onClick={() => setReviewOpen(true)}
              className="w-full min-h-[44px] px-5 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full border-none cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
            >
              {t("footer.brand.writeReview")}
            </button>
          </div>

          <FooterAccordion title={t("footer.sections.usefulLinks")}>
            <FooterLinksContent />
          </FooterAccordion>
          <FooterAccordion title={t("footer.sections.contactUs")}>
            <FooterContactContent />
          </FooterAccordion>
          <FooterAccordion title={t("footer.sections.newsletter")} defaultOpen>
            <div className="pt-1">
              <FooterNewsletter {...newsletterProps} />
            </div>
          </FooterAccordion>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="page-container py-4 text-center">
          <p className="text-xs text-gray-400">{t("footer.copyright")}</p>
        </div>
      </div>

      <ReviewModal isOpen={reviewOpen} onClose={() => setReviewOpen(false)} />
    </footer>
  );
}
