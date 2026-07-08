import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ServicesGrid from "./ServicesGrid";
import { api } from "../utils/api";

const STATUS_COLORS = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  red: { bg: "bg-red-100", text: "text-red-600" },
};

export default function TrackPage() {
  const { t } = useTranslation("track");
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mockResults = useMemo(
    () => ({
      YUU123456: {
        status: t("status.inTransit"),
        statusColor: "blue",
        from: t("demo.fromNy"),
        to: t("demo.toDubai"),
        type: t("cargoType.air"),
        eta: t("demo.etaDate"),
        steps: [
          { label: t("steps.orderPlaced"), date: t("demo.dates.order1"), done: true },
          { label: t("steps.pickedUp"), date: t("demo.dates.pickup1"), done: true },
          { label: t("steps.inTransit"), date: t("demo.dates.transit1"), done: true },
          { label: t("steps.customsClearance"), date: t("demo.dates.customs1"), done: false },
          { label: t("steps.outForDelivery"), date: t("demo.dates.out1"), done: false },
          { label: t("steps.delivered"), date: t("demo.dates.delivered1"), done: false },
        ],
      },
      YUU789012: {
        status: t("status.delivered"),
        statusColor: "green",
        from: t("demo.fromLa"),
        to: t("demo.toShanghai"),
        type: t("cargoType.sea"),
        eta: t("status.delivered"),
        steps: [
          { label: t("steps.orderPlaced"), date: t("demo.dates.order2"), done: true },
          { label: t("steps.pickedUp"), date: t("demo.dates.pickup2"), done: true },
          { label: t("steps.inTransit"), date: t("demo.dates.transit2"), done: true },
          { label: t("steps.customsClearance"), date: t("demo.dates.customs2"), done: true },
          { label: t("steps.outForDelivery"), date: t("demo.dates.out2"), done: true },
          { label: t("steps.delivered"), date: t("demo.dates.delivered2"), done: true },
        ],
      },
    }),
    [t],
  );

  const handleTrack = async (trackingNumber) => {
    if (!trackingNumber.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const apiResult = await api(`/tracking/${trackingNumber.trim()}`);
      setResult(apiResult);
      setNotFound(false);
    } catch (err) {
      setError("Shipment not found. Please check the tracking number.");
      setResult(null);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-container min-w-0 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-blue-500 no-underline text-gray-500">
            {t("common:common.main")}
          </a>
          <span>›</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.title")}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch min-w-0">
          <div className="flex-1 min-w-0 bg-blue-500 rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-8 sm:py-10">
            <h1 className="text-2xl font-extrabold text-white mb-2">{t("title")}</h1>
            <p className="text-blue-100 text-sm mb-6">{t("subtitle")}</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-1 min-w-0 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" width="15" height="15">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack(input)}
                  className="w-full h-12 pl-10 pr-4 rounded-full bg-white border-none outline-none text-sm text-gray-900 font-[inherit]"
                />
              </div>
              <button
                onClick={() => handleTrack(input)}
                className="w-full sm:w-auto h-12 px-6 bg-gray-900 text-white text-sm font-bold uppercase tracking-wider rounded-full border-none cursor-pointer hover:bg-gray-700 transition-colors duration-150 font-[inherit] flex items-center gap-2"
              >
                {t("search")}
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <p className="text-blue-200 text-xs mb-3">
              {t("tryLabel")}{" "}
              <span className="underline cursor-pointer hover:text-white" onClick={() => setInput("YUU123456")}>
                YUU123456
              </span>{" "}
              {t("tryOr")}{" "}
              <span className="underline cursor-pointer hover:text-white" onClick={() => setInput("YUU789012")}>
                YUU789012
              </span>
            </p>

            <p className="text-blue-100 text-xs mb-3 text-center">{t("appPromo")}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#" className="flex items-center gap-2 bg-black text-white text-xs font-medium px-4 py-2.5 rounded-xl no-underline hover:bg-gray-800 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {t("appStore")}
              </a>
              <a href="#" className="flex items-center gap-2 bg-black text-white text-xs font-medium px-4 py-2.5 rounded-xl no-underline hover:bg-gray-800 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5-15 8.5c-.5.33-1.5.33-1.5-.5z" />
                </svg>
                {t("googlePlay")}
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[280px] lg:flex-shrink-0 bg-gray-50 border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col items-center text-center gap-4 min-w-0">
            <p className="text-sm font-bold text-gray-900 leading-snug">{t("telegram.title")}</p>
            <a href="https://t.me/yuusell_bot" className="text-blue-500 text-sm font-semibold no-underline hover:underline">
              {t("telegram.bot")}
            </a>
            <div className="w-40 h-40 bg-white border border-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/qr-telegram.png"
                alt={t("telegram.qrAlt")}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">{t("telegram.scanHint")}</p>
          </div>
        </div>

        {notFound && (
          <div className="mt-6 bg-red-50 border border-red-100 rounded-2xl px-6 py-5 text-center">
            <p className="text-red-500 font-semibold text-sm">{t("notFound")}</p>
          </div>
        )}

        {result && (
          <div className="mt-6 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm min-w-0 overflow-hidden">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">{t("result.trackingNumber")}</p>
                <p className="text-lg font-extrabold text-gray-900">{input.toUpperCase()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">{t("result.status")}</p>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${STATUS_COLORS[result.statusColor].bg} ${STATUS_COLORS[result.statusColor].text}`}>
                  {result.status}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">{t("result.from")}</p>
                <p className="text-sm font-semibold text-gray-900">{result.from}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">{t("result.to")}</p>
                <p className="text-sm font-semibold text-gray-900">{result.to}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">{t("result.type")}</p>
                <p className="text-sm font-semibold text-gray-900">{result.type}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">{t("result.eta")}</p>
                <p className="text-sm font-semibold text-blue-500">{result.eta}</p>
              </div>
            </div>

            <div className="tracking-steps">
              {result.steps.map((step, i) => (
                <div key={i} className="flex items-center flex-1 min-w-[5.5rem] sm:min-w-0 shrink-0 sm:shrink">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.done ? "bg-blue-500" : "bg-gray-100"}`}>
                      {step.done ? (
                        <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                          <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                      )}
                    </div>
                    <p className={`text-xs font-semibold mt-2 text-center ${step.done ? "text-blue-500" : "text-gray-400"}`}>
                      {step.label}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5 text-center">{step.date}</p>
                  </div>
                  {i < result.steps.length - 1 && (
                    <div className={`h-0.5 flex-1 -mt-8 ${result.steps[i + 1].done ? "bg-blue-500" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <ServicesGrid className="mt-12" />
      </section>
    </>
  );
}
