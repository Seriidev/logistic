import { useState } from "react";
import Footer from "../components/Footer";
import DiscountDetailModal from "../components/DiscountDetailModal";

const OFFER_20_MODAL = {
  heading: "What's Included in the 20% Off Offer?",
  paragraphs: [
    "YuuSell is making it easier than ever to shop from the USA and China with a special welcome offer for new users. Now you can enjoy 20% off your first delivery, automatically applied at checkout — no promo code needed!",
    "Whether you're ordering trendy clothes from the U.S., gadgets from Amazon, or wholesale goods from 1688 or Taobao, YuuSell guarantees fast, affordable, and reliable delivery straight to your door.",
  ],
  listTitle: "🔥 What You Get:",
  listItems: [
    { bold: "20% discount", text: " on your first international delivery" },
    { bold: "Automatic application", text: " — no promo code required" },
    { bold: "Shipping from", text: " the USA and China" },
    { bold: "Real-time tracking", text: ", secure storage, and personal account dashboard" },
    { bold: "Prices starting", text: " from just $5 after discount" },
  ],
};

const XBOX_MODAL = {
  heading: "Autumn Surprise: XBOX Giveaway",
  paragraphs: [
    "🎁 Promo runs: Sept 8–30, 2025",
    "Winner revealed Oct 1, 2025 — follow us on social media to stay tuned.",
    "Don't stop be-leafing — let this autumn surprise you!",
    "Register with YuuSell for a chance to win an XBOX. Good luck!",
  ],
};

const CATEGORIES = [
  { label: "Discounts", count: 5 },
  { label: "Events", count: 0 },
  { label: "YuuSell shopping", count: 0 },
];

const DISCOUNTS = [
  {
    id: 1,
    category: "Discounts",
    title: "Autumn Surprise: XBOX Giveaway",
    description: "🎁 Promo runs: Sept 8–30, 2025\nWinner revealed Oct 1, 2025 — follow us on social media to stay tuned.\nDon't stop be-leafing — let this autumn surprise you%\nGood luck!",
    image: "/discounts/xbox.jpg",
    views: 325,
    date: "18.08.2025",
    path: "/discounts/1",
    special: true,
    modal: XBOX_MODAL,
  },
  {
    id: 2,
    category: "Discounts",
    title: "-20% on the first delivery with YuuSell",
    description: "Get 20% off your first delivery with YuuSell! This article covers how YuuSell makes international shipping from the USA and China fast, affordable, and simple. Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today! Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today!",
    image: "/discounts/discount1.jpg",
    views: 325,
    date: "14.02.2025",
    path: "/discounts/2",
    special: false,
    modal: OFFER_20_MODAL,
  },
  {
    id: 3,
    category: "Discounts",
    title: "-20% on the first delivery with YuuSell",
    description: "Get 20% off your first delivery with YuuSell! This article covers how YuuSell makes international shipping from the USA and China fast, affordable, and simple. Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today! Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today!",
    image: "/discounts/discount2.jpg",
    views: 325,
    date: "14.02.2025",
    path: "/discounts/3",
    special: false,
    modal: OFFER_20_MODAL,
  },
  {
    id: 4,
    category: "Discounts",
    title: "-20% on the first delivery with YuuSell",
    description: "Get 20% off your first delivery with YuuSell! This article covers how YuuSell makes international shipping from the USA and China fast, affordable, and simple. Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today! Perfect for shoppers and small businesses — with automatic discounts, real-time tracking, and prices from just $5. Learn how to start saving today!",
    image: "/discounts/discount3.jpg",
    views: 325,
    date: "14.02.2025",
    path: "/discounts/4",
    special: false,
    modal: OFFER_20_MODAL,
  },
];

