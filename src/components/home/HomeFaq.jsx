import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle, Minus, Phone, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_HREF } from "../../constants/site";

// Edit questions/answers with your real details
const FAQS = [
  {
    category: "Pricing",
    q: "How much does construction cost per square foot?",
    a: "Our packages start at ₹1,650 per sq.ft (Basic), ₹1,950 per sq.ft (Standard) and ₹2,450 per sq.ft (Premium). The final cost depends on project type, location, design and material selection. Use our cost calculator for an instant estimate.",
  },
  {
    category: "Pricing",
    q: "Are there any hidden charges?",
    a: "No. Every quote is itemised and shared before work begins. Any change in scope is discussed and approved in writing before it affects your budget.",
  },
  {
    category: "Pricing",
    q: "What is your payment schedule?",
    a: "Payments are linked to construction milestones — booking, foundation, structure, finishing and handover — so you only pay as the work progresses.",
  },
  {
    category: "Process",
    q: "How long does a typical project take?",
    a: "A standard residential project takes around 8 to 12 months, while larger villas and multi-unit residential builds depend on scope. You receive a detailed timeline at the start and regular progress updates throughout.",
  },
  {
    category: "Process",
    q: "Do you help with design and approvals?",
    a: "Yes. Our team handles structural design, 3D elevations and drawings, and supports you with the required permits and municipal approvals.",
  },
  {
    category: "Process",
    q: "How will I track progress on site?",
    a: "You get a dedicated site engineer or project manager, along with weekly (or daily, on Premium) progress reports with photos, so you always know where your project stands.",
  },
  {
    category: "Warranty",
    q: "What warranty do you provide?",
    a: "We offer a workmanship warranty of 12, 24 or 36 months depending on your package. Any defect covered under warranty is fixed at no extra cost.",
  },
  {
    category: "Warranty",
    q: "Which materials do you use?",
    a: "We use quality-tested materials from trusted brands. Basic uses standard-grade materials, Standard uses premium branded materials, and Premium includes top-tier imported and branded finishes.",
  },
];

const CATEGORIES = ["All", "Pricing", "Process", "Warranty"];

export default function HomeFAQ() {
  const [category, setCategory] = useState("All");
  const [openIdx, setOpenIdx] = useState(0);

  const list = category === "All" ? FAQS : FAQS.filter((f) => f.category === category);

  const changeCategory = (c) => {
    setCategory(c);
    setOpenIdx(0);
  };

  return (
    <section id="faq" className="bg-[#FFFFFF]">
      <div className="px-5 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[38%_1fr] lg:gap-14">
          {/* LEFT: intro + help card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p className="font-body flex items-center gap-3 text-[13px] font-semibold text-[#FF8000]">
              <span aria-hidden="true" className="h-[3px] w-8 bg-[#FF8000]" />
              FAQs
            </p>
            <h2 className="font-heading mt-3 text-[34px] font-bold leading-[1.05] text-[#003B8E] sm:text-[44px] lg:text-[48px]">
              Frequently Asked Questions
            </h2>
            <p className="font-body mt-4 max-w-[460px] text-[15px] leading-[1.75] text-[#003B8E]/75">
              Everything you need to know about our pricing, process and warranty. Can&apos;t find your
              answer? Our team is happy to help.
            </p>

            {/* Help card */}
            <div className="relative mt-8 overflow-hidden bg-[#003B8E] px-7 py-8 rounded-md">
              <div
                className="absolute right-0 top-0 h-[70px] w-[110px] bg-[#FF8000] "
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FFFFFF]/30">
                <MessageCircle size={22} strokeWidth={1.6} color="#FF8000" />
              </span>
              <h3 className="font-heading mt-5 text-[22px] font-bold leading-tight text-[#FFFFFF]">
                Still have questions?
              </h3>
              <p className="font-body mt-2 text-[14px] leading-[1.7] text-[#FFFFFF]/75">
                Talk to our experts for a free consultation and site visit.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  to="/contact"
                  className="font-body group inline-flex items-center justify-center gap-2 bg-[#FF8000] px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF] hover:text-[#003B8E]"
                >
                  Contact Us
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="font-body inline-flex items-center justify-center gap-2 border border-[#FFFFFF]/35 px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF]/10"
                >
                  <Phone size={16} strokeWidth={2} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: filter + accordion */}
          <div>
            {/* Category tabs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-2"
            >
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => changeCategory(c)}
                  className={`font-body px-5 py-2.5 text-[13px] font-bold transition-colors ${
                    category === c
                      ? "bg-[#003B8E] text-[#FFFFFF] rounded-md"
                      : "border border-[#003B8E]/25 text-[#003B8E] hover:border-[#003B8E] rounded-md"
                  }`}
                >
                  {c}
                </button>
              ))}
            </motion.div>

            <ul className="mt-5 flex flex-col gap-3">
              {list.map((item, i) => {
                const open = openIdx === i;
                return (
                  <motion.li
                    key={item.q}
                    layout="position"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
                    className={`relative overflow-hidden border transition-colors ${
                      open
                        ? "border-[#003B8E] bg-[#003B8E]/[0.04] rounded-md"
                        : "border-[#003B8E]/15 bg-[#FFFFFF] hover:border-[#003B8E]/40 rounded-md"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-[4px] bg-[#FF8000] transition-opacity ${
                        open ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? -1 : i)}
                      aria-expanded={open}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                    >
                      <span className="font-heading w-7 shrink-0 text-[15px] font-bold text-[#FF8000]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading flex-1 text-[16px] font-semibold leading-snug text-[#003B8E] sm:text-[17px]">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          open
                            ? "border-[#FF8000] bg-[#FF8000]"
                            : "border-[#003B8E]/25"
                        }`}
                      >
                        {open ? (
                          <Minus size={16} strokeWidth={2.2} color="#FFFFFF" />
                        ) : (
                          <Plus size={16} strokeWidth={2.2} color="#003B8E" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-body px-5 pb-6 pl-[68px] pr-5 text-[14.5px] leading-[1.8] text-[#003B8E]/75 sm:pl-[76px] sm:pr-12">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}