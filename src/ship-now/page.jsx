import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ServicesGrid from "../components/ServicesGrid";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ShipNowPage() {
  const { t } = useTranslation("shipNow");

  return (
    <>
      <main className="page-container min-w-0 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-500 uppercase tracking-wide mb-2 sm:mb-4">
            {t("title")}
          </h1>
          <p className="text-sm text-gray-500">
            {t("subtitle")}
          </p>
        </div>

        <div className="border-t border-dashed border-blue-300 mb-6 sm:mb-8" />

        <ServicesGrid />

        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-dashed border-blue-300">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500 text-white shrink-0">
                <FaHome className="w-6 h-6" aria-hidden />
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  {t("domesticPromo.title")}
                </h2>
                <p className="text-sm text-gray-500 m-0">
                  {t("domesticPromo.description")}
                </p>
              </div>
            </div>
            <Link
              to="/domestic-shipping"
              className="shrink-0 w-full md:w-auto md:ml-auto inline-flex items-center justify-center min-h-[44px] px-6 py-2.5
                bg-gray-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider
                rounded-lg hover:bg-blue-600 transition-colors no-underline text-center"
            >
              {t("domesticPromo.cta")}
            </Link>
          </div>
        </div>
      </main>

      <ContactForm />
      <Footer />
    </>
  );
}
