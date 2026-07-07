import ErrorPageLayout from "./ErrorPageLayout";

function BoxesIllustration() {
  return (
    <svg
      viewBox="0 0 200 160"
      className="w-44 sm:w-52 h-auto mx-auto"
      aria-hidden="true"
    >
      <rect x="48" y="72" width="104" height="72" rx="4" fill="#2563eb" stroke="#0f172a" strokeWidth="2.5" />
      <rect x="58" y="82" width="28" height="10" rx="1" fill="#fff" opacity="0.9" />
      <rect x="114" y="82" width="28" height="10" rx="1" fill="#fff" opacity="0.9" />
      <path d="M48 72 L100 48 L152 72" fill="#1d4ed8" stroke="#0f172a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M100 48 L100 72" stroke="#0f172a" strokeWidth="2" />

      <rect x="62" y="28" width="76" height="52" rx="4" fill="#2563eb" stroke="#0f172a" strokeWidth="2.5" />
      <path d="M62 28 L100 10 L138 28" fill="#1d4ed8" stroke="#0f172a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M100 10 L100 28" stroke="#0f172a" strokeWidth="2" />
      <rect x="78" y="42" width="44" height="22" rx="2" fill="#fff" />
      <text
        x="100"
        y="58"
        textAnchor="middle"
        fill="#0f172a"
        fontSize="14"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        404
      </text>
      <rect x="72" y="36" width="18" height="8" rx="1" fill="#fff" opacity="0.85" />
      <rect x="110" y="36" width="18" height="8" rx="1" fill="#fff" opacity="0.85" />
    </svg>
  );
}

export default function NotFoundPage() {
  return (
    <ErrorPageLayout
      illustration={<BoxesIllustration />}
      titleKey="notFound.title"
      descriptionKey="notFound.description"
    />
  );
}
