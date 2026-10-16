import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "../ui/SafeImage";

const PROJECTS = [
  { title: "Luxury Residential Villa", type: "Residential", location: "Noida", image: "https://i.pinimg.com/1200x/a7/41/98/a7419857c29c61077ddc9afa5bda5c7f.jpg" },
  { title: "Commercial Complex", type: "Commercial", location: "Greater Noida", image: "/images/project-commercial.jpg" },
  { title: "Industrial Warehouse", type: "Industrial", location: "Ghaziabad", image: "/images/project-warehouse.jpg" },
  { title: "Residential Apartment", type: "Residential", location: "Faridabad", image: "/images/project-apartment.jpg" },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#003B8E] py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
              <span className="h-[2px] w-5 bg-[#FF8000]" />
              Our Projects
            </p>
            <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#FFFFFF] sm:text-[34px]">
              Featured Projects
            </h2>
            <p className="font-body mt-3 max-w-[420px] text-[14.5px] leading-[1.7] text-[#FFFFFF]/80">
              A glimpse of our completed and ongoing projects that showcase our commitment to quality and excellence.
            </p>
          </div>
          <Link
            to="/projects"
            className="font-body inline-flex w-fit items-center gap-2 rounded-md border border-[#FFFFFF]/80 px-5 py-3 text-[14px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#003B8E]"
          >
            View All Projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-md bg-[#FFFFFF]/[0.08]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <SafeImage
                  src={p.image}
                  fallback="/images/project-villa.jpg"
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-4">
                <div>
                  <h3 className="font-heading text-[19px] font-semibold leading-tight text-[#FFFFFF]">
                    <Link to="/projects" className="after:absolute after:inset-0">{p.title}</Link>
                  </h3>
                  <p className="font-body mt-1 flex items-center gap-2 text-[12px] text-[#FFFFFF]/75">
                    {p.type}
                    <span className="h-3 w-px bg-[#FFFFFF]/40" />
                    {p.location}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  color="#FFFFFF"
                  className="shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:stroke-[#FF8000]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}