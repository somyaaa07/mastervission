import { ArrowRight, Building2, ClipboardCheck, Factory, HardHat, Home } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "../ui/SafeImage";
import SectionHeader from "../ui/SectionHeader";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Construction",
    text: "Custom homes and residential spaces built with precision, quality and modern design.",
    image: "https://i.pinimg.com/736x/a9/15/a7/a915a721490370e52ca7ac4704439a22.jpg",
    fallback: "/images/project-duplex.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    text: "Office spaces, retail outlets and commercial complexes that enhance your business.",
    image: "https://i.pinimg.com/736x/1e/b6/f8/1eb6f8627bebd446b3918f8cd270519c.jpg",
    fallback: "/images/project-commercial.jpg",
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    text: "Robust industrial infrastructure tailored for operational efficiency and safety.",
    image: "https://i.pinimg.com/736x/19/de/90/19de9080e6e5a2babb800a592a4a16a5.jpg",
    fallback: "/images/project-factory.jpg",
  },
  {
    icon: HardHat,
    title: "Renovation & Remodeling",
    text: "Transform existing spaces with modern designs and improved functionality.",
    image: "https://i.pinimg.com/736x/f6/1f/d7/f61fd7ae53a369684804a7151381d8d7.jpg",
    fallback: "/images/project-renovation.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    text: "On-time delivery with complete transparency and efficient project management.",
    image: "https://i.pinimg.com/736x/8d/65/b8/8d65b8017d4a865da61e0a574eb228e9.jpg",
    fallback: "/images/contact-hero.jpg",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[#FFFFFF] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our services"
          title="End-to-end construction services"
          text="A wide range of construction and infrastructure services designed for residential, commercial and industrial clients."
        />

        {/* 3 + 2 layout so the last two services get more room */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map(({ icon: Icon, title, text, image, fallback }, i) => (
            <article
              key={title}
              className={`group flex flex-col overflow-hidden rounded-md border border-[#003B8E]/10 bg-[#FFFFFF] transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(0,59,142,0.5)] ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <SafeImage
                  src={image}
                  fallback={fallback}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#003B8E]/55 via-transparent to-transparent" />
                <span className="absolute bottom-0 left-0 flex h-14 w-14 items-center justify-center bg-[#FF8000]">
                  <Icon size={26} strokeWidth={1.6} color="#FFFFFF" aria-hidden="true" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-[26px] font-semibold leading-tight text-[#003B8E]">{title}</h3>
                <p className="font-body mt-2 flex-1 text-[15px] leading-[1.65] text-[#003B8E]/75">{text}</p>
                <Link
                  to="/contact"
                  className="font-body mt-5 inline-flex w-fit items-center gap-2 border-b-2 border-[#FF8000] pb-0.5 text-[14px] font-semibold text-[#003B8E] transition-colors hover:text-[#FF8000]"
                >
                  Ask about {title.toLowerCase()}
                  <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
