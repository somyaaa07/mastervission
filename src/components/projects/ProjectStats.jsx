import { Award, Building2, Star, Users } from "lucide-react";

const STATS = [
  { icon: Building2, value: "50+", label: "Projects completed" },
  { icon: Users, value: "100+", label: "Happy clients" },
  { icon: Award, value: "10+", label: "Years of experience" },
  { icon: Star, value: "98%", label: "Client satisfaction" },
];

export default function ProjectStats() {
  return (
    <section aria-label="Project highlights" className="bg-[#003B8E]">
      <ul className="mx-auto grid max-w-[1280px] grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }, i) => (
          <li
            key={label}
            className={`flex items-center gap-4 px-5 py-8 lg:px-8 lg:py-10 ${i % 2 === 1 ? "border-l border-[#FFFFFF]/15" : ""} ${i > 1 ? "border-t border-[#FFFFFF]/15 lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-[#FFFFFF]/15" : ""}`}
          >
            <Icon size={34} strokeWidth={1.3} color="#FF8000" aria-hidden="true" className="hidden shrink-0 sm:block" />
            <div>
              <p className="font-heading text-[40px] font-bold leading-none text-[#FFFFFF] lg:text-[48px]">{value}</p>
              <p className="font-body mt-1.5 text-[13.5px] font-medium text-[#FFFFFF]/80">{label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
