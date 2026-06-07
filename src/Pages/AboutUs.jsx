import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
// ── Counter hook ──
function useCountUp(target, duration = 2000, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

// ── Stat card ──
function StatCard({ value, suffix, label, icon, started }) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center
        justify-center shrink-0 text-blue-500">
        {icon}
      </div>
      <div>
        <p className="text-xl font-extrabold text-gray-900">
          {count.toLocaleString()}{suffix}
        </p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
}

// ── Timeline item ──
function TimelineItem({ year, title, description, image, isLeft }) {
  return (
    <div className={`flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8 min-w-0
      ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

      {/* Content */}
      <div className={`flex-1 min-w-0 text-left ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
        <p className="text-blue-500 font-extrabold text-lg mb-1">{year}</p>
        <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>

      {/* Center dot */}
      <div className="hidden lg:flex flex-col items-center shrink-0">
        <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 z-10" />
      </div>

      {/* Image */}
      <div className="flex-1 min-w-0 w-full">
        <div className="rounded-2xl overflow-hidden h-35 bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background = "#e8eaf6";
              e.target.parentElement.style.display = "flex";
              e.target.parentElement.style.alignItems = "center";
              e.target.parentElement.style.justifyContent = "center";
              e.target.parentElement.innerHTML = `
                <p style="font-size:11px;color:#9ca3af;text-align:center">
                  Add photo:<br/>${image}<br/>600×280px
                </p>`;
            }}
          />
        </div>
      </div>
    </div>
  );
}

const TIMELINE = [
  {
    year: "2018",
    title: "Company Founded",
    description: "YuuSell was born from a team of logistics and tech experts aiming to simplify international delivery for everyday people and growing businesses.",
    image: "/about/timeline-2018.jpg",
    isLeft: true,
  },
  {
    year: "2019",
    title: "First Warehouse in the USA",
    description: "We launched our first warehouse in New York, building a reliable shipping route between the U.S. and China/Europe — and laying the foundations for our B2C services.",
    image: "/about/timeline-2019.jpg",
    isLeft: false,
  },
  {
    year: "2021",
    title: "Expansion into the EU",
    description: "YuuSell started Europe operations partnering with local carriers and integrating with leading e-commerce platforms to serve clients in the European regulation.",
    image: "/about/timeline-2021.jpg",
    isLeft: true,
  },
  {
    year: "2024",
    title: "Launch of YuuSell Online",
    description: "We launched our new digital platform delivering online store real-time tracking, and a customer dashboard — elevating shipping clarity like never.",
    image: "/about/timeline-2024.jpg",
    isLeft: false,
  },
];

const WHY_US = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        className="w-5 h-5">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: "100K+ Shipments/Year",
    description: "Whether you need help with picking, packing, kitting or BPMI to offer local warehousing, YuuSell offers best-in-class fulfillment at competitive rates in every category.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        className="w-5 h-5">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
      </svg>
    ),
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help — whether you have questions about your order, customs, or delivery status. We're here around the clock.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Smart Online Tools",
    description: "From real-time tracking and CRM-connected label printing — YuuSell uses cutting-edge tools to keep you informed and in control — manage shipments easily.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
    title: "Seamless Global Integration",
    description: "We integrate across Amazon, eBay, Etsy, and OZON to offer truly scalable delivery through the world's largest platforms.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "For Individuals and Businesses",
    description: "Whether you're a shopper ordering items for personal use or a commercial entity needing white-label logistics, YuuSell offers tailored solutions for every scale.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Secure and Transparent",
    description: "No hidden fees, full cargo insurance, and complete payment transparency. YuuSell gives you complete visibility — proposal fact — protected.",
  },
];

export default function AboutUsPage() {
  const [started, setStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO BANNER ── */}
      <section className="page-container min-w-0 py-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-blue-500 no-underline text-gray-500">Main</a>
          <span>›</span>
          <span className="text-gray-900 font-medium">About us</span>
        </div>

        {/* Banner */}
        <div className="relative bg-blue-500 rounded-2xl sm:rounded-3xl overflow-hidden min-h-[140px] sm:min-h-55
          flex items-center px-5 sm:px-10 py-6 mb-8 sm:mb-12">
          <div className="absolute right-50 top-1/2 -translate-y-1/2
            w-60 h-60 rounded-full border-48 border-white/10" />
          <img
            src="/about/team-banner.jpg"
            alt="Team"
            className="absolute right-0 bottom-0 h-full object-cover w-1/2 sm:w-[45%] max-w-full pointer-events-none"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div className="relative z-10 max-w-full sm:max-w-105 min-w-0 pr-[45%] sm:pr-0">
            <h1 className="text-2xl font-extrabold text-white mb-3 leading-tight">
              Calculate shipping and send your parcel in a minute
            </h1>
            <p className="text-blue-100 text-xs mb-5 leading-relaxed">
              Fast, simple and transparent — no hidden fees.<br/>
              Select a country, specify the weight — and get an exact price.
            </p>
            <button type="button" className="banner-cta bg-white text-gray-900 text-xs font-bold uppercase
              tracking-widest px-6 py-2.5 rounded-full border-none cursor-pointer
              hover:bg-blue-50 transition-colors">
              Ship Now
            </button>
          </div>
        </div>

        {/* ── STATS ── */}
        <div ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16 bg-white rounded-2xl
            border border-gray-100 shadow-sm px-4 sm:px-8 py-5 sm:py-6">
          <StatCard value={100000} suffix="+" label="Registered clients / Customers"
            started={started}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>}
          />
          <StatCard value={20} suffix="+" label="Minimum delivery from 20 countries"
            started={started}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20"/></svg>}
          />
          <StatCard value={26} suffix="+" label="Major services and offices"
            started={started}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
          />
          <StatCard value={1457000} suffix="" label="Number of delivered parcels"
            started={started}
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 001 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>}
          />
        </div>

        {/* ── TIMELINE ── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              How It All Started
            </h2>
            <p className="text-sm text-gray-400">
              Every great brand began with a simple idea — here's how YuuSell grew from
              a small startup to a global shipping company.
            </p>
          </div>

          {/* Timeline line */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0
              w-0.5 bg-blue-100 z-0" />
            <div className="flex flex-col gap-10 relative z-10">
              {TIMELINE.map((item) => (
                <TimelineItem key={item.year} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* ── WHY US ── */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              Why Customers Choose Us
            </h2>
            <p className="text-sm text-gray-400">
              Trusted by thousands of happy clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {WHY_US.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3
                hover:bg-blue-50 transition-colors duration-150">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white
                  flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}