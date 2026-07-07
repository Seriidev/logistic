import { useTranslation } from "react-i18next";
import { SectionHeading, AccordionItem } from "./shared";

const FAQ_IDS = [1, 2, 3, 4, 5, 6, 7, 8];

export default function AirFAQ() {
  const { t } = useTranslation("airCargo");

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow={t("faq.eyebrow")}
        title={t("faq.title")}
        description={t("faq.description")}
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4 min-w-0">
        {FAQ_IDS.map((id) => (
          <AccordionItem
            key={id}
            question={t(`faq.items.${id}.q`)}
            answer={t(`faq.items.${id}.a`)}
          />
        ))}
      </div>
    </section>
  );
}
