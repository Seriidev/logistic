import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const TABS = ["International", "Domestic", "Tracking"];

export default function ShippingCalculator() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("International");
  const [from, setFrom] = useState("USA");
  const [to, setTo] = useState("");
  const [weight1, setWeight1] = useState("");
  const [length1, setLength1] = useState("");
  const [weight2, setWeight2] = useState("");
  const [length2, setLength2] = useState("");
  const [trackingCode, setTrackingCode] = useState("");

  const handleCalculate = () => {
    if (!isAuthenticated()) {
      navigate("/signup?redirect=/create-shipment");
      return;
    }
    navigate("/create-shipment");
  };

  return (
    <section className="page-container min-w-0 py-6">

{/* Breadcrumb */}
       <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6">
         <a href="/" className="hover:text-blue-500 transition-colors no-underline text-gray-500">Main</a>
         <span className="text-gray-400" aria-hidden="true">&gt;</span>
         <span className="text-gray-900 font-medium" aria-current="page">Ship now</span>
       </nav>

      {/* Container */}
      <div className="bg-blue-50 rounded-2xl sm:rounded-3xl px-4 sm:px-10 py-8 sm:py-12 min-w-0">

        {/* Header */}
        <div className="text-center mb-8 ">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            International Shipping Worldwide
          </h1>
          <p className="text-sm text-gray-500">
            Your Ocean Freight may take time, but your quote will arrive in just 2 HOURS!
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl px-4 sm:px-8 py-6 sm:py-8 w-full max-w-full sm:max-w-180 mx-auto min-w-0">

          {/* Tabs */}
          <div className="flex flex-wrap items-center bg-gray-900 rounded-full p-1 w-full sm:w-fit mb-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-6 py-2 rounded-full text-sm font-semibold transition-all duration-150
                  border-none cursor-pointer font-[inherit]
                  ${activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-transparent text-white hover:text-blue-300"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* International / Domestic форма */}
          {(activeTab === "International" || activeTab === "Domestic") && (
            <div className="flex flex-col gap-4">

              {/* From / To */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 min-w-0">
                  <label className="text-xs text-gray-500 mb-1 block">From</label>
                  <input
                    type="text"
                    placeholder="USA"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full h-11 px-4 rounded-full bg-gray-100 border-none
                      outline-none text-sm text-gray-900 font-[inherit]
                      focus:ring-2 focus:ring-blue-300 transition-all"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs text-gray-500 mb-1 block">To</label>
                  <input
                    type="text"
                    placeholder="To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full h-11 px-4 rounded-full bg-gray-100 border-none
                      outline-none text-sm text-gray-900 font-[inherit]
                      focus:ring-2 focus:ring-blue-300 transition-all"
                  />
                </div>
              </div>

              {/* Dimensions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <input
                  type="number"
                  placeholder="Weight"
                  value={weight1}
                  onChange={(e) => setWeight1(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-full bg-gray-100 border-none
                    outline-none text-sm text-gray-900 font-[inherit]
                    focus:ring-2 focus:ring-blue-300 transition-all"
                />
                <input
                  type="number"
                  placeholder="Length"
                  value={length1}
                  onChange={(e) => setLength1(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-full bg-gray-100 border-none
                    outline-none text-sm text-gray-900 font-[inherit]
                    focus:ring-2 focus:ring-blue-300 transition-all"
                />
                <input
                  type="number"
                  placeholder="Weight"
                  value={weight2}
                  onChange={(e) => setWeight2(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-full bg-gray-100 border-none
                    outline-none text-sm text-gray-900 font-[inherit]
                    focus:ring-2 focus:ring-blue-300 transition-all"
                />
                <input
                  type="number"
                  placeholder="Length"
                  value={length2}
                  onChange={(e) => setLength2(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-full bg-gray-100 border-none
                    outline-none text-sm text-gray-900 font-[inherit]
                    focus:ring-2 focus:ring-blue-300 transition-all"
                />
              </div>

              {/* Calculate button */}
              <div className="flex justify-center mt-2">
                <button
                  onClick={handleCalculate}
                  className="bg-blue-500 text-white font-bold text-sm uppercase
                    tracking-widest px-16 py-3 rounded-full border-none cursor-pointer
                    hover:bg-blue-600 active:scale-[0.98]
                    transition-all duration-150 font-[inherit]"
                >
                  Calculate
                </button>
              </div>
            </div>
          )}

          {/* Tracking форма */}
          {activeTab === "Tracking" && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Tracking Number</label>
                <input
                  type="text"
                  placeholder="Enter your tracking number"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  className="w-full h-11 px-4 rounded-full bg-gray-100 border-none
                    outline-none text-sm text-gray-900 font-[inherit]
                    focus:ring-2 focus:ring-blue-300 transition-all"
                />
              </div>
              <div className="flex justify-center mt-2">
                <button
                  onClick={handleCalculate}
                  className="bg-blue-500 text-white font-bold text-sm uppercase
                    tracking-widest px-16 py-3 rounded-full border-none cursor-pointer
                    hover:bg-blue-600 active:scale-[0.98]
                    transition-all duration-150 font-[inherit]"
                >
                  Track
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}