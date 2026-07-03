import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <section className="page-container py-8 sm:py-12 min-w-0">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 uppercase tracking-wide mb-2 sm:mb-4">
          Our Services
        </h2>
        <p className="text-sm text-gray-500">
          International solutions for all your shipping and delivery needs
        </p>
      </div>

      <div className="border-t border-dashed border-blue-300 mb-6 sm:mb-8" />

      <ServicesGrid />
    </section>
  );
}
