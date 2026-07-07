import { useTranslation } from "react-i18next";
import { SectionHeading, AccordionItem } from "./shared";

const FAQ_KEYS = [
  "lclWhat",
  "fclWhat",
  "lclVsFcl",
  "transitTime",
  "tracking",
  "customs",
  "containerTypes",
  "insurance",
  "documents",
  "hazardous",
  "pricing",
  "doorToDoor",
];

export default function SeaFAQ() {
  const { t } = useTranslation("seaCargo");

  return (
    <section className="page-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow={t("faq.eyebrow")}
        title={t("faq.title")}
        description={t("faq.description")}
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4 min-w-0">
        {FAQ_KEYS.map((key) => (
          <AccordionItem
            key={key}
            question={t(`faq.items.${key}.q`)}
            answer={t(`faq.items.${key}.a`)}
          />
        ))}
      </div>
    </section>
  );
}
