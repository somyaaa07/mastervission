import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import AboutStats from "../components/about/AboutStats";
import MissionVisionValues from "../components/about/MissionVisionValues";
import OurStory from "../components/about/OurStory";
import WorkProcess from "../components/about/WorkProcess";
import LeadershipTeam from "../components/about/LeadershipTeam";
import ClientTestimonials from "../components/about/ClientTestimonials";
// import CtaBanner from "../components/home/CtaBanner";

export default function About() {
  return (
    <main className="font-body bg-[#FFFFFF] text-[#003B8E]">
      <AboutHero />
      <WhoWeAre />
      <AboutStats />
      <MissionVisionValues />
      <OurStory />
      <WorkProcess />
      <LeadershipTeam />
      <ClientTestimonials />
      {/* <CtaBanner /> */}
    </main>
  );
}