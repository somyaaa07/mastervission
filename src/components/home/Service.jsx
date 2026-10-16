import { ArrowRight, Building2, ClipboardCheck, Factory, HardHat, Home } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "../ui/SafeImage";
import SectionHeader from "../ui/SectionHeader";

const SERVICES = [
  { icon: Home, title: "Residential Construction", text: "Dream homes built with precision.", image: "/images/project-duplex.jpg" },
  { icon: Building2, title: "Commercial Construction", text: "Spaces that power your business.", image: "/images/project-commercial.jpg" },
  { icon: Factory, title: "Industrial Construction", text: "Strong foundations for bigger dreams.", image: "/images/project-factory.jpg" },
  { icon: HardHat, title: "Renovation & Remodeling", text: "Modern upgrades for lasting value.", image: "/images/project-renovation.jpg" },
  { icon: ClipboardCheck, title: "Project Management", text: "On-time delivery with complete transparency.", image: "/images/contact-hero.jpg" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FFFFFF] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our services"
          title="Comprehensive construction solutions"
          text="From concept to completion, we provide end-to-end construction services tailored to your needs."
          action={
            <Link
              to="/services"
              className="font-body inline-flex w-fit items-center gap-2 rounded-md border border-[#003B8E] px-5 py-3 text-[14.5px] font-semibold text-[#003B8E] transition-colors duration-200 hover:bg-[#003B8E] hover:text-[#FFFFFF]"
            >
              All services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          }
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-5">
          {SERVICES.map(({ icon: Icon, title, text, image }, i) => (
            <li key={title} className={i === 4 ? "col-span-2 lg:col-span-1" : ""}>
              <Link
                to="/services"
                className="group relative block aspect-[3/4] overflow-hidden rounded-md bg-[#003B8E] max-lg:aspect-[4/5] max-lg:max-sm:aspect-[3/4]"
              >
                <SafeImage
                  src={image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#002A66] via-[#003B8E]/45 to-[#003B8E]/5" />
                <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-[#FF8000]">
                    <Icon size={15} strokeWidth={1.6} color="#FFFFFF" aria-hidden="true" />
                  </span>
                  <span className="font-heading block text-[15px] font-semibold leading-[1.1] text-[#FFFFFF] sm:text-[15px]">{title}</span>
                  <span className="font-body mt-2 block text-[13.5px] leading-snug text-[#FFFFFF]/85">{text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
