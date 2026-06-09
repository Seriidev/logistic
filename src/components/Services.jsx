import { useState, useRef, useEffect } from "react";
import { useIsDesktop } from "../hooks/useMediaQuery";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../data/services";

const GAP = 24;
const CARD_WIDTH_LG = 300;

const IconChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Services() {
  const isDesktop = useIsDesktop();
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const [stepPx, setStepPx] = useState(CARD_WIDTH_LG + GAP);

  const visibleCount = isDesktop ? 3 : 1;
  const maxIndex = Math.max(0, SERVICES.length - visibleCount);

  useEffect(() => {
    if (!isDesktop || !trackRef.current) return;
    const first = trackRef.current.children[0];
    if (!first) return;
    const update = () => setStepPx(first.getBoundingClientRect().width + GAP);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [isDesktop]);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="page-container py-8 sm:py-12 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 uppercase tracking-wide mb-2 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm text-gray-500">
            International solutions for all your shipping and delivery needs
          </p>
        </div>

        <div className="hidden lg:flex gap-2 shrink-0">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            className={`
              w-10 h-10 min-h-[44px] rounded-full border flex items-center justify-center
              transition-all duration-150
              ${index === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 cursor-pointer"}
            `}
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={index === maxIndex}
            className={`
              w-10 h-10 min-h-[44px] rounded-full border flex items-center justify-center
              transition-all duration-150
              ${index === maxIndex
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-blue-500 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"}
            `}
          >
            <IconChevronRight />
          </button>
        </div>
      </div>

      <div className="border-t border-dashed border-blue-300 mb-6 sm:mb-8" />

      {/* Mobile / tablet: native horizontal snap */}
      <div className="lg:hidden -mx-4 px-4 min-w-0">
        <div className="snap-carousel snap-carousel--services">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              className="w-[min(82vw,240px)] sm:w-[min(76vw,272px)] md:w-[min(70vw,300px)]"
            />
          ))}
        </div>
      </div>

      {/* Desktop: controlled carousel */}
      <div className="hidden lg:block overflow-hidden py-2 px-1 min-w-0">
        <div
          ref={trackRef}
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * stepPx}px)` }}
        >
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              className="w-75"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
