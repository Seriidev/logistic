import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import TruckCargoHero from "../components/truck-cargo/TruckCargoHero";
import TruckTransportTypes from "../components/truck-cargo/TruckTransportTypes";
import TruckWhyChooseUs from "../components/truck-cargo/TruckWhyChooseUs";
import TruckHowItWorks from "../components/truck-cargo/TruckHowItWorks";
import TruckShippingEstimator from "../components/truck-cargo/TruckShippingEstimator";
import TruckVehicleFleet from "../components/truck-cargo/TruckVehicleFleet";
import TruckIndustries from "../components/truck-cargo/TruckIndustries";
import TruckDeliveryNetwork from "../components/truck-cargo/TruckDeliveryNetwork";
import TruckVideoSection from "../components/truck-cargo/TruckVideoSection";
import TruckCargoSafety from "../components/truck-cargo/TruckCargoSafety";
import TruckFAQ from "../components/truck-cargo/TruckFAQ";
import TruckOtherServices from "../components/truck-cargo/TruckOtherServices";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function TruckCargoPage() {
  const { t, i18n } = useTranslation("truckCargo");

  useEffect(() => {
    document.title = t("meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t("meta.description"));
    }
  }, [t, i18n.language]);

  return (
    <>
      <TruckCargoHero />
      <TruckTransportTypes />
      <TruckWhyChooseUs />
      <TruckHowItWorks />
      <TruckShippingEstimator />
      <TruckVehicleFleet />
      <TruckIndustries />
      <TruckDeliveryNetwork />
      <TruckVideoSection />
      <TruckCargoSafety />
      <TruckFAQ />
      <TruckOtherServices />
      <ContactForm />
      <Footer />
    </>
  );
}
