import { useMemo } from "react";

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function QrCode({ value, size = 168 }) {
  const modules = 25;
  const cell = size / modules;
  const rand = mulberry32(hashString(value || "yuusell"));

  const isFinder = (r, c) => {
    const inBox = (br, bc) => r >= br && r < br + 7 && c >= bc && c < bc + 7;
    return inBox(0, 0) || inBox(0, modules - 7) || inBox(modules - 7, 0);
  };

  const cells = [];
  for (let r = 0; r < modules; r++) {
    for (let c = 0; c < modules; c++) {
      if (isFinder(r, c)) continue;
      if (rand() > 0.5) {
        cells.push(<rect key={`${r}-${c}`} x={c * cell} y={r * cell} width={cell} height={cell} fill="#0f172a" />);
      }
    }
  }

  const Finder = ({ x, y }) => (
    <g transform={`translate(${x * cell} ${y * cell})`}>
      <rect width={cell * 7} height={cell * 7} fill="#0f172a" />
      <rect x={cell} y={cell} width={cell * 5} height={cell * 5} fill="#fff" />
      <rect x={cell * 2} y={cell * 2} width={cell * 3} height={cell * 3} fill="#0f172a" />
    </g>
  );

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Shipment QR code" className="rounded-xl bg-white">
      <rect width={size} height={size} fill="#fff" />
      {cells}
      <Finder x={0} y={0} />
      <Finder x={modules - 7} y={0} />
      <Finder x={0} y={modules - 7} />
    </svg>
  );
}

function buildPdf(lines) {
  const objects = [];
  objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  objects.push("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
  objects.push(
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>\nendobj\n"
  );

  let text = "BT\n/F1 12 Tf\n50 780 Td\n16 TL\n";
  lines.forEach((line, i) => {
    const escaped = String(line).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    text += i === 0 ? `(${escaped}) Tj\n` : `T* (${escaped}) Tj\n`;
  });
  text += "ET\n";

  objects.push(`4 0 obj\n<< /Length ${text.length} >>\nstream\n${text}endstream\nendobj\n`);
  objects.push("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n");

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj;
  }
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) pdf += String(off).padStart(10, "0") + " 00000 n \n";
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return pdf;
}

export default function SuccessStep({ booking }) {
  const { trackingNumber, referenceNumber } = useMemo(() => {
    const rand = mulberry32((Date.now() ^ hashString(JSON.stringify(booking || {}))) >>> 0);
    const digits = (n) => Array.from({ length: n }, () => Math.floor(rand() * 10)).join("");
    return {
      trackingNumber: `YS${digits(12)}`,
      referenceNumber: `SEA-${digits(6)}`,
    };
  }, [booking]);

  const handleDownload = () => {
    const b = booking || {};
    const lines = [
      "YuuSell Logistics - Electronic Declaration",
      "==========================================",
      "",
      `Service:          ${b.serviceLabel || "Sea Cargo"}`,
      `Tracking Number:  ${trackingNumber}`,
      `Reference Number: ${referenceNumber}`,
      "",
      `From:             ${b.fromCountry || "-"} (${b.zipCode || "-"})`,
      `Destination:      ${b.destinationCountry || "-"}`,
      `Shipment Date:    ${b.dateOfShipment || "-"}`,
      `Weight:           ${b.weight || "-"} ${b.weightUnit || "kg"}`,
      `Details:          ${b.detailLine || "-"}`,
      `Delivery Type:    ${b.deliveryLabel || "-"}`,
      `Declared Value:   $${b.declaredValue || "0"}`,
      "",
      `Payment Method:   ${b.paymentMethod || "-"}`,
      `Amount Paid:      $${(b.total || 0).toFixed(2)} USD`,
      `Delivery Time:    ${b.deliveryTime || "-"}`,
      "",
      "Pick up and send your shipment from the nearest branch.",
      "Thank you for shipping with YuuSell.",
    ];
    const blob = new Blob([buildPdf(lines)], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${trackingNumber}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="animate-[fadeIn_0.3s_ease-out] max-w-3xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 mb-4">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">
          Electronic Declaration Created
        </h2>
        <p className="inline-flex items-center gap-2 text-sm sm:text-base text-green-700 font-medium">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Payment successful
        </p>
      </div>

      <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">
          <div className="min-w-0 order-2 sm:order-1">
            <div className="mb-4">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Tracking Number</p>
              <p className="text-lg sm:text-xl font-extrabold text-gray-900 break-all">{trackingNumber}</p>
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Shipment Reference Number</p>
              <p className="text-base sm:text-lg font-bold text-gray-900 break-all">{referenceNumber}</p>
            </div>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-full bg-blue-500 text-white
                text-sm font-bold uppercase tracking-wider border-none cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF
            </button>
          </div>

          <div className="flex flex-col items-center order-1 sm:order-2 shrink-0">
            <div className="p-3 rounded-2xl border border-gray-100 bg-white">
              <QrCode value={trackingNumber} />
            </div>
            <p className="text-xs text-gray-400 mt-2">Scan at branch</p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100">
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4 sm:p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Next step:</strong> Pick up and send your shipment
              from the nearest branch. Track your shipment any time using your tracking number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
