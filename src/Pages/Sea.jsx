import { useEffect } from "react";
import SeaCargoHero from "../components/sea-cargo/SeaCargoHero";
import SeaShippingOptions from "../components/sea-cargo/SeaShippingOptions";
import SeaWhyChooseUs from "../components/sea-cargo/SeaWhyChooseUs";
import SeaHowItWorks from "../components/sea-cargo/SeaHowItWorks";
import SeaContainerTypes from "../components/sea-cargo/SeaContainerTypes";
import SeaIndustries from "../components/sea-cargo/SeaIndustries";
import SeaGlobalNetwork from "../components/sea-cargo/SeaGlobalNetwork";
import SeaCargoSafety from "../components/sea-cargo/SeaCargoSafety";
import SeaVideoSection from "../components/sea-cargo/SeaVideoSection";
import SeaFAQ from "../components/sea-cargo/SeaFAQ";
import SeaOtherServices from "../components/sea-cargo/SeaOtherServices";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function SeaPage() {
  useEffect(() => {
    document.title = "Global Sea Cargo Solutions | YuuSell Logistics";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Reliable and cost-effective international ocean freight services. LCL and FCL shipping, global port coverage, container options, customs assistance, and real-time tracking."
      );
    }
  }, []);

  return (
    <>
      <SeaCargoHero />
      <SeaShippingOptions />
      <SeaWhyChooseUs />
      <SeaHowItWorks />
      <SeaContainerTypes />
      <SeaIndustries />
      <SeaGlobalNetwork />
      <SeaCargoSafety />
      <SeaVideoSection />
      <SeaFAQ />
      <SeaOtherServices />
      <ContactForm />
      <Footer />
    </>
  );
}
