import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import PhoneInputField from "../../components/PhoneInputField";
import { loginUser } from "../../utils/auth";
import { getPhoneValidationError } from "../../utils/phone";
import AuthIllustration from "./AuthIllustration";

const inputClass =
  "w-full h-12 px-4 rounded-xl bg-[#f0f2f5] border border-transparent outline-none text-sm text-gray-900 font-[inherit] placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all";

const IconGoogle = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const IconApple = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-900" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

function LegalText() {
  const { t } = useTranslation("auth");
  return (
    <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed text-center">
      {t("legal.prefix")}{" "}
      <Link to="/privacy" className="text-blue-500 no-underline hover:underline">
        {t("legal.privacyPolicy")}
      </Link>{" "}
      {t("legal.and")}{" "}
      <a href="#" className="text-blue-500 no-underline hover:underline">
        {t("legal.termsOfService")}
      </a>{" "}
      {t("legal.suffix")}
    </p>
  );
}

export default function AuthPage() {
  const { t } = useTranslation("auth");
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [mode, setMode] = useState(location.pathname === "/signup" ? "signup" : "login");

  useEffect(() => {
    setMode(location.pathname === "/signup" ? "signup" : "login");
  }, [location.pathname]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const switchMode = (next) => {
    setMode(next);
    const base = next === "signup" ? "/signup" : "/login";
    const query = redirectTo !== "/" ? `?redirect=${encodeURIComponent(redirectTo)}` : "";
    navigate(`${base}${query}`, { replace: true });
  };

  const finishAuth = () => {
    loginUser();
    navigate(redirectTo);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    finishAuth();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const err = getPhoneValidationError(phone, { required: true });
    if (err) {
      setPhoneError(t(`shared.validation.${err}`));
      return;
    }
    setPhoneError("");
    finishAuth();
  };

  const breadcrumbLabel = mode === "signup" ? t("breadcrumb.signUp") : t("breadcrumb.logIn");
  const illustrationSrc = mode === "signup" ? "/signup.png" : "/login.png";
  const illustrationAlt = mode === "signup" ? t("illustration.signUpAlt") : t("illustration.loginAlt");

  return (
    <>
      <section className="min-w-0 bg-[#f5f6f8]">
        <div className="page-container py-6 sm:py-8 lg:py-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-gray-500 mb-6 sm:mb-8"
          >
            <a href="/" className="hover:text-blue-500 no-underline text-gray-500 transition-colors">
              {t("breadcrumb.main")}
            </a>
            <span className="text-gray-300" aria-hidden="true">›</span>
            <span className="text-blue-500 font-medium">{breadcrumbLabel}</span>
          </nav>

          {redirectTo !== "/" && (
            <p className="mb-6 max-w-lg text-sm text-gray-600 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
              {mode === "signup" ? t("redirectNotice.signUp") : t("redirectNotice.logIn")}
            </p>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-6xl mx-auto">
            <div className="hidden lg:flex items-center justify-center order-1">
              <AuthIllustration src={illustrationSrc} alt={illustrationAlt} />
            </div>

            <div className="w-full max-w-[440px] mx-auto lg:mx-0 lg:ml-auto order-2">
              <div className="bg-white rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-gray-100 px-6 sm:px-8 py-8 sm:py-10">
                <h1 className="text-xl sm:text-2xl font-bold text-[#1e2a4a] text-center mb-6 uppercase tracking-wide">
                  {mode === "signup" ? t("title.signUp") : t("title.login")}
                </h1>

                <div className="grid grid-cols-2 gap-0 mb-6 rounded-xl overflow-hidden bg-gray-100 p-1">
                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    className={`h-11 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-lg border-none cursor-pointer transition-all duration-200 font-[inherit]
                      ${mode === "login"
                        ? "bg-[#3b63f1] text-white shadow-sm"
                        : "bg-transparent text-gray-500 hover:text-gray-700"}`}
                  >
                    {t("tabs.logIn")}
                  </button>
                  <button
                    type="button"
                    onClick={() => switchMode("signup")}
                    className={`h-11 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-lg border-none cursor-pointer transition-all duration-200 font-[inherit]
                      ${mode === "signup"
                        ? "bg-[#3b63f1] text-white shadow-sm"
                        : "bg-transparent text-gray-500 hover:text-gray-700"}`}
                  >
                    {t("tabs.signUp")}
                  </button>
                </div>

                {mode === "login" ? (
                  <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-gray-500">{t("fields.email")}</span>
                      <input
                        type="email"
                        placeholder={t("fields.emailPlaceholder")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                      />
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-gray-500">{t("fields.password")}</span>
                      <input
                        type="password"
                        placeholder={t("fields.passwordPlaceholder")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClass}
                      />
                    </label>

                    <div className="relative flex items-center gap-3 my-2">
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-xs text-gray-400 whitespace-nowrap">{t("divider")}</span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className="flex h-12 items-center justify-center rounded-xl bg-[#f0f2f5] border-none cursor-pointer hover:bg-gray-200 transition-colors"
                        aria-label={t("social.google")}
                      >
                        <IconGoogle />
                      </button>
                      <button
                        type="button"
                        className="flex h-12 items-center justify-center rounded-xl bg-[#f0f2f5] border-none cursor-pointer hover:bg-gray-200 transition-colors"
                        aria-label={t("social.apple")}
                      >
                        <IconApple />
                      </button>
                    </div>

                    <LegalText />

                    <button
                      type="submit"
                      className="mt-2 w-full min-h-[48px] bg-[#9baff9] hover:bg-[#7a97f5] text-white text-sm font-bold uppercase tracking-wider rounded-2xl border-none cursor-pointer transition-colors duration-150 font-[inherit] flex items-center justify-center gap-2"
                    >
                      {t("submit.logIn")}
                      <span aria-hidden="true">→</span>
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSignupSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-xs font-medium text-gray-500">{t("fields.name")}</span>
                        <input
                          type="text"
                          placeholder={t("fields.namePlaceholder")}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={inputClass}
                        />
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-xs font-medium text-gray-500">{t("fields.surname")}</span>
                        <input
                          type="text"
                          placeholder={t("fields.surnamePlaceholder")}
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                          className={inputClass}
                        />
                      </label>
                    </div>

                    <PhoneInputField
                      label={t("fields.phone")}
                      required
                      variant="auth"
                      value={phone}
                      onChange={(v) => { setPhone(v); setPhoneError(""); }}
                      error={phoneError}
                      placeholder={t("fields.phonePlaceholder")}
                    />

                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-gray-500">{t("fields.email")}</span>
                      <input
                        type="email"
                        placeholder={t("fields.emailPlaceholder")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                      />
                    </label>

                    <LegalText />

                    <button
                      type="submit"
                      className="mt-2 w-full min-h-[48px] bg-[#9baff9] hover:bg-[#7a97f5] text-white text-sm font-bold uppercase tracking-wider rounded-2xl border-none cursor-pointer transition-colors duration-150 font-[inherit] flex items-center justify-center gap-2"
                    >
                      {t("submit.signUp")}
                      <span aria-hidden="true">→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:hidden order-1 max-w-sm mx-auto w-full">
              <AuthIllustration src={illustrationSrc} alt={illustrationAlt} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
