import { useState, type FC } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
}

const FaqAccordion: FC<Props> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-3xl border border-white/10 bg-brand-dark/70 transition hover:border-brand-blue/30"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-semibold text-white"
            >
              <span>{item.question}</span>
              <span
                aria-hidden
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg transition ${
                  isOpen ? "rotate-45 bg-brand-blue/50 text-white" : "bg-white/10 text-brand-blue"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden px-6 pb-6 text-sm text-white/70">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FaqAccordion;
