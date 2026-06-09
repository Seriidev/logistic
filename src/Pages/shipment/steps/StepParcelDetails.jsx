import { useState } from "react";
import { PARCEL_SIZES } from "../constants";
import { FormBlock, ClickField, SelectInput, TextInput, formatLocation } from "../components/shared";
import { FromModal, WhereModal, TransportModal, ObtainModal } from "../components/modals";

export default function StepParcelDetails({ data, onChange }) {
  const [fromOpen, setFromOpen] = useState(false);
  const [whereOpen, setWhereOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [obtainOpen, setObtainOpen] = useState(false);

  const selectedSize = PARCEL_SIZES.find((s) => s.label === data.parcelSize);
  const set = (key) => (val) => onChange({ ...data, [key]: val });

  return (
    <>
      <FormBlock title="From">
        <ClickField
          placeholder="Click this form"
          value={formatLocation(data.from)}
          onClick={() => setFromOpen(true)}
        />
      </FormBlock>

      <FormBlock title="Where">
        <ClickField
          placeholder="Click this form"
          value={formatLocation(data.where)}
          onClick={() => setWhereOpen(true)}
        />
      </FormBlock>

      <FormBlock title="Type of service">
        <div className="flex flex-col gap-3">
          <ClickField
            placeholder="How will we transport it?"
            value={data.transport}
            onClick={() => setTransportOpen(true)}
          />
          <ClickField
            placeholder="Method to obtain"
            value={data.obtain}
            onClick={() => setObtainOpen(true)}
          />
        </div>
      </FormBlock>

      <FormBlock title="Size and type of parcel">
        <div className="flex flex-col gap-3">
          <SelectInput
            placeholder="Select size"
            options={PARCEL_SIZES}
            value={data.parcelSize}
            onChange={set("parcelSize")}
          />
          {selectedSize && (
            <p className="text-xs text-blue-500 px-1 leading-relaxed">{selectedSize.desc}</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <TextInput label="Height cm" placeholder="Height cm" value={data.height} onChange={set("height")} />
            <TextInput label="Length cm" placeholder="Length cm" value={data.length} onChange={set("length")} />
            <TextInput label="Width cm" placeholder="Width cm" value={data.width} onChange={set("width")} />
          </div>
        </div>
      </FormBlock>

      <FormBlock title="Describe the cargo">
        <textarea
          placeholder="What needs to be transported?"
          value={data.cargo}
          onChange={(e) => set("cargo")(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-900 outline-none font-[inherit] resize-none focus:border-blue-400 transition-colors"
        />
      </FormBlock>

      <FromModal isOpen={fromOpen} onClose={() => setFromOpen(false)} onSave={set("from")} initial={data.from} />
      <WhereModal isOpen={whereOpen} onClose={() => setWhereOpen(false)} onSave={set("where")} initial={data.where} />
      <TransportModal isOpen={transportOpen} onClose={() => setTransportOpen(false)} onSave={set("transport")} initial={data.transport} />
      <ObtainModal isOpen={obtainOpen} onClose={() => setObtainOpen(false)} onSave={set("obtain")} initial={data.obtain} />
    </>
  );
}
