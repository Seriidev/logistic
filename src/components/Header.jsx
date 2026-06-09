import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import yuuLogo from "../logo/logo.svg";

const LANGUAGES = [
  { code: "RU", flag: "🇷🇺", name: "Русский", popular: true },
  { code: "EN", flag: "EN", name: "English", popular: true },
  { code: "ZH", flag: "🇨🇳", name: "中文", popular: true },
  { code: "UZ", flag: "🇺🇿", name: "O'zbek", popular: true },
  { code: "DE", flag: "🇩🇪", name: "Deutsch", popular: false },
  { code: "TR", flag: "🇹🇷", name: "Türkçe", popular: false },
  { code: "KZ", flag: "🇰🇿", name: "Қазақша", popular: false },
  { code: "JA", flag: "🇯🇵", name: "日本語", popular: false },
  { code: "KO", flag: "🇰🇷", name: "한국어", popular: false },
  { code: "AR", flag: "🇦🇪", name: "العربية", popular: false },
];

const NAV_LINKS = [
  { label: "Ship now", href: "/ship-now" },
  { label: "Track", href: "/track" },
  { label: "Locations", href: "/location" },
  { label: "Discounts", href: "/discounts" },
  { label: "Services", href: "/serviceshead" },
  { label: "Contact us", href: "/contact" },
  { label: "Calculate", href: "/calculate" },
];

const IconSearch = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const IconPhone = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 .93h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z" />
  </svg>
);

const IconChevron = ({ open, className = "" }) => (
  <svg
    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"} ${className}`}
    viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconMenu = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
  </svg>
);

const IconClose = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);

function NavLink({ href, label, active, onClick, mobile = false }) {
  const isRoute = href.startsWith("/");
  const base = mobile
    ? "block w-full text-left text-base font-medium px-4 py-3.5 rounded-xl transition-colors"
    : "text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-150";
  const activeClass = mobile
    ? "bg-blue-500 text-white"
    : active ? "text-white bg-blue-500" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100";
  const inactiveClass = mobile
    ? "text-gray-800 hover:bg-gray-100"
    : active ? "text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100";

  const className = `${base} no-underline ${active ? activeClass : inactiveClass}`;

  if (isRoute) {
    return (
      <Link to={href} onClick={onClick} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} onClick={(e) => { e.preventDefault(); onClick?.(); }} className={className}>
      {label}
    </a>
  );
}

function SearchBar({ compact = false }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`
        relative w-full h-11
        ${compact ? "max-w-none" : "max-w-full lg:max-w-[26rem]"}
      `}
    >
      <div
        className={`
          flex items-center h-full w-full rounded-full pl-3 pr-[5.5rem] sm:pr-[6.25rem]
          transition-all duration-200
          ${focused ? "bg-white border border-blue-500 shadow-sm" : "bg-gray-100 border border-transparent"}
        `}
      >
        <IconSearch className="text-gray-400 mr-2 shrink-0" />
        <input
          type="search"
          placeholder="Search or tracking"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 min-w-0 h-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />
      </div>
      <button
        type="button"
        className="search-field-btn absolute right-1 top-1/2 -translate-y-1/2
          bg-blue-600 hover:bg-blue-700 text-white text-[11px] sm:text-xs font-semibold
          px-3 sm:px-4 h-8 rounded-full transition-colors whitespace-nowrap"
      >
        SEARCH
      </button>
    </div>
  );
}

