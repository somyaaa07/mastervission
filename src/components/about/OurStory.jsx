import { CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const POINTS = [
  "A decade of industry experience",
  "A dedicated team of professionals",
  "Successful projects across multiple sectors",
  "A strong focus on innovation and sustainability",
];

export default function OurStory() {
  return (
    <section className="bg-[#F5F8FD]">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[300px] bg-[#003B8E] lg:min-h-[520px]">
          <video
            src="/our-story.mp4"
            poster="/images/about-site.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Mastervision Infra project sites"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-14 lg:px-16 lg:py-20">
          <SectionHeader
            eyebrow="Our story"
            title="A journey of growth and excellence"
            text="Mastervision Infra LLP was founded to raise the standard of construction. It has since grown into a trusted partner for residential, commercial and industrial projects, built on trust, expertise and a passion for spaces that make a difference."
          />
          <ul className="mt-8 divide-y divide-[#003B8E]/10 border-y border-[#003B8E]/10">
            {POINTS.map((p) => (
              <li key={p} className="font-body flex items-center gap-3 py-3.5 text-[15px] font-medium text-[#003B8E]">
                <CheckCircle2 size={20} fill="#FF8000" color="#FFFFFF" aria-hidden="true" className="shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
