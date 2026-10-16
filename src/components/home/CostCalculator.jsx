import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calculator,
  Check,
  Home,
  Landmark,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

const PACKAGES = [
  { id: "basic", name: "Basic", rate: 1650, icon: Home },
  { id: "standard", name: "Standard", rate: 1950, icon: Building2 },
  { id: "premium", name: "Premium", rate: 2450, icon: Landmark },
];

const ADDONS = [
  { id: "interior", label: "Interior Design", rate: 450 },
  { id: "landscape", label: "Landscaping", rate: 120 },
  { id: "solar", label: "Solar Ready Setup", rate: 90 },
  { id: "smart", label: "Smart-Home Wiring", rate: 150 },
];

const formatINR = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function CostCalculator() {
  const [pkg, setPkg] = useState("standard");
  const [area, setArea] = useState(1500);
  const [floors, setFloors] = useState(1);
  const [addons, setAddons] = useState([]);

  const toggleAddon = (id) =>
    setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));

  const result = useMemo(() => {
    const p = PACKAGES.find((x) => x.id === pkg);
    const totalArea = area * floors;
    const base = totalArea * p.rate;
    const addonsCost = ADDONS.filter((a) => addons.includes(a.id)).reduce(
      (sum, a) => sum + a.rate * totalArea,
      0
    );
    const total = base + addonsCost;
    return { totalArea, base, addonsCost, total, low: total * 0.95, high: total * 1.08 };
  }, [pkg, area, floors, addons]);

  const pct = ((area - 500) / (10000 - 500)) * 100;

  return (
    <section id="calculator" className="bg-[#FFFFFF]">
      <div className="px-5 py-14 lg:px-10 lg:py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[620px] text-center"
        >
          <p className="font-body flex items-center justify-center gap-3 text-[13px] font-semibold text-[#FF8000]">
            <span aria-hidden="true" className="h-[3px] w-8 bg-[#FF8000]" />
            Cost Calculator
            <span className="h-[2px] w-5 bg-[#FF8000]" />
          </p>
          <h2 className="font-heading mt-3 text-[34px] font-bold leading-[1.05] text-[#003B8E] sm:text-[44px] lg:text-[48px]">
            Estimate Your Home Construction Cost
          </h2>
          <p className="font-body mt-4 text-[15px] leading-[1.75] text-[#003B8E]/75">
            Select your requirements and get an instant budget estimate for your home.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-7xl mx-auto gap-8 lg:grid-cols-[1fr_380px]">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border border-[#003B8E]/15 bg-[#FFFFFF] px-6 py-8 sm:px-9 rounded-md"
          >
            {/* Package */}
            <div>
              <Label>Package</Label>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {PACKAGES.map(({ id, name, rate, icon: Icon }) => {
                  const active = pkg === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPkg(id)}
                      className={`flex items-center gap-3 px-4 py-3.5 text-left transition-colors ${
                        active
                          ? "border border-[#003B8E] bg-[#003B8E] rounded-md"
                          : "border border-[#003B8E]/25 hover:border-[#003B8E] rounded-md"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                          active ? "border-[#FFFFFF]/30" : "border-[#003B8E]/25"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.6} color={active ? "#FF8000" : "#003B8E"} />
                      </span>
                      <span>
                        <span
                          className={`font-heading block text-[15px] font-bold leading-tight ${
                            active ? "text-[#FFFFFF]" : "text-[#003B8E]"
                          }`}
                        >
                          {name}
                        </span>
                        <span
                          className={`font-body text-[12px] font-semibold  ${
                            active ? "text-[#FFFFFF]/75" : "text-[#003B8E]/70 "
                          }`}
                        >
                          {formatINR(rate)} / sq.ft
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Area */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <Label>Built-up Area (per floor)</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={500}
                    max={10000}
                    value={area}
                    onChange={(e) =>
                      setArea(Math.min(10000, Math.max(500, Number(e.target.value) || 500)))
                    }
                    className="font-body w-24 border border-[#003B8E]/25 px-3 py-1.5 text-right text-[14px] font-bold text-[#003B8E] outline-none focus:border-[#003B8E] rounded-md"
                  />
                  <span className="font-body text-[12px] font-semibold text-[#003B8E]/70 ">sq.ft</span>
                </div>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={50}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="mt-4 h-[6px] w-full cursor-pointer appearance-none rounded-full accent-[#FF8000]"
                style={{
                  background: `linear-gradient(to right, #FF8000 ${pct}%, rgba(0,59,142,0.15) ${pct}%)`,
                }}
              />
              <div className="font-body mt-2 flex justify-between text-[11px] font-semibold text-[#003B8E]/70">
                <span>500</span>
                <span>10,000</span>
              </div>
            </div>

            {/* Floors */}
            <div className="mt-8 flex items-center justify-between">
              <Label>Number of Floors</Label>
              <div className="flex items-center border border-[#003B8E]/25">
                <button
                  type="button"
                  onClick={() => setFloors((f) => Math.max(1, f - 1))}
                  className="font-body h-10 w-10 text-[18px] font-bold text-[#003B8E] transition-colors hover:bg-[#003B8E] hover:text-[#FFFFFF] rounded-md"
                  aria-label="Decrease floors"
                >
                  −
                </button>
                <span className="font-heading w-12 text-center text-[16px] font-bold text-[#003B8E] ">
                  {floors}
                </span>
                <button
                  type="button"
                  onClick={() => setFloors((f) => Math.min(10, f + 1))}
                  className="font-body h-10 w-10 text-[18px] font-bold text-[#003B8E] transition-colors hover:bg-[#003B8E] hover:text-[#FFFFFF] "
                  aria-label="Increase floors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add-ons */}
            <div className="mt-8">
              <Label>Add-ons</Label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {ADDONS.map((a) => {
                  const on = addons.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => toggleAddon(a.id)}
                      className={`flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                        on
                          ? "border border-[#003B8E] bg-[#003B8E]/[0.05] rounded-md"
                          : "border border-[#003B8E]/25 hover:border-[#003B8E] rounded-md"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          on ? "bg-[#FF8000]" : "border border-[#003B8E]/30"
                        }`}
                      >
                        {on && <Check size={12} strokeWidth={2.6} color="#FFFFFF" />}
                      </span>
                      <span className="font-body flex-1 text-[13px] font-semibold text-[#003B8E]">
                        {a.label}
                      </span>
                      <span className="font-body text-[11.5px] font-semibold text-[#003B8E]/70">
                        +{formatINR(a.rate)}/sq.ft
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Result */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="relative flex flex-col self-start overflow-hidden bg-[#003B8E] shadow-[0_20px_50px_-15px_rgba(0,59,142,0.5)] lg:sticky lg:top-24 rounded-md"
          >
            <div
              className="absolute right-0 top-0 h-[70px] w-[110px] bg-[#FF8000]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            />
            <Calculator
              size={18}
              strokeWidth={2}
              color="#FFFFFF"
              className="absolute right-3 top-3"
            />

            <div className="px-7 pb-8 pt-9">
              <p className="font-body flex items-center gap-3 text-[13px] font-semibold text-[#FF8000]">
                <span aria-hidden="true" className="h-[3px] w-8 bg-[#FF8000]" />
                Estimated Cost
              </p>

              <div className="mt-4 flex items-end gap-2">
                <motion.span
                  key={Math.round(result.total)}
                  initial={{ opacity: 0.4, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-heading text-[36px] font-bold leading-none text-[#FFFFFF] sm:text-[40px]"
                >
                  {formatINR(result.total)}
                </motion.span>
              </div>
              <p className="font-body mt-2 text-[12.5px] font-semibold text-[#FFFFFF]/70">
                Range: {formatINR(result.low)} – {formatINR(result.high)}
              </p>

              <div className="my-6 h-px w-full bg-[#FFFFFF]/20" />

              <ul className="flex flex-col gap-3">
                <Row label="Total built-up area" value={`${result.totalArea.toLocaleString("en-IN")} sq.ft`} icon />
                <Row label="Base construction" value={formatINR(result.base)} />
                {result.addonsCost > 0 && <Row label="Add-ons" value={formatINR(result.addonsCost)} />}
              </ul>

              <Link
                to="/contact"
                className="font-body group mt-8 flex items-center justify-center gap-2 bg-[#FF8000] px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF] hover:text-[#003B8E]"
              >
                Get Detailed Quote
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <p className="font-body mt-4 text-center text-[11px] leading-snug text-[#FFFFFF]/80">
                * Indicative estimate. Final cost depends on site conditions, design and material selection.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Label({ children }) {
  return (
    <p className="font-body text-[13px] font-semibold text-[#003B8E]">
      {children}
    </p>
  );
}

function Row({ label, value, icon }) {
  return (
    <li className="flex items-center justify-between gap-4">
      <span className="font-body flex items-center gap-2 text-[13px] font-semibold text-[#FFFFFF]/75">
        {icon && <Layers size={14} strokeWidth={1.8} color="#FF8000" />}
        {label}
      </span>
      <span className="font-body text-[13px] font-bold text-[#FFFFFF]">{value}</span>
    </li>
  );
}