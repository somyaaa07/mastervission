import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function ProjectsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#003B8E]">
      <img
        src="/images/projects-hero.png"
        alt="Luxury modern villa built by Mastervision Infra LLP"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #003B8E 0%, rgba(0,59,142,0.94) 32%, rgba(0,59,142,0.55) 55%, rgba(0,59,142,0) 80%)",
        }}
      />

      <div className="mx-auto flex min-h-[420px] max-w-[1280px] items-center px-5 py-14 lg:min-h-[480px] lg:px-8">
        <div className="max-w-[540px]">
          <motion.nav {...fade(0)} aria-label="Breadcrumb">
            <ol className="font-body flex items-center gap-2 text-[12.5px] font-medium text-[#FFFFFF]/85">
              <li>
                <Link to="/" className="transition-colors hover:text-[#FF8000]">Home</Link>
              </li>
              <ChevronRight size={14} />
              <li aria-current="page">Our Projects</li>
            </ol>
          </motion.nav>

          <motion.p {...fade(0.05)} className="font-body mt-7 text-[13px] font-bold tracking-[0.08em] text-[#FF8000]">
            Our Projects
          </motion.p>
          <motion.h1
            {...fade(0.12)}
            className="font-heading mt-3 text-[38px] font-bold leading-[1.1] text-[#FFFFFF] sm:text-[48px] lg:text-[54px]"
          >
            Spaces That Make a Difference
          </motion.h1>
          <motion.p {...fade(0.2)} className="font-body mt-5 max-w-[480px] text-[15px] leading-[1.7] text-[#FFFFFF]/90">
            Explore our completed and ongoing projects that showcase our commitment to quality, innovation and
            excellence across residential, commercial and industrial sectors.
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="font-body inline-flex items-center rounded-md border border-[#FFFFFF]/80 px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#003B8E]"
            >
              Discuss Your Project
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        {...fade(0.45)}
        className="absolute bottom-0 right-0 hidden items-center gap-4 rounded-tl-lg bg-[#003B8E] px-8 py-5 md:flex"
      >
        <ShieldCheck size={34} strokeWidth={1.5} color="#FFFFFF" />
        <p className="font-body text-[13px] font-semibold leading-snug text-[#FFFFFF]">
          Quality Construction
          <span className="block font-medium text-[#FFFFFF]/85">On Time, Every Time</span>
        </p>
      </motion.div>
    </section>
  );
}