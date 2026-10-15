import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    <section className="bg-[#FFFFFF] py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
              <span className="h-[2px] w-5 bg-[#FF8000]" />
              Client Testimonials
            </p>
            <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[36px]">
              What Our Clients Say
            </h2>
            <p className="font-body mt-3 max-w-[460px] text-[14.5px] leading-[1.7] text-[#003B8E]/70">
              We take pride in the trust and appreciation we receive from our clients.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#003B8E]/25 text-[#003B8E] transition-colors duration-200 hover:border-[#FF8000] hover:text-[#FF8000]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003B8E] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="mt-9 grid gap-5 lg:grid-cols-2"
          >
            {items.map((t) => (
              <article
                key={t.name}
                className="relative flex items-start gap-5 rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(0,59,142,0.06)]"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-full border-2 border-[#FFFFFF] object-cover shadow-md"
                />
                <div className="min-w-0">
                  <Quote size={22} color="#FF8000" className="mb-1 opacity-70" />
                  <p className="font-body text-[13.5px] leading-[1.75] text-[#003B8E]/85">{t.quote}</p>
                  <p className="font-body mt-3 text-[14px] font-bold text-[#003B8E]">{t.name}</p>
                  <p className="font-body text-[12px] text-[#003B8E]/65">{t.role}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}