import { FormBlock, TextInput } from "../components/shared";

export default function StepPayment({ data, onChange }) {
  const set = (key) => (val) => onChange({ ...data, [key]: val });
  const isCard = data.paymentType !== "recipient";

  return (
    <div className="flex flex-col gap-4">
      <FormBlock title="Delivery method and payment">
        <div className="flex flex-col gap-4">
          <label
            className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-colors
              ${isCard ? "border-blue-400 bg-blue-50/30" : "border-gray-100 bg-gray-50"}`}
          >
            <input
              type="radio"
              name="paymentType"
              checked={isCard}
              onChange={() => set("paymentType")("card")}
              className="mt-1 accent-blue-500"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-blue-800 bg-white px-2 py-0.5 rounded border">VISA</span>
                <span className="text-xs font-bold text-red-700 bg-white px-2 py-0.5 rounded border">MC</span>
              </div>
              <p className="text-sm font-semibold text-gray-900">Credit Card</p>
              <p className="text-xs text-gray-500">Visa, Master Card, American Express, etc.</p>
            </div>
          </label>

          {isCard && (
            <div className="flex flex-col gap-3 pl-1">
              <TextInput label="Number card" placeholder="•••• •••• •••• ••••" value={data.cardNumber} onChange={set("cardNumber")} />
              <div className="grid grid-cols-2 gap-3">
                <TextInput label="Expiration date (MM/YY)" placeholder="MM/YY" value={data.cardExpiry} onChange={set("cardExpiry")} />
                <TextInput label="CVC" placeholder="CVC" value={data.cardCvc} onChange={set("cardCvc")} />
              </div>
              <TextInput label="Cardholder name" placeholder="Full name on card" value={data.cardName} onChange={set("cardName")} />

              <p className="text-xs font-bold text-gray-700 uppercase tracking-wide pt-2">Billing address</p>
              <TextInput placeholder="Full name on card" value={data.billingName} onChange={set("billingName")} />
              <TextInput placeholder="Address line 1" value={data.billingLine1} onChange={set("billingLine1")} />
              <TextInput placeholder="Address line 2" value={data.billingLine2} onChange={set("billingLine2")} />
              <div className="grid grid-cols-2 gap-3">
                <TextInput placeholder="City" value={data.billingCity} onChange={set("billingCity")} />
                <TextInput placeholder="Province" value={data.billingProvince} onChange={set("billingProvince")} />
              </div>
              <TextInput placeholder="Postal code" value={data.billingZip} onChange={set("billingZip")} />

              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.useShippingAddress ?? true}
                  onChange={(e) => set("useShippingAddress")(e.target.checked)}
                  className="accent-blue-500 w-4 h-4"
                />
                Use shipping address as billing address
              </label>

              <button
                type="button"
                className="w-full h-11 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider border-none cursor-pointer hover:bg-blue-600 transition-colors font-[inherit]"
              >
                Save card
              </button>
            </div>
          )}

          <label
            className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-colors
              ${!isCard ? "border-blue-400 bg-blue-50/30" : "border-gray-100 bg-gray-50"}`}
          >
            <input
              type="radio"
              name="paymentType"
              checked={!isCard}
              onChange={() => set("paymentType")("recipient")}
              className="mt-1 accent-blue-500"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">Recipient Pays</p>
              <p className="text-xs text-gray-500">The recipient of the parcel pays</p>
              <p className="text-xs text-gray-400 mt-1">Select this option if you are not the one who should pay</p>
            </div>
          </label>
        </div>
      </FormBlock>
    </div>
  );
}
