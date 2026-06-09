import { useState } from "react";
import { FormBlock, ClickField, formatContact } from "../components/shared";
import { SenderModal, RecipientModal } from "../components/modals";

export default function StepContacts({ data, onChange }) {
  const [senderOpen, setSenderOpen] = useState(false);
  const [recipientOpen, setRecipientOpen] = useState(false);
  const set = (key) => (val) => onChange({ ...data, [key]: val });

  return (
    <>
      <FormBlock title="Sender">
        <ClickField
          label="Sender"
          placeholder="Click this form"
          value={formatContact(data.sender)}
          onClick={() => setSenderOpen(true)}
        />
      </FormBlock>

      <FormBlock title="Recipient">
        <ClickField
          label="Recipient"
          placeholder="Click this form"
          value={formatContact(data.recipient)}
          onClick={() => setRecipientOpen(true)}
        />
      </FormBlock>

      <SenderModal isOpen={senderOpen} onClose={() => setSenderOpen(false)} onSave={set("sender")} initial={data.sender} />
      <RecipientModal isOpen={recipientOpen} onClose={() => setRecipientOpen(false)} onSave={set("recipient")} initial={data.recipient} />
    </>
  );
}
