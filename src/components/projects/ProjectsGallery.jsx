import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, HardHat, Home, MapPin, Search, Trees } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import SafeImage from "../ui/SafeImage";

const CATEGORY_ICONS = {
  "Independent Homes": Home,
  Apartments: Building2,
  Townships: Trees,
  Renovation: HardHat,
};

const CATEGORIES = Object.keys(CATEGORY_ICONS);

const PROJECTS = [
  { title: "Luxury Residential Villa", category: "Independent Homes", location: "Noida, Uttar Pradesh", image: "/images/project-villa.jpg" },
  { title: "Premium Residential Apartments", category: "Apartments", location: "Faridabad, Haryana", image: "/images/project-apartment.jpg" },
  { title: "Home Renovation Project", category: "Renovation", location: "Delhi, India", image: "/images/project-renovation.jpg" },
  { title: "Gated Township Homes", category: "Townships", location: "Greater Noida, Uttar Pradesh", image: "/images/project-township.jpg" },
  { title: "Modern Duplex Residence", category: "Independent Homes", location: "Ghaziabad, Uttar Pradesh", image: "/images/project-duplex.jpg" },
];

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c = { All: PROJECTS.length };
    CATEGORIES.forEach((cat) => {
      c[cat] = PROJECTS.filter((p) => p.category === cat).length;
    });
    return c;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter(
      (p) =>
        (filter === "All" || p.category === filter) &&
        (!q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q))
    );
  }, [filter, query]);

  return (
    <section className="bg-[#FFFFFF] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionHeader
          eyebrow="Project portfolio"
          title="Homes built across Delhi NCR"
          text="Filter by home type or search by name and location to see the work behind the numbers."
        />

        {/* Filters + search */}
        <div className="mt-9 flex flex-col gap-4 border-y border-[#003B8E]/10 py-4 xl:flex-row xl:items-center">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 xl:mx-0 xl:flex-1 xl:px-0 xl:pb-0"
          >
            {["All", ...CATEGORIES].map((cat) => {
              const active = cat === filter;
              const Icon = CATEGORY_ICONS[cat];
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(cat)}
                  className={`font-body flex shrink-0 items-center gap-2 rounded-md border px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200 ${
                    active
                      ? "border-[#003B8E] bg-[#003B8E] text-[#FFFFFF]"
                      : "border-[#003B8E]/20 bg-[#FFFFFF] text-[#003B8E] hover:border-[#FF8000] hover:text-[#FF8000]"
                  }`}
                >
                  {Icon && <Icon size={18} strokeWidth={1.6} aria-hidden="true" color={active ? "#FF8000" : "currentColor"} />}
                  <span>
                    {cat === "All" ? "All projects" : cat}{" "}
                    <span className="text-[12px] font-medium opacity-80">({counts[cat]})</span>
                  </span>
                </button>
              );
            })}
          </div>

          <label className="relative block xl:w-[260px]">
            <span className="sr-only">Search projects</span>
            <Search size={16} aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#003B8E]/60" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects"
              className="font-body w-full rounded-md border border-[#003B8E]/20 bg-[#FFFFFF] py-2.5 pl-10 pr-4 text-[14px] text-[#003B8E] outline-none transition-colors placeholder:text-[#003B8E]/55 focus:border-[#FF8000]"
            />
          </label>
        </div>

        {/* Grid */}
        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const Icon = CATEGORY_ICONS[p.category];
              return (
                <motion.article
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-md bg-[#003B8E]"
                >
                  <SafeImage
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#002A66]/95 via-[#003B8E]/25 to-transparent" />
                  <span className="font-body absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-[#FFFFFF] px-2.5 py-1.5 text-[12px] font-semibold text-[#003B8E]">
                    <Icon size={14} strokeWidth={1.8} color="#FF8000" aria-hidden="true" />
                    {p.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div className="min-w-0">
                      <h3 className="font-heading text-[24px] font-semibold leading-tight text-[#FFFFFF]">{p.title}</h3>
                      <p className="font-body mt-1.5 flex items-center gap-1.5 text-[13px] text-[#FFFFFF]/85">
                        <MapPin size={14} color="#FF8000" aria-hidden="true" className="shrink-0" />
                        <span className="truncate">{p.location}</span>
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      aria-label={`Enquire about ${p.title}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#FF8000] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
                    >
                      <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p role="status" className="font-body mt-10 text-center text-[15px] text-[#003B8E]/75">
            No projects match your search. Try a different keyword or category.
          </p>
        )}
      </div>
    </section>
  );
}
