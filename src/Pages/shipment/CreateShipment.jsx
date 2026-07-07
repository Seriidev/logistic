import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import { isAuthenticated } from "../../utils/auth";
import { PARCEL_SIZES } from "./constants";
import ShipmentStepper from "./components/ShipmentStepper";
import StepParcelDetails from "./steps/StepParcelDetails";
import StepContacts from "./steps/StepContacts";
import StepDelivery from "./steps/StepDelivery";
import StepPayment from "./steps/StepPayment";
import StepSuccess from "./steps/StepSuccess";

const INITIAL_FORM = {
  from: null,
  where: null,
  transport: "",
  obtain: "",
  parcelSize: PARCEL_SIZES[0].id,
  height: "",
  length: "",
  width: "",
  cargo: "",
  sender: null,
  recipient: null,
  speedId: "sea-econom",
  carrierId: "fedex",
  deliveryDate: "10.07.2025",
  shipmentDate: "2025-07-07",
  paymentType: "card",
  cardNumber: "",
  cardExpiry: "",
  cardCvc: "",
  cardName: "",
  billingName: "",
  billingLine1: "",
  billingLine2: "",
  billingCity: "",
  billingProvince: "",
  billingZip: "",
  useShippingAddress: true,
};

function generateTrackingId() {
  const part = () => String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  return `YU ${part()} ${part()} ${part()} USSU`;
}

export default function CreateShipmentPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("shipment");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [trackingId, setTrackingId] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/signup?redirect=/create-shipment", { replace: true });
    }
  }, [navigate]);

  const validateStep = () => {
    if (step === 1) {
      if (!form.from || !form.where) return t("validation.fromWhereRequiredShort");
      if (!form.transport || !form.obtain) return t("validation.transportObtainRequired");
      if (!form.cargo?.trim()) return t("validation.cargoRequired");
    }
    if (step === 2) {
      if (!form.sender || !form.recipient) return t("validation.contactsRequired");
    }
    return null;
  };

  const handleContinue = () => {
    if (completed) return;

    const error = validateStep();
    if (error) {
      alert(error);
      return;
    }

    if (step < 4) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (step === 4) {
      setTrackingId(generateTrackingId());
      setCompleted(true);
      setStep(5);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(trackingId.replace(/\s/g, ""));
      alert(t("success.trackingCopied"));
    } catch {
      alert(trackingId);
    }
  };

  if (completed) {
    return (
      <>
        <section className="page-container min-w-0 py-6 sm:py-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-blue-500 no-underline text-gray-500">{t("breadcrumb.main")}</a>
            <span>›</span>
            <span className="text-gray-900 font-medium">{t("breadcrumb.createShipment")}</span>
          </nav>
          <StepSuccess trackingId={trackingId} onCopy={handleCopy} />
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="page-container min-w-0 py-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 sm:mb-8">
          <a href="/" className="hover:text-blue-500 no-underline text-gray-500">{t("breadcrumb.main")}</a>
          <span>›</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.createShipment")}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6 items-start min-w-0">
          <div className="flex-1 min-w-0 flex flex-col gap-4 w-full">
            {step === 1 && <StepParcelDetails data={form} onChange={setForm} />}
            {step === 2 && <StepContacts data={form} onChange={setForm} />}
            {step === 3 && <StepDelivery data={form} onChange={setForm} />}
            {step === 4 && <StepPayment data={form} onChange={setForm} />}
          </div>

          <div className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-28">
            <ShipmentStepper
              currentStep={step}
              onContinue={handleContinue}
              continueLabel={step === 4 ? t("actions.complete") : t("actions.continue")}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
