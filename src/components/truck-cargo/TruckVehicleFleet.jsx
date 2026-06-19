import { SectionHeading, ImageBlock } from "./shared";

const FLEET = [
  {
    id: 1,
    title: "Small Van",
    description: "Urban deliveries, documents, and small parcels — nimble access to city centers and residential zones.",
    capacity: "Up to 1.5 tons · 8 m³ cargo space",
    image: "/minibanner4.jpg",
  },
  {
    id: 2,
    title: "Medium Truck",
    description: "Versatile workhorse for regional distribution, palletized goods, and mid-volume commercial freight.",
    capacity: "Up to 7 tons · 30 m³ cargo space",
    image: "/minibanner2.jpg",
  },
  {
    id: 3,
    title: "Heavy Truck",
    description: "Full trailer capacity for bulk shipments, industrial materials, and long-haul domestic routes.",
    capacity: "Up to 24 tons · 90 m³ cargo space",
    image: "/truck-ftl.jpg",
  },
  {
    id: 4,
    title: "Refrigerated Truck",
    description: "Temperature-controlled transport for food, pharmaceuticals, and perishable goods with continuous monitoring.",
    capacity: "Up to 20 tons · -25°C to +25°C range",
    image: "/minibanner6.jpg",
  },
  {
    id: 5,
    title: "Container Truck",
    description: "ISO container hauling for intermodal transfers between ports, rail terminals, and inland depots.",
    capacity: "20ft / 40ft containers · Up to 30 tons",
    image: "/minibanner3.jpg",
  },
  {
    id: 6,
    title: "Flatbed Truck",
    description: "Open-deck transport for construction materials, machinery, steel coils, and oversized project cargo.",
    capacity: "Up to 22 tons · 13.6m deck length",
    image: "/minibanner1.jpg",
  },
];

export default function TruckVehicleFleet() {
  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Vehicle Fleet"
        title="Modern Fleet for Every Shipment Size"
        description="From compact vans to heavy flatbeds — our diverse vehicle lineup ensures the right equipment for your cargo type, volume, and route."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {FLEET.map((vehicle) => (
          <article
            key={vehicle.id}
            className="group flex flex-col rounded-2xl sm:rounded-3xl border border-gray-100 bg-white
              shadow-sm overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200 min-w-0"
          >
            <ImageBlock
              src={vehicle.image}
              alt={vehicle.title}
              hint={`Add photo: public${vehicle.image}`}
              className="h-40 sm:h-44 md:h-48 shrink-0 group-hover:scale-105 transition-transform duration-300"
            />

            <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6 min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase mb-2">
                {vehicle.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 flex-1">
                {vehicle.description}
              </p>
              <p className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                {vehicle.capacity}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
