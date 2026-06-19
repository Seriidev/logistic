import { Link } from "react-router-dom";
import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const HIGHLIGHTS = [
  "Door-to-airport and door-to-door delivery worldwide",
  "Express, standard, and deferred air freight options",
  "Consolidation, repacking, and labeling at origin hubs",
  "Live tracking with milestone notifications",
  "Dedicated account managers for commercial shippers",
  "Insurance and priority handling for high-value cargo",
];

export default function AirServiceOverview() {
  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Service Overview"
        title="Premium Air Freight for Time-Critical Global Shipments"
        description="From single cartons to full charter loads, YuuSell delivers reliable air cargo solutions backed by a global carrier network, transparent pricing, and end-to-end logistics control."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-w-0">
        <ImageBlock
          src="/air picture.png"
          alt="Air cargo operations"
          hint="Add photo: public/air picture.png"
          className="w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl sm:rounded-3xl"
        />

        <div className="min-w-0">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Air cargo remains the fastest way to move goods across continents. Whether you are
            shipping retail inventory, industrial parts, perishables, or e-commerce parcels, our
            air freight team designs routes that balance speed, cost, and compliance — so your
            cargo arrives on schedule and in perfect condition.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {HIGHLIGHTS.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/ship-now"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5
                rounded-full bg-blue-500 text-white text-sm font-bold uppercase tracking-wider
                no-underline hover:bg-blue-600 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              to="/calculate"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5
                rounded-full border border-gray-200 bg-white text-gray-900 text-sm font-bold
                uppercase tracking-wider no-underline hover:border-blue-300 hover:text-blue-600
                transition-colors"
            >
              Calculate Rates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
