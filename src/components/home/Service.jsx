import { motion } from "framer-motion";
import { Building2, ClipboardCheck, Factory, HardHat, Home } from "lucide-react";

const SERVICES = [
  { icon: Home, title: "Residential Construction", text: "Dream homes built with precision." },
  { icon: Building2, title: "Commercial Construction", text: "Spaces that power your business." },
  { icon: Factory, title: "Industrial Construction", text: "Strong foundations for bigger dreams." },
  { icon: HardHat, title: "Renovation & Remodeling", text: "Modern upgrades for lasting value." },
  { icon: ClipboardCheck, title: "Project Management", text: "On-time delivery with complete transparency." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FFFFFF] py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-10 lg:px-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="self-center"
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Our Services
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[34px]">
            Comprehensive Construction Solutions
          </h2>
          <p className="font-body mt-4 text-[14.5px] leading-[1.7] text-[#003B8E]/70">
            From concept to completion, we provide end-to-end construction services tailored to your needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group flex flex-col items-center rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF] px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000] hover:shadow-[0_12px_30px_rgba(0,59,142,0.12)]"
            >
              <Icon size={40} strokeWidth={1.4} color="#003B8E" className="transition-colors duration-300 group-hover:stroke-[#FF8000]" />
              <h3 className="font-body mt-4 text-[14px] font-bold leading-snug text-[#003B8E]">{title}</h3>
              <p className="font-body mt-2 text-[12px] leading-relaxed text-[#003B8E]/65">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}