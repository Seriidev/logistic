import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function StepSuccess({ trackingId, onCopy }) {
  const { t } = useTranslation("shipment");

  return (
    <div className="flex flex-col items-center text-center py-8 sm:py-12 px-4 max-w-lg mx-auto">
      <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-emerald-500" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1e2a4a] mb-4">
        {t("success.title")}
      </h2>

      <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
        <span className="text-lg sm:text-xl font-bold text-blue-500 tracking-wide">{trackingId}</span>
        <button
          type="button"
          onClick={onCopy}
          aria-label={t("success.copyTrackingAria")}
          className="w-8 h-8 rounded-lg bg-gray-100 border-none cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-8">
        {t("success.pickupHint")}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider border-none cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
        >
          {t("success.downloadPdf")}
          <span aria-hidden="true">↓</span>
        </button>
        <Link
          to="/track"
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider no-underline hover:bg-blue-200 transition-colors"
        >
          {t("success.viewShipments")}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm w-full max-w-sm">
        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
          <svg viewBox="0 0 80 80" className="w-16 h-16" aria-hidden="true">
            <rect x="8" y="8" width="20" height="20" fill="#1d4ed8" />
            <rect x="32" y="8" width="8" height="8" fill="#1d4ed8" />
            <rect x="48" y="8" width="8" height="8" fill="#1d4ed8" />
            <rect x="8" y="32" width="8" height="8" fill="#1d4ed8" />
            <rect x="24" y="32" width="16" height="8" fill="#1d4ed8" />
            <rect x="48" y="32" width="8" height="8" fill="#1d4ed8" />
            <rect x="64" y="32" width="8" height="8" fill="#1d4ed8" />
            <rect x="8" y="48" width="8" height="8" fill="#1d4ed8" />
            <rect x="32" y="48" width="8" height="8" fill="#1d4ed8" />
            <rect x="48" y="48" width="24" height="8" fill="#1d4ed8" />
          </svg>
        </div>
        <p className="text-sm font-medium text-gray-700 text-left">{t("success.qrHint")}</p>
      </div>
    </div>
  );
}
