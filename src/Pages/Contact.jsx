import { useState } from "react";
import Footer from "../components/Footer";
import PhoneInputField from "../components/PhoneInputField";
import { getPhoneValidationError } from "../utils/phone";

const TABS = ["Claim", "Question", "Feedback"];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("Feedback");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const handleSend = () => {
    if (!agreed) { alert("Please agree to the terms."); return; }
    const err = getPhoneValidationError(phone, { required: true });
    if (err) {
      setPhoneError(err);
      return;
    }
    setPhoneError("");
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <>
    <section className="page-container min-w-0 py-6">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-500 no-underline text-gray-500">Main</a>
        <span>›</span>
        <span className="text-gray-900 font-medium">Contact us</span>
      </div>

      {/* Main card */}
      <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 min-w-0">

        {/* Левая часть — контакты */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Contact us</h1>

          <div className="flex flex-col gap-6">

            {/* Address */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-sm text-gray-500">Minnesota</p>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Phone */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Phone number</h3>
              <div className="flex flex-col gap-1">
                {["+1 862-652-1545", "+1 862-652-1545", "+1 862-652-1545"].map((p, i) => (
                  <a key={i} href={`tel:${p.replace(/\s|-/g, "")}`}
                    className="text-sm text-gray-500 no-underline hover:text-blue-500 transition-colors duration-150">
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Email */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Email</h3>
               <a href="mailto:info.usa@yuusell.gmail.com"
                 className="text-sm text-gray-500 no-underline hover:text-blue-500
                   transition-colors duration-150">
                 info.usa@yuusell.gmail.com
               </a>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Working hours */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Working hours</h3>
              <p className="text-sm text-gray-500">Monday - Friday 8:00 AM - 6:00 PM EST</p>
              <p className="text-sm text-gray-500">Saturday: 9:00 AM - 6:00 PM EST</p>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Live help */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Live help</h3>
              <p className="text-sm text-gray-500">Monday - Friday 8:00 AM - 6:00 PM EST</p>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Financial */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                For all financial and office-related questions please call:
              </h3>
               <a href="tel:+18626521545"
                 className="text-sm text-gray-500 no-underline hover:text-blue-500
                   transition-colors duration-150">
                 +1 862-652-1545
               </a>
            </div>

          </div>
        </div>

        {/* Правая часть — форма */}
        <div className="w-full lg:w-112.5 lg:shrink-0 bg-blue-500 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 min-w-0">

          {/* Title */}
          <h2 className="text-white font-bold text-sm uppercase tracking-widest">
            Write to us
          </h2>

          {/* Tabs */}
          <div className="flex bg-blue-400/40 rounded-full p-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-1 py-1.5 rounded-full text-xs font-semibold transition-all
                  duration-150 border-none cursor-pointer font-[inherit]
                  ${activeTab === tab
                    ? "bg-white text-blue-500"
                    : "bg-transparent text-white hover:bg-white/10"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Name + Phone */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 h-10 px-4 rounded-full bg-white border-none outline-none
                text-sm text-gray-900 font-[inherit]"
            />
            <PhoneInputField
              variant="compact"
              placeholder="Phone number"
              value={phone}
              onChange={(v) => { setPhone(v); setPhoneError(""); }}
              error={phoneError}
              required
              className="flex-1 min-w-0 [&_p[role=alert]]:text-red-100"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 px-4 rounded-full bg-white border-none outline-none
              text-sm text-gray-900 font-[inherit]"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 rounded-2xl bg-white border-none outline-none
              text-sm text-gray-900 font-[inherit] resize-none"
          />

          {/* File upload */}
          <div>
            <p className="text-blue-100 text-xs mb-2">Allowed file extensions</p>
            <label className="flex items-center gap-2 cursor-pointer w-fit">
              <div className="flex items-center gap-2 bg-white/20 hover:bg-white/30
                transition-colors px-3 py-1.5 rounded-full">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
                  className="w-3.5 h-3.5">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
                </svg>
                <span className="text-white text-xs font-medium">
                  {file ? file.name : "Attach file"}
                </span>
              </div>
              <span className="text-blue-200 text-xs">
                JPG, JPEG, PNG, XLS, HEIC, WEBP
              </span>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.xls,.heic,.webp"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          {/* Agree */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 shrink-0 accent-white"
            />
            <span className="text-xs text-blue-100 leading-relaxed">
              I consent to having YuuSell store my submitted information so they can respond
              to my inquiry, and grant a permission to contact me using contact details
              provided, as well as to share my information with other companies within
              YuuSell Group and any third-party service providers. I understand that I can
              revoke my consent by sending an email to{" "}
                <a href="mailto:info.usa@yuusell.com"
                  className="text-white underline">
                  info.usa@yuusell.com
                </a>
            </span>
          </label>

          {/* Send */}
          <button
            onClick={handleSend}
            className="w-fit bg-white text-blue-500 text-xs font-bold uppercase
              tracking-widest px-8 py-2.5 rounded-full border-none cursor-pointer
              hover:bg-blue-50 transition-colors duration-150 font-[inherit]"
          >
            Send
          </button>

        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}