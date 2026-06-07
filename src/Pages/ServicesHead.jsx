import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

const SERVICES = [
  {
    id: 1,
    title: "Air Cargo",
    description: "We receive, label, pack, and ship your products directly to Amazon FBA warehouses. 100% compliant with Amazon's requirements — no delays.",
    image: "/minibanner1.jpg",
    path: "/air-cargo",
  },
  {
    id: 2,
    title: "Truck Cargo",
    description: "We receive, label, pack, and ship your products directly to Amazon FBA warehouses. 100% compliant with Amazon's requirements — no delays.",
    image: "/minibanner2.jpg",
    path: "/truck-cargo",
  },
  {
    id: 3,
    title: "Sea Cargo",
    description: "We receive, label, pack, and ship your products directly to Amazon FBA warehouses. 100% compliant with Amazon's requirements — no delays.",
    image: "/minibanner3.jpg",
    path: "/sea-cargo",
  },
  {
    id: 4,
    title: "Auto Shipping",
    description: "We receive, label, pack, and ship your products directly to Amazon FBA warehouses. 100% compliant with Amazon's requirements — no delays.",
    image: "/minibanner4.jpg",
    path: "/auto-shipping",
  },
  {
    id: 5,
    title: "Transport Cargo",
    description: "We receive, label, pack, and ship your products directly to Amazon FBA warehouses. 100% compliant with Amazon's requirements — no delays.",
    image: "/minibanner5.jpg",
    path: "/transport-cargo",
  },
  {
    id: 6,
    title: "Amazon FBA",
    description: "We receive, label, pack, and ship your products directly to Amazon FBA warehouses. 100% compliant with Amazon's requirements — no delays.",
    image: "/minibanner6.jpg",
    path: "/amazon-fba",
  },
];

export default function ServicesHead() {
  return (
    <>
    <section className="page-container min-w-0 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-500 no-underline text-gray-500">Main</a>
        <span>›</span>
        <span className="text-gray-900 font-medium">Our Services</span>
      </div>




      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 min-w-0">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} className="w-full" />
        ))}
      </div>

    </section>
    <Footer/>
    </>
  );
}