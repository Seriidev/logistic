import { useState } from "react";
import { useTranslation } from "react-i18next";

export function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-2 max-w-3xl mx-auto">
      {eyebrow && (
        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3 ${
            light ? "text-blue-200" : "text-blue-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight mb-3 sm:mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-sm sm:text-base leading-relaxed ${light ? "text-blue-100" : "text-gray-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function CheckItem({ text }) {
  return (
    <div className="flex items-start gap-2.5 min-w-0">
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5">
        <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="1.5" />
        <path
          d="M9 12l2 2 4-4"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{text}</span>
    </div>
  );
}

export function ImageBlock({ src, alt, hint, className = "" }) {
  const { t } = useTranslation("airCargo");

  return (
    <div className={`overflow-hidden bg-gray-100 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = "none";
          const parent = e.target.parentElement;
          parent.style.display = "flex";
          parent.style.alignItems = "center";
          parent.style.justifyContent = "center";
          parent.style.flexDirection = "column";
          parent.style.gap = "8px";
          const fallbackHint = hint || t("shared.imageHint", { path: src });
          parent.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5"
              style="width:48px;height:48px">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            <p style="font-size:12px;color:#9ca3af;text-align:center;padding:0 12px">
              ${fallbackHint}
            </p>`;
        }}
      />
    </div>
  );
}

export function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 min-w-0 ${
        open ? "border-blue-200 bg-blue-50" : "border-gray-100 bg-gray-50"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-4
          text-left bg-transparent border-none cursor-pointer font-[inherit] min-w-0"
      >
        <span
          className={`text-sm sm:text-base font-medium min-w-0 flex-1 ${
            open ? "text-blue-600" : "text-gray-800"
          }`}
        >
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-blue-500" : "bg-gray-200"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width="12"
            height="12"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke={open ? "white" : "#6b7280"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 min-w-0">
          <div className="h-px bg-blue-200 mb-3 sm:mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
