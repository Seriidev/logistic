import { useEffect, useState } from "react";
import ShipmentModal, { ModalActions } from "./ShipmentModal";
import PhoneInputField from "../../../components/PhoneInputField";
import { TextInput } from "./shared";
import { getPhoneValidationError } from "../../../utils/phone";
import { COUNTRIES, OBTAIN_OPTIONS, TRANSPORT_OPTIONS, US_STATES } from "../constants";

const emptyLocation = { country: "United States", address: "", city: "", state: "", zip: "" };
const emptyContact = {
  company: "", lastName: "", email: "", phone: "", address: "", city: "", state: "", zip: "",
};

function LocationModal({ isOpen, onClose, onSave, title, initial }) {
  const [form, setForm] = useState(emptyLocation);

  useEffect(() => {
    if (isOpen) setForm(initial || emptyLocation);
  }, [isOpen, initial]);

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    if (!form.country?.trim()) return alert("Please select a country.");
    onSave(form);
    onClose();
  };

  return (
    <ShipmentModal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-gray-600">Country / Region</span>
          <select
            value={form.country}
            onChange={(e) => set("country")(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 text-sm outline-none font-[inherit]"
          >
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-gray-600">Address</span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search address..."
              value={form.address}
              onChange={(e) => set("address")(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-100 text-sm outline-none font-[inherit]"
            />
          </div>
        </label>
        <TextInput label="City" placeholder="City" value={form.city} onChange={set("city")} />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-gray-600">State</span>
          <select
            value={form.state}
            onChange={(e) => set("state")(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 text-sm outline-none font-[inherit]"
          >
            <option value="">Select state</option>
            {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <TextInput label="Zip code" placeholder="Zip code" value={form.zip} onChange={set("zip")} />
        <ModalActions onCancel={onClose} onSave={handleSave} />
      </div>
    </ShipmentModal>
  );
}

function RadioModal({ isOpen, onClose, onSave, title, options, initial }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (isOpen) setSelected(initial || options[0] || "");
  }, [isOpen, initial, options]);

  const handleSave = () => {
    if (!selected) return alert("Please select an option.");
    onSave(selected);
    onClose();
  };

  return (
    <ShipmentModal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border cursor-pointer transition-colors
              ${selected === opt ? "border-blue-400 bg-blue-50" : "border-gray-100 bg-gray-50 hover:border-blue-200"}`}
          >
            <input
              type="radio"
              name={title}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
              className="w-4 h-4 accent-blue-500"
            />
            <span className="text-sm font-medium text-gray-900">{opt}</span>
          </label>
        ))}
        <ModalActions onSave={handleSave} saveLabel="Save" />
      </div>
    </ShipmentModal>
  );
}

function ContactModal({ isOpen, onClose, onSave, title, initial }) {
  const [form, setForm] = useState(emptyContact);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setForm(initial || emptyContact);
      setPhoneError("");
    }
  }, [isOpen, initial]);

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    if (!form.company?.trim() && !form.lastName?.trim()) {
      return alert("Please enter a name.");
    }
    const err = getPhoneValidationError(form.phone, { required: true });
    if (err) {
      setPhoneError(err);
      return;
    }
    setPhoneError("");
    onSave({ ...form, firstName: form.company });
    onClose();
  };

  return (
    <ShipmentModal isOpen={isOpen} onClose={onClose} title={title} wide>
      <div className="flex flex-col gap-3.5">
        <TextInput label="Full name / Company name" placeholder="Full name / Company name" value={form.company} onChange={set("company")} />
        <TextInput label="Last name" placeholder="Last name" value={form.lastName} onChange={set("lastName")} />
        <TextInput label="Email" placeholder="email@example.com" value={form.email} onChange={set("email")} type="email" />
        <PhoneInputField
          label="Phone number"
          required
          variant="default"
          value={form.phone}
          onChange={(v) => { set("phone")(v); setPhoneError(""); }}
          error={phoneError}
          placeholder="Enter phone number"
        />
        <TextInput label="Address" placeholder="Street address" value={form.address} onChange={set("address")} />
        <TextInput label="City" placeholder="City" value={form.city} onChange={set("city")} />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-gray-600">State</span>
          <select
            value={form.state}
            onChange={(e) => set("state")(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 text-sm outline-none font-[inherit]"
          >
            <option value="">Select state</option>
            {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <TextInput label="Zip code" placeholder="Zip code" value={form.zip} onChange={set("zip")} />
        <ModalActions onSave={handleSave} saveLabel="Save" />
      </div>
    </ShipmentModal>
  );
}

export function FromModal(props) {
  return <LocationModal {...props} title="From" />;
}

export function WhereModal(props) {
  return <LocationModal {...props} title="Where" />;
}

export function TransportModal(props) {
  return (
    <RadioModal
      {...props}
      title="How will we transport it?"
      options={TRANSPORT_OPTIONS}
    />
  );
}

export function ObtainModal(props) {
  return (
    <RadioModal
      {...props}
      title="Method to obtain"
      options={OBTAIN_OPTIONS}
    />
  );
}

export function SenderModal(props) {
  return <ContactModal {...props} title="Sender information" />;
}

export function RecipientModal(props) {
  return <ContactModal {...props} title="Recipient" />;
}
