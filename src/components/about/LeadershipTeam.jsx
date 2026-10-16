import { Linkedin } from "lucide-react";
import Avatar from "../ui/Avatar";
import SectionHeader from "../ui/SectionHeader";

const TEAM = [
  { name: "Ramesh Kumar", role: "Managing Partner", image: "/images/team-1.jpg", linkedin: "#" },
  { name: "Anjali Verma", role: "Project Director", image: "/images/team-2.jpg", linkedin: "#" },
  { name: "Vikram Singh", role: "Operations Head", image: "/images/team-3.jpg", linkedin: "#" },
  { name: "Pooja Sharma", role: "Business Development", image: "/images/team-4.jpg", linkedin: "#" },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-[#003B8E] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          light
          eyebrow="Our team"
          title="Meet our leadership team"
          text="A passionate and experienced team driving Mastervision Infra LLP towards a stronger tomorrow."
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {TEAM.map((m) => (
            <li key={m.name} className="group overflow-hidden rounded-md bg-[#FFFFFF]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#002A66]">
                <Avatar
                  src={m.image}
                  name={m.name}
                  textClass="text-[64px]"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#FF8000] transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              <div className="flex items-start justify-between gap-3 p-4">
                <div className="min-w-0">
                  <h3 className="font-heading text-[20px] font-semibold leading-tight text-[#003B8E]">{m.name}</h3>
                  <p className="font-body mt-1 text-[13px] text-[#003B8E]/70">{m.role}</p>
                </div>
                <a
                  href={m.linkedin}
                  aria-label={`${m.name} on LinkedIn`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#003B8E] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
                >
                  <Linkedin size={16} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
