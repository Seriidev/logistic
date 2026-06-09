import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGrid";

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




      <ServicesGrid />

    </section>
    <Footer/>
    </>
  );
}