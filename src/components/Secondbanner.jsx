import { useState, useEffect } from "react";

const BANNERS = [
  { id: 1, image: "/banner1.jpg", link: "#banner1" },
  { id: 2, image: "https://placehold.co/1200x300/6366f1/white?text=Banner+2", link: "#banner2" },
  { id: 3, image: "https://placehold.co/1200x300/8b5cf6/white?text=Banner+3", link: "#banner3" },
  { id: 4, image: "https://placehold.co/1200x300/0ea5e9/white?text=Banner+4", link: "#banner4" },
];

export default function SecondBannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="page-container min-w-0 py-6">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {BANNERS.map((banner) => (
            <a key={banner.id} href={banner.link} className="flex-shrink-0 w-full block">
              <img src={banner.image} alt={`Banner ${banner.id}`} className="w-full h-[300px] object-cover" />
            </a>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer ${i === current ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}