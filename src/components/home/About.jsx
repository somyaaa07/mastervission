import { ArrowRight, Clock, FileCheck, ShieldCheck, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: ShieldCheck, label: "Quality workmanship" },
  { icon: Clock, label: "Timely delivery" },
  { icon: FileCheck, label: "Transparent process" },
  { icon: Smile, label: "Client satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F5F8FD]">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
           <motion.div
              whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[280px] lg:min-h-[420px]">
          {/* <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] bg-[#FF8000] sm:-bottom-5 sm:-right-5" aria-hidden="true" /> */}
         <video
            src="/about-story.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover "
          />
          </motion.div>

        <div className="flex flex-col justify-center px-5 py-14 lg:px-16 lg:py-20">
          <SectionHeader
            eyebrow="About us"
            title="Welcome to Mastervision Infra LLP"
            text="We are a team of experienced professionals dedicated to delivering quality construction solutions for a better tomorrow. With a focus on innovation, sustainability and client satisfaction, we bring your ideas to life, on time and within budget."
          />

          <ul className="mt-8 grid gap-px overflow-hidden rounded-md border border-[#003B8E]/10 bg-[#003B8E]/10 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 bg-[#FFFFFF] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#003B8E]">
                  <Icon size={19} strokeWidth={1.6} color="#FFFFFF" aria-hidden="true" />
                </span>
                <span className="font-heading text-[19px] font-semibold leading-tight text-[#003B8E]">{label}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="font-body mt-8 inline-flex w-fit items-center gap-2 border-b-2 border-[#FF8000] pb-0.5 text-[15px] font-semibold text-[#003B8E] transition-colors hover:text-[#FF8000]"
          >
            More about our company
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
