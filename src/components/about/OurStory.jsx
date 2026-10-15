import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "A decade of industry experience",
  "A dedicated team of professionals",
  "Successful projects across multiple sectors",
  "A strong focus on innovation and sustainability",
];

export default function OurStory() {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="grid lg:grid-cols-[48%_1fr]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[280px] lg:min-h-[420px]"
        >
          <video
            src="/about-story.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center px-5 py-12 lg:px-14 lg:py-14"
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Our Story
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[36px]">
            A Journey of Growth and Excellence
          </h2>
          <p className="font-body mt-4 max-w-[500px] text-[15px] leading-[1.75] text-[#003B8E]/75">
            Founded with a vision to redefine the construction industry,
            Mastervision Infra LLP has grown into a trusted partner for
            residential, commercial and industrial projects. Our journey is
            built on trust, expertise and a passion for creating spaces that
            make a difference.
          </p>
          <ul className="mt-6 space-y-3">
            {POINTS.map((p) => (
              <li
                key={p}
                className="font-body flex items-center gap-3 text-[14px] font-medium text-[#003B8E]"
              >
                <CheckCircle2
                  size={20}
                  fill="#FF8000"
                  color="#FFFFFF"
                  className="shrink-0"
                />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
