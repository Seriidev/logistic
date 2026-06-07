// 

import { useState, useEffect } from "react";

// ── Shared overlay ──────────────────────────────────────────────────────────
function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto sm:mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 className="text-sm font-bold text-gray-900 min-w-0">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full
              bg-gray-50 border border-gray-100 cursor-pointer text-gray-600
              hover:border-blue-300 hover:bg-blue-50 transition-all duration-150"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-4 sm:px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

// ── Reusable field inside modals ────────────────────────────────────────────
function ModalInput({ label, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100
          text-sm text-gray-900 outline-none font-[inherit]
          focus:border-blue-400 hover:border-gray-200 transition-colors"
      />
    </div>
  );
}

function SaveButton({ onClick, label = "Save" }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white text-xs
        font-bold uppercase tracking-wider rounded-full border-none cursor-pointer
        transition-colors font-[inherit] mt-2"
    >
      {label}
    </button>
  );
}

// ── 1. FROM modal ───────────────────────────────────────────────────────────
export function FromModal({ isOpen, onClose, onSave }) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    if (!country.trim()) return alert("Please enter a country.");
    onSave({ country, city, address });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="From — Origin">
      <div className="flex flex-col gap-4">
        <ModalInput label="Country *" placeholder="e.g. China" value={country} onChange={setCountry} />
        <ModalInput label="City" placeholder="e.g. Shanghai" value={city} onChange={setCity} />
        <ModalInput label="Address" placeholder="Street, building..." value={address} onChange={setAddress} />
        <SaveButton onClick={handleSave} label="Confirm Origin" />
      </div>
    </Modal>
  );
}

// ── 2. WHERE modal ──────────────────────────────────────────────────────────
export function WhereModal({ isOpen, onClose, onSave }) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    if (!country.trim()) return alert("Please enter a country.");
    onSave({ country, city, address });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Where — Destination">
      <div className="flex flex-col gap-4">
        <ModalInput label="Country *" placeholder="e.g. Thailand" value={country} onChange={setCountry} />
        <ModalInput label="City" placeholder="e.g. Bangkok" value={city} onChange={setCity} />
        <ModalInput label="Address" placeholder="Street, building..." value={address} onChange={setAddress} />
        <SaveButton onClick={handleSave} label="Confirm Destination" />
      </div>
    </Modal>
  );
}

// ── 3. TRANSPORT modal ──────────────────────────────────────────────────────
const TRANSPORT_METHODS = [
  { value: "Air Freight",      icon: "✈️", desc: "Fast delivery worldwide, 3–7 days" },
  { value: "Sea Freight",      icon: "🚢", desc: "Cost-effective for large volumes" },
  { value: "Truck Cargo",      icon: "🚛", desc: "Reliable overland transport" },
  { value: "Express Delivery", icon: "⚡", desc: "Priority door-to-door, 1–3 days" },
  { value: "Auto Shipping",    icon: "🚗", desc: "Vehicle and heavy equipment transport" },
];

export function TransportModal({ isOpen, onClose, onSave }) {
  const [selected, setSelected] = useState("");

  const handleSave = () => {
    if (!selected) return alert("Please select a transport method.");
    onSave(selected);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Transport Method">
      <div className="flex flex-col gap-3">
        {TRANSPORT_METHODS.map((m) => (
          <button
            key={m.value}
            onClick={() => setSelected(m.value)}
            className={`flex items-center gap-4 px-4 py-3 rounded-full border text-left
              cursor-pointer transition-all font-[inherit] w-full
              ${selected === m.value
                ? "border-blue-400 bg-blue-50"
                : "border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/50"
              }`}
          >
            <span className="text-2xl">{m.icon}</span>
            <div>
              <p className={`text-sm font-semibold ${selected === m.value ? "text-blue-700" : "text-gray-900"}`}>
                {m.value}
              </p>
              <p className="text-xs text-gray-400">{m.desc}</p>
            </div>
            {selected === m.value && (
              <span className="ml-auto text-blue-500 text-base">✓</span>
            )}
          </button>
        ))}
        <SaveButton onClick={handleSave} label="Confirm Transport" />
      </div>
    </Modal>
  );
}

// ── 4. OBTAIN modal ─────────────────────────────────────────────────────────
const OBTAIN_METHODS = [
  { value: "Door to Door",          icon: "🏠", desc: "We deliver right to your address" },
  { value: "Pickup from Warehouse", icon: "🏭", desc: "Collect at our local warehouse" },
  { value: "Port to Port",          icon: "⚓", desc: "Ship-to-ship terminal transfer" },
  { value: "Port to Door",          icon: "📦", desc: "From port straight to your location" },
];

export function ObtainModal({ isOpen, onClose, onSave }) {
  const [selected, setSelected] = useState("");

  const handleSave = () => {
    if (!selected) return alert("Please select a delivery method.");
    onSave(selected);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Obtain Method">
      <div className="flex flex-col gap-3">
        {OBTAIN_METHODS.map((m) => (
          <button
            key={m.value}
            onClick={() => setSelected(m.value)}
            className={`flex items-center gap-4 px-4 py-3 rounded-full border text-left
              cursor-pointer transition-all font-[inherit] w-full
              ${selected === m.value
                ? "border-teal-400 bg-teal-50"
                : "border-gray-100 bg-gray-50 hover:border-teal-200 hover:bg-teal-50/50"
              }`}
          >
            <span className="text-2xl">{m.icon}</span>
            <div>
              <p className={`text-sm font-semibold ${selected === m.value ? "text-teal-700" : "text-gray-900"}`}>
                {m.value}
              </p>
              <p className="text-xs text-gray-400">{m.desc}</p>
            </div>
            {selected === m.value && (
              <span className="ml-auto text-teal-500 text-base">✓</span>
            )}
          </button>
        ))}
        <SaveButton onClick={handleSave} label="Confirm Method" />
      </div>
    </Modal>
  );
}