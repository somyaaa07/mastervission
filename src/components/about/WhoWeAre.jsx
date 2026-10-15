import { motion } from "framer-motion";
import { Clock, Lightbulb, ShieldCheck, Smile } from "lucide-react";

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "Quality Construction" },
  { icon: Lightbulb, label: "Innovative Solutions" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Smile, label: "Client Satisfaction" },
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#FFFFFF] py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Who We Are
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[36px]">
            Mastervision Infra LLP
          </h2>
          <h3 className="font-body mt-2 text-[17px] font-bold text-[#003B8E]">
            A Trusted Name in Construction &amp; Infrastructure
          </h3>
          <p className="font-body mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[#003B8E]/75">
            Mastervision Infra LLP is a leading construction company specializing in residential, commercial and
            industrial projects. With years of experience, a skilled team and a customer-first approach, we deliver
            spaces that combine functionality, aesthetics and long-term value.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FF8000]/40">
                  <Icon size={20} strokeWidth={1.6} color="#FF8000" />
                </span>
                <span className="font-body text-[12.5px] font-semibold leading-snug text-[#003B8E]">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-lg"
        >
          <img
            src="/images/about-building.png
            "
            alt="Modern commercial building built by Mastervision Infra LLP"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-md bg-[#003B8E] px-5 py-3.5 sm:bottom-0 sm:right-0 sm:rounded-none sm:rounded-tl-lg">
            <ShieldCheck size={30} strokeWidth={1.5} color="#FFFFFF" />
            <p className="font-body text-[12.5px] font-semibold leading-snug text-[#FFFFFF]">
              Spaces That Inspire
              <span className="block font-medium text-[#FFFFFF]/80">Communities That Grow</span>
            </p>
            <span className="h-8 w-[3px] -skew-x-12 bg-[#FF8000]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}