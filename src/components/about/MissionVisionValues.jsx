import { Eye, Gem, Target } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const ITEMS = [
  { icon: Target, title: "Our mission", text: "To deliver high-quality construction solutions that enhance lives and create sustainable communities." },
  { icon: Eye, title: "Our vision", text: "To be a trusted and innovative construction partner, known for excellence and integrity." },
  { icon: Gem, title: "Our values", text: "Integrity, quality, innovation, transparency and a strong commitment to our clients." },
];

export default function MissionVisionValues() {
  return (
    <section className="bg-[#FFFFFF] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our core values"
          title="Our mission, vision and values"
          text="We are driven by a clear purpose: to create lasting value through quality construction, innovation and integrity."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative border border-[#003B8E]/12 bg-[#FFFFFF] p-8 transition-colors duration-300 hover:bg-[#003B8E]"
            >
              <span aria-hidden="true" className="absolute left-0 top-0 h-1 w-14 bg-[#FF8000] transition-all duration-300 group-hover:w-full" />
              <Icon size={40} strokeWidth={1.4} color="#FF8000" aria-hidden="true" />
              <h3 className="font-heading mt-6 text-[26px] font-semibold text-[#003B8E] transition-colors group-hover:text-[#FFFFFF]">{title}</h3>
              <p className="font-body mt-3 text-[15px] leading-[1.7] text-[#003B8E]/75 transition-colors group-hover:text-[#FFFFFF]/90">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
