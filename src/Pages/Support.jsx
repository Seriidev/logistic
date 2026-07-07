import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border transition-all duration-200
        ${open ? "border-blue-200 bg-blue-50" : "border-gray-100 bg-gray-50"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 rounded-full text-left bg-transparent border-none cursor-pointer font-[inherit]"
      >
        <span className={`text-sm font-medium pr-4 transition-colors min-w-0 flex-1 ${open ? "text-blue-500" : "text-gray-800"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${open ? "bg-blue-500" : "bg-gray-200"}`}>
          <svg viewBox="0 0 24 24" fill="none" width="12" height="12" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
            <path d="M6 9l6 6 6-6" stroke={open ? "white" : "#6b7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <div className="h-px bg-blue-200 mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function SupportPage() {
  const { t } = useTranslation("support");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const faqData = useMemo(() => t("faq", { returnObjects: true }), [t]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <section className="bg-blue-50 py-10 sm:py-16">
        <div className="page-container min-w-0 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t("hero.title")}</h1>
          <p className="text-lg text-gray-600">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="page-container min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">{t("contact.title")}</h2>
              <p className="text-gray-600">{t("contact.description")}</p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-500">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{t("contact.emailSupport")}</h3>
                    <p className="text-gray-600">
                      <a href={`mailto:${t("contact.email")}`} className="underline">{t("contact.email")}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-500">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257.685a11.042 11.042 0 005.517 5.663l1.007-.304a1 1 0 011.276.44l1.492-2.249a1 1 0 011.093-.093l2.188.659a1 1 0 01.412 1.412l-.659 2.188a1 1 0 01-.44 1.276l-.304 1.007c-2.943 1.273-6.451 2.15-10.15 2.15C5.821 15.004 3 12.171 3 9a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{t("contact.phoneSupport")}</h3>
                    <p className="text-gray-600">
                      <a href="tel:+19412889573" className="underline">{t("contact.phone")}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-500">
                      <path d="M12 21a9 9 0 019-9V9a2 2 0 00-2-2H5a2 2 0 00-2 2v3a9 9 0 009 9zm0-12a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{t("contact.liveChat")}</h3>
                    <p className="text-gray-600">{t("contact.liveChatDescription")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t("form.title")}</h2>
              <p className="text-gray-600 mb-6">{t("form.description")}</p>

              {submitStatus === "success" && (
                <div className="bg-green-50 text-green-800 p-4 rounded mb-6">{t("form.success")}</div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 text-red-800 p-4 rounded mb-6">{t("form.error")}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.fullName")}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.email")}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.subject")}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.message")}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("form.sending") : t("form.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
