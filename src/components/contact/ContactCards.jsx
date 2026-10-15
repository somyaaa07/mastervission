import { motion } from "framer-motion";
import { FileText, Mail, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../../constants/site";

const CARDS = [
  {
    icon: Phone,
    title: "Call Us",
    main: PHONE_DISPLAY,
    sub: "Mon - Sat, 9:00 AM - 6:00 PM",
    href: PHONE_HREF,
  },
  {
    icon: Mail,
    title: "Email Us",
    main: "info@mastervisioninfra.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@mastervisioninfra.com",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    main: "Noida, Uttar Pradesh, India",
    sub: "A-123, Sector 62, Noida - 201301",
    href: "#location",
  },
  {
    icon: FileText,
    title: "Request a Quote",
    main: "Get a Free Consultation",
    sub: "Share your requirements",
    href: "#contact-form",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-[#FFFFFF] pt-8 lg:pt-10">
      <div className="mx-auto grid max-w-[1280px] gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {CARDS.map(({ icon: Icon, title, main, sub, href }, i) => (
          <motion.a
            key={title}
            href={href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="group flex items-center gap-4 rounded-lg border border-[#003B8E]/10 bg-[#FFFFFF] p-4 shadow-[0_10px_30px_rgba(0,59,142,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000]"
          >
            <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#003B8E] transition-colors duration-300 group-hover:bg-[#FF8000]">
              <Icon size={26} strokeWidth={1.6} color="#FFFFFF" />
            </span>
            <div className="min-w-0">
              <p className="font-body text-[13.5px] font-bold text-[#003B8E]">{title}</p>
              <p className="font-body mt-1 break-words text-[13px] font-bold leading-snug text-[#003B8E]">{main}</p>
              <p className="font-body mt-0.5 text-[11.5px] leading-snug text-[#003B8E]/65">{sub}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}