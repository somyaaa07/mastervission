import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";
import Specialization from "../components/services/Specialization";
import AdditionalServices from "../components/services/AdditionalServices";
import WorkProcess from "../components/about/WorkProcess";
import CtaBanner from "../components/home/CtaBanner";

export default function Services() {
  return (
    <main className="font-body bg-[#FFFFFF] text-[#003B8E]">
      <ServicesHero />
      <ServicesOverview />
      <Specialization />
      <AdditionalServices />
      <WorkProcess
        title="How We Work"
        description="A streamlined process to ensure quality, transparency and on-time delivery."
      />
      <CtaBanner
        title="Turn Your Ideas Into Reality"
        text="Get in touch with us today for a free consultation and let's create spaces that make a difference."
        image="/images/projects-cta.jpg"
      />
    </main>
  );
}