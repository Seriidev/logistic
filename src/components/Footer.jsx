import { useState } from "react";
import yuuLogo from "../logo/logo.svg";
import { ReviewModal } from "./ReviewModal";

const LINK_COLUMNS = [
  [
    { label: "About Us", href: "/aboutus" },
    { label: "Services", href: "/serviceshead" },
    { label: "Support", href: "/support" },
    { label: "News", href: "/news" },
    { label: "FAQ", href: "/faq" },
  ],
  [
    { label: "YuuSell Shopping", href: "/online-stores" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Prohibited Items", href: "/prohibited-items" },
    { label: "Shipping Methods", href: "/shippingmethod" },
  ],
];

const SOCIAL = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const PAYMENTS = [
  {
    name: "Mastercard",
    icon: (
      <svg viewBox="0 0 38 24" className="h-5 w-auto" aria-hidden="true">
        <circle cx="15" cy="12" r="10" fill="#EB001B" />
        <circle cx="23" cy="12" r="10" fill="#F79E1B" />
        <path d="M19 5.9A10 10 0 0123 12a10 10 0 01-4 6.1A10 10 0 0115 12a10 10 0 014-6.1z" fill="#FF5F00" />
      </svg>
    ),
  },
  {
    name: "Visa",
    icon: (
      <svg viewBox="0 0 50 16" className="h-4 w-auto" aria-hidden="true">
        <text x="0" y="14" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#1A1F71">VISA</text>
      </svg>
    ),
  },
  {
    name: "Google Pay",
    icon: (
      <svg viewBox="0 0 60 24" className="h-4 w-auto" aria-hidden="true">
        <text x="0" y="18" fontFamily="Arial" fontSize="14" fill="#5F6368">G Pay</text>
      </svg>
    ),
  },
  {
    name: "Apple Pay",
    icon: (
      <svg viewBox="0 0 50 20" className="h-4 w-auto" aria-hidden="true">
        <text x="0" y="15" fontFamily="Arial" fontSize="13" fill="#000"> Pay</text>
      </svg>
    ),
  },
];

const CONTACT = [
  {
    label: "E-Mail",
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
    label: "Phone",
    href: "tel:+19412889573",
    value: "(+1) 941 288 95 73",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Seattle, WA, USA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
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
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 sm:gap-x-14">
      {LINK_COLUMNS.map((column, i) => (
        <ul key={i} className="flex flex-col gap-2.5 min-w-[8.5rem]">
          {column.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs font-semibold text-blue-500 uppercase tracking-wide no-underline hover:text-blue-700 hover:translate-x-0.5 inline-block transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

function FooterContactContent() {
  return (
    <ul className="flex flex-col gap-4">
      {CONTACT.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <span className="w-9 h-9 shrink-0 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
            {item.icon}
          </span>
          <div className="min-w-0 pt-0.5">
            <p className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-0.5">{item.label}</p>
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
  return (
    <div className="bg-blue-500 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-4 shadow-lg shadow-blue-500/20 h-full">
      <div>
        <h3 className="text-white font-bold text-sm uppercase tracking-wide text-center mb-2">
          Subscribe to Newsletter
        </h3>
        <p className="text-blue-100 text-xs text-center leading-relaxed">
          Be the first to know our news — once a month, get updates on features and shipping tips.
        </p>
      </div>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full min-h-[44px] px-4 rounded-xl bg-white border-none outline-none text-sm text-gray-900 font-[inherit] placeholder:text-gray-400"
      />

      <input
        type="email"
        placeholder="Email"
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
          I agree to receive email communications from YuuSell
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
          I agree to receive phone communications from YuuSell
        </span>
      </label>

      <button
        type="button"
        className="w-full min-h-[44px] bg-white text-blue-500 text-sm font-bold uppercase tracking-wider rounded-full border-none cursor-pointer hover:bg-blue-50 hover:shadow-md active:scale-[0.98] transition-all duration-150 font-[inherit] mt-1"
      >
        Subscribe
      </button>
    </div>
  );
}

export default function Footer() {
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
        {/* Desktop & tablet grid */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-10 min-w-0">
          {/* 1. Brand */}
          <div className="lg:col-span-3 flex flex-col gap-5 min-w-0">
            <a href="/" className="inline-flex items-center gap-2.5 no-underline w-fit group">
              <img src={yuuLogo} alt="" className="h-9 w-auto transition-transform duration-200 group-hover:scale-105" />
              <span className="text-lg font-bold text-gray-900 tracking-tight">YuuSell</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              Global logistics made simple — fast, affordable international shipping for individuals and businesses.
            </p>
            <button
              type="button"
              onClick={() => setReviewOpen(true)}
              className="w-fit min-h-[44px] px-5 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full border-none cursor-pointer hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all duration-150 font-[inherit]"
            >
              Write a Review
            </button>
            {/* <div className="flex flex-wrap gap-1.5">
              {PAYMENTS.map((p) => (
                <div
                  key={p.name}
                  className="h-8 px-2.5 bg-white border border-gray-200/80 rounded-lg flex items-center justify-center shadow-sm"
                  title={p.name}
                >
                  {p.icon}
                </div>
              ))}
            </div> */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow us</p>
              <div className="flex gap-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center no-underline hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Links */}
          <div className="lg:col-span-2 min-w-0">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-5">Useful Links</h2>
            <FooterLinksContent />
          </div>

          {/* 3. Contact */}
          <div className="lg:col-span-3 min-w-0">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-5">Contact Us</h2>
            <FooterContactContent />
          </div>

          {/* 4. Newsletter */}
          <div className="lg:col-span-4 min-w-0">
            <FooterNewsletter {...newsletterProps} />
          </div>
        </div>

        {/* Tablet: 2×2 */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 min-w-0">
          <div className="flex flex-col gap-5 min-w-0">
            <a href="/" className="inline-flex items-center gap-2.5 no-underline w-fit">
              <img src={yuuLogo} alt="" className="h-9 w-auto" />
              <span className="text-lg font-bold text-gray-900">YuuSell</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              Global logistics made simple — fast, affordable international shipping for individuals and businesses.
            </p>
            <button
              type="button"
              onClick={() => setReviewOpen(true)}
              className="w-fit min-h-[44px] px-5 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full border-none cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
            >
              Write a Review
            </button>
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center no-underline hover:bg-blue-600 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <FooterNewsletter {...newsletterProps} />
          <div className="min-w-0">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Useful Links</h2>
            <FooterLinksContent />
          </div>
          <div className="min-w-0">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Contact Us</h2>
            <FooterContactContent />
          </div>
        </div>

        {/* Mobile: brand + accordion */}
        <div className="md:hidden min-w-0">
          <div className="flex flex-col gap-5 pb-6 border-b border-gray-200/80 mb-2">
            <a href="/" className="inline-flex items-center gap-2.5 no-underline w-fit">
              <img src={yuuLogo} alt="" className="h-9 w-auto" />
              <span className="text-lg font-bold text-gray-900">YuuSell</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              Global logistics made simple — fast, affordable international shipping for individuals and businesses.
            </p>
            <button
              type="button"
              onClick={() => setReviewOpen(true)}
              className="w-full min-h-[44px] px-5 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full border-none cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
            >
              Write a Review
            </button>
            <div className="flex flex-wrap gap-1.5">
              {PAYMENTS.map((p) => (
                <div key={p.name} className="h-8 px-2.5 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                  {p.icon}
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow us</p>
              <div className="flex gap-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-11 h-11 rounded-full bg-blue-500 text-white flex items-center justify-center no-underline hover:bg-blue-600 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FooterAccordion title="Useful Links">
            <FooterLinksContent />
          </FooterAccordion>
          <FooterAccordion title="Contact Us">
            <FooterContactContent />
          </FooterAccordion>
          <FooterAccordion title="Newsletter" defaultOpen>
            <div className="pt-1">
              <FooterNewsletter {...newsletterProps} />
            </div>
          </FooterAccordion>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="page-container py-4 text-center">
          <p className="text-xs text-gray-400">© 2026 All rights reserved &quot;YuuSell&quot;</p>
        </div>
      </div>

      <ReviewModal isOpen={reviewOpen} onClose={() => setReviewOpen(false)} />
    </footer>
  );
}
