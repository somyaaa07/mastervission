import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ContactPromise() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative isolate flex min-h-[380px] flex-col justify-between overflow-hidden rounded-lg bg-[#003B8E] p-6 sm:p-8 lg:min-h-[420px]"
    >
      <img
        src="/images/contact-promise.jpg"
        alt="Modern commercial building lit at dusk"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,59,142,0.92) 0%, rgba(0,59,142,0.55) 45%, rgba(0,59,142,0.2) 100%)",
        }}
      />

      <h2 className="font-heading max-w-[300px] text-[26px] font-bold leading-[1.2] text-[#FFFFFF] sm:text-[30px]">
        Let&apos;s create spaces for a brighter tomorrow
        <span className="ml-3 inline-block h-7 w-[3px] -skew-x-12 bg-[#FF8000] align-middle" />
      </h2>

      <div className="mt-10 flex items-start gap-4 rounded-md border border-[#FFFFFF]/25 bg-[#003B8E]/80 p-5 backdrop-blur-sm sm:max-w-[400px]">
        <Quote size={30} fill="#FF8000" color="#FF8000" className="shrink-0" />
        <p className="font-body text-[13.5px] leading-[1.7] text-[#FFFFFF]/95">
          We believe every great project starts with a conversation. Let&apos;s discuss how we can bring your vision
          to life.
        </p>
      </div>
    </motion.div>
  );
}