import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Recommended upload size for /public/banner1.jpg, banner2.jpg, etc.:
 * 1920 × 560 px (ratio ~3.43:1), JPG or WebP, max ~350 KB.
 * Safe zone for text: center 80% of width.
 */
const BANNERS = [
  { id: 1, image: "/air-banner1.jpg", link: "#banner1" },
  { id: 2, image: "/air-banner2.jpg", link: "#banner2" },
  { id: 3, image: "/air-banner3.jpg", link: "#banner3" },
  { id: 4, image: "/air-banner4.jpg", link: "#banner4" },
];

export default function AirBanner() {
  const { t } = useTranslation("airCargo");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="page-container py-4 sm:py-6 min-w-0">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {BANNERS.map((banner) => (
            <a key={banner.id} href={banner.link} className="shrink-0 w-full block">
              <div className="hero-banner">
                <img
                  src={banner.image}
                  alt={t("banner.slideAlt", { n: banner.id })}
                />
              </div>
            </a>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {BANNERS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`carousel-nav-btn h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer ${i === current ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
              aria-label={t("banner.goToSlide", { n: i + 1 })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
