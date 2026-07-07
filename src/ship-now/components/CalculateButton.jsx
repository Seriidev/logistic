import { useTranslation } from "react-i18next";

export default function CalculateButton({ onClick, loading, calculated }) {
  const { t } = useTranslation("shipNow");

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="ship-now-btn-primary w-full sm:w-auto min-w-[220px]"
    >
      {loading ? (
        <>
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {t("actions.calculating")}
        </>
      ) : calculated ? (
        t("actions.recalculate")
      ) : (
        t("actions.calculate")
      )}
    </button>
  );
}
