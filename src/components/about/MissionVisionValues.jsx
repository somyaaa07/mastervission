import { motion } from "framer-motion";
import { Eye, Gem, Target } from "lucide-react";

const ITEMS = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver high-quality construction solutions that enhance lives and create sustainable communities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be a trusted and innovative construction partner, known for excellence and integrity.",
  },
  {
    icon: Gem,
    title: "Our Values",
    text: "Integrity, quality, innovation, transparency and a strong commitment to our clients.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Our Core Values
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[36px]">
            Our Mission, Vision &amp; Values
          </h2>
          <p className="font-body mt-3 max-w-[460px] text-[14.5px] leading-[1.7] text-[#003B8E]/70">
            We are driven by a clear purpose — to create lasting value through quality construction, innovation and
            integrity.
          </p>
        </motion.div>

        <div className="mt-9 grid items-center gap-5 lg:grid-cols-[1fr_1fr_1fr_minmax(0,0.9fr)]">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="h-full rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(0,59,142,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000]"
            >
              <Icon size={38} strokeWidth={1.5} color="#FF8000" />
              <h3 className="font-body mt-4 text-[16px] font-bold text-[#003B8E]">{title}</h3>
              <p className="font-body mt-2 text-[13px] leading-[1.7] text-[#003B8E]/70">{text}</p>
            </motion.article>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading hidden text-center text-[26px] font-semibold italic leading-tight text-[#003B8E] lg:block"
          >
            Building
            <br />
            With Purpose
            <span className="ml-2 inline-block h-7 w-[3px] -skew-x-12 bg-[#FF8000] align-middle" />
          </motion.p>
        </div>
      </div>
    </section>
  );
}