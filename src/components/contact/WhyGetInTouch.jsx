import { ClipboardList, Clock, Handshake, MessageCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const ITEMS = [
  { icon: MessageCircle, title: "Free consultation", text: "Discuss your ideas with our experts." },
  { icon: ClipboardList, title: "Customized solutions", text: "Tailored plans to meet your needs." },
  { icon: Clock, title: "Quick response", text: "We get back to you within 24 hours." },
  { icon: Handshake, title: "End-to-end support", text: "From planning to project completion." },
];

export default function WhyGetInTouch() {
  return (
    <section className="bg-[#F5F8FD] py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why talk to us"
          title="Support at every step of your build"
          text="We are here to help you from the first idea to the final handover."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="border-l-4 border-[#FF8000] bg-[#FFFFFF] p-6">
              <Icon size={30} strokeWidth={1.5} color="#003B8E" aria-hidden="true" />
              <h3 className="font-heading mt-4 text-[22px] font-semibold leading-tight text-[#003B8E]">{title}</h3>
              <p className="font-body mt-2 text-[14.5px] leading-[1.65] text-[#003B8E]/75">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
