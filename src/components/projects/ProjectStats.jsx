import { motion } from "framer-motion";
import { Award, Building2, Star, Users } from "lucide-react";

const STATS = [
  { icon: Building2, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

export default function ProjectStats() {
  return (
    <section className="bg-[#FFFFFF] pb-12 lg:pb-14">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <ul className="grid grid-cols-2 gap-y-8 rounded-lg bg-[#003B8E]/[0.04] px-4 py-8 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className={`flex flex-col items-center text-center ${i > 0 ? "lg:border-l lg:border-[#003B8E]/15" : ""}`}
            >
              <Icon size={32} strokeWidth={1.4} color="#003B8E" />
              <p className="font-heading mt-2 text-[28px] font-bold leading-none text-[#003B8E]">{value}</p>
              <p className="font-body mt-2 text-[13px] font-medium text-[#003B8E]/70">{label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}