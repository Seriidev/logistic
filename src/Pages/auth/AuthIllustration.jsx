import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AuthIllustration({ src = "/login.png", alt }) {
  const { t } = useTranslation("auth");
  const [imgError, setImgError] = useState(false);
  const resolvedAlt = alt ?? t("illustration.loginAlt");

  return (
    <div className="relative w-full max-w-[720px] mx-auto aspect-[9/8] min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]">
      {!imgError ? (
        <img
          src={src}
          alt={resolvedAlt}
          className="w-full h-full object-contain object-center"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/80 p-6 text-center">
          <p className="text-sm font-semibold text-gray-500 mb-1">{t("illustration.unavailable")}</p>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
            {t("illustration.expectedAt")}{" "}
            <code className="text-blue-500 bg-blue-50 px-1 rounded">{src}</code>
          </p>
        </div>
      )}
    </div>
  );
}
