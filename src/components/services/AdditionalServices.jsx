import {
  ArrowRight,
  Calculator,
  Leaf,
  PencilRuler,
  Route,
  Sofa,
} from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "../ui/SafeImage";
import SectionHeader from "../ui/SectionHeader";

const ITEMS = [
  {
    icon: Sofa,
    title: "Interior Design & Fit-Out",
    image:
      "https://i.pinimg.com/1200x/df/3c/dc/df3cdc6f13860983c817c58cedf3ea85.jpg",
    fallback: "/images/project-office-reno.jpg",
  },
  {
    icon: PencilRuler,
    title: "Architecture & Planning",
    image:
      "https://i.pinimg.com/736x/41/bb/28/41bb2859332569f27b572c8401118a8d.jpg",
    fallback: "/images/project-villa.jpg",
  },
  {
    icon: Leaf,
    title: "Sustainable Construction",
    image:
      "https://i.pinimg.com/736x/42/c7/4c/42c74ca61e5558d4e93ef56a6837a663.jpg",
    fallback: "/images/project-factory.jpg",
  },
  {
    icon: Route,
    title: "Infrastructure Development",
    image:
      "https://i.pinimg.com/736x/51/16/84/5116842481f2d177286c3c9e75f2e8bf.jpg",
    fallback: "/images/project-infrastructure.jpg",
  },
  {
    icon: Calculator,
    title: "Cost Estimation & Consultancy",
    image:
      "https://i.pinimg.com/1200x/bf/50/d3/bf50d3223ca900f44e95cfede6452555.jpg",
    fallback: "/images/about-site.jpg",
  },
];

export default function AdditionalServices() {
  return (
    <section className="bg-[#F5F8FD] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Additional services"
          title="Complete solutions under one roof"
          text="Beyond core construction, we provide allied services for a seamless experience from design to handover."
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ITEMS.map(({ icon: Icon, title, image, fallback }) => (
            <li key={title}>
              <Link
                to="/contact"
                className="group relative block aspect-[4/5] overflow-hidden rounded-md bg-[#003B8E]"
              >
                <SafeImage
                  src={image}
                  fallback={fallback}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#003B8E] via-[#003B8E]/40 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <span>
                    <Icon size={26} strokeWidth={1.5} color="#FF8000" aria-hidden="true" />
                    <span className="font-heading mt-2 block text-[23px] font-semibold leading-[1.1] text-[#FFFFFF]">{title}</span>
                  </span>
                  <ArrowRight size={18} color="#FFFFFF" aria-hidden="true" className="mb-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
