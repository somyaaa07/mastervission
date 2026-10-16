import { ArrowRight, ClipboardCheck, HardHat, Home } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Construction",
    text: "Dream homes built with precision.",
    video: "/project.mp4",
    // poster: "/images/project-duplex.jpg",
  },
  {
    icon: HardHat,
    title: "Home Renovation & Remodeling",
    text: "Modern upgrades for your home.",
    video: "/interior.mp4",
    // poster: "/images/project-renovation.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    text: "On-time delivery with complete transparency.",
    video: "/residentails.mp4",
    // poster: "/images/contact-hero.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FFFFFF] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our services"
          title="Comprehensive home construction solutions"
          text="From concept to completion, we provide end-to-end home construction services tailored to your needs."
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

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map(({ icon: Icon, title, text, video, poster }, i) => (
            <li key={title} className={i === 2 ? "col-span-2 lg:col-span-1" : ""}>
              <Link
                to="/services"
                className="group relative block aspect-[3/4] overflow-hidden rounded-md bg-[#003B8E] max-lg:aspect-[4/5] max-lg:max-sm:aspect-[3/4]"
              >
                <video
                  src={video}
                  poster={poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  tabIndex={-1}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#002A66]/35 via-[#000]/35 to-[#000]/5" />
                <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  {/* <span className="mb-3 flex h-5 w-5 items-center justify-center rounded-md bg-[#FF8000]">
                    <Icon size={10} strokeWidth={1.6} color="#FFFFFF" aria-hidden="true" />
                  </span> */}
                  <span className="font-heading block text-[10px] font-semibold leading-[1.1] text-[#FFFFFF] xl:text-[22px] sm:text-[20px] md:text[18px]">{title}</span>
                  <span className="font-body mt-1 block text-[7px] xl:text-[6px] sm:text-[6px] md:text[6px] leading-snug text-[#FFFFFF]/85">{text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}