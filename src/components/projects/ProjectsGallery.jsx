import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, Factory, HardHat, Home, MapPin, Route, Search } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORY_ICONS = {
  Residential: Home,
  Commercial: Building2,
  Industrial: Factory,
  Renovation: HardHat,
  Infrastructure: Route,
};

const CATEGORIES = Object.keys(CATEGORY_ICONS);

const PROJECTS = [
  { title: "Luxury Residential Villa", category: "Residential", location: "Noida, Uttar Pradesh", image: "/images/project-villa.jpg" },
  { title: "Corporate Office Complex", category: "Commercial", location: "Greater Noida, Uttar Pradesh", image: "/images/project-commercial.jpg" },
  { title: "Industrial Warehouse", category: "Industrial", location: "Ghaziabad, Uttar Pradesh", image: "/images/project-warehouse.jpg" },
  { title: "Premium Residential Apartments", category: "Residential", location: "Faridabad, Haryana", image: "/images/project-apartment.jpg" },
  { title: "Retail & Commercial Space", category: "Commercial", location: "Noida, Uttar Pradesh", image: "/images/project-showroom.jpg" },
  { title: "Home Renovation Project", category: "Renovation", location: "Delhi, India", image: "/images/project-renovation.jpg" },
  { title: "Infrastructure Development", category: "Infrastructure", location: "Yamuna Expressway", image: "/images/project-infrastructure.jpg" },
  { title: "Manufacturing Facility", category: "Industrial", location: "Greater Noida, Uttar Pradesh", image: "/images/project-factory.jpg" },
  { title: "Educational Institution", category: "Commercial", location: "Noida, Uttar Pradesh", image: "/images/project-education.jpg" },
  { title: "Gated Township Homes", category: "Residential", location: "Greater Noida, Uttar Pradesh", image: "/images/project-township.jpg" },
  { title: "Modern Duplex Residence", category: "Residential", location: "Ghaziabad, Uttar Pradesh", image: "/images/project-duplex.jpg" },
  { title: "Office Interior Renovation", category: "Renovation", location: "Noida, Uttar Pradesh", image: "/images/project-office-reno.jpg" },
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
    <section className="bg-[#FFFFFF] py-10 lg:py-12">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Filters + search */}
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-1 xl:mx-0 xl:flex-1 xl:px-0"
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
                  className="font-body flex shrink-0 items-center gap-2 rounded-md border px-4 py-3 text-[13px] font-semibold transition-colors duration-200"
                  style={{
                    backgroundColor: active ? "#FF8000" : "#FFFFFF",
                    borderColor: active ? "#FF8000" : "#003B8E26",
                    color: active ? "#FFFFFF" : "#003B8E",
                  }}
                >
                  {Icon && <Icon size={20} strokeWidth={1.5} />}
                  <span>
                    {cat === "All" ? "All Projects" : cat}{" "}
                    <span className="text-[11.5px] font-medium opacity-80">({counts[cat]})</span>
                  </span>
                </button>
              );
            })}
          </div>

          <label className="relative block xl:w-[230px]">
            <span className="sr-only">Search projects</span>
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#003B8E]/60" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="font-body w-full rounded-md border border-[#003B8E]/20 bg-[#FFFFFF] py-3 pl-10 pr-4 text-[13px] text-[#003B8E] outline-none transition-colors placeholder:text-[#003B8E]/50 focus:border-[#FF8000]"
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
                  className="group overflow-hidden rounded-md border border-[#003B8E]/10 bg-[#FFFFFF] shadow-[0_10px_30px_rgba(0,59,142,0.06)] transition-colors duration-300 hover:border-[#FF8000]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="font-body absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-[#FFFFFF] px-2.5 py-1.5 text-[11.5px] font-semibold text-[#003B8E] shadow-sm">
                      <Icon size={15} strokeWidth={1.6} />
                      {p.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                    <div className="min-w-0">
                      <h3 className="font-body truncate text-[15px] font-bold text-[#003B8E]">{p.title}</h3>
                      <p className="font-body mt-1 flex items-center gap-1.5 text-[12px] text-[#003B8E]/70">
                        <MapPin size={14} color="#FF8000" className="shrink-0" />
                        <span className="truncate">{p.location}</span>
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      aria-label={`Enquire about ${p.title}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003B8E] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
                    >
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p role="status" className="font-body mt-10 text-center text-[14.5px] text-[#003B8E]/70">
            No projects match your search. Try a different keyword or category.
          </p>
        )}
      </div>
    </section>
  );
}