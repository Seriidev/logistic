export function NewsModal({ isOpen, onClose, news }) {
  if (!isOpen || !news) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg sm:max-w-2xl lg:max-w-150 mx-4
        z-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100
            flex items-center justify-center border-none cursor-pointer
            hover:bg-gray-200 transition-colors z-10"
        >
          <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
            <path d="M18 6L6 18M6 6l12 12" stroke="#6b7280" strokeWidth="2"
              strokeLinecap="round"/>
          </svg>
        </button>

        {/* Image */}
        {news.image && (
          <div className="h-50 overflow-hidden">
            <img src={news.image} alt={news.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5 sm:p-8 min-w-0">

          {/* Meta */}
          <div className="flex items-center justify-between mb-4">
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">{news.title}</h2>

          {/* What's included */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            What's Included in the 20% Off Offer?
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            YuuSell is making it easier than ever to shop from the USA and China
            with a special welcome offer for new users. Now you can enjoy 20% off
            your first delivery, automatically applied at checkout — no promo code needed!
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Whether you're ordering trendy clothes from the U.S., gadgets from Amazon,
            or wholesale goods from 1688 or Taobao, YuuSell guarantees fast, affordable,
            and reliable delivery straight to your door.
          </p>

          {/* What you get */}
          <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
            🔥 What You Get:
          </h4>

          <ul className="flex flex-col gap-2.5 mb-6">
            {[
              { bold: "20% discount", text: " on your first international delivery" },
              { bold: "Automatic application", text: " — no promo code required" },
              { bold: "Shipping from", text: " the USA and China" },
              { bold: "Real-time tracking,", text: " secure storage, and personal account dashboard" },
              { bold: "Prices starting", text: " from just $5 after discount" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                <span>
                  <strong className="text-gray-900">{item.bold}</strong>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="w-full h-12 bg-blue-500 text-white font-bold text-sm
            uppercase tracking-wider rounded-full border-none cursor-pointer
            hover:bg-blue-600 transition-colors duration-150 font-[inherit]">
            Get 20% Off Now
          </button>

        </div>
      </div>
    </div>
  );
}