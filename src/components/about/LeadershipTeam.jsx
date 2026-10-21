import Avatar from "../ui/Avatar";
import SectionHeader from "../ui/SectionHeader";

/**
 * 7 members. Layout: 4 equal cards on the first row, 3 centered on the second.
 * The founder is the same size as everyone else, marked only by an orange outline.
 * TODO: replace placeholder entries (5, 6, 7) with real name, role, photo, years.
 */
const TEAM = [
  { name: "Deepak", role: "Founder", years: 10, image: "/images/88.jpeg", featured: true },
    { name: "Sachin", role: "Co-Founder", years: 10, image: "/images/55.jpeg" },

    { name: "Vivek", role: "Director", years: 15, image: "/images/66.jpeg" },
  { name: "Shalu Chaudhary", role: "Interior designer", years: 2, image: "/images/22.jpeg" },
  { name: "Chetan Chaudhary", role: "Interior designer", years: 2, image: "/images/11.jpeg" },

  { name: "Bhola", role: "Project Head", years: 6, image: "/images/77.jpeg" },
  { name: "Paras", role: "Sales Head", years: 5, image: "/images/33.jpeg" },
];

const TOTAL_YEARS = TEAM.reduce((sum, m) => sum + m.years, 0);

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
              className={`group w-[calc(50%-8px)] overflow-hidden rounded-lg border-b-4 bg-white transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#FF8000] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:w-[calc(25%-18px)] ${
                m.featured ? "border-[#FF8000] ring-2 ring-[#FF8000]" : "border-transparent"
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

                <span className="absolute right-1 top-1 rounded-full bg-[#FF8000] px-2.5 py-1 font-body text-[12px] font-semibold text-[#002A66] shadow-sm">
                  {m.years} yrs
                </span>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#001533]/95 via-[#001533]/70 to-transparent px-4 pb-4 pt-16 text-left">
                  <h3 className="font-heading text-[17px] font-semibold leading-tight text-white lg:text-[20px]">
                    {m.name}
                  </h3>
                  <p className="mt-0.5 font-body text-[13px] text-white/80 lg:text-[14px]">
                    {m.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}