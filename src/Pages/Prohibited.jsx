import Footer from "../components/Footer";

const PROHIBITED = [
  { id: 1, title: "Explosives and Ammunition", icon: "/icons/prohibited/explosives.svg" },
  { id: 2, title: "Firearms and Cold Weapons", icon: "/icons/prohibited/firearms.svg" },
  { id: 3, title: "Flammable Liquids and Gases", icon: "/icons/prohibited/flammable.svg" },
  { id: 4, title: "Toxic and Poisonous Substances", icon: "/icons/prohibited/toxic.svg" },
  { id: 5, title: "Radioactive Materials", icon: "/icons/prohibited/radioactive.svg" },
  { id: 6, title: "Lithium Batteries (in some cases)", icon: "/icons/prohibited/battery.svg" },
  { id: 7, title: "Perishable Goods and Biological Materials", icon: "/icons/prohibited/perishable.svg" },
  { id: 8, title: "Cultural and Natural Assets", icon: "/icons/prohibited/cultural.svg" },
];

const SPECIAL = [
  { id: 1, title: "Dry ice", icon: "/icons/prohibited/dry-ice.svg" },
  { id: 2, title: "Medicines and dietary nutrition", icon: "/icons/prohibited/medicines.svg" },
];

const ItemCard = ({ item, color = "red" }) => (
  <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3
    shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="w-20 h-20 flex items-center justify-center">
      <img
        src={item.icon}
        alt={item.title}
        className="w-16 h-16 object-contain"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.innerHTML = `
            <div style="width:64px;height:64px;border-radius:50%;
              border:2px solid ${color === "red" ? "#ef4444" : "#3b82f6"};
              display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" fill="none"
                stroke="${color === "red" ? "#ef4444" : "#3b82f6"}"
                stroke-width="1.5" style="width:28px;height:28px">
                <circle cx="12" cy="12" r="10"/>
                <path d="M4.93 4.93l14.14 14.14"/>
              </svg>
            </div>`;
        }}
      />
    </div>
    <p className="text-xs font-semibold text-gray-800 leading-snug">{item.title}</p>
  </div>
);

export default function ProhibitedItemsPage() {
  return (
    <>
      <section className="page-container min-w-0 py-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
           <a href="/" className="hover:text-blue-500 no-underline text-gray-500">Main</a>
          <span>›</span>
          <span className="text-gray-900 font-medium">Prohibited Items</span>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-wide mb-3">
            It is prohibited to send in parcels
          </h1>
          <p className="text-sm text-gray-500 max-w-[560px] mx-auto leading-relaxed mb-3">
            The following items are strictly prohibited in shipments for safety, legal,
            and customs reasons. Please review the list carefully before sending your parcel.
          </p>
          <a href="#"
            className="text-xs font-semibold text-red-500 uppercase tracking-widest
              hover:text-red-600 transition-colors no-underline">
            Please check destination country restrictions for incoming shipments
          </a>
        </div>

        {/* Main container */}
        <div className="bg-blue-50 rounded-3xl p-8 mb-8">

          {/* Prohibited grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {PROHIBITED.map((item) => (
              <ItemCard key={item.id} item={item} color="red" />
            ))}
          </div>

          {/* Special conditions */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Special conditions</h2>
            <p className="text-sm text-gray-500 mb-5">
              Some items can only be transported *under special conditions*:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {SPECIAL.map((item) => (
                <ItemCard key={item.id} item={item} color="blue" />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom banner */}
        <div className="bg-blue-500 rounded-3xl px-10 py-12 flex flex-col
          items-center text-center gap-6">

          {/* Icon */}
          <div className="w-12 h-12 rounded-full border-2 border-white/40
            flex items-center justify-center">
            <span className="text-white font-extrabold text-xl">!</span>
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-white uppercase tracking-wide mb-2">
              Please refer to the full list of<br/>prohibited items for each country
            </h2>
          </div>

          {/* Download PDF */}
          <a
            href="/prohibited-items.pdf"
            download
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30
              text-white text-sm font-semibold px-6 py-2.5
              no-underline transition-colors duration-150 border border-white/30"
          >
            Download PDF
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>
          </a>

        </div>

      </section>
      <Footer />
    </>
  );
}