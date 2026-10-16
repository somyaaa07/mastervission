import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero, { heroBtnGhost, heroBtnPrimary } from "../ui/PageHero";

export default function ProjectsHero() {
  return (
    <PageHero
      image="/images/projects-hero.jpg"
      imageAlt="Hard hat and blueprints on site with a city skyline at sunset"
      position="object-[72%_center]"
      crumb="Our projects"
      title="Spaces that make a difference"
      text="Explore our completed and ongoing projects across residential, commercial and industrial sectors, built with a commitment to quality, innovation and excellence."
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
