import { motion } from "framer-motion";
import { Building2, ShieldCheck, Star, Users } from "lucide-react";

const STATS = [
  { icon: Building2, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "10+", label: "Years of Experience" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

export default function AboutStats() {
  return (
    <section className="bg-[#003B8E] py-10 lg:py-12">
      <ul className="mx-auto grid max-w-[1280px] grid-cols-2 gap-y-9 px-5 lg:grid-cols-4 lg:px-8">
        {STATS.map(({ icon: Icon, value, label }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className={`flex flex-col items-center text-center ${i > 0 ? "lg:border-l lg:border-[#FFFFFF]/25" : ""} ${
              i === 2 ? "border-[#FFFFFF]/25" : ""
            }`}
          >
            <Icon size={30} strokeWidth={1.4} color="#FFFFFF" />
            <p className="font-heading mt-3 text-[34px] font-bold leading-none text-[#FFFFFF]">{value}</p>
            <p className="font-body mt-2 text-[13px] font-medium text-[#FFFFFF]/85">{label}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}