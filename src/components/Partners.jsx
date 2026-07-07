import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../hooks/useMediaQuery";

const PARTNERS = [
  { id: 1, name: "Emirates", logo: "/partners/emirates.png" },
  { id: 2, name: "Turkish Airlines", logo: "/partners/turkish.png" },
  { id: 3, name: "MSC", logo: "/partners/msc.png" },
  { id: 4, name: "Lufthansa", logo: "/partners/lufthansa.png" },
  { id: 5, name: "Air India", logo: "/partners/airindia.png" },
  { id: 6, name: "UPS", logo: "/partners/ups.png" },
  { id: 7, name: "Wildberries", logo: "/partners/wildberries.png" },
  { id: 8, name: "Amazon", logo: "/partners/amazon.png" },
  { id: 9, name: "Etsy", logo: "/partners/etsy.png" },
  { id: 10, name: "AliExpress", logo: "/partners/aliexpress.png" },
  { id: 11, name: "eBay", logo: "/partners/ebay.png" },
  { id: 12, name: "iHerb", logo: "/partners/iherb.png" },
  { id: 13, name: "OZON", logo: "/partners/ozon.png" },
  { id: 14, name: "Shopify", logo: "/partners/shopify.png" },
];

function PartnerLogo({ partner }) {
  return (
    <div className="shrink-0 flex items-center justify-center h-14 sm:h-16 grayscale hover:grayscale-0 transition-all duration-300">
      <img
        src={partner.logo}
        alt={partner.name}
        className="h-7 sm:h-8 w-auto object-contain max-w-[120px] mx-auto"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.innerHTML = `<span class="text-gray-400 font-semibold text-sm text-center">${partner.name}</span>`;
        }}
      />
    </div>
  );
}

export function Partners() {
  const { t } = useTranslation();
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let scrollWidth = marquee.scrollWidth;

    const calculateWidth = () => {
      scrollWidth = marquee.scrollWidth;
    };

    const step = () => {
      positionRef.current -= 0.5;
      if (Math.abs(positionRef.current) >= scrollWidth / 2) {
        positionRef.current = 0;
      }
      marquee.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(step);
    };

    const start = () => {
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    const stop = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const container = marquee.parentElement;
    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    start();

    return () => {
      stop();
      container.removeEventListener("mouseenter", stop);
      container.removeEventListener("mouseleave", start);
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  return (
    <section className="page-container py-8 sm:py-12 min-w-0 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 uppercase tracking-wide mb-3 sm:mb-4 text-center">
        {t("partners.title")}
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6 sm:mb-8 px-2">
        {t("partners.subtitle")}
      </p>

      <div className="w-full overflow-hidden" style={{ minHeight: "3.5rem" }}>
        <div
          ref={marqueeRef}
          className="flex gap-6 sm:gap-12 items-center"
          style={{ width: "max-content" }}
        >
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <PartnerLogo key={`${p.id}-${i}`} partner={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { id: 1, name: "John Smith", verified: true, title: "Amazing Service!", text: "The team delivered exactly what we needed, on time and with great attention to detail.", rating: 4, avatar: "/reviews/john.jpg" },
  { id: 2, name: "Sarah Lee", verified: true, title: "Amazing Service!", text: "The team delivered exactly what we needed, on time and with great attention to detail.", rating: 4, avatar: "/reviews/sarah.jpg" },
  { id: 3, name: "Mike Johnson", verified: true, title: "Amazing Service!", text: "The team delivered exactly what we needed, on time and with great attention to detail.", rating: 4, avatar: "/reviews/mike.jpg" },
  { id: 4, name: "Anna Brown", verified: true, title: "Amazing Service!", text: "The team delivered exactly what we needed, on time and with great attention to detail.", rating: 5, avatar: "/reviews/anna.jpg" },
  { id: 5, name: "David Kim", verified: true, title: "Amazing Service!", text: "The team delivered exactly what we needed, on time and with great attention to detail.", rating: 4, avatar: "/reviews/david.jpg" },
];

const GAP = 24;

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mt-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} viewBox="0 0 20 20" className="w-4 h-4"
          fill={star <= rating ? "#f59e0b" : "#e5e7eb"}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, width, title, text }) {
  return (
    <div
      className="shrink-0 bg-white rounded-2xl p-5 sm:p-6 shadow-sm"
      style={width ? { width: `${width}px` } : undefined}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background = "#3b82f6";
              e.target.parentElement.innerHTML = `<span style="color:white;font-weight:600;font-size:14px;display:flex;align-items:center;justify-content:center;width:100%;height:100%">${review.name[0]}</span>`;
            }}
          />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-gray-900 truncate">{review.name}</span>
            {review.verified && (
              <svg viewBox="0 0 20 20" fill="#f59e0b" className="w-4 h-4 shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
      </div>
      <h4 className="text-sm font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
      <StarRating rating={review.rating} />
    </div>
  );
}

function Reviews() {
  const { t } = useTranslation();
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isSm = useMediaQuery("(min-width: 640px)");
  const visibleCount = isLg ? 3 : isSm ? 2 : 1;
  const maxIndex = Math.max(0, REVIEWS.length - visibleCount);

  const [current, setCurrent] = useState(0);
  const viewportRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const stepPx = cardWidth + GAP;

  useEffect(() => {
    setCurrent((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      setCardWidth((w - GAP * (visibleCount - 1)) / visibleCount);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [visibleCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const prev = () => setCurrent((p) => Math.max(p - 1, 0));
  const next = () => setCurrent((p) => Math.min(p + 1, maxIndex));

  return (
    <section className="bg-blue-500 py-8 sm:py-12 min-w-0 overflow-hidden">
      <div className="page-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mb-2 sm:mb-4">
              {t("reviews.title")}
            </h2>
            <p className="text-blue-100 text-sm">
              {t("reviews.subtitle")}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={prev}
              disabled={current === 0}
              className="carousel-nav-btn w-10 h-10 rounded-full border border-white/30 bg-white/10
                flex items-center justify-center text-white cursor-pointer
                hover:bg-white/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label={t("reviews.nav.previous")}
            >
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              disabled={current === maxIndex}
              className="carousel-nav-btn w-10 h-10 rounded-full border border-white/30 bg-white/10
                flex items-center justify-center text-white cursor-pointer
                hover:bg-white/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label={t("reviews.nav.next")}
            >
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div ref={viewportRef} className="overflow-hidden py-2 min-w-0">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={cardWidth ? { transform: `translateX(-${current * stepPx}px)` } : undefined}
          >
            {REVIEWS.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                width={cardWidth}
                title={t("reviews.items.title")}
                text={t("reviews.items.text")}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`carousel-nav-btn h-1.5 rounded-full border-none cursor-pointer transition-all ${i === current ? "w-5 bg-white" : "w-1.5 bg-white/40"}`}
              aria-label={t("reviews.nav.slide", { n: i + 1 })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Reviews };