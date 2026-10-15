import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const FAQS = [
  {
    q: "How can I request a quotation?",
    a: "Fill in the form on this page or call us. We will understand your requirements, arrange a free consultation and share a detailed quotation.",
  },
  {
    q: "Do you handle both residential and commercial projects?",
    a: "Yes. We build residential, commercial and industrial projects, and also take up renovation and infrastructure work.",
  },
  {
    q: "What areas do you serve?",
    a: "We mainly work across Delhi NCR, including Noida, Greater Noida, Ghaziabad and Faridabad. Contact us to check availability for your location.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on the size and scope of the project. After the consultation we share a clear timeline along with the quotation.",
  },
  {
    q: "Do you provide end-to-end construction services?",
    a: "Yes. We support you from planning and design through execution and handover, with regular progress updates.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
          <span className="h-[2px] w-5 bg-[#FF8000]" />
          Frequently Asked Questions
        </p>
        <h2 className="font-heading mt-3 text-[28px] font-bold leading-[1.15] text-[#003B8E] sm:text-[32px]">
          Quick Answers
        </h2>
        <p className="font-body mt-2 text-[14.5px] leading-[1.7] text-[#003B8E]/70">
          Find answers to some common questions.
        </p>
      </motion.div>

      <ul className="mt-6 divide-y divide-[#003B8E]/10 rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF]">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="font-body flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[13.5px] font-semibold text-[#003B8E] transition-colors hover:text-[#FF8000]"
                >
                  {item.q}
                  {isOpen ? (
                    <Minus size={16} className="shrink-0" />
                  ) : (
                    <Plus size={16} className="shrink-0" />
                  )}
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body px-5 pb-4 text-[13px] leading-[1.7] text-[#003B8E]/75">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
