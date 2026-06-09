import { useEffect } from "react";

export default function ShipmentModal({ isOpen, onClose, title, children, wide = false }) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full ${wide ? "max-w-lg" : "max-w-md"} max-h-[92dvh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-100 sticky top-0 bg-white z-10 rounded-t-2xl sm:rounded-t-2xl">
          <h2 className="text-base font-bold text-gray-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 border-none cursor-pointer hover:bg-gray-200 transition-colors text-gray-500"
          >
            ✕
          </button>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}

export function ModalActions({ onCancel, onSave, saveLabel = "Save" }) {
  return (
    <div className="flex gap-3 mt-6">
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 h-11 rounded-full border border-gray-200 bg-white text-xs font-bold uppercase tracking-wider text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors font-[inherit]"
        >
          Cancel
        </button>
      )}
      <button
        type="button"
        onClick={onSave}
        className="flex-1 h-11 rounded-full border-none bg-blue-500 text-white text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
      >
        {saveLabel}
      </button>
    </div>
  );
}
