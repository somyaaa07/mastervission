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
import { Link } from "react-router-dom";
import SafeImage from "../ui/SafeImage";

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
    <section id="service-area" className="overflow-x-clip bg-[#FFFFFF]">
      <div className="mx-auto px-4 py-10 min-[480px]:px-5 sm:py-14 md:px-8 lg:px-10 lg:py-20 2xl:max-w-[1600px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[620px] text-center"
        >
          <p className="font-body flex items-center justify-center gap-2 text-[12px] font-semibold text-[#FF8000] sm:gap-3 sm:text-[13px]">
            <span aria-hidden="true" className="h-[3px] w-6 bg-[#FF8000] sm:w-8" />
            Service Area
            <span className="h-[2px] w-4 bg-[#FF8000] sm:w-5" />
          </p>
          <h2 className="font-heading mt-3 text-[28px] font-bold leading-[1.1] text-[#003B8E] min-[400px]:text-[32px] sm:text-[40px] sm:leading-[1.05] lg:text-[48px]">
            Building Across Cities You Trust
          </h2>
          <p className="font-body mt-3 text-[14px] leading-[1.7] text-[#003B8E]/75 sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
            Pick a region or search your city to see how quickly we can start your project.
          </p>
        </motion.div>

        {/* Interactive explorer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-8 grid max-w-7xl grid-cols-1 overflow-hidden rounded-md border border-[#003B8E]/15 sm:mt-10 lg:mt-12 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)] 2xl:max-w-[1440px]"
        >
          {/* LEFT: search + region tabs */}
          <div className="min-w-0 bg-[#002A66] px-4 py-6 min-[480px]:px-5 sm:px-7 sm:py-8 md:px-5 lg:px-7">
            <p className="font-body flex items-center gap-3 text-[12px] font-semibold text-[#FF8000] sm:text-[13px]">
              <span aria-hidden="true" className="h-[3px] w-6 bg-[#FF8000] sm:w-8" />
              Find Your City
            </p>

            <div className="mt-4 flex items-center bg-[#FFFFFF] transition-shadow focus-within:ring-2 focus-within:ring-[#FF8000]">
              <span className="flex h-12 w-11 shrink-0 items-center justify-center sm:w-12">
                <Search size={18} strokeWidth={1.8} color="#003B8E" />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your city"
                aria-label="Search your city to check coverage"
                className="font-body h-12 min-w-0 flex-1 bg-transparent text-[16px] font-semibold text-[#003B8E] outline-none placeholder:text-[#003B8E]/70 sm:text-[14px]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="flex h-12 w-11 shrink-0 items-center justify-center transition-colors hover:bg-[#003B8E]/10 sm:w-12"
                >
                  <X size={16} strokeWidth={2} color="#003B8E" />
                </button>
              )}
            </div>

            <div
              className="font-body mt-3 min-h-[22px] text-[13px] font-semibold text-[#FFFFFF]"
              aria-live="polite"
            >
              {match && (
                <p className="flex items-start gap-2">
                  <CheckCircle2 size={18} strokeWidth={2} color="#FF8000" className="mt-px shrink-0" />
                  <span>Great news — we serve {match.city}!</span>
                </p>
              )}
              {notFound && (
                <p className="flex items-start gap-2">
                  <XCircle size={18} strokeWidth={2} color="#FF8000" className="mt-px shrink-0" />
                  <span>
                    Not listed yet —{" "}
                    <Link to="/contact" className="font-bold text-[#FF8000] underline underline-offset-2">
                      contact us
                    </Link>
                  </span>
                </p>
              )}
            </div>

            <p className="font-body mt-5 text-[12px] font-semibold text-[#FFFFFF]/80 sm:mt-6">
              Regions
            </p>
            <div className="-mx-4 mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 min-[480px]:-mx-5 min-[480px]:px-5 sm:-mx-7 sm:px-7 md:mx-0 md:flex-col md:snap-none md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {REGIONS.map((r, i) => {
                const on = i === shownIdx;
                return (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => pickRegion(i)}
                    aria-pressed={on}
                    className={`group relative flex min-h-[56px] shrink-0 snap-start items-center gap-2.5 px-3 py-3 text-left transition-colors sm:gap-3 sm:px-4 sm:py-3.5 md:shrink md:gap-2.5 md:px-3 lg:gap-3 lg:px-4 ${
                      on ? "bg-[#FFFFFF]" : "border border-[#FFFFFF]/15 hover:bg-[#FFFFFF]/10"
                    }`}
                  >
                    {on && <span className="absolute left-0 top-0 h-full w-[4px] bg-[#FF8000]" />}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10 ${
                        on ? "border-[#003B8E]/25" : "border-[#FFFFFF]/30"
                      }`}
                    >
                      <MapPin size={17} strokeWidth={1.7} color={on ? "#003B8E" : "#FFFFFF"} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`font-heading block whitespace-nowrap text-[14px] font-bold leading-tight sm:text-[15px] ${
                          on ? "text-[#003B8E]" : "text-[#FFFFFF]"
                        }`}
                      >
                        {r.name}
                      </span>
                      <span
                        className={`font-body text-[11.5px] font-semibold ${
                          on ? "text-[#003B8E]/70" : "text-[#FFFFFF]/80"
                        }`}
                      >
                        {r.cities.length} cities
                      </span>
                    </span>
                    {r.primary && (
                      <span className="font-body bg-[#FF8000] px-2 py-0.5 text-[11px] font-semibold text-[#FFFFFF] sm:text-[12px]">
                        HQ
                      </span>
                    )}
                    <ChevronRight
                      size={16}
                      strokeWidth={2}
                      color={on ? "#FF8000" : "#FFFFFF"}
                      className="hidden shrink-0 transition-transform group-hover:translate-x-0.5 md:block"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: region detail */}
          <div className="relative flex min-h-[440px] min-w-0 flex-col overflow-hidden bg-[#003B8E] sm:min-h-[480px] md:min-h-[520px]">
            <SafeImage
              src="https://i.pinimg.com/736x/06/98/26/069826a212aa1bceea90dfbb6413e19b.jpg"
              fallback="/images/about-site.jpg"
              alt="Mastervision Infra project sites across regions"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#003B8E]/90 via-[#003B8E]/80 to-[#003B8E]/55" />
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-[56px] w-[100px] bg-[#FF8000] sm:h-[90px] sm:w-[160px]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={shownIdx}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex flex-1 flex-col px-4 py-6 min-[480px]:px-5 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
              >
                <p className="font-body flex items-center gap-3 text-[12px] font-semibold text-[#FF8000] sm:text-[13px]">
                  <span aria-hidden="true" className="h-[3px] w-6 bg-[#FF8000] sm:w-8" />
                  {region.primary ? "Headquarters Region" : "Service Region"}
                </p>
                <h3 className="font-heading mt-3 break-words text-[26px] font-bold leading-tight text-[#FFFFFF] min-[400px]:text-[30px] sm:text-[38px] lg:text-[48px]">
                  {region.name}
                </h3>
                <p className="font-body mt-2 text-[13px] text-[#FFFFFF]/75 sm:text-[14px]">
                  Tap a city to see details for your location.
                </p>

                {/* City chips */}
                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
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
                        aria-pressed={on}
                        className={`font-body flex min-h-[44px] items-center gap-1.5 px-3 py-2 text-[12.5px] font-bold transition-colors sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[13px] ${
                          on
                            ? "bg-[#FF8000] text-[#FFFFFF]"
                            : "border border-[#FFFFFF]/35 text-[#FFFFFF] hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10"
                        }`}
                      >
                        <MapPin size={14} strokeWidth={2} className="shrink-0" />
                        {city}
                      </motion.button>
                    );
                  })}
                </div>

                {/* City detail card */}
                <div className="mt-auto pt-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={shownCity}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="relative bg-[#FFFFFF] px-4 py-5 min-[480px]:px-5 sm:px-8 sm:py-6"
                    >
                      <span className="absolute left-0 top-0 h-full w-[4px] bg-[#FF8000]" />
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#003B8E]/25 sm:h-12 sm:w-12">
                            <CheckCircle2 size={22} strokeWidth={1.7} color="#FF8000" />
                          </span>
                          <div className="min-w-0">
                            <p className="font-body text-[12px] font-semibold text-[#003B8E]/70">
                              Service Available
                            </p>
                            <p className="font-heading break-words text-[20px] font-bold leading-tight text-[#003B8E] sm:text-[22px]">
                              {shownCity}
                            </p>
                          </div>
                        </div>

                        <ul className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 min-[400px]:gap-6 lg:flex lg:gap-8">
                          <li className="flex items-center gap-2.5">
                            <Building2 size={18} strokeWidth={1.7} color="#003B8E" className="shrink-0" />
                            <span>
                              <span className="font-heading block text-[16px] font-bold leading-none text-[#003B8E] sm:text-[17px]">
                                {region.projects}
                              </span>
                              <span className="font-body text-[11px] font-semibold text-[#003B8E]/70">
                                Regional projects
                              </span>
                            </span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Clock size={18} strokeWidth={1.7} color="#003B8E" className="shrink-0" />
                            <span>
                              <span className="font-heading block text-[16px] font-bold leading-none text-[#003B8E] sm:text-[17px]">
                                {region.response}
                              </span>
                              <span className="font-body text-[11px] font-semibold text-[#003B8E]/70">
                                Site visit
                              </span>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        className="font-body group mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#003B8E] px-5 py-3 text-center text-[13px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#FF8000] sm:w-auto sm:px-6 sm:py-3.5"
                      >
                        <span className="min-w-0 break-words">Get a Quote for {shownCity}</span>
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          className="shrink-0 transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
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
          className="mx-auto mt-4 grid max-w-7xl grid-cols-3 border border-[#003B8E]/15 bg-[#003B8E]/[0.04] sm:mt-6 2xl:max-w-[1440px]"
        >
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`px-2 py-5 text-center sm:px-3 sm:py-6 ${i > 0 ? "border-l border-[#003B8E]/15" : ""}`}
            >
              <p className="font-heading text-[24px] font-bold leading-none text-[#003B8E] min-[400px]:text-[28px] sm:text-[38px]">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <p className="font-body mt-2 text-[11px] font-semibold leading-tight text-[#003B8E]/75 sm:text-[13px]">
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
          className="relative mx-auto mt-4 flex max-w-7xl flex-col items-stretch justify-between gap-5 overflow-hidden bg-[#003B8E]/[0.04] px-5 py-6 sm:mt-6 sm:flex-row sm:items-center sm:px-7 sm:py-8 lg:px-10 2xl:max-w-[1440px]"
        >
          <span className="absolute left-0 top-0 h-full w-[4px] bg-[#FF8000]" />
          <div className="min-w-0">
            <h4 className="font-heading text-[18px] font-bold text-[#003B8E] sm:text-[20px]">
              Don&apos;t see your location?
            </h4>
            <p className="font-body mt-1 text-[13.5px] leading-[1.7] text-[#003B8E]/75 sm:text-[14px]">
              We take on select projects outside these regions — tell us about yours.
            </p>
          </div>
          <Link
            to="/contact"
            className="font-body group inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 bg-[#003B8E] px-6 py-3.5 text-[13px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#FF8000] sm:w-auto"
          >
            Request a Site Visit
            <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}