import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_HREF } from "../../constants/site";
import SectionHeader from "../ui/SectionHeader";

const POINTS = [
  "High-quality materials and superior workmanship",
  "Customized solutions for every project",
  "Timely project completion",
  "Transparent communication",
  "Focus on sustainability and innovation",
];

export default function Specialization() {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[320px] overflow-hidden bg-[#003B8E] lg:min-h-[560px]">
          <img
            src="/images/service-specialization.jpg"
            alt="Engineers reviewing plans on a construction site"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#003B8E]/80 via-transparent to-transparent" />
          <p className="font-heading absolute bottom-6 left-5 border-l-4 border-[#FF8000] pl-4 text-[28px] font-semibold leading-tight text-[#FFFFFF] sm:bottom-8 sm:left-8 sm:text-[34px]">
            Delivering
            <br />
            quality spaces
          </p>
        </div>

        <div className="flex flex-col justify-center px-5 py-14 lg:px-16 lg:py-20">
          <SectionHeader
            eyebrow="Our specialization"
            title="Spaces that inspire, communities that grow"
            text="We combine modern techniques, advanced technology and a skilled team to deliver spaces that are functional and ready for the future."
          />

          <ul className="mt-7 divide-y divide-[#003B8E]/10 border-y border-[#003B8E]/10">
            {POINTS.map((p) => (
              <li key={p} className="font-body flex items-center gap-3 py-3 text-[15px] font-medium text-[#003B8E]">
                <CheckCircle2 size={20} fill="#FF8000" color="#FFFFFF" aria-hidden="true" className="shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[15px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
            >
              Get a free quote
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={PHONE_HREF}
              className="font-body inline-flex items-center gap-3 rounded-md border border-[#003B8E]/25 px-5 py-2.5 transition-colors duration-200 hover:border-[#FF8000]"
            >
              <Phone size={22} strokeWidth={1.7} color="#003B8E" aria-hidden="true" />
              <span className="leading-tight">
                <span className="block text-[15px] font-bold text-[#003B8E]">{PHONE_DISPLAY}</span>
                <span className="block text-[12px] font-medium text-[#003B8E]/70">Let&apos;s discuss your project</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
