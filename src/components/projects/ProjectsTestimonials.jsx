import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Mastervision Infra LLP delivered our project on time with exceptional quality. Their professionalism and attention to detail are truly commendable.",
    name: "Ramesh Kumar",
    role: "Business Owner",
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
      "From planning to handover, every promise was kept on budget and on schedule. A dependable partner for large projects.",
    name: "Amit Sharma",
    role: "Director, Ghaziabad",
    image: "/images/client-amit.jpg",
  },
  {
    quote:
      "Transparent costs and neat site management made the whole process stress-free. Our apartment exceeded expectations.",
    name: "Priya Singh",
    role: "Developer, Faridabad",
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
    <section className="bg-[#FFFFFF] py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-5 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Client Testimonials
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[34px]">
            What Our Clients Say
          </h2>
          <p className="font-body mt-3 text-[14.5px] leading-[1.7] text-[#003B8E]/70">
            We take pride in the trust and appreciation we receive from our
            clients.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="w-full flex-1 rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF] p-5 shadow-[0_10px_30px_rgba(0,59,142,0.07)] sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="flex items-start gap-5 sm:items-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-[72px] w-[72px] shrink-0 rounded-full border-2 border-[#FFFFFF] object-cover shadow-md sm:h-20 sm:w-20"
                />
                <div className="min-w-0">
                  <Quote
                    size={22}
                    color="#FF8000"
                    className="mb-1 opacity-70"
                  />
                  <p className="font-body text-[13.5px] leading-[1.75] text-[#003B8E]/85">
                    {t.quote}
                  </p>
                  <p className="font-body mt-2.5 text-[13px] font-bold text-[#003B8E]">
                    {t.name},{" "}
                    <span className="font-medium text-[#003B8E]/65">
                      {t.role}
                    </span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-3">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#003B8E] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#003B8E] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 20 : 8,
                    backgroundColor: i === index ? "#FF8000" : "#003B8E33",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