function LangItem({ lang, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex items-center gap-2 w-full h-10 px-3.5 mx-1.5 my-0.5 border-none rounded-xl text-sm font-medium cursor-pointer transition-colors font-[inherit]
        ${isSelected ? "bg-blue-50 text-blue-600" : "bg-transparent text-gray-900 hover:bg-gray-50"}`}
    >
      <span className="text-base w-5 text-center leading-none shrink-0">{lang.flag}</span>
      <span className="flex-1 text-left truncate">{lang.name}</span>
      <span className={`text-blue-500 shrink-0 ${isSelected ? "opacity-100" : "opacity-0"}`}>
        <IconCheck />
      </span>
    </button>
  );
}

function LanguageSwitcher({ className = "" }) {
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const popular = LANGUAGES.filter((l) => l.popular);
  const others = LANGUAGES.filter((l) => !l.popular);

  return (
    <div ref={ref} className={`relative shrink-0 ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`
          flex items-center justify-center gap-1.5 h-10 min-h-[44px] min-w-[4.25rem] px-3.5 rounded-full cursor-pointer
          text-sm font-semibold tracking-wide text-gray-800 transition-all duration-200 border font-[inherit]
          ${open
            ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm shadow-blue-500/10"
            : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/80 hover:text-blue-600"}
        `}
      >
        <span>{selected.code}</span>
        <IconChevron open={open} className={open ? "text-blue-500" : "text-gray-400"} />
      </button>

      <div
        role="listbox"
        className={`
          absolute top-[calc(100%+8px)] right-0 w-56 max-w-[calc(100vw-2rem)]
          bg-white border border-gray-200 rounded-2xl
          shadow-lg shadow-gray-200/80 overflow-hidden z-[9999]
          transition-all duration-200 ease-out
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}
        `}
      >
        <div className="text-[11px] font-semibold text-gray-400 px-3.5 pt-2.5 pb-1 tracking-wide uppercase">
          Популярные
        </div>
        {popular.map((lang) => (
          <LangItem
            key={lang.code}
            lang={lang}
            isSelected={selected.code === lang.code}
            onSelect={() => { setSelected(lang); setOpen(false); }}
          />
        ))}
        <div className="h-px bg-gray-100 my-1" />
        <div className="text-[11px] font-semibold text-gray-400 px-3.5 pt-2.5 pb-1 tracking-wide uppercase">
          Другие
        </div>
        {others.map((lang) => (
          <LangItem
            key={lang.code}
            lang={lang}
            isSelected={selected.code === lang.code}
            onSelect={() => { setSelected(lang); setOpen(false); }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname || "#services";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full bg-white border-b border-gray-100
        transition-shadow duration-300 min-w-0
        ${scrolled ? "shadow-[0_1px_3px_rgba(0,0,0,0.07),0_4px_16px_rgba(0,0,0,0.05)]" : "shadow-none"}
      `}
    >
      <div className="page-container">
        {/* Top row */}
        <div className="flex items-center gap-3 h-14 sm:h-16 min-w-0">
          <a href="/" className="flex items-center gap-2 no-underline shrink-0">
            <img src={yuuLogo} alt="YuuSell" className="h-7 sm:h-8 w-auto" />
          </a>

          <div className="hidden lg:block flex-1 min-w-0" />

          <div className="hidden lg:flex items-center gap-3 min-w-0 flex-1 max-w-md">
            <SearchBar />
          </div>

          <a
            href="tel:+78005553535"
            className="hidden xl:flex items-center gap-1.5 text-sm font-medium text-gray-900
              no-underline px-2.5 py-1.5 rounded-lg hover:bg-gray-100 transition-colors shrink-0"
          >
            <span className="text-blue-500"><IconPhone /></span>
            +7 (800) 555-35-35
          </a>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <LanguageSwitcher />
            <Link
              to="/signup"
              className="flex items-center h-10 px-4 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold
                no-underline cursor-pointer hover:bg-blue-600 hover:text-white transition-all font-[inherit]"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="flex items-center h-10 px-4 bg-blue-500 text-white rounded-full text-sm font-semibold
                no-underline hover:bg-blue-600 font-[inherit]"
            >
              Log in
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden ml-auto flex items-center justify-center w-11 h-11 rounded-xl
              text-gray-800 hover:bg-gray-100 border-none bg-transparent cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Search — mobile & tablet */}
        <div className="pb-3 lg:hidden min-w-0">
          <SearchBar compact />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 pb-2 overflow-x-auto scrollbar-none">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={activeLink === link.href}
            />
          ))}
        </nav>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex flex-col">
          <button
            type="button"
            className="absolute inset-0 bg-black/40 border-none cursor-pointer"
            onClick={closeMenu}
            aria-label="Close menu overlay"
          />
          <div
            className="relative ml-auto w-full max-w-sm h-full bg-white shadow-xl flex flex-col
              animate-[slideIn_0.2s_ease-out] overflow-y-auto"
            style={{ maxHeight: "100dvh" }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <span className="text-sm font-bold text-gray-900">Menu</span>
              <button
                type="button"
                onClick={closeMenu}
                className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-gray-100 border-none bg-transparent cursor-pointer"
                aria-label="Close menu"
              >
                <IconClose />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={activeLink === link.href}
                  onClick={closeMenu}
                  mobile
                />
              ))}
            </nav>

            <div className="mt-auto p-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:+78005553535"
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-gray-50 text-gray-900
                  no-underline text-sm font-semibold"
              >
                <span className="text-blue-500"><IconPhone /></span>
                +7 (800) 555-35-35
              </a>
              <LanguageSwitcher className="w-full [&>button]:w-full [&>button]:justify-center" />
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="flex h-11 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-900 no-underline"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="h-11 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold no-underline"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
