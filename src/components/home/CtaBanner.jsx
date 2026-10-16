import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_HREF } from "../../constants/site";
import SafeImage from "../ui/SafeImage";

export default function CtaBanner({
  title = "Ready to Start Your Project?",
  text = "Get in touch with us today for a free consultation and let's turn your vision into reality.",
  image = "/images/projects-cta.jpg",
}) {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[#003B8E]">
      <SafeImage
        src={image}
        fallback="/images/projects-cta.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #003B8E 0%, rgba(0,59,142,0.94) 38%, rgba(0,59,142,0.45) 68%, rgba(0,59,142,0.1) 100%)",
        }}
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-20"
      >
        <h2 className="font-heading max-w-[560px] text-[32px] font-bold leading-[1.1] text-[#FFFFFF] sm:text-[42px]">
          {title}
        </h2>
        <p className="font-body mt-4 max-w-[480px] text-[15.5px] leading-[1.7] text-[#FFFFFF]/85">{text}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
          >
            Get a free quote
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href={PHONE_HREF}
            className="font-body inline-flex items-center gap-2 rounded-md border border-[#FFFFFF]/70 px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#003B8E]"
          >
            <Phone size={16} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
