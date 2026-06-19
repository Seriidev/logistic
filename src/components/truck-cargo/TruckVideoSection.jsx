import { useState } from "react";
import { SectionHeading, ImageBlock } from "./shared";

export default function TruckVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="See Us in Action"
        title="Experience Our Truck Cargo Operations"
        description="Watch how YuuSell manages road freight from pickup to delivery — with modern fleet, trained drivers, and technology-driven logistics."
      />

      <div className="max-w-4xl mx-auto min-w-0">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 aspect-video group">
          {!playing ? (
            <>
              <ImageBlock
                src="/minibanner2.jpg"
                alt="Truck cargo operations video thumbnail"
                hint="Add photo: public/minibanner2.jpg"
                className="absolute inset-0 w-full h-full opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play promotional video"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4
                  bg-transparent border-none cursor-pointer font-[inherit] group"
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center
                    shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="#3b82f6" className="w-7 h-7 sm:w-9 sm:h-9 ml-1">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
                <span className="text-white text-sm sm:text-base font-semibold drop-shadow-lg">
                  Play Video
                </span>
              </button>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white p-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 mb-4 opacity-50">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
              </svg>
              <p className="text-sm sm:text-base font-medium text-center mb-2">
                Video Player Placeholder
              </p>
              <p className="text-xs sm:text-sm text-gray-400 text-center max-w-sm">
                Embed your promotional video here — YouTube, Vimeo, or self-hosted MP4.
              </p>
              <button
                type="button"
                onClick={() => setPlaying(false)}
                className="mt-6 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-semibold
                  border border-white/30 cursor-pointer hover:bg-white/20 transition-colors font-[inherit]"
              >
                Close
              </button>
            </div>
          )}
        </div>

        <p className="text-sm sm:text-base text-gray-500 text-center mt-5 sm:mt-6 leading-relaxed max-w-2xl mx-auto">
          Discover our end-to-end truck cargo process — from fleet management and route optimization
          to real-time tracking and secure delivery. Trusted by businesses across retail, manufacturing,
          and e-commerce worldwide.
        </p>
      </div>
    </section>
  );
}
