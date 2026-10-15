import { motion } from "framer-motion";
import { Clock, FileCheck, ShieldCheck, Smile } from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, label: "Quality Workmanship" },
  { icon: Clock, label: "Timely Delivery" },
  { icon: FileCheck, label: "Transparent Process" },
  { icon: Smile, label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FFFFFF]">
      <div className="grid lg:grid-cols-[44%_1fr]">
        {/* Image with diagonal tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[420px]"
        >
          <img
            src="/images/about-site.png
            "
            alt="Construction cranes at sunset on a Mastervision project site"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute bottom-0 left-0 flex h-[42%] w-[72%] items-center bg-[#003B8E] pl-6 pr-16 sm:pl-10"
            style={{ clipPath: "polygon(0 22%, 100% 100%, 0 100%)" }}
          >
            <p className="font-heading mt-10 text-[22px] font-semibold italic leading-tight text-[#FFFFFF] sm:text-[26px]">
              Building
              <br />
              Better Futures
              <span className="ml-2 inline-block h-6 w-[3px] -skew-x-12 bg-[#FF8000] align-middle" />
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center px-5 py-12 lg:px-16 lg:py-14"
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            About Us
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[34px]">
            Welcome to Mastervision Infra LLP
          </h2>
          <p className="font-body mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[#003B8E]/75">
            We are a team of experienced professionals dedicated to delivering quality construction solutions
            for a better tomorrow. With a focus on innovation, sustainability and client satisfaction, we bring
            your ideas to life — on time and within budget.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {FEATURES.map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className={`flex items-center gap-3 sm:px-3 ${i > 0 ? "sm:border-l sm:border-[#003B8E]/15" : "sm:pl-0"}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#003B8E]/25">
                  <Icon size={20} strokeWidth={1.6} color="#003B8E" />
                </span>
                <span className="font-body text-[12.5px] font-semibold leading-snug text-[#003B8E]">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}