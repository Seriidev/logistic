import { useState, useCallback } from "react";
import StepIndicator from "./components/StepIndicator";
import ShippingTypeSelector from "./components/ShippingTypeSelector";
import ShippingMethodSelector from "./components/ShippingMethodSelector";
import AirCargoForm from "./components/AirCargoForm";
import SeaCargoForm from "./components/SeaCargoForm";
import TruckCargoForm from "./components/TruckCargoForm";
import ExpressDeliveryForm from "./components/ExpressDeliveryForm";
import EstimateSummary from "./components/EstimateSummary";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import {
  getInitialFormData,
  validateFormData,
  calculateShippingEstimate,
} from "./data/shippingOptions";
import "./styles/ship-now.css";

export default function ShipNowPage() {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState(null);
  const [method, setMethod] = useState(null);
  const [formData, setFormData] = useState({});
  const [calculated, setCalculated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState(null);

  const handleDestinationSelect = (type) => {
    setDestination(type);
    setMethod(null);
    setFormData({});
    setCalculated(false);
    setEstimate(null);
  };

  const handleMethodSelect = (selectedMethod) => {
    setMethod(selectedMethod);
    setFormData(getInitialFormData(selectedMethod));
    setCalculated(false);
    setEstimate(null);
  };

  const handleFormChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setCalculated(false);
  }, []);

  const canContinue = () => {
    if (step === 1) return Boolean(destination);
    if (step === 2) return Boolean(method);
    if (step === 3) return validateFormData(method, formData);
    return true;
  };

  const goNext = () => {
    if (!canContinue()) return;

    if (step === 3) {
      setEstimate(calculateShippingEstimate(destination, method, formData));
      setCalculated(false);
    }

    setStep((s) => Math.min(s + 1, 4));
  };

  const goBack = () => {
    if (step === 1) return;
    setStep((s) => s - 1);
    if (step === 4) {
      setCalculated(false);
    }
  };

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      const result = calculateShippingEstimate(destination, method, formData);
      setEstimate(result);
      setCalculated(true);
      setLoading(false);
    }, 800);
  };

  const renderForm = () => {
    switch (method) {
      case "air":
        return <AirCargoForm formData={formData} onChange={handleFormChange} />;
      case "sea":
        return <SeaCargoForm formData={formData} onChange={handleFormChange} />;
      case "truck":
        return (
          <TruckCargoForm
            formData={formData}
            onChange={handleFormChange}
            isInternational={destination === "international"}
          />
        );
      case "express":
        return <ExpressDeliveryForm formData={formData} onChange={handleFormChange} />;
      default:
        return null;
    }
  };

  return (
    <>
      <main className="ship-now-page min-w-0">
        {/* Hero */}
        <section className="ship-now-hero py-8 sm:py-10 lg:py-14">
          <div className="page-container min-w-0 relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8">
              <a href="/" className="hover:text-blue-400 transition-colors no-underline text-gray-400">
                Home
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-white font-medium" aria-current="page">
                Ship Now
              </span>
            </nav>

            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-cyan-300 mb-3">
                YuuSell Logistics
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
                Book Your Shipment
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed m-0 max-w-2xl">
                A clear, step-by-step process — choose where you&apos;re shipping, how you&apos;re
                shipping, enter your details, and get an instant estimate.
              </p>
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="page-container min-w-0 py-8 sm:py-10 lg:py-14">
          <div className="max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12">
            <StepIndicator currentStep={step} />
          </div>

          <div className="min-w-0">
            {step === 1 && (
              <ShippingTypeSelector
                selected={destination}
                onSelect={handleDestinationSelect}
              />
            )}

            {step === 2 && destination && (
              <ShippingMethodSelector
                destination={destination}
                selected={method}
                onSelect={handleMethodSelect}
              />
            )}

            {step === 3 && method && renderForm()}

            {step === 4 && (
              <EstimateSummary
                estimate={estimate}
                calculated={calculated}
                loading={loading}
                onCalculate={handleCalculate}
                destination={destination}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12 max-w-4xl mx-auto">
            {step > 1 ? (
              <button type="button" onClick={goBack} className="ship-now-btn-secondary">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

            {step < 4 && (
              <button
                type="button"
                onClick={goNext}
                disabled={!canContinue()}
                className="ship-now-btn-primary sm:ml-auto"
              >
                Continue
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </section>
      </main>

      <ContactForm />
      <Footer />
    </>
  );
}
