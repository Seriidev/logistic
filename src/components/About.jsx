import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

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

function StatCard({ value, suffix, label1, label2, started }) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="text-center">
      <p className="text-xl sm:text-2xl font-bold text-blue-500">
        {suffix === "$" ? `$${count}Bn+` : `${count}${suffix}`}
      </p>
      <p className="text-sm text-gray-500 mt-1">{label1}</p>
      {label2 && <p className="text-sm text-gray-500">{label2}</p>}
    </div>
  );
}

export default function AboutUs() {
  const { t } = useTranslation();
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="page-container py-10 sm:py-16 min-w-0">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:w-[min(100%,460px)] shrink-0 h-[260px] sm:h-[340px] lg:h-[380px]">

          <img
            src="/team.jpg"
            alt={t("about.images.teamAlt")}
            className="absolute top-0 left-0 w-[58%] sm:w-[300px] max-w-[300px] h-[55%] sm:h-[260px] object-cover rounded-2xl"
            onError={(e) => { e.target.style.background = "#e8eaf6"; e.target.style.opacity = "0.5"; }}
          />

          <div className="absolute bottom-12 sm:bottom-[80px] left-0 bg-white rounded-2xl shadow-lg px-5 py-4 sm:px-8 sm:py-6 text-center">
            <p className="text-3xl sm:text-4xl font-bold text-blue-500">{t("about.badge.years")}</p>
            <p className="text-sm text-gray-500 mt-1">
              {t("about.badge.experienceLine1")}<br />
              {t("about.badge.experienceLine2")}
            </p>
          </div>

          <img
            src="/plane.jpg"
            alt={t("about.images.planeAlt")}
            className="absolute bottom-0 right-0 w-[52%] sm:w-[260px] max-w-[260px] h-[48%] sm:h-[200px] object-cover rounded-2xl"
            onError={(e) => { e.target.style.background = "#e8eaf6"; e.target.style.opacity = "0.5"; }}
          />

          <div className="absolute bottom-12 sm:bottom-[80px] right-[38%] sm:right-[200px] w-14 h-14 sm:w-20 sm:h-20 bg-blue-500 rounded-xl" />
        </div>

        <div className="flex-1 min-w-0 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 uppercase tracking-wide mb-4">
            {t("about.title")}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8 sm:mb-10 max-w-full lg:max-w-[500px]">
            {t("about.description")}
          </p>
          <div className="border-t border-gray-100 mb-6 sm:mb-8 max-w-full lg:max-w-[420px]" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            <StatCard
              value={6.5}
              suffix="$"
              label1={t("about.stats.assetsLabel1")}
              label2={t("about.stats.assetsLabel2")}
              started={started}
            />
            <StatCard
              value={300}
              suffix="K+"
              label1={t("about.stats.shipmentsLabel1")}
              label2={t("about.stats.shipmentsLabel2")}
              started={started}
            />
            <StatCard
              value={25}
              suffix="K+"
              label1={t("about.stats.clientsLabel1")}
              label2={t("about.stats.clientsLabel2")}
              started={started}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
