import { SectionHeading } from "./shared";

const METRICS = [
  {
    value: "2.4M+",
    label: "Air shipments delivered",
    detail: "Across 180+ countries since launch",
  },
  {
    value: "48 hrs",
    label: "Average quote turnaround",
    detail: "Competitive rates within two business days",
  },
  {
    value: "99.2%",
    label: "On-time delivery rate",
    detail: "Industry-leading transit reliability",
  },
  {
    value: "< 2%",
    label: "Claims ratio",
    detail: "Exceptional cargo handling record",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "YuuSell moved our seasonal inventory from LA to Frankfurt in 4 days. Tracking was flawless and customs cleared without a single delay.",
    author: "Sarah M.",
    role: "E-Commerce Director",
  },
  {
    quote:
      "We rely on their air freight for AOG parts. Next-flight-out service has saved us countless hours of downtime.",
    author: "James K.",
    role: "Aviation Maintenance Manager",
  },
  {
    quote:
      "The consolidation service cut our per-unit shipping cost by 35% while keeping delivery times competitive.",
    author: "Elena R.",
    role: "Supply Chain Lead",
  },
];

export default function AirSuccessMetrics() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Success Metrics"
          title="Proven Performance You Can Measure"
          description="Numbers that reflect our commitment to reliability, speed, and customer satisfaction across every air cargo lane we operate."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {METRICS.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl sm:rounded-3xl bg-white border border-gray-100 p-4 sm:p-6 text-center min-w-0"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 mb-1 sm:mb-2">
                {metric.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-gray-900 mb-1">{metric.label}</p>
              <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">{metric.detail}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.author}
              className="rounded-2xl sm:rounded-3xl bg-white border border-gray-100 p-5 sm:p-6 min-w-0"
            >
              <svg viewBox="0 0 24 24" fill="#3b82f6" className="w-8 h-8 opacity-30 mb-3">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <p className="text-sm font-bold text-gray-900">{item.author}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
