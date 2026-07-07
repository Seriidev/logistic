import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { NAMESPACES } from "./namespaces";

export const LANGUAGE_STORAGE_KEY = "yuusell-language";

export const LOCALE_BY_CODE = {
  EN: "en",
  RU: "ru",
};

export const SUPPORTED_LOCALES = ["en", "ru"];

const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
const initialLng = saved && SUPPORTED_LOCALES.includes(saved) ? saved : "en";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    lng: initialLng,
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LOCALES,
    ns: NAMESPACES,
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });

i18n.on("languageChanged", (lng) => {
  if (SUPPORTED_LOCALES.includes(lng)) {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  }
});

export default i18n;
