import { useEffect, useState } from "react";

function StarRating({ rating, setRating }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1" role="group" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          className="border-none bg-transparent cursor-pointer p-0.5 rounded-md transition-transform hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-150"
            fill={star <= (hovered || rating) ? "#f59e0b" : "#e5e7eb"}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export function ReviewModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert("Please fill in your name and review.");
      return;
    }
    alert("Thank you for your review!");
    setName("");
    setEmail("");
    setMessage("");
    setRating(5);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 footer-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl z-10 max-h-[92dvh] overflow-y-auto footer-modal-panel">
        <div className="sticky top-0 flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-100 bg-white rounded-t-2xl sm:rounded-t-2xl">
          <h2 id="review-modal-title" className="text-lg font-bold text-gray-900">
            Write a Review
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 shrink-0 rounded-full bg-gray-100 flex items-center justify-center border-none cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 flex flex-col gap-5">
          <div className="flex flex-col items-center gap-2 py-1">
            <span className="text-sm font-medium text-gray-600">Your rating</span>
            <StarRating rating={rating} setRating={setRating} />
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</span>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 outline-none text-sm text-gray-900 font-[inherit] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</span>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 outline-none text-sm text-gray-900 font-[inherit] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Review</span>
            <textarea
              placeholder="Share your experience with YuuSell..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-sm text-gray-900 font-[inherit] resize-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </label>

          <button
            type="submit"
            className="w-full min-h-[44px] bg-blue-500 text-white font-bold text-sm uppercase tracking-wider rounded-full border-none cursor-pointer hover:bg-blue-600 active:scale-[0.98] transition-all duration-150 font-[inherit]"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
