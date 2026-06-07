import TruckHero from "../components/BannerAir";
import WhyChooseUs from "../components/WhyChooseUs";  
import ProhibitedItems from "../components/ProhibitedItems";
import InternationalShipping from "../components/InternationalShipping";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function AirPage() {
    return (
      <>
      <TruckHero />
      <WhyChooseUs />
      <ProhibitedItems />
      <InternationalShipping />
      <ContactForm />
      <Footer />
    </>
    );
  }