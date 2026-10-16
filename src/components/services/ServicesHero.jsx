import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero, { heroBtnGhost, heroBtnPrimary } from "../ui/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      image="/images/services-hero.jpg"
      imageAlt="Building under construction with cranes at sunset"
      position="object-[75%_center]"
      crumb="Services"
      title="Comprehensive construction solutions"
      text="From concept to completion, we deliver end-to-end construction and infrastructure solutions tailored to your needs. With quality, innovation and a client-first approach, we turn your vision into lasting spaces."
      facts={["Residential", "Commercial", "Industrial"]}
      actions={
        <>
          <Link to="/contact" className={heroBtnPrimary}>
            Get a free quote
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/contact" className={heroBtnGhost}>Discuss your project</Link>
        </>
      }
    />
  );
}
