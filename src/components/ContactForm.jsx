import { useState } from "react";

const SHIPPING_OPTIONS = [
  "Business",
  "Personal",
  "E-commerce",
  "Freight Broker",
  "Other",
];

const PHONE_CODES = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+7", flag: "🇷🇺" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+49", flag: "🇩🇪" },
  { code: "+86", flag: "🇨🇳" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+998", flag: "🇺🇿" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCode, setPhoneCode] = useState("+1");
  const [shipping, setShipping] = useState("Business");

  const handleSubmit = () => {
    alert(`Thank you, ${name}! We'll contact you soon.`);
  };

  return (
    <section className="page-container min-w-0 py-16">
      <div className="max-w-175 mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Connect with us
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Need An Expert Advice?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Get in touch to discuss your specific logistics needs or request more information.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6">

          {/* Row 1 — Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 min-w-0">
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Name*
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 px-5 rounded-full border border-gray-200
                  text-sm text-gray-900 outline-none font-[inherit]
                  focus:border-blue-400 transition-colors duration-150
                  hover:border-gray-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Email*
              </label>
              <input
                type="email"
                placeholder="yourname@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-5 rounded-full border border-gray-200
                  text-sm text-gray-900 outline-none font-[inherit]
                  focus:border-blue-400 transition-colors duration-150
                  hover:border-gray-300"
              />
            </div>
          </div>

          {/* Row 2 — Phone + Shipping */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Phone */}
            <div className="flex-1 min-w-0">
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Phone*
              </label>
              <div className="flex h-12 rounded-full border border-gray-200
                overflow-hidden focus-within:border-blue-400
                hover:border-gray-300 transition-colors duration-150">

                {/* Flag + Code */}
                <div className="flex items-center pl-4 pr-1 gap-1 shrink-0">
                  <span className="text-base">
                    {PHONE_CODES.find((p) => p.code === phoneCode)?.flag}
                  </span>
                  <select
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                    className="text-sm text-gray-700 border-none outline-none
                      bg-transparent cursor-pointer font-[inherit] pr-1"
                  >
                    {PHONE_CODES.map((p) => (
                      <option key={p.code} value={p.code}>{p.code}</option>
                    ))}
                  </select>
                </div>

                <div className="w-px bg-gray-200 my-3" />

                <input
                  type="tel"
                  placeholder="8123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 text-sm text-gray-900 outline-none
                    border-none bg-transparent font-[inherit]"
                />
              </div>
            </div>

            {/* Shipping as */}
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Shipping as*
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.5" className="w-4 h-4">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                  </svg>
                </div>
                <select
                  value={shipping}
                  onChange={(e) => setShipping(e.target.value)}
                  className="w-full h-12 pl-10 pr-10 rounded-full border border-gray-200
                    text-sm text-gray-900 outline-none bg-white cursor-pointer
                    appearance-none font-[inherit]
                    focus:border-blue-400 hover:border-gray-300
                    transition-colors duration-150"
                >
                  {SHIPPING_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" className="w-4 h-4">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full h-14 bg-blue-500 text-white font-semibold text-base
              rounded-full border-none cursor-pointer
              hover:bg-blue-600 active:scale-[0.99]
              transition-all duration-150 font-[inherit]"
          >
            Talk to an Expert
          </button>

        </div>
      </div>
    </section>
  );
}