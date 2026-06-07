import { useState } from "react";
import { FromModal, WhereModal, TransportModal, ObtainModal } from "../components/CalcModals";
import Footer from "../components/Footer";  

// ── Constants ────────────────────────────────────────────────────────────────
const PARCEL_SIZES = [
  {
    label: "Weight up to 1000 kg",
    desc: "Maximum permissible parcel dimensions: 300 × 170 × 170 cm, weight: 1,000 kg",
  },
  {
    label: "Weight up to 500 kg",
    desc: "Maximum permissible parcel dimensions: 200 × 120 × 120 cm, weight: 500 kg",
  },
  {
    label: "Weight up to 100 kg",
    desc: "Maximum permissible parcel dimensions: 120 × 80 × 80 cm, weight: 100 kg",
  },
  {
    label: "Small parcel up to 30 kg",
    desc: "Maximum permissible parcel dimensions: 60 × 40 × 40 cm, weight: 30 kg",
  },
];

// ── Icons ────────────────────────────────────────────────────────────────────
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-400">
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-400">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Shared UI blocks ─────────────────────────────────────────────────────────
function FormBlock({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
        <h3 className="text-sm font-bold text-gray-900">{title}</h3>
      </div>
      <div className="px-4 sm:px-6 py-4">{children}</div>
    </div>
  );
}

function ClickField({ placeholder, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-3 rounded-full
        bg-gray-50 border border-gray-100 cursor-pointer
        hover:border-blue-300 hover:bg-blue-50 transition-all duration-150 text-left"
    >
      <span className="text-sm text-gray-400">{placeholder}</span>
      <IconChevron />
    </button>
  );
}

function SelectField({ placeholder, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100
          text-sm text-gray-600 outline-none appearance-none cursor-pointer
          font-[inherit] hover:border-blue-300 transition-colors"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => {
          const val = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={val} value={val}>
              {val}
            </option>
          );
        })}
      </select>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <IconChevronDown />
      </span>
    </div>
  );
}

function InputField({ placeholder }) {
  const [val, setVal] = useState("");
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100
        text-sm text-gray-900 outline-none font-[inherit]
        focus:border-blue-400 hover:border-gray-200 transition-colors"
    />
  );
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function CalculatePage() {
  // Form values
  const [fromData, setFromData]   = useState(null);
  const [whereData, setWhereData] = useState(null);
  const [transport, setTransport] = useState("");
  const [obtain, setObtain]       = useState("");
  const [parcelSize, setParcelSize] = useState(PARCEL_SIZES[0].label);
  const [cargo, setCargo]         = useState("");
  const [result, setResult]       = useState(null);

  // Modal open states
  const [fromOpen, setFromOpen]         = useState(false);
  const [whereOpen, setWhereOpen]       = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [obtainOpen, setObtainOpen]     = useState(false);

  const selectedSize = PARCEL_SIZES.find((s) => s.label === parcelSize);

  const handleCalculate = () => {
    if (!fromData || !whereData) {
      alert("Please fill in From and Where fields.");
      return;
    }
    const days  = Math.floor(Math.random() * 20) + 5;
    const price = Math.floor(Math.random() * 500) + 50;
    setResult({ days, price });
  };

  const formatLocation = (data) =>
    data ? [data.city, data.country].filter(Boolean).join(", ") : null;

  return (
    <>
      <section className="page-container min-w-0 py-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
           <a href="/" className="hover:text-blue-500 no-underline text-gray-500">
            Main
          </a>
          <span>›</span>
          <span className="text-gray-900 font-medium">Calculate</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch min-w-0">

          {/* ── Left: form ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* FROM */}
            <FormBlock title="From">
              <ClickField
                placeholder={formatLocation(fromData) ?? "Click to select origin"}
                onClick={() => setFromOpen(true)}
              />
            </FormBlock>

            {/* WHERE */}
            <FormBlock title="Where">
              <ClickField
                placeholder={formatLocation(whereData) ?? "Click to select destination"}
                onClick={() => setWhereOpen(true)}
              />
            </FormBlock>

            {/* TYPE OF SERVICE */}
            <FormBlock title="Type of service">
              <div className="flex flex-col gap-3">
                <ClickField
                  placeholder={transport || "How will we transport it?"}
                  onClick={() => setTransportOpen(true)}
                />
                <ClickField
                  placeholder={obtain || "Method to obtain"}
                  onClick={() => setObtainOpen(true)}
                />
              </div>
            </FormBlock>

            {/* SIZE & TYPE OF PARCEL */}
            <FormBlock title="Size and type of parcel">
              <div className="flex flex-col gap-3">
                <SelectField
                  placeholder="Select size"
                  options={PARCEL_SIZES}
                  value={parcelSize}
                  onChange={setParcelSize}
                />
                {selectedSize && (
                  <p className="text-xs text-blue-400 px-1">{selectedSize.desc}</p>
                )}
                <InputField placeholder="Height cm" />
                <InputField placeholder="Length cm" />
                <InputField placeholder="Width cm" />
              </div>
            </FormBlock>

            {/* DESCRIBE CARGO */}
            <FormBlock title="Describe the cargo">
              <textarea
                placeholder="What needs to be transported?"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100
                  text-sm text-gray-900 outline-none font-[inherit] resize-none
                  focus:border-blue-400 hover:border-gray-200 transition-colors"
              />
            </FormBlock>
          </div>

          {/* ── Right: result sidebar ── */}
          <div className="w-full lg:w-70 lg:shrink-0 lg:sticky lg:top-24 flex flex-col gap-4 min-w-0">

            {/* Info card */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
              <p className="text-sm font-semibold text-teal-800 mb-4">
                Here you can find out the approximate delivery time
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                <button
                  onClick={handleCalculate}
                  className="flex items-center gap-2 bg-teal-500 text-white text-xs
                    font-bold uppercase tracking-wider px-4 py-2.5 rounded-full
                    border-none cursor-pointer hover:bg-teal-600 transition-colors font-[inherit]"
                >
                  Calculate
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  className="flex items-center gap-2 bg-white text-teal-600 text-xs
                    font-bold uppercase tracking-wider px-4 py-2.5 rounded-full
                    border border-teal-200 cursor-pointer hover:bg-teal-50
                    transition-colors font-[inherit]"
                >
                  Create
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Result card */}
            {result && (
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Calculation Result</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">From</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {formatLocation(fromData)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">To</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {formatLocation(whereData)}
                    </span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Delivery time</span>
                    <span className="text-sm font-bold text-blue-500">{result.days} days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Estimated price</span>
                    <span className="text-sm font-bold text-teal-500">from ${result.price}</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                   <button
                     className="w-full h-10 bg-blue-500 text-white text-xs
                       font-bold uppercase tracking-wider rounded-full border-none
                       cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
                   >
                    Book This Shipment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Modals ── */}
        <FromModal
          isOpen={fromOpen}
          onClose={() => setFromOpen(false)}
          onSave={(data) => setFromData(data)}
        />
        <WhereModal
          isOpen={whereOpen}
          onClose={() => setWhereOpen(false)}
          onSave={(data) => setWhereData(data)}
        />
        <TransportModal
          isOpen={transportOpen}
          onClose={() => setTransportOpen(false)}
          onSave={(val) => setTransport(val)}
        />
        <ObtainModal
          isOpen={obtainOpen}
          onClose={() => setObtainOpen(false)}
          onSave={(val) => setObtain(val)}
        />

      </section>
      <Footer/>
    </>
  );
}