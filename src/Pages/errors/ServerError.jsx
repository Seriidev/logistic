import ErrorPageLayout from "./ErrorPageLayout";

function ServerErrorIllustration() {
  return (
    <svg
      viewBox="0 0 220 180"
      className="w-48 sm:w-56 h-auto mx-auto"
      aria-hidden="true"
    >
      {/* Box — front (blue) */}
      <rect x="70" y="88" width="80" height="62" rx="3" fill="#2563eb" stroke="#0f172a" strokeWidth="2.5" />
      {/* Box — side (white) */}
      <path d="M150 88 L178 72 L178 134 L150 150 Z" fill="#fff" stroke="#0f172a" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Box top */}
      <path d="M70 88 L98 72 L178 72 L150 88 Z" fill="#f8fafc" stroke="#0f172a" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Wi-Fi off icon on side */}
      <g transform="translate(158, 98)">
        <path
          d="M0 8 C4 4 12 4 16 8 M-3 11 C3 5 13 5 19 11 M-6 14 C4 4 16 4 26 14"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line x1="-2" y1="18" x2="22" y2="-2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Legs */}
      <rect x="98" y="52" width="12" height="38" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
      <rect x="118" y="48" width="12" height="42" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
      <rect x="96" y="48" width="16" height="8" rx="2" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
      <rect x="116" y="44" width="16" height="8" rx="2" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />

      {/* Arm + 500 sign */}
      <rect x="88" y="18" width="10" height="36" rx="3" fill="#2563eb" stroke="#0f172a" strokeWidth="2" transform="rotate(-12 93 36)" />
      <rect x="72" y="4" width="52" height="28" rx="3" fill="#fff" stroke="#0f172a" strokeWidth="2.5" />
      <text
        x="98"
        y="24"
        textAnchor="middle"
        fill="#0f172a"
        fontSize="16"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        500
      </text>
    </svg>
  );
}

export default function ServerErrorPage() {
  return (
    <ErrorPageLayout
      illustration={<ServerErrorIllustration />}
      titleKey="serverError.title"
      descriptionKey="serverError.description"
    />
  );
}
