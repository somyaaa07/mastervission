import { FileText, Handshake, MessageCircle, Truck } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const STEPS = [
  { icon: MessageCircle, title: "Understand", text: "We listen to your needs and vision." },
  { icon: FileText, title: "Plan & design", text: "Create tailored solutions with expert planning." },
  { icon: Truck, title: "Execute", text: "Deliver with precision, quality and safety." },
  { icon: Handshake, title: "Handover", text: "On-time delivery with complete transparency." },
];

export default function WorkProcess({
  eyebrow = "Our work process",
  title = "From concept to completion",
  description = "We follow a streamlined process to ensure every project is delivered with quality, transparency and efficiency.",
}) {
  return (
    <section className="bg-[#F5F8FD] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} text={description} />

        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line on desktop: this content is a real sequence, so numbering is meaningful */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-[27px] hidden h-px bg-[#003B8E]/20 lg:block" />
          {STEPS.map(({ icon: Icon, title: t, text }, i) => (
            <li key={t} className="relative">
              <div className="relative z-10 flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[#003B8E] shadow-[0_0_0_6px_#F5F8FD]">
                  <Icon size={24} strokeWidth={1.5} color="#FFFFFF" aria-hidden="true" />
                </span>
                <span className="font-heading text-[28px] font-bold text-[#FF8000] bg-[#F5F8FD] px-2">0{i + 1}</span>
              </div>
              <h3 className="font-heading mt-5 text-[24px] font-semibold text-[#003B8E]">{t}</h3>
              <p className="font-body mt-2 max-w-[260px] text-[14.5px] leading-[1.65] text-[#003B8E]/75">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
