import { ArrowRight } from "lucide-react";
import PageHero, { heroBtnGhost, heroBtnPrimary } from "../ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      image="/images/contact-hero.jpg"
      imageAlt="Engineers reviewing plans at a construction site at sunset"
      position="object-[75%_center]"
      crumb="Contact us"
      title="Let's build your vision together"
      text="Have a project in mind? Get in touch for a free consultation and let's turn your ideas into reality."
      actions={
        <>
          <a href="#contact-form" className={heroBtnPrimary}>
            Get a free quote
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#location" className={heroBtnGhost}>Find our office</a>
        </>
      }
    />
  );
}
