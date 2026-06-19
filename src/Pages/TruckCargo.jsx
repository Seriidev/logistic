import { useEffect } from "react";
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
  useEffect(() => {
    document.title = "Truck Cargo Transportation | YuuSell Logistics";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Reliable domestic and international road freight solutions. FTL, LTL, fleet services, real-time tracking, and door-to-door delivery for businesses worldwide."
      );
    }
  }, []);

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
