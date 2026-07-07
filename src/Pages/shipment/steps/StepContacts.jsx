import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormBlock, ClickField, formatContact } from "../components/shared";
import { SenderModal, RecipientModal } from "../components/modals";

export default function StepContacts({ data, onChange }) {
  const { t } = useTranslation("shipment");
  const [senderOpen, setSenderOpen] = useState(false);
  const [recipientOpen, setRecipientOpen] = useState(false);
  const set = (key) => (val) => onChange({ ...data, [key]: val });

  return (
    <>
      <FormBlock title={t("fields.sender")}>
        <ClickField
          label={t("fields.sender")}
          placeholder={t("placeholders.clickForm")}
          value={formatContact(data.sender)}
          onClick={() => setSenderOpen(true)}
        />
      </FormBlock>

      <FormBlock title={t("fields.recipient")}>
        <ClickField
          label={t("fields.recipient")}
          placeholder={t("placeholders.clickForm")}
          value={formatContact(data.recipient)}
          onClick={() => setRecipientOpen(true)}
        />
      </FormBlock>

      <SenderModal isOpen={senderOpen} onClose={() => setSenderOpen(false)} onSave={set("sender")} initial={data.sender} />
      <RecipientModal isOpen={recipientOpen} onClose={() => setRecipientOpen(false)} onSave={set("recipient")} initial={data.recipient} />
    </>
  );
}
