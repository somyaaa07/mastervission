import { FileText, Mail, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../../constants/site";

const CARDS = [
  { icon: Phone, title: "Call us", main: PHONE_DISPLAY, sub: "Mon to Sat, 9:00 AM to 6:00 PM", href: PHONE_HREF },
  { icon: Mail, title: "Email us", main: "info@mastervisioninfra.com", sub: "We reply within 24 hours", href: "mailto:info@mastervisioninfra.com" },
  { icon: MapPin, title: "Visit our office", main: "Greater Noida, Uttar Pradesh", sub: "UGA-47, Galaxy Diamond Plaza, Haibatpur, Sector 4 - 201016", href: "#location" },
  { icon: FileText, title: "Request a quote", main: "Get a free consultation", sub: "Share your requirements", href: "#contact-form", featured: true },
];

export default function ContactCards() {
  return (
    <section className="relative z-10 -mt-10 px-5 pb-8 lg:-mt-14 lg:px-8">
      {/* gap-px over a tinted background draws clean 1px dividers at every breakpoint */}
      <ul className="mx-auto grid max-w-[1280px] gap-px overflow-hidden rounded-2xl bg-[#DCE6F5] shadow-[0_30px_60px_-30px_rgba(0,30,80,0.55)] sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ icon: Icon, title, main, sub, href, featured }) => (
          <li key={title} className="flex">
            <a
              href={href}
              className={`group flex w-full items-start gap-4 p-6 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF8000] lg:gap-5 lg:p-7 ${
                featured ? "bg-[#003B8E] hover:bg-[#002F70]" : "bg-[#FFFFFF] hover:bg-[#F7FAFF]"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  featured
                    ? "bg-[#FF8000] text-[#FFFFFF] group-hover:bg-[#F04B00]"
                    : "bg-[#FFF2E3] text-[#FF8000] group-hover:bg-[#FF8000] group-hover:text-[#FFFFFF]"
                }`}
              >
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>

              <span className="min-w-0">
                <span className={`font-heading block text-[19px] font-semibold leading-tight ${featured ? "text-[#FFFFFF]" : "text-[#003B8E]"}`}>
                  {title}
                </span>
                <span className={`font-body mt-2 block break-words text-[12.5px] font-bold leading-snug ${featured ? "text-[#FFFFFF]" : "text-[#003B8E]"}`}>
                  {main}
                </span>
                <span className={`font-body mt-1.5 block text-[13px] leading-relaxed ${featured ? "text-[#FFFFFF]/75" : "text-[#003B8E]/65"}`}>
                  {sub}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}