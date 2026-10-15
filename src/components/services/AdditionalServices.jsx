import { motion } from "framer-motion";
import { ArrowRight, Calculator, Leaf, PencilRuler, Route, Sofa } from "lucide-react";
import { Link } from "react-router-dom";

const ITEMS = [
  { icon: Sofa, title: "Interior Design & Fit-Out", image: "/images/addl-interior.jpg" },
  { icon: PencilRuler, title: "Architecture & Planning", image: "/images/addl-architecture.jpg" },
  { icon: Leaf, title: "Sustainable Construction", image: "/images/addl-sustainable.jpg" },
  { icon: Route, title: "Infrastructure Development", image: "/images/addl-infrastructure.jpg" },
  { icon: Calculator, title: "Cost Estimation & Consultancy", image: "/images/addl-estimation.jpg" },
];

export default function AdditionalServices() {
  return (
    <section className="bg-[#FFFFFF] py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Additional Services
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[36px]">
            Complete Solutions Under One Roof
          </h2>
          <p className="font-body mt-3 max-w-[560px] text-[14.5px] leading-[1.7] text-[#003B8E]/70">
            Beyond core construction, we provide allied services to ensure a seamless experience for our clients.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ITEMS.map(({ icon: Icon, title, image }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <Link
                to="/contact"
                className="group block overflow-hidden rounded-md border border-[#003B8E]/10 bg-[#FFFFFF] shadow-[0_10px_30px_rgba(0,59,142,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 px-4 py-4">
                  <Icon size={30} strokeWidth={1.4} color="#003B8E" className="shrink-0" />
                  <h3 className="font-body flex-1 text-[13.5px] font-bold leading-snug text-[#003B8E]">{title}</h3>
                  <ArrowRight
                    size={16}
                    color="#003B8E"
                    className="shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:stroke-[#FF8000]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}