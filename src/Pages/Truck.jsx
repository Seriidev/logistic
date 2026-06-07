import TruckHero from "../components/BannerTruck";
import WhyUs from "../components/WhyUs";
import FreightQuote from "../components/FreightQuote";
import TruckSolutions from "../components/TruckSolutions";
import InternationalShipping from "../components/InternationalShipping";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function TruckPage() {
    return (
      <>
      <TruckHero />
      <WhyUs />
      <FreightQuote />
      <TruckSolutions />
      <InternationalShipping />
      <ContactForm />
      <Footer />
    </>
    );
  }