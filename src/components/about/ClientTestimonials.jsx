import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Avatar from "../ui/Avatar";
import SectionHeader from "../ui/SectionHeader";

const TESTIMONIALS = [
  {
    quote:
      "Mastervision Infra LLP delivered our commercial project on time with exceptional quality. Their professionalism and attention to detail are truly commendable.",
    name: "Amit Sharma",
    role: "Business Owner",
    image: "/images/client-amit.jpg",
  },
  {
    quote:
      "Excellent team, great communication and high-quality work. We are extremely satisfied with the outcome and would highly recommend them.",
    name: "Neha Gupta",
    role: "Homeowner",
    image: "/images/client-neha.jpg",
  },
  {
    quote:
      "From planning to handover, every promise was kept on budget and on schedule. A dependable partner for large projects.",
    name: "Rajiv Malhotra",
    role: "Director, Ghaziabad",
    image: "/images/client-rajiv.jpg",
  },
  {
    quote:
      "Transparent costs and neat site management made the whole process stress-free. Our apartment exceeded expectations.",
    name: "Priya Singh",
    role: "Developer, Faridabad",
    image: "/images/client-priya.jpg",
  },
];

const PER_PAGE = 2;
const PAGES = Math.ceil(TESTIMONIALS.length / PER_PAGE);

export default function ClientTestimonials() {
  const [page, setPage] = useState(0);
  const items = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const prev = () => setPage((p) => (p - 1 + PAGES) % PAGES);
  const next = () => setPage((p) => (p + 1) % PAGES);

  return (
    <section className="bg-[#F5F8FD] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Client testimonials"
          title="What our clients say"
          text="We take pride in the trust and appreciation we receive from our clients."
          action={
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-[#003B8E]/25 text-[#003B8E] transition-colors duration-200 hover:border-[#FF8000] hover:text-[#FF8000]"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-[#003B8E] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          }
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid gap-5 lg:grid-cols-2"
          >
            {items.map((t) => (
              <figure key={t.name} className="relative flex flex-col border-t-4 border-[#FF8000] bg-[#FFFFFF] p-7 shadow-[0_18px_40px_-26px_rgba(0,59,142,0.35)] sm:p-9">
                <Quote size={34} color="#FF8000" aria-hidden="true" className="opacity-80" />
                <blockquote className="font-body mt-4 flex-1 text-[16.5px] leading-[1.75] text-[#003B8E]">{t.quote}</blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-[#003B8E]/10 pt-5">
                  <Avatar
                    src={t.image}
                    name={t.name}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-md object-cover"
                  />
                  <span>
                    <span className="font-heading block text-[20px] font-semibold leading-tight text-[#003B8E]">{t.name}</span>
                    <span className="font-body block text-[13px] text-[#003B8E]/70">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
