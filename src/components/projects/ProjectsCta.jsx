import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_HREF } from "../../constants/site";

export default function ProjectsCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#003B8E]">
      <img
        src="/images/projects-cta.jpg"
        alt="Engineers reviewing plans at a construction site at sunset"
        className="absolute inset-y-0 left-0 -z-20 h-full w-full object-cover object-left lg:w-[62%]"
      />
      {/* Mobile overlay */}
      <div className="absolute inset-0 -z-10 bg-[#003B8E]/85 lg:hidden" />

      <div className="mx-auto grid max-w-[1280px] lg:grid-cols-[1fr_minmax(0,560px)]">
        <div aria-hidden="true" className="hidden min-h-[240px] lg:block" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative px-5 py-14 lg:bg-[#003B8E] lg:py-16 lg:pl-14 lg:pr-8"
        >
          {/* Diagonal edge (desktop) */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 -left-20 hidden w-20 bg-[#003B8E] lg:block"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />
          <p className="font-body text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">Let&apos;s Build Together</p>
          <h2 className="font-heading mt-2 text-[30px] font-bold leading-[1.15] text-[#FFFFFF] sm:text-[36px]">
            Have a Project in Mind?
          </h2>
          <p className="font-body mt-3 max-w-[420px] text-[14.5px] leading-[1.7] text-[#FFFFFF]/85">
            Get in touch with us today for a free consultation and let&apos;s turn your vision into reality.
          </p>
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
              className="font-body inline-flex items-center gap-2 rounded-md border border-[#FFFFFF]/80 px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#003B8E]"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}