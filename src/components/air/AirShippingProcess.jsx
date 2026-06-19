import { useNavigate } from "react-router-dom";
import { SectionHeading } from "./shared";
import { isAuthenticated } from "../../utils/auth";

const STEPS = [
  {
    num: "01",
    title: "Request a Quote",
    description:
      "Share origin, destination, cargo details, and timeline. Receive competitive rates within hours.",
    icon: "/steps icon/calc icon.png",
  },
  {
    num: "02",
    title: "Book & Schedule Pickup",
    description:
      "Confirm your shipment, select service level, and arrange door pickup or warehouse drop-off.",
    icon: "/steps icon/truck icon.png",
  },
  {
    num: "03",
    title: "Prepare & Consolidate",
    description:
      "We inspect, pack, label, and consolidate your cargo for optimal air freight loading.",
    icon: "/steps icon/packet.png",
  },
  {
    num: "04",
    title: "Customs & Documentation",
    description:
      "Our team prepares all export/import paperwork and pre-clears customs where possible.",
    icon: "/steps icon/air icon.png",
  },
  {
    num: "05",
    title: "Air Transit & Tracking",
    description:
      "Your cargo flies on optimized routes with live milestone tracking and proactive updates.",
    icon: "/steps icon/air icon.png",
  },
  {
    num: "06",
    title: "Final Delivery",
    description:
      "Door-to-door or airport delivery with proof of delivery and post-shipment reporting.",
    icon: "/steps icon/parcel.png",
  },
];

export default function AirShippingProcess() {
  const navigate = useNavigate();

  const handleShipNow = () => {
    if (!isAuthenticated()) {
      navigate("/signup?redirect=/create-shipment");
      return;
    }
    navigate("/create-shipment");
  };

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Shipping Process"
        title="From Quote to Delivery — Six Simple Steps"
        description="Our streamlined air cargo process removes complexity at every stage, giving you full visibility and control from the moment you book."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {STEPS.map((step) => (
          <article
            key={step.num}
            className="relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6
              hover:shadow-lg hover:border-blue-100 transition-all duration-200 min-w-0"
          >
            <div
              className="absolute -top-3 left-5 sm:left-6 bg-blue-500 text-white text-xs sm:text-sm
                font-bold w-8 h-8 rounded-full flex items-center justify-center"
            >
              {step.num}
            </div>

            <div className="flex justify-center mt-4 mb-4 sm:mb-5 h-16 sm:h-20">
              <img src={step.icon} alt="" className="h-full w-auto object-contain" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-2">{step.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-12 rounded-2xl sm:rounded-3xl bg-blue-500 px-5 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 min-w-0">
        <div className="text-center md:text-left min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Ready to ship by air?</h3>
          <p className="text-sm sm:text-base text-blue-100 max-w-lg">
            Start your shipment in minutes. Our team is standing by to handle urgent and scheduled air freight.
          </p>
        </div>
        <button
          type="button"
          onClick={handleShipNow}
          className="shrink-0 w-full sm:w-auto min-h-[44px] px-8 py-3 rounded-full bg-white text-blue-700
            text-sm font-bold uppercase tracking-wider border-none cursor-pointer
            hover:bg-blue-50 transition-colors font-[inherit]"
        >
          Ship Now
        </button>
      </div>
    </section>
  );
}
