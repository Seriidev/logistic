import { SectionHeading, CheckItem, ImageBlock } from "./shared";

const CUSTOMS_SERVICES = [
  "Import and export documentation preparation",
  "HS code classification and duty optimization",
  "Pre-clearance and bonded warehouse solutions",
  "Country-specific compliance advisory",
  "Certificate of origin and commercial invoice support",
  "Real-time customs status updates and exception management",
];

const DOCUMENTS = [
  { name: "Commercial Invoice", desc: "Accurate valuation and product descriptions" },
  { name: "Packing List", desc: "Detailed contents and weight breakdown" },
  { name: "Air Waybill", desc: "Carrier contract and shipment tracking" },
  { name: "Customs Declaration", desc: "Regulatory filing for smooth clearance" },
];

export default function AirCustomsSupport() {
  return (
    <section className="bg-gray-50 min-w-0 py-12 sm:py-16 lg:py-20">
      <div className="page-container min-w-0">
        <SectionHeading
          eyebrow="Customs Support"
          title="Seamless Customs Clearance for Air Freight"
          description="Navigate complex international regulations with confidence. Our licensed customs brokers handle documentation, duties, and compliance — minimizing delays at every border."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start min-w-0">
          <ImageBlock
            src="/minibanner5.jpg"
            alt="Customs clearance support"
            hint="Add photo: public/minibanner5.jpg"
            className="w-full h-56 sm:h-72 lg:h-[400px] rounded-2xl sm:rounded-3xl"
          />

          <div className="min-w-0">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              Customs delays can derail even the fastest air shipments. YuuSell&apos;s in-house
              brokerage team works ahead of arrival to pre-file declarations, verify classifications,
              and resolve issues before your cargo lands — keeping clearance times to a minimum.
            </p>

            <div className="flex flex-col gap-3 mb-6 sm:mb-8">
              {CUSTOMS_SERVICES.map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {DOCUMENTS.map((doc) => (
            <article
              key={doc.name}
              className="rounded-2xl bg-white border border-gray-100 p-5 sm:p-6 min-w-0"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{doc.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{doc.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
