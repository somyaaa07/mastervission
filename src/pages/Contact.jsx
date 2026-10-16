import ContactHero from "../components/contact/ContactHero";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import LocationMap from "../components/contact/LocationMap";
import WhyGetInTouch from "../components/contact/WhyGetInTouch";
import ContactPromise from "../components/contact/ContactPromise";
import FaqAccordion from "../components/contact/FaqAccordion";
import CtaBanner from "../components/home/CtaBanner";

export default function Contact() {
  return (
    <main className="font-body bg-[#FFFFFF] text-[#003B8E]">
      <ContactHero />
      <ContactCards />

      <section className="bg-[#FFFFFF] py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <ContactForm />
          <LocationMap />
        </div>
      </section>

      <WhyGetInTouch />

      <section className="bg-[#FFFFFF] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <ContactPromise />
          <FaqAccordion />
        </div>
      </section>

      {/* <CtaBanner /> */}
    </main>
  );
}