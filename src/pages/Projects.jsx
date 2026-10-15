import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGallery from "../components/projects/ProjectsGallery";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectsCta from "../components/projects/ProjectsCta";
import ProjectsTestimonials from "../components/projects/ProjectsTestimonials";

export default function Projects() {
  return (
    <main className="font-body bg-[#FFFFFF] text-[#003B8E]">
      <ProjectsHero />
      <ProjectsGallery />
      <ProjectStats />
      <ProjectsCta />
      <ProjectsTestimonials />
    </main>
  );
}