export default function DiscountsPage() {
  const [activeCategory, setActiveCategory] = useState("Discounts");
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  const filtered = DISCOUNTS.filter((n) => n.category === activeCategory);

  return (
    <>
    <section className="page-container min-w-0 py-6">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-500 no-underline text-gray-500">Main</a>
        <span>›</span>
        <span className="text-gray-900 font-medium">Discounts</span>
      </div>

      {/* Hero banner */}
      <div className="relative bg-blue-500 rounded-2xl sm:rounded-3xl overflow-hidden mb-8
        min-h-[140px] sm:min-h-[160px] flex items-center px-5 sm:px-10 py-6">

        <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-[400px] max-w-full overflow-hidden pointer-events-none">
          <img
            src="/discounts/gifts-decor.png"
            alt=""
            className="absolute right-0 top-0 h-full object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <div style="position:absolute;right:20px;top:50%;transform:translateY(-50%);
                  display:flex;gap:16px;opacity:0.3">
                  ${["🎁", "🎁", "🎁"].map((g) =>
                    `<span style="font-size:60px">${g}</span>`
                  ).join("")}
                </div>`;
            }}
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Discounts</h1>
          <button type="button" className="banner-cta bg-white text-gray-900 text-xs font-bold uppercase
            tracking-widest px-6 py-2.5 rounded-full border-none cursor-pointer
            hover:bg-blue-50 transition-colors duration-150">
            Ship Now
          </button>
        </div>
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
            No discounts in this category yet.
          </div>
        ) : (
          filtered.map((item) => (
            <div key={item.id}
              className="article-card gap-0 sm:gap-6 bg-white border border-gray-100 rounded-2xl
                shadow-sm hover:shadow-md transition-shadow duration-200">

              {/* Image */}
              <div className="article-card__media bg-blue-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const parent = e.target.parentElement;
                    if (item.special) {
                      parent.innerHTML = `
                        <div style="width:100%;height:100%;background:#1a237e;
                          display:flex;flex-direction:column;align-items:center;
                          justify-content:center;padding:16px;text-align:center">
                          <p style="color:white;font-size:11px;font-weight:700;
                            text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">
                            Register & Win
                          </p>
                          <p style="color:#90caf9;font-size:24px;font-weight:900;
                            margin-bottom:4px">XBOX</p>
                          <p style="color:white;font-size:10px;opacity:0.7">
                            Giveaway<br/>September 8-30
                          </p>
                        </div>`;
                    } else {
                      parent.style.display = "flex";
                      parent.style.flexDirection = "column";
                      parent.style.alignItems = "flex-start";
                      parent.style.justifyContent = "flex-end";
                      parent.style.padding = "16px";
                      parent.innerHTML = `
                        <div style="position:absolute;top:0;right:0;width:120px;height:120px;
                          border-radius:50%;background:rgba(255,255,255,0.1);
                          transform:translate(30px,-30px)"></div>
                        <img src="/logo/logo.svg" style="height:20px;margin-bottom:6px"
                          onerror="this.style.display='none'"/>
                        <p style="color:white;font-weight:700;font-size:12px;
                          line-height:1.3;margin-bottom:4px;position:relative">
                          Save on Your<br/>First Shipment
                        </p>
                        <p style="color:rgba(255,255,255,0.7);font-size:10px;position:relative">
                          20% off your first international shipment.
                        </p>`;
                    }
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
                    {item.views}
                  </div>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h2>

                {/* Description label */}
                <p className="text-xs font-semibold text-gray-500 uppercase
                  tracking-wide mb-1">
                  Description
                </p>

                {/* Text */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-4 mb-3 whitespace-pre-line">
                  {item.description}
                </p>

                {/* Read more */}
                <button
                  type="button"
                  onClick={() => setSelectedDiscount(item)}
                  className="text-sm text-blue-500 font-medium border-none bg-transparent p-0 cursor-pointer hover:underline font-[inherit]"
                >
                  read more...
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>

    <DiscountDetailModal
      isOpen={Boolean(selectedDiscount)}
      onClose={() => setSelectedDiscount(null)}
      discount={selectedDiscount}
    />

    <Footer/>
    </>
  );
}