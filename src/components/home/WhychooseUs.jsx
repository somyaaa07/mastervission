import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, Star, Users } from "lucide-react";

const STATS = [
  { icon: Building2, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "10+", label: "Years of Experience" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

const TESTIMONIALS = [
  {
    quote:
      "Mastervision Infra LLP delivered our project on time with exceptional quality. Their professionalism and attention to detail are truly commendable.",
    name: "Ramesh Kumar",
    role: "Client",
    image: "/images/client-1.jpg",
  },
  {
    quote:
      "From planning to handover, the team kept every promise on budget and schedule. Our villa exceeded what we imagined.",
    name: "Neha Sharma",
    role: "Homeowner, Noida",
    image: "/images/client-2.jpg",
  },
  {
    quote:
      "Our warehouse was ready ahead of schedule with clear updates at every stage. A reliable construction partner.",
    name: "Amit Verma",
    role: "Director, Ghaziabad",
    image: "/images/client-3.jpg",
  },
  {
    quote:
      "Transparent costs and neat site management made the whole process stress-free. Highly recommended.",
    name: "Priya Singh",
    role: "Developer, Faridabad",
    image: "/images/client-4.jpg",
  },
];

export default function WhyChooseUs() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section id="why-us" className="bg-[#FFFFFF] py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14 lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Why Choose Us
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[34px]">
            Your Trusted Construction Partner
          </h2>
          <p className="font-body mt-4 text-[14.5px] leading-[1.7] text-[#003B8E]/70">
            We combine expertise, technology and a customer-first approach to deliver projects that stand the test of
            time.
          </p>
          <a
            href="#about"
            className="font-body mt-7 inline-flex items-center gap-2 rounded-md bg-[#003B8E] px-5 py-3 text-[14px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
          >
            Know More About Us
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Right */}
        <div className="min-w-0">
          <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className={`flex flex-col items-center text-center sm:px-3 ${i > 0 ? "sm:border-l sm:border-[#003B8E]/15" : ""}`}
              >
                <Icon size={28} strokeWidth={1.5} color="#003B8E" />
                <p className="font-heading mt-2 text-[28px] font-bold leading-none text-[#003B8E]">{value}</p>
                <p className="font-body mt-2 text-[12px] font-medium text-[#003B8E]/70">{label}</p>
              </motion.li>
            ))}
          </ul>

          {/* Testimonial */}
          <div className="mt-9 rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF] p-5 shadow-[0_10px_30px_rgba(0,59,142,0.07)] sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="flex items-start gap-4 sm:items-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-14 w-14 shrink-0 rounded-full border-2 border-[#FFFFFF] object-cover shadow-md"
                />
                <div>
                  <p className="font-body text-[13.5px] italic leading-[1.7] text-[#003B8E]/85">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-body mt-2 text-[12px] font-semibold text-[#003B8E]">
                    — {t.name}, <span className="font-medium text-[#003B8E]/65">{t.role}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex justify-end gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: i === index ? 20 : 8, backgroundColor: i === index ? "#FF8000" : "#003B8E33" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}