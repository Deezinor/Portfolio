import React, { useState } from "react";
import clsx from "clsx";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
  className?: string;
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  allowMultiple = false,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) => {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      });
    } else {
      setOpenIndices((prev) => {
        return prev.includes(index) ? [] : [index];
      });
    }
  };

  return (
    <div className={clsx("space-y-0", className)}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);

        return (
          <div key={index} className="border-t border-border">
            <button
              onClick={() => toggleItem(index)}
              className="w-full py-6 flex items-center justify-between text-left group"
              aria-expanded={isOpen}
            >
              <h3 className="text-h3 uppercase tracking-wider pr-8">
                {item.question}
              </h3>
              <span
                className={clsx(
                  "text-2xl text-muted transition-transform duration-300 ease-smooth",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-smooth",
                isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0",
              )}
            >
              <p className="text-body text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
