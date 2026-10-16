import { Clock, Lightbulb, ShieldCheck, Smile } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "Quality construction", text: "Checked at every stage" },
  { icon: Lightbulb, label: "Innovative solutions", text: "Modern methods and materials" },
  { icon: Clock, label: "On-time delivery", text: "Clear schedules we keep" },
  { icon: Smile, label: "Client satisfaction", text: "Updates you can rely on" },
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#FFFFFF] py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Who we are"
            title="A trusted name in residential construction"
            text="Mastervision Infra LLP specializes in residential projects, from villas and apartments to township homes. With years of experience, a skilled team and a customer-first approach, we deliver homes that combine function, good design and long-term value."
          />
          <ul className="mt-9 grid gap-px overflow-hidden rounded-md border border-[#003B8E]/10 bg-[#003B8E]/10 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, label, text }) => (
              <li key={label} className="flex items-start gap-4 bg-[#FFFFFF] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#003B8E]">
                  <Icon size={20} strokeWidth={1.6} color="#FFFFFF" aria-hidden="true" />
                </span>
                <span>
                  <span className="font-heading block text-[19px] font-semibold leading-tight text-[#003B8E]">{label}</span>
                  <span className="font-body mt-1 block text-[13.5px] text-[#003B8E]/70">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src="/images/project-villa.jpg"
            alt="Modern luxury villa built by Mastervision Infra LLP"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-md object-cover"
          />
          <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-4 rounded-md border-l-4 border-[#FF8000] bg-[#003B8E] px-6 py-4 shadow-[0_20px_40px_-20px_rgba(0,20,60,0.6)] sm:left-auto sm:right-6">
            <ShieldCheck size={30} strokeWidth={1.5} color="#FFFFFF" aria-hidden="true" />
            <p className="font-heading text-[19px] font-semibold leading-tight text-[#FFFFFF]">
              Homes that inspire
              <span className="font-body mt-0.5 block text-[13px] font-medium text-[#FFFFFF]/80">Communities that grow</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
