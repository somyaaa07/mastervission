import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#003B8E]">
      {/* Background image */}
      <img
        src="/images/hero-villa.jpg"
        alt="Luxury modern villa by Mastervision Infra LLP"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      {/* Blue overlay: solid on the left for text, fading to the right */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #003B8E 0%, rgba(0,59,142,0.94) 32%, rgba(0,59,142,0.55) 55%, rgba(0,59,142,0) 78%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />

      <div className="mx-auto flex min-h-[560px] max-w-[1280px] items-center px-5 py-16 lg:min-h-[600px] lg:px-8">
        <div className="max-w-[560px]">
          <motion.p
            {...fade(0)}
            className="font-body text-[13px] font-bold tracking-[0.08em] text-[#FF8000] sm:text-[14px]"
          >
            Built on Trust, Designed for Tomorrow
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="font-heading mt-4 text-[40px] font-bold leading-[1.1] text-[#FFFFFF] sm:text-[52px] lg:text-[60px]"
          >
            Turning Your Vision Into Reality
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="font-body mt-6 max-w-[480px] text-[15px] leading-[1.7] text-[#FFFFFF]/90 sm:text-[16px]"
          >
            Mastervision Infra LLP is a trusted construction company committed to delivering high-quality
            residential, commercial and industrial projects with excellence, innovation and integrity.
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="font-body inline-flex items-center rounded-md border border-[#FFFFFF]/80 px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#003B8E]"
            >
              Explore Our Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Quality badge */}
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