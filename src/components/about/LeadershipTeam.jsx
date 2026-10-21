import Avatar from "../ui/Avatar";
import SectionHeader from "../ui/SectionHeader";

const TEAM = [
  { name: "Deepak", role: "Founder", years: 10, image: "/images/88.jpeg", featured: true },
  { name: "Sachin", role: "Co-Founder", years: 10, image: "/images/55.jpeg" },
  { name: "Vivek", role: "Director", years: 15, image: "/images/66.jpeg" },
  { name: "Shalu Chaudhary", role: "Interior Designer", years: 2, image: "/images/22.jpeg" },
  { name: "Chetan Chaudhary", role: "Interior Designer", years: 2, image: "/images/11.jpeg" },
  { name: "Bhola", role: "Project Head", years: 6, image: "/images/77.jpeg" },
  { name: "Paras", role: "Sales Head", years: 5, image: "/images/33.jpeg" },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-[#003B8E] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          light
          eyebrow="Our team"
          title="Meet our leadership team"
          text="A passionate and experienced team driving Mastervision Infra LLP towards a stronger tomorrow."
        />

        <ul className="mt-12 flex flex-wrap justify-center gap-4 lg:gap-6">
          {TEAM.map((m) => (
            <li
              key={m.name}
              className={`group w-full max-w-[380px] overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:w-[calc(33.333%-11px)] md:max-w-none lg:w-[calc(25%-18px)] ${
                m.featured ? "ring-2 ring-[#FF8000] ring-offset-2 ring-offset-[#003B8E]" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#002A66]">
                <Avatar
                  src={m.image}
                  name={m.name}
                  textClass="text-[64px]"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>

              <div className="relative px-4 pb-5 pt-4 text-center">
                <span className="absolute left-1/2 top-0 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#FF8000] transition-all duration-300 group-hover:w-20" />
                <h3 className="font-heading text-[18px] font-semibold leading-tight text-[#001533] lg:text-[19px]">
                  {m.name}
                </h3>
                <p className="mt-1 font-body text-[14px] text-[#003B8E]/80">
                  {m.role}
                </p>
                <p className="mt-1 font-body text-[13px] font-semibold text-[#FF8000]">
                  {m.years}+ yrs experience
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}