import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero, { heroBtnGhost, heroBtnPrimary } from "../ui/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      video="/about-story.mp4"
      image="/images/about-hero.jpg"
      crumb="About us"
      title="Building better futures"
      text="At Mastervision Infra LLP, we turn ideas into homes that perform and last. We focus on quality, innovation and keeping every client informed from first sketch to handover."
      facts={["Quality", "Innovation", "Client satisfaction"]}
      actions={
        <>
          <Link to="/contact" className={heroBtnPrimary}>
            Get a free quote
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/projects" className={heroBtnGhost}>See our projects</Link>
        </>
      }
    />
  );
}
