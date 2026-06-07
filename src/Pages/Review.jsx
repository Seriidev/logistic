import { useState } from "react";

function StarRating({ rating, setRating }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="border-none bg-transparent cursor-pointer p-0 rounded-full"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 transition-colors duration-100"
            fill={star <= (hovered || rating) ? "#f59e0b" : "#d1d5db"}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function ReviewPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(3);
  const [file, setFile] = useState(null);

  const handleSend = () => {
    if (!name || !message) { alert("Please fill in Name and Message."); return; }
    alert("Thank you for your review!");
  };

  return (
    <div className="min-h-screen bg-blue-500 py-8 sm:py-12 px-4 min-w-0 overflow-x-clip">
      <div className="max-w-4xl mx-auto w-full min-w-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
          Leave a Review
        </h1>

        <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          {/* Left side */}
          <div className="flex-1 min-w-0 p-6 sm:p-10 flex flex-col justify-between bg-blue-500">
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-6">
                Send with confidence
              </h2>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4
                flex items-start gap-3 w-full max-w-full sm:max-w-[320px] mb-6 sm:mb-8">
                <img src="/logo/logo.svg" alt="YuuSell"
                  className="h-8 w-8 flex-shrink-0 mt-0.5"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML += `<div style="width:32px;height:32px;background:rgba(255,255,255,0.3);border-radius:8px;flex-shrink:0"></div>`;
                  }}
                />
                <p className="text-white text-sm leading-relaxed">
                  Every day, clients from over 25 countries trust YuuSell to deliver
                  their parcels safely and on time. Fast, affordable, and always
                  traceable — we make logistics simple.
                </p>
              </div>
            </div>

            <div className="flex items-end justify-center">
              <img
                src="/review-illustration.png"
                alt="Review"
                className="w-full max-w-[220px] h-auto max-h-[220px] object-contain mx-auto"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg"
                      style="width:220px;height:180px;opacity:0.6">
                      <rect x="30" y="70" width="140" height="100" rx="4" fill="white" opacity="0.2"/>
                      <rect x="50" y="90" width="40" height="50" rx="2" fill="white" opacity="0.3"/>
                      <rect x="110" y="90" width="40" height="50" rx="2" fill="white" opacity="0.3"/>
                      <rect x="60" y="140" width="35" height="30" rx="3" fill="white" opacity="0.4"/>
                      <rect x="100" y="148" width="28" height="22" rx="3" fill="white" opacity="0.3"/>
                      <rect x="55" y="40" width="90" height="40" rx="4" fill="white" opacity="0.25"
                        transform="rotate(-8 100 60)"/>
                      <text x="100" y="65" text-anchor="middle" fill="white"
                        font-size="12" font-weight="bold" transform="rotate(-8 100 60)">REVIEW</text>
                    </svg>`;
                }}
              />
            </div>
          </div>

          {/* Right side — form */}
          <div className="w-full md:w-[360px] flex-shrink-0 bg-white m-4 md:m-4 rounded-2xl p-6
            flex flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-900 border-b-2
              border-dashed border-blue-200 pb-3">
              Write a review
            </h3>

            {/* Name + Email */}

              <textarea placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200
                outline-none text-sm text-gray-900 font-[inherit] resize-none
                focus:border-blue-400 transition-colors"
              />
              <textarea placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200
                outline-none text-sm text-gray-900 font-[inherit] resize-none
                focus:border-blue-400 transition-colors"
              />


            {/* Location */}
            <input type="text" placeholder="Location" value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full h-10 px-3 rounded-lg bg-gray-50 border border-gray-200
                outline-none text-sm text-gray-900 font-[inherit]
                focus:border-blue-400 transition-colors"
            />

            {/* Message */}
            <textarea
              placeholder="Write message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200
                outline-none text-sm text-gray-900 font-[inherit] resize-none
                focus:border-blue-400 transition-colors"
            />

            {/* Rating */}
            <div className="flex items-center justify-between border-t border-b
              border-dashed border-gray-200 py-3">
              <span className="text-sm text-gray-500 font-medium">Rating</span>
              <StarRating rating={rating} setRating={setRating} />
            </div>

            {/* File upload */}
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500
                transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.5" className="w-4 h-4">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
                </svg>
                <span className="text-sm font-medium">
                  {file ? file.name : "Select file"}
                </span>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".jpg,.gif,.jpeg,.log,.txt,.html,.png,.tiff,.tif,.pdf,.doc,.docx,.zip,.rar,.gz,.tar.gz,.7z,.rdp,.odt,.csv,.conf,.cfg,.xls,.xlsx"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
            <p className="text-[10px] text-gray-400 -mt-2 leading-relaxed">
              Allowed file extensions: .jpg, .gif, .jpeg, .log, .txt, .html, .png, .tiff,
              .tif, .pdf, .doc, .docx, .zip, .rar, .gz, .tar.gz, .7z, .rdp, .odt, .csv,
              .conf, .cfg, .xls, .xlsx
            </p>

            {/* Send */}
            <button
              onClick={handleSend}
              className="w-full h-11 bg-blue-500 text-white font-bold text-sm
                uppercase tracking-wider rounded-full border-none cursor-pointer
                hover:bg-blue-600 active:scale-[0.98] transition-all duration-150
                font-[inherit] flex items-center justify-center gap-2"
            >
              Send
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
