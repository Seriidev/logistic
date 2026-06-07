import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { NewsModal } from "./NewsModal";  

const CATEGORIES = [
  { label: "Promotion", count: 5 },
  { label: "Events", count: 0 },
  { label: "YuuSell shopping", count: 0 },
];

const NEWS = [
  {
    id: 1,
    category: "Promotion",
    title: "-20% on the first delivery with YuuSell",
    description: "Get 20% off your first delivery with YuuSell! This article covers how YuuSell makes international shipping from the USA and China fast, affordable, and simple. Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today! Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today!",
    image: "/news/news1.jpg",
    views: 325,
    date: "14.02.2025",
    path: "/news/1",
  },
  {
    id: 2,
    category: "Promotion",
    title: "-20% on the first delivery with YuuSell",
    description: "Get 20% off your first delivery with YuuSell! This article covers how YuuSell makes international shipping from the USA and China fast, affordable, and simple. Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today! Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today!",
    image: "/news/news2.jpg",
    views: 325,
    date: "14.02.2025",
    path: "/news/2",
  },
  {
    id: 3,
    category: "Promotion",
    title: "-20% on the first delivery with YuuSell",
    description: "Get 20% off your first delivery with YuuSell! This article covers how YuuSell makes international shipping from the USA and China fast, affordable, and simple. Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today! Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today!",
    image: "/news/news3.jpg",
    views: 325,
    date: "14.02.2025",
    path: "/news/3",
  },
  {
    id: 4,
    category: "Promotion",
    title: "-20% on the first delivery with YuuSell",
    description: "Get 20% off your first delivery with YuuSell! This article covers how YuuSell makes international shipping from the USA and China fast, affordable, and simple. Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today! Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today!",
    image: "/news/news4.jpg",
    views: 325,
    date: "14.02.2025",
    path: "/news/4",
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Promotion");
  const [selectedNews, setSelectedNews] = useState(null);

  const filtered = NEWS.filter((n) => n.category === activeCategory);

  return (
    <>
    
    <section className="page-container min-w-0 py-6">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-500 no-underline text-gray-500">Main</a>
        <span>›</span>
        <span className="text-gray-900 font-medium">News</span>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(cat.label)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
              border-none cursor-pointer transition-all duration-150 font-[inherit]
              ${activeCategory === cat.label
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
            `}
          >
            {cat.label}
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold
              ${activeCategory === cat.label
                ? "bg-white/20 text-white"
                : "bg-gray-200 text-gray-500"}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* News list */}
      <div className="flex flex-col gap-5">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            No news in this category yet.
          </div>
        ) : (
          filtered.map((news) => (
            <div key={news.id}
              className="article-card gap-0 sm:gap-6 bg-white border border-gray-100 rounded-2xl
                shadow-sm hover:shadow-md transition-shadow duration-200">

              {/* Image */}
              <div className="article-card__media bg-blue-500">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.display = "flex";
                    e.target.parentElement.style.flexDirection = "column";
                    e.target.parentElement.style.alignItems = "flex-start";
                    e.target.parentElement.style.justifyContent = "flex-end";
                    e.target.parentElement.style.padding = "16px";
                    e.target.parentElement.innerHTML = `
                      <div style="position:absolute;top:0;right:0;width:120px;height:120px;
                        border-radius:50%;background:rgba(255,255,255,0.1);
                        transform:translate(30px,-30px)"></div>
                      <img src="/logo/logo.svg" style="height:24px;margin-bottom:8px"
                        onerror="this.style.display='none'"/>
                      <p style="color:white;font-weight:700;font-size:13px;line-height:1.3;margin-bottom:4px">
                        Save on Your<br/>First Shipment
                      </p>
                      <p style="color:rgba(255,255,255,0.7);font-size:10px">
                        20% off your first international shipment.
                      </p>`;
                  }}
                />
              </div>

              {/* Content */}
              <div className="article-card__body sm:pr-6">

                {/* Meta */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="1.5" className="w-3.5 h-3.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    {news.views}
                  </div>
                  <span className="text-xs text-gray-400">{news.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-base font-bold text-gray-900 mb-2">
                  {news.title}
                </h2>

                {/* Description label */}
                <p className="text-xs font-semibold text-gray-500 uppercase
                  tracking-wide mb-1">
                  Description
                </p>

                {/* Text */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-4 mb-3">
                  {news.description}
                </p>

                {/* Read more */}
                <button
                  onClick={() => setSelectedNews(news)}
                  className="text-sm text-blue-500 font-medium bg-transparent border-none
                    cursor-pointer p-0 hover:underline font-[inherit] rounded-full"
                >
                  read more...
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </section>
    <NewsModal
  isOpen={!!selectedNews}
  onClose={() => setSelectedNews(null)}
  news={selectedNews}
/>
    <Footer/>
    </>
  );
}