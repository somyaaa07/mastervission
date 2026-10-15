import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
  Search,
  X,
  XCircle,
} from "lucide-react";

// Edit these with your real service locations
const REGIONS = [
  {
    name: "Delhi NCR",
    primary: true,
    projects: "70+",
    response: "Within 48 hrs",
    cities: ["Delhi", "Noida", "Greater Noida", "Gurugram", "Ghaziabad", "Faridabad"],
  },
  {
    name: "Uttar Pradesh",
    primary: false,
    projects: "35+",
    response: "Within 3 days",
    cities: ["Meerut", "Bulandshahr", "Aligarh", "Mathura", "Agra"],
  },
  {
    name: "Haryana",
    primary: false,
    projects: "30+",
    response: "Within 3 days",
    cities: ["Sonipat", "Panipat", "Rohtak", "Karnal"],
  },
  {
    name: "Rajasthan",
    primary: false,
    projects: "15+",
    response: "Within 5 days",
    cities: ["Alwar", "Bhiwadi", "Jaipur"],
  },
];

const STATS = [
  { to: 4, suffix: "", label: "States Covered" },
  { to: 18, suffix: "+", label: "Cities Served" },
  { to: 150, suffix: "+", label: "Projects Delivered" },
];

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function ServiceArea() {
  const [regionIdx, setRegionIdx] = useState(0);
  const [selectedCity, setSelectedCity] = useState(REGIONS[0].cities[1]);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const active = q.length > 1;

  // Search auto-jumps to the matching region + city
  let match = null;
  if (active) {
    REGIONS.forEach((r, ri) =>
      r.cities.forEach((c) => {
        const lc = c.toLowerCase();
        if (!match && (lc.includes(q) || q.includes(lc))) match = { ri, city: c };
      })
    );
  }
  const notFound = active && !match;
  const shownIdx = match ? match.ri : regionIdx;
  const shownCity = match ? match.city : selectedCity;
  const region = REGIONS[shownIdx];

  const pickRegion = (i) => {
    setQuery("");
    setRegionIdx(i);
    setSelectedCity(REGIONS[i].cities[0]);
  };
  const pickCity = (c) => {
    setQuery("");
    setRegionIdx(shownIdx);
    setSelectedCity(c);
  };

  return (
    <section id="service-area" className="bg-[#FFFFFF]">
      <div className="px-5 py-14 lg:px-10 lg:py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[620px] text-center"
        >
          <p className="font-body flex items-center justify-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
            <span className="h-[2px] w-5 bg-[#FF8000]" />
            Service Area
            <span className="h-[2px] w-5 bg-[#FF8000]" />
          </p>
          <h2 className="font-heading mt-3 text-[30px] font-bold leading-[1.15] text-[#003B8E] sm:text-[34px]">
            Building Across Cities You Trust
          </h2>
          <p className="font-body mt-4 text-[15px] leading-[1.75] text-[#003B8E]/75">
            Pick a region or search your city to see how quickly we can start your project.
          </p>
        </motion.div>

        {/* Interactive explorer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-12 grid max-w-7xl overflow-hidden border border-[#003B8E]/15 lg:grid-cols-[360px_1fr] rounded-xl"
        >
          {/* LEFT: search + region tabs */}
          <div className="bg-[#002A66] px-5 py-8 sm:px-7">
            <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
              <span className="h-[2px] w-5 bg-[#FF8000]" />
              Find Your City
            </p>

            <div className="mt-4 flex items-center bg-[#FFFFFF] transition-shadow focus-within:ring-2 focus-within:ring-[#FF8000]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Search size={18} strokeWidth={1.8} color="#003B8E" />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your city"
                aria-label="Search your city to check coverage"
                className="font-body h-12 w-full bg-transparent text-[14px] font-semibold text-[#003B8E] outline-none placeholder:text-[#003B8E]/40"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="flex h-12 w-12 shrink-0 items-center justify-center transition-colors hover:bg-[#003B8E]/10"
                >
                  <X size={16} strokeWidth={2} color="#003B8E" />
                </button>
              )}
            </div>

            <div className="font-body mt-3 min-h-[22px] text-[13px] font-semibold text-[#FFFFFF]" aria-live="polite">
              {match && (
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={18} strokeWidth={2} color="#FF8000" />
                  Great news — we serve {match.city}!
                </p>
              )}
              {notFound && (
                <p className="flex items-center gap-2">
                  <XCircle size={18} strokeWidth={2} color="#FF8000" />
                  Not listed yet —{" "}
                  <a href="#contact" className="font-bold text-[#FF8000] underline underline-offset-2">
                    contact us
                  </a>
                </p>
              )}
            </div>

            <p className="font-body mt-6 text-[11px] font-bold uppercase tracking-[0.08em] text-[#FFFFFF]/50">
              Regions
            </p>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {REGIONS.map((r, i) => {
                const on = i === shownIdx;
                return (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => pickRegion(i)}
                    className={`group relative flex shrink-0 items-center gap-3 px-4 py-3.5 text-left transition-colors lg:shrink ${
                      on ? "bg-[#FFFFFF]" : "border border-[#FFFFFF]/15 hover:bg-[#FFFFFF]/10"
                    }`}
                  >
                    {on && <span className="absolute left-0 top-0 h-full w-[4px] bg-[#FF8000]" />}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                        on ? "border-[#003B8E]/25" : "border-[#FFFFFF]/30"
                      }`}
                    >
                      <MapPin size={18} strokeWidth={1.7} color={on ? "#003B8E" : "#FFFFFF"} />
                    </span>
                    <span className="flex-1">
                      <span
                        className={`font-heading block whitespace-nowrap text-[15px] font-bold leading-tight ${
                          on ? "text-[#003B8E]" : "text-[#FFFFFF]"
                        }`}
                      >
                        {r.name}
                      </span>
                      <span
                        className={`font-body text-[11.5px] font-semibold ${
                          on ? "text-[#003B8E]/60" : "text-[#FFFFFF]/60"
                        }`}
                      >
                        {r.cities.length} cities
                      </span>
                    </span>
                    {r.primary && (
                      <span className="font-body hidden bg-[#FF8000] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#FFFFFF] sm:block">
                        HQ
                      </span>
                    )}
                    <ChevronRight
                      size={16}
                      strokeWidth={2}
                      color={on ? "#FF8000" : "#FFFFFF"}
                      className="hidden transition-transform group-hover:translate-x-0.5 lg:block"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: region detail */}
          <div className="relative min-h-[460px] overflow-hidden bg-[#003B8E]">
            <img
              src="https://i.pinimg.com/736x/1f/ce/b8/1fceb8ec822dc14c6701355be602598e.jpg"
              alt="Mastervision Infra project sites across regions"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#003B8E]/90 via-[#003B8E]/80 to-[#003B8E]/55" />
            <div
              className="absolute right-0 top-0 h-[90px] w-[160px] bg-[#FF8000]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={shownIdx}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex h-full flex-col px-6 py-8 sm:px-10 sm:py-10"
              >
                <p className="font-body flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
                  <span className="h-[2px] w-5 bg-[#FF8000]" />
                  {region.primary ? "Headquarters Region" : "Service Region"}
                </p>
                <h3 className="font-heading mt-3 text-[30px] font-bold leading-tight text-[#FFFFFF] sm:text-[36px]">
                  {region.name}
                  <span className="ml-3 inline-block h-6 w-[3px] -skew-x-12 bg-[#FF8000] align-middle" />
                </h3>
                <p className="font-body mt-2 text-[14px] text-[#FFFFFF]/75">
                  Tap a city to see details for your location.
                </p>

                {/* City chips */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {region.cities.map((city, i) => {
                    const on = city === shownCity;
                    return (
                      <motion.button
                        key={city}
                        type="button"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                        onClick={() => pickCity(city)}
                        className={`font-body flex items-center gap-2 px-4 py-2.5 text-[13px] font-bold transition-colors ${
                          on
                            ? "bg-[#FF8000] text-[#FFFFFF]"
                            : "border border-[#FFFFFF]/35 text-[#FFFFFF] hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10"
                        }`}
                      >
                        <MapPin size={14} strokeWidth={2} />
                        {city}
                      </motion.button>
                    );
                  })}
                </div>

                {/* City detail card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={shownCity}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="relative mt-auto bg-[#FFFFFF] px-6 py-6 pt-6 sm:px-8"
                    style={{ marginTop: "2rem" }}
                  >
                    <span className="absolute left-0 top-0 h-full w-[4px] bg-[#FF8000]" />
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#003B8E]/25">
                          <CheckCircle2 size={22} strokeWidth={1.7} color="#FF8000" />
                        </span>
                        <div>
                          <p className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#003B8E]/55">
                            Service Available
                          </p>
                          <p className="font-heading text-[22px] font-bold leading-tight text-[#003B8E]">
                            {shownCity}
                          </p>
                        </div>
                      </div>

                      <ul className="flex gap-6 sm:gap-8">
                        <li className="flex items-center gap-2.5">
                          <Building2 size={18} strokeWidth={1.7} color="#003B8E" />
                          <span>
                            <span className="font-heading block text-[17px] font-bold leading-none text-[#003B8E]">
                              {region.projects}
                            </span>
                            <span className="font-body text-[11px] font-semibold text-[#003B8E]/60">
                              Regional projects
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Clock size={18} strokeWidth={1.7} color="#003B8E" />
                          <span>
                            <span className="font-heading block text-[17px] font-bold leading-none text-[#003B8E]">
                              {region.response}
                            </span>
                            <span className="font-body text-[11px] font-semibold text-[#003B8E]/60">
                              Site visit
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      className="font-body group mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#003B8E] px-6 py-3.5 text-[13px] font-bold tracking-[0.04em] text-[#FFFFFF] transition-colors hover:bg-[#FF8000] sm:w-auto"
                    >
                      Get a Quote for {shownCity}
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-6 grid max-w-7xl grid-cols-3 border border-[#003B8E]/15 bg-[#003B8E]/[0.04]"
        >
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`px-3 py-6 text-center ${i > 0 ? "border-l border-[#003B8E]/15" : ""}`}
            >
              <p className="font-heading text-[28px] font-bold leading-none text-[#003B8E] sm:text-[38px]">
                <CountUp to={s.to} suffix={s.suffix} />
                <span className="ml-2 inline-block h-5 w-[3px] -skew-x-12 bg-[#FF8000] align-middle sm:h-7" />
              </p>
              <p className="font-body mt-2 text-[11.5px] font-semibold text-[#003B8E]/75 sm:text-[13px]">
                {s.label}
              </p>
            </li>
          ))}
        </motion.ul>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto mt-6 flex max-w-7xl flex-col items-start justify-between gap-5 overflow-hidden bg-[#003B8E]/[0.04] px-7 py-8 sm:flex-row sm:items-center lg:px-10"
        >
          <span className="absolute left-0 top-0 h-full w-[4px] bg-[#FF8000]" />
          <div>
            <h4 className="font-heading text-[20px] font-bold text-[#003B8E]">
              Don&apos;t see your location?
            </h4>
            <p className="font-body mt-1 text-[14px] leading-[1.7] text-[#003B8E]/75">
              We take on select projects outside these regions — tell us about yours.
            </p>
          </div>
          <a
            href="#contact"
            className="font-body group inline-flex shrink-0 items-center gap-2 bg-[#003B8E] px-6 py-3.5 text-[13px] font-bold tracking-[0.04em] text-[#FFFFFF] transition-colors hover:bg-[#FF8000]"
          >
            Request a Site Visit
            <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}