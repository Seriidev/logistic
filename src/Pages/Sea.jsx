import { useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation("seaCargo");

  useEffect(() => {
    document.title = t("meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t("meta.description"));
    }
  }, [t, i18n.language]);

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
