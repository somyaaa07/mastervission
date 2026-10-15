import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_HREF } from "../../constants/site";

const POINTS = [
  "High-quality materials and superior workmanship",
  "Customized solutions for every project",
  "Timely project completion",
  "Transparent communication",
  "Focus on sustainability and innovation",
];

export default function Specialization() {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="grid lg:grid-cols-[50%_1fr]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[420px]"
        >
          <img
            src="/images/service-specialization.png"
            alt="Engineers reviewing plans on a construction site"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute bottom-0 left-0 flex h-[40%] w-[62%] items-center bg-[#003B8E] pl-6 pr-16 sm:pl-10"
            style={{ clipPath: "polygon(0 24%, 100% 100%, 0 100%)" }}
          >
            <p className="font-heading mt-10 text-[20px] font-semibold italic leading-tight text-[#FFFFFF] sm:text-[24px]">
              Delivering
              <br />
              Quality Spaces
              <span className="ml-2 inline-block h-6 w-[3px] -skew-x-12 bg-[#FF8000] align-middle" />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center px-5 py-12 lg:px-14 lg:py-14"
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Our Specialization
          </p>
          <h2 className="font-heading mt-3 text-[28px] font-bold leading-[1.15] text-[#003B8E] sm:text-[34px]">
            Spaces That Inspire, Communities That Grow
          </h2>
          <p className="font-body mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[#003B8E]/75">
            We combine modern techniques, advanced technology and a skilled team to deliver spaces that are not only
            functional but also future-ready.
          </p>

          <ul className="mt-5 space-y-2.5">
            {POINTS.map((p) => (
              <li key={p} className="font-body flex items-center gap-3 text-[14px] font-medium text-[#003B8E]">
                <CheckCircle2 size={20} fill="#FF8000" color="#FFFFFF" className="shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href={PHONE_HREF}
              className="font-body inline-flex items-center gap-3 rounded-md border border-[#003B8E]/25 px-5 py-2.5 transition-colors duration-200 hover:border-[#FF8000]"
            >
              <Phone size={22} strokeWidth={1.7} color="#003B8E" />
              <span className="leading-tight">
                <span className="block text-[14.5px] font-bold text-[#003B8E]">{PHONE_DISPLAY}</span>
                <span className="block text-[11.5px] font-medium text-[#003B8E]/65">Let&apos;s Discuss Your Project</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}