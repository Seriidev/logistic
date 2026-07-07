import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DomesticHero from "../components/domestic/DomesticHero";
import StepIndicator from "../ship-now/components/StepIndicator";
import TruckCargoForm from "../ship-now/components/TruckCargoForm";
import ExpressDeliveryForm from "../ship-now/components/ExpressDeliveryForm";
import EstimateSummary from "../ship-now/components/EstimateSummary";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { SHIPPING_METHODS } from "../ship-now/data/shippingOptions";
import {
  getInitialFormData,
  validateFormData,
  calculateShippingEstimate,
} from "../ship-now/data/shippingOptions";
import "../ship-now/styles/ship-now.css";

export default function DomesticShippingPage() {
  const { t } = useTranslation("domesticShipping");

  const bookingSteps = useMemo(
    () => [
      { id: 1, label: t("steps.method") },
      { id: 2, label: t("steps.details") },
      { id: 3, label: t("steps.estimate") },
    ],
    [t],
  );
  const bookingRef = useRef(null);
  const methods = SHIPPING_METHODS.domestic;

  const [step, setStep] = useState(1);
  const [method, setMethod] = useState(null);
  const [formData, setFormData] = useState({});
  const [calculated, setCalculated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState(null);

  useEffect(() => {
    if (step > 1 && bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

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
    if (step === 1) return Boolean(method);
    if (step === 2) return validateFormData(method, formData);
    return true;
  };

  const goNext = () => {
    if (!canContinue()) return;
    if (step === 2) {
      setEstimate(calculateShippingEstimate("domestic", method, formData));
      setCalculated(false);
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const goBack = () => {
    if (step === 1) return;
    setStep((s) => s - 1);
    if (step === 3) setCalculated(false);
  };

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      setEstimate(calculateShippingEstimate("domestic", method, formData));
      setCalculated(true);
      setLoading(false);
    }, 800);
  };

  const renderForm = () => {
    if (method === "express") {
      return <ExpressDeliveryForm formData={formData} onChange={handleFormChange} />;
    }
    return (
      <TruckCargoForm
        formData={formData}
        onChange={handleFormChange}
        isInternational={false}
      />
    );
  };

  return (
    <>
      <main className="ship-now-page min-w-0">
        <DomesticHero />

        <section className="page-container min-w-0 py-10 sm:py-14 lg:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
              {t("section.title")}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed m-0">
              {t("section.subtitle")}
            </p>
          </div>

          <div ref={bookingRef} className="max-w-5xl mx-auto">
            <div className="mb-8 sm:mb-10">
              <StepIndicator currentStep={step} steps={bookingSteps} />
            </div>

            <div className="min-w-0 max-w-4xl mx-auto ship-now-step-enter">
              {step === 1 && (
                <div>
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {t("methodSelect.title")}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {t("methodSelect.subtitle")}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {methods.map((item) => {
                      const isSelected = method === item.id;
                      const { Icon } = item;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleMethodSelect(item.id)}
                          aria-pressed={isSelected}
                          className={`ship-now-card ship-now-card--selectable p-5 sm:p-6 text-left w-full font-[inherit] ${
                            isSelected ? "ship-now-card--selected" : ""
                          }`}
                        >
                          <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-500 text-white mb-4">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                            {t(`methods.${item.id}.title`)}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed m-0">
                            {t(`methods.${item.id}.description`)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && method && renderForm()}

              {step === 3 && (
                <EstimateSummary
                  estimate={estimate}
                  calculated={calculated}
                  loading={loading}
                  onCalculate={handleCalculate}
                  destination="domestic"
                />
              )}
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-8 sm:mt-10 max-w-4xl mx-auto">
              {step > 1 ? (
                <button type="button" onClick={goBack} className="ship-now-btn-secondary">
                  <FaChevronLeft className="h-3.5 w-3.5" aria-hidden />
                  {t("actions.back")}
                </button>
              ) : (
                <div className="hidden sm:block" />
              )}

              {step < 3 && (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canContinue()}
                  className="ship-now-btn-primary sm:ml-auto"
                >
                  {t("actions.continue")}
                  <FaChevronRight className="h-3.5 w-3.5" aria-hidden />
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      <ContactForm />
      <Footer />
    </>
  );
}
