import { SectionHeading, ImageBlock } from "./shared";

const CONTAINERS = [
  {
    id: 1,
    title: "20ft Container",
    description:
      "The most versatile standard container — ideal for small to medium shipments, personal effects, and compact commercial cargo.",
    capacity: "33 m³ · Up to 28 tons · 10 standard pallets",
    image: "/container-20ft.jpg",
  },
  {
    id: 2,
    title: "40ft Container",
    description:
      "Double the capacity of a 20ft unit — the industry standard for high-volume imports, retail inventory, and bulk goods.",
    capacity: "67 m³ · Up to 26.5 tons · 20 standard pallets",
    image: "/container-40ft.jpg",
  },
  {
    id: 3,
    title: "40ft High Cube",
    description:
      "Extra vertical space for lightweight, voluminous cargo — furniture, textiles, and stacked pallet loads with maximum cubic capacity.",
    capacity: "76 m³ · Up to 26 tons · 20 pallets (tall stack)",
    image: "/container-highcube.jpg",
  },
  {
    id: 4,
    title: "Refrigerated Container",
    description:
      "Temperature-controlled reefer units for perishable food, pharmaceuticals, and chemical products requiring cold chain integrity.",
    capacity: "58–67 m³ · -30°C to +30°C · Continuous monitoring",
    image: "/container-reefer.jpg",
  },
  {
    id: 5,
    title: "Open Top Container",
    description:
      "Removable roof for oversized cargo that cannot fit through standard container doors — machinery, timber, and project equipment.",
    capacity: "67 m³ · Top loading · Crane access",
    image: "/container-opentop.jpg",
  },
  {
    id: 6,
    title: "Flat Rack Container",
    description:
      "Collapsible side walls for heavy, wide, or irregularly shaped cargo — steel coils, vehicles, and industrial components.",
    capacity: "40ft / 20ft options · Up to 45 tons · Side/top loading",
    image: "/container-flatrack.jpg",
  },
];

export default function SeaContainerTypes() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Container Types"
          title="The Right Container for Every Cargo Profile"
          description="From standard dry containers to specialized reefer and flat rack units — we match equipment to your cargo dimensions, weight, and handling requirements."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {CONTAINERS.map((container) => (
            <article
              key={container.id}
              className="group flex flex-col rounded-2xl sm:rounded-3xl border border-gray-100 bg-white
                shadow-sm overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200 min-w-0"
            >
              <ImageBlock
                src={container.image}
                alt={container.title}
                hint={`Add photo: public${container.image}`}
                className="h-40 sm:h-44 md:h-48 shrink-0 group-hover:scale-105 transition-transform duration-300"
              />

              <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase mb-2">
                  {container.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 flex-1">
                  {container.description}
                </p>
                <p className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                  {container.capacity}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
