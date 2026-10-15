import { motion } from "framer-motion";
import { ArrowRight, Building2, ClipboardCheck, Factory, HardHat, Home } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Construction",
    text: "Custom homes and residential spaces built with precision, quality and modern design.",
    image: "/images/service-residential.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    text: "Office spaces, retail outlets and commercial complexes that enhance your business.",
    image: "/images/service-commercial.jpg",
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    text: "Robust industrial infrastructure tailored for operational efficiency and safety.",
    image: "/images/service-industrial.jpg",
  },
  {
    icon: HardHat,
    title: "Renovation & Remodeling",
    text: "Transform existing spaces with modern designs and improved functionality.",
    image: "/images/service-renovation.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    text: "On-time delivery with complete transparency and efficient project management.",
    image: "/images/service-management.jpg",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[#FFFFFF] py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="flex items-start justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
              <span className="h-[2px] w-5 bg-[#FF8000]" />
              Our Services
            </p>
            <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[36px]">
              End-to-End Construction Services
            </h2>
            <p className="font-body mt-3 max-w-[540px] text-[14.5px] leading-[1.7] text-[#003B8E]/70">
              We offer a wide range of construction and infrastructure services designed to meet the evolving needs
              of residential, commercial and industrial clients.
            </p>
          </motion.div>

          <p className="font-heading hidden shrink-0 pr-4 text-right text-[26px] font-semibold italic leading-tight text-[#003B8E] lg:block">
            Building
            <br />
            With Purpose
            <span className="ml-2 inline-block h-7 w-[3px] -skew-x-12 bg-[#FF8000] align-middle" />
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map(({ icon: Icon, title, text, image }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group flex flex-col rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF] p-3.5 shadow-[0_10px_30px_rgba(0,59,142,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000]"
            >
              <div className="flex items-center gap-3 px-1 pb-3.5 pt-1">
                <Icon size={38} strokeWidth={1.4} color="#003B8E" className="shrink-0" />
                <h3 className="font-body text-[14.5px] font-bold leading-snug text-[#003B8E]">{title}</h3>
              </div>
              <div className="aspect-[16/10] overflow-hidden rounded-[4px]">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-body mt-3.5 flex-1 px-1 text-[12.5px] leading-[1.65] text-[#003B8E]/75">{text}</p>
              <Link
                to="/contact"
                className="font-body mt-3 inline-flex items-center gap-2 px-1 pb-1 text-[12.5px] font-bold text-[#FF8000] transition-colors hover:text-[#F04B00]"
              >
                Learn More
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}