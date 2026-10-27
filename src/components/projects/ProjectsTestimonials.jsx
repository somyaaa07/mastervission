import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Avatar from "../ui/Avatar";
import SectionHeader from "../ui/SectionHeader";

const TESTIMONIALS = [
  {
    quote:
      "Mastervision Infra delivered our project on time with exceptional quality. Their professionalism and attention to detail are truly commendable.",
    name: "Ramesh Kumar",
    role: "Homeowner",
    image: "/images/client-1.jpg",
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
      "From planning to handover, every promise was kept on budget and on schedule. A dependable partner for building our home.",
    name: "Amit Sharma",
    role: "Homeowner, Ghaziabad",
    image: "/images/client-amit.jpg",
  },
  {
    quote:
      "Transparent costs and neat site management made the whole process stress-free. Our apartment exceeded expectations.",
    name: "Priya Singh",
    role: "Homeowner, Faridabad",
    image: "/images/client-priya.jpg",
  },
];

export default function ProjectsTestimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-[#F5F8FD] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Client testimonials"
          title="What our clients say"
          text="We take pride in the trust and appreciation we receive from our clients."
        />

        <div className="mt-10 border-t-4 border-[#FF8000] bg-[#FFFFFF] p-6 shadow-[0_24px_50px_-30px_rgba(0,59,142,0.45)] sm:p-10">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
              className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-10"
            >
              <Avatar
                src={t.image}
                name={t.name}
                textClass="text-[40px]"
                className="h-24 w-24 shrink-0 rounded-md object-cover sm:h-32 sm:w-32"
              />
              <div className="min-w-0">
                <Quote size={32} color="#FF8000" aria-hidden="true" className="opacity-80" />
                <blockquote className="font-body mt-3 max-w-[760px] text-[18px] leading-[1.7] text-[#003B8E] sm:text-[20px]">{t.quote}</blockquote>
                <figcaption className="mt-5">
                  <span className="font-heading text-[22px] font-semibold text-[#003B8E]">{t.name}</span>
                  <span className="font-body ml-3 text-[14px] text-[#003B8E]/70">{t.role}</span>
                </figcaption>
              </div>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#003B8E]/10 pt-5">
            <div className="flex gap-2" role="group" aria-label="Choose testimonial">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: i === index ? 28 : 10, backgroundColor: i === index ? "#FF8000" : "#003B8E33" }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-[#003B8E]/25 text-[#003B8E] transition-colors duration-200 hover:border-[#FF8000] hover:text-[#FF8000]"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-[#003B8E] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
