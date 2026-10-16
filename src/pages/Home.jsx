import Hero from "../components/home/Hero";
import Service from "../components/home/Service";
import About from "../components/home/About";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyChooseUs from "../components/home/WhychooseUs";
import PricingPackages from "../components/home/PricingPackages";
import CostCalculator from "../components/home/CostCalculator";
import ServiceAreas from "../components/home/ServiceAreas";
import HomeFaq from "../components/home/HomeFaq";
import CtaBanner from "../components/home/CtaBanner";

export default function Home() {
  return (
    <main className="font-body bg-[#FFFFFF] text-[#003B8E]">
      <Hero />
      <Service />
      <About />
      <FeaturedProjects />
      <WhyChooseUs />
      <PricingPackages/>
      <CostCalculator/>
      <ServiceAreas/>
      <HomeFaq/>

      {/* <CtaBanner /> */}
    </main>
  );
}