const PROHIBITED = [
  { id: 1, title: "Explosives and Ammunition", icon: "./icons/icon1.png" },
  { id: 2, title: "Firearms and Cold Weapons", icon: "./icons/icon2.png" },
  { id: 3, title: "Flammable Liquids and Gases", icon: "./icons/icon3.png" },
  { id: 4, title: "Toxic and Poisonous Substances", icon: "./icons/icon4.png" },
  { id: 5, title: "Radioactive Materials", icon: "./icons/icon5.png" },
  { id: 6, title: "Lithium Batteries (in some cases)", icon: "./icons/icon6.png" },
  { id: 7, title: "Perishable Goods and Biological Materials", icon: "./icons/icon7.png" },
  { id: 8, title: "Cultural and Natural Assets", icon: "./icons/icon8.png" },
];

const SPECIAL = [
  { id: 1, title: "Dry ice", icon: "./icons/icon9.png" },
  { id: 2, title: "Medicines and dietary nutrition", icon: "./icons/icon10.png" },
];

const IconPlaceholder = ({ color = "red" }) => (
  <div className={`w-16 h-16 rounded-full border-2 ${
    color === "red" ? "border-red-400" : "border-blue-400"
  } flex items-center justify-center`}>
    <svg viewBox="0 0 24 24" fill="none"
      stroke={color === "red" ? "#ef4444" : "#3b82f6"}
      strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M9 9l6 6M15 9l-6 6"/>
    </svg>
  </div>
);

const ItemCard = ({ item, color = "red" }) => (
  <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3">
    <div className="w-20 h-20 flex items-center justify-center">
      <img
        src={item.icon}
        alt={item.title}
        className="w-16 h-16 object-contain"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.innerHTML = `
            <div style="width:64px;height:64px;border-radius:50%;border:2px solid ${
              color === "red" ? "#ef4444" : "#3b82f6"
            };display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" fill="none" stroke="${
                color === "red" ? "#ef4444" : "#3b82f6"
              }" stroke-width="1.5" style="width:28px;height:28px">
                <path d="M3 3l18 18M9 9l6 6"/>
              </svg>
            </div>`;
        }}
      />
    </div>
    <p className="text-xs font-semibold text-gray-800 leading-snug">{item.title}</p>
  </div>
);

export default function ProhibitedItems() {
  return (
    <section className="page-container min-w-0 py-10 sm:py-16">

      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 uppercase tracking-wide mb-3">
          It is prohibited to send in parcels
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed px-2">
          The following items are strictly prohibited in shipments for safety, legal, and customs reasons.
          Please review the list carefully before sending your parcel.
        </p>
        <a href="#" className="inline-block mt-3 text-xs font-semibold text-red-500
          uppercase tracking-widest hover:text-red-600 transition-colors rounded-full">
          Please check destination country restrictions for incoming shipments
        </a>
      </div>

      {/* Main container */}
      <div className="bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {PROHIBITED.map((item) => (
            <ItemCard key={item.id} item={item} color="red" />
          ))}
        </div>

        {/* Special conditions */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Special conditions</h3>
          <p className="text-sm text-gray-500 mb-4">
            Some items can only be transported *under special conditions*:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {SPECIAL.map((item) => (
              <ItemCard key={item.id} item={item} color="blue" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}