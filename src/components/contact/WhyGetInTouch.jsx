import { motion } from "framer-motion";
import { ClipboardList, Clock, Handshake, MessageCircle } from "lucide-react";

const ITEMS = [
  { icon: MessageCircle, title: "Free Consultation", text: "Discuss your ideas with our experts." },
  { icon: ClipboardList, title: "Customized Solutions", text: "Tailored plans to meet your needs." },
  { icon: Clock, title: "Quick Response", text: "We get back to you within 24 hours." },
  { icon: Handshake, title: "End-to-End Support", text: "From planning to project completion." },
];

export default function WhyGetInTouch() {
  return (
    <section className="bg-[#FFFFFF] py-6 lg:py-8">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="rounded-lg bg-[#003B8E]/[0.04] px-5 py-9 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-heading text-[28px] font-bold leading-[1.15] text-[#003B8E] sm:text-[32px]">
              Why Get in Touch With Us?
            </h2>
            <p className="font-body mt-2 text-[14.5px] leading-[1.7] text-[#003B8E]/70">
              We are here to help you at every step of your construction journey.
            </p>
          </motion.div>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <ul className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
              {ITEMS.map(({ icon: Icon, title, text }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className={`flex flex-col items-center px-3 text-center ${i > 0 ? "lg:border-l lg:border-[#003B8E]/15" : ""}`}
                >
                  <Icon size={36} strokeWidth={1.5} color="#FF8000" />
                  <h3 className="font-body mt-3 text-[14.5px] font-bold leading-snug text-[#003B8E]">{title}</h3>
                  <p className="font-body mt-1.5 max-w-[170px] text-[12.5px] leading-[1.6] text-[#003B8E]/70">{text}</p>
                </motion.li>
              ))}
            </ul>

            <p className="font-heading hidden pr-6 text-center text-[26px] font-semibold italic leading-tight text-[#003B8E] lg:block">
              Building
              <br />
              With Purpose
              <span className="ml-2 inline-block h-7 w-[3px] -skew-x-12 bg-[#FF8000] align-middle" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}