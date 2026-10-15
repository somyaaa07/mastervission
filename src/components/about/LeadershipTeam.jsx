import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const TEAM = [
  { name: "Ramesh Kumar", role: "Managing Partner", image: "/images/team-1.jpg", linkedin: "#" },
  { name: "Anjali Verma", role: "Project Director", image: "/images/team-2.jpg", linkedin: "#" },
  { name: "Vikram Singh", role: "Operations Head", image: "/images/team-3.jpg", linkedin: "#" },
  { name: "Pooja Sharma", role: "Business Development", image: "/images/team-4.jpg", linkedin: "#" },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-[#003B8E] py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Our Team
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#FFFFFF] sm:text-[36px]">
            Meet Our Leadership Team
          </h2>
          <p className="font-body mt-3 max-w-[520px] text-[14.5px] leading-[1.7] text-[#FFFFFF]/80">
            A passionate and experienced team driving Mastervision Infra LLP towards a stronger tomorrow.
          </p>
        </motion.div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-md bg-[#FFFFFF]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#FFFFFF]">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                <div>
                  <h3 className="font-body text-[14px] font-bold text-[#003B8E]">{m.name}</h3>
                  <p className="font-body mt-0.5 text-[12px] text-[#003B8E]/70">{m.role}</p>
                </div>
                <a
                  href={m.linkedin}
                  aria-label={`${m.name} on LinkedIn`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[#003B8E] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}