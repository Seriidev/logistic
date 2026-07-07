import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PARCEL_SIZES } from "../constants";
import { FormBlock, ClickField, SelectInput, TextInput, formatLocation } from "../components/shared";
import { FromModal, WhereModal, TransportModal, ObtainModal } from "../components/modals";

export default function StepParcelDetails({ data, onChange }) {
  const { t } = useTranslation("shipment");
  const [fromOpen, setFromOpen] = useState(false);
  const [whereOpen, setWhereOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [obtainOpen, setObtainOpen] = useState(false);

  const selectedSize = PARCEL_SIZES.find((s) => s.id === data.parcelSize);
  const set = (key) => (val) => onChange({ ...data, [key]: val });

  return (
    <>
      <FormBlock title={t("fields.from")}>
        <ClickField
          placeholder={t("placeholders.selectOrigin")}
          value={formatLocation(data.from, t)}
          onClick={() => setFromOpen(true)}
        />
      </FormBlock>

      <FormBlock title={t("fields.where")}>
        <ClickField
          placeholder={t("placeholders.selectDestination")}
          value={formatLocation(data.where, t)}
          onClick={() => setWhereOpen(true)}
        />
      </FormBlock>

      <FormBlock title={t("sections.typeOfService")}>
        <div className="flex flex-col gap-3">
          <ClickField
            placeholder={t("fields.transport")}
            value={data.transport ? t(`transportOptions.${data.transport}`) : ""}
            onClick={() => setTransportOpen(true)}
          />
          <ClickField
            placeholder={t("fields.obtain")}
            value={data.obtain ? t(`obtainOptions.${data.obtain}`) : ""}
            onClick={() => setObtainOpen(true)}
          />
        </div>
      </FormBlock>

      <FormBlock title={t("sections.parcelSize")}>
        <div className="flex flex-col gap-3">
          <SelectInput
            placeholder={t("placeholders.selectSize")}
            options={PARCEL_SIZES}
            value={data.parcelSize}
            onChange={set("parcelSize")}
            getOptionLabel={(option) => t(`parcelSizes.${option.id}.label`)}
          />
          {selectedSize && (
            <p className="text-xs text-blue-500 px-1 leading-relaxed">{t(`parcelSizes.${selectedSize.id}.desc`)}</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <TextInput label={t("fields.heightCm")} placeholder={t("fields.heightCm")} value={data.height} onChange={set("height")} />
            <TextInput label={t("fields.lengthCm")} placeholder={t("fields.lengthCm")} value={data.length} onChange={set("length")} />
            <TextInput label={t("fields.widthCm")} placeholder={t("fields.widthCm")} value={data.width} onChange={set("width")} />
          </div>
        </div>
      </FormBlock>

      <FormBlock title={t("sections.describeCargo")}>
        <textarea
          placeholder={t("placeholders.cargoDescription")}
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
