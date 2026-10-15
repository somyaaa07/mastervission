import { motion } from "framer-motion";
import { Check, ArrowRight, Home, Building2, Landmark } from "lucide-react";

const PACKAGES = [
  {
    icon: Home,
    name: "Basic",
    tagline: "Smart construction for budget-friendly homes",
    price: "₹1,650",
    unit: "/ sq.ft",
    featured: false,
    features: [
      "Standard grade materials",
      "Structural design & drawings",
      "Basic electrical & plumbing",
      "Site supervision (weekly)",
      "12-month workmanship warranty",
    ],
  },
  {
    icon: Building2,
    name: "Standard",
    tagline: "Most chosen package for residential & commercial",
    price: "₹1,950",
    unit: "/ sq.ft",
    featured: true,
    features: [
      "Premium branded materials",
      "3D elevation & detailed drawings",
      "Complete electrical & plumbing",
      "Dedicated site engineer",
      "Weekly progress reports",
      "24-month workmanship warranty",
    ],
  },
  {
    icon: Landmark,
    name: "Premium",
    tagline: "Luxury finish with end-to-end project management",
    price: "₹2,450",
    unit: "/ sq.ft",
    featured: false,
    features: [
      "Top-tier imported & branded finishes",
      "Architect & interior design support",
      "Smart-home ready wiring",
      "Dedicated project manager",
      "Daily progress updates",
      "36-month workmanship warranty",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#003B8E]">
      <div className="px-5 py-14 lg:px-10 lg:py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[620px] text-center"
        >
          <p className="font-body flex items-center justify-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Our Packages
            <span className="h-[2px] w-5 bg-[#FF8000]" />
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#FFFFFF] sm:text-[34px]">
            Transparent Pricing for Every Project
          </h2>
          <p className="font-body mt-4 text-[15px] leading-[1.75] text-[#FFFFFF]/75">
            Choose a package that fits your vision and budget. No hidden costs — just quality
            construction delivered on time.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-7xl mx-auto gap-6 lg:grid-cols-3 lg:items-stretch ">
          {PACKAGES.map(({ icon: Icon, name, tagline, price, unit, features, featured }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className={`relative flex flex-col overflow-hidden border ${
                featured
                  ? "border-[#FF8000] bg-[#002A66] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.55)] lg:-my-4 rounded-xl"
                  : "border-[#FFFFFF]/20 bg-[#FFFFFF] rounded-xl"
              }`}
            >
              {/* Diagonal tag */}
              {featured && (
                <div
                  className="absolute right-0 top-0 flex h-[70px] w-[130px] items-start justify-end bg-[#FF8000] pr-3 pt-2"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                >
                  <span className="font-body text-[10px] font-bold uppercase tracking-[0.08em] text-[#FFFFFF]">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col px-7 py-9">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                    featured ? "border-[#FFFFFF]/30" : "border-[#003B8E]/25"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.6} color={featured ? "#FF8000" : "#003B8E"} />
                </span>

                <h3
                  className={`font-heading mt-5 text-[24px] font-bold ${
                    featured ? "text-[#FFFFFF]" : "text-[#003B8E]"
                  }`}
                >
                  {name}
                </h3>
                <p
                  className={`font-body mt-1 text-[13.5px] leading-snug ${
                    featured ? "text-[#FFFFFF]/75" : "text-[#003B8E]/75"
                  }`}
                >
                  {tagline}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span
                    className={`font-heading text-[38px] font-bold leading-none ${
                      featured ? "text-[#FFFFFF]" : "text-[#003B8E]"
                    }`}
                  >
                    {price}
                  </span>
                  <span
                    className={`font-body pb-1 text-[13px] font-semibold ${
                      featured ? "text-[#FFFFFF]/70" : "text-[#003B8E]/60"
                    }`}
                  >
                    {unit}
                  </span>
                  <span className="mb-2 ml-2 inline-block h-5 w-[3px] -skew-x-12 bg-[#FF8000]" />
                </div>

                <div
                  className={`my-6 h-px w-full ${featured ? "bg-[#FFFFFF]/20" : "bg-[#003B8E]/15"}`}
                />

                <ul className="flex flex-1 flex-col gap-3.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          featured ? "bg-[#FF8000]" : "bg-[#003B8E]/10"
                        }`}
                      >
                        <Check
                          size={12}
                          strokeWidth={2.6}
                          color={featured ? "#FFFFFF" : "#003B8E"}
                        />
                      </span>
                      <span
                        className={`font-body text-[13.5px] font-semibold leading-snug ${
                          featured ? "text-[#FFFFFF]" : "text-[#003B8E]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`font-body group mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-bold tracking-[0.04em] transition-colors rounded-xl ${
                    featured
                      ? "bg-[#FF8000] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#003B8E]"
                      : "border border-[#003B8E] text-[#003B8E] hover:bg-[#003B8E] hover:text-[#FFFFFF]"
                  }`}
                >
                  Get a Quote
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom project strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto mt-14 flex max-w-[1120px] flex-col items-start justify-between gap-5 overflow-hidden bg-[#FFFFFF]/10 px-7 py-8 sm:flex-row sm:items-center lg:px-10"
        >
          <span className="absolute left-0 top-0 h-full w-[4px] bg-[#FF8000]" />
          <div>
            <h4 className="font-heading text-[20px] font-bold text-[#FFFFFF]">
              Need a custom plan for a large project?
            </h4>
            <p className="font-body mt-1 text-[14px] leading-[1.7] text-[#FFFFFF]/75">
              Industrial, infrastructure or multi-unit builds — talk to our team for a tailored estimate.
            </p>
          </div>
          <a
            href="#contact"
            className="font-body inline-flex shrink-0 items-center gap-2 bg-[#FF8000] px-6 py-3.5 text-[13px] font-bold tracking-[0.04em] text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF] hover:text-[#003B8E] rounded-xl"
          >
            Talk to Our Team
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </motion.div>

        <p className="font-body mx-auto mt-6 max-w-[1120px] text-center text-[12px] text-[#FFFFFF]/60">
          * Prices are indicative and may vary based on location, design and material selection.
        </p>
      </div>
    </section>
  );
}