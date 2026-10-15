import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Handshake, MessageCircle, Truck } from "lucide-react";

const STEPS = [
  { icon: MessageCircle, title: "Understand", text: "We listen to your needs and vision." },
  { icon: FileText, title: "Plan & Design", text: "Create tailored solutions with expert planning." },
  { icon: Truck, title: "Execute", text: "Deliver with precision, quality and safety." },
  { icon: Handshake, title: "Handover", text: "On-time delivery with complete transparency." },
];

export default function WorkProcess({
  title = "From Concept to Completion",
  description = "We follow a streamlined process to ensure every project is delivered with quality, transparency and efficiency.",
}) {
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
            Our Work Process
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[36px]">
            {title}
          </h2>
          <p className="font-body mt-3 max-w-[560px] text-[14.5px] leading-[1.7] text-[#003B8E]/70">
            {description}
          </p>
        </motion.div>

        <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-0">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <Fragment key={title}>
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex-1 rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(0,59,142,0.06)]"
              >
                <Icon size={34} strokeWidth={1.5} color="#FF8000" className="mx-auto" />
                <div className="mt-4 flex items-start gap-3">
                  <span className="font-heading text-[18px] font-bold text-[#FF8000]">0{i + 1}</span>
                  <div>
                    <h3 className="font-body text-[15px] font-bold text-[#003B8E]">{title}</h3>
                    <p className="font-body mt-1.5 text-[12.5px] leading-[1.65] text-[#003B8E]/70">{text}</p>
                  </div>
                </div>
              </motion.li>
              {i < STEPS.length - 1 && (
                <li aria-hidden="true" className="hidden items-center justify-center px-2 lg:flex">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#FF8000] bg-[#FFFFFF]">
                    <ArrowRight size={14} color="#FF8000" />
                  </span>
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}