import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AirHero from "../components/air/BannerAir";
import AirServiceOverview from "../components/air/AirServiceOverview";
import AirServiceTypes from "../components/air/AirServiceTypes";
import AirWhyChooseUs from "../components/air/AirWhyChooseUs";
import AirIndustries from "../components/air/AirIndustries";
import AirGlobalCoverage from "../components/air/AirGlobalCoverage";
import AirCargoSecurity from "../components/air/AirCargoSecurity";
import AirCustomsSupport from "../components/air/AirCustomsSupport";
import AirShippingProcess from "../components/air/AirShippingProcess";
import AirSuccessMetrics from "../components/air/AirSuccessMetrics";
import AirFAQ from "../components/air/AirFAQ";
import AirOtherServices from "../components/air/AirOtherServices";
import Footer from "../components/Footer";

export default function AirPage() {
  const { t, i18n } = useTranslation("airCargo");

  useEffect(() => {
    document.title = t("meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t("meta.description"));
    }
  }, [t, i18n.language]);

  return (
    <>
      <AirHero />
      <AirServiceTypes />
      <AirServiceOverview />
      <AirWhyChooseUs />
      <AirIndustries />
      <AirGlobalCoverage />
      <AirCargoSecurity />
      <AirCustomsSupport />
      <AirShippingProcess />
      <AirSuccessMetrics />
      <AirFAQ />
      <AirOtherServices />
      <Footer />
    </>
  );
}
