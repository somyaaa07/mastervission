import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";

const TYPES = ["Villa", "Apartment", "Renovation"];
const HIGHLIGHTS = ["Quality workmanship", "Timely delivery", "Transparent process"];
const STATS = [
  { value: "150+", label: "Projects delivered" },
  { value: "18+", label: "Cities served" },
  { value: "100%", label: "Client satisfaction" },
];

function QuoteBar({ onSubmit }) {
  const [type, setType] = useState("Villa");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "").slice(-10);
    if (digits.length !== 10) return setError("Enter a 10-digit mobile number.");
    setError("");
    setSent(true);
    onSubmit?.({ type, phone: digits });
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-[0_30px_60px_-24px_rgba(0,20,60,0.55)] sm:p-5">
      {sent ? (
        <p role="status" className="font-body flex items-center justify-center gap-3 py-3 text-[15px] font-semibold text-[#0B1B3A]">
          <CheckCircle2 size={22} color="#FF8000" /> Thanks! We'll call you within one working day.
        </p>
      ) : (
        <form onSubmit={submit} noValidate className="flex flex-col gap-4 lg:flex-row lg:items-end">
          <fieldset className="lg:flex-1">
            <legend className="font-body mb-2 text-[13px] font-semibold text-[#0B1B3A]">What are you building?</legend>
            <div className="grid grid-cols-3 gap-1 rounded-md bg-[#EEF2F9] p-1">
              {TYPES.map((t) => (
                <label
                  key={t}
                  className={`font-body cursor-pointer rounded-[5px] py-2.5 text-center text-[13.5px] font-semibold transition-colors focus-within:ring-2 focus-within:ring-[#003B8E] ${
                    type === t ? "bg-[#003B8E] text-white shadow" : "text-[#475569] hover:text-[#003B8E]"
                  }`}
                >
                  <input type="radio" name="type" className="sr-only" checked={type === t} onChange={() => setType(t)} />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="lg:flex-1">
            <label htmlFor="hero-phone" className="font-body mb-2 block text-[13px] font-semibold text-[#0B1B3A]">
              Mobile number
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" aria-hidden="true" />
              <input
                id="hero-phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-invalid={!!error}
                aria-describedby={error ? "hero-err" : undefined}
                className={`font-body w-full rounded-md border-2 bg-white py-3 pl-10 pr-3 text-[15px] text-[#0B1B3A] outline-none focus:border-[#003B8E] ${
                  error ? "border-[#DC2626]" : "border-[#E2E8F0]"
                }`}
              />
            </div>
            {error && <p id="hero-err" role="alert" className="font-body mt-1 text-[12.5px] text-[#DC2626]">{error}</p>}
          </div>

          <button
            type="submit"
            className="font-body group inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8000] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#E56F00] "
          >
            Get a free quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function Hero({ onQuoteSubmit }) {
  const reduce = useReducedMotion();
  const enter = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: "easeOut" } };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#003B8E]">
      {/* Photographic backdrop: the only large motion on the page, runs once on load */}
      <img
        src="/images/about-hero.jpg"
        alt="Site engineers reviewing plans beside a building under construction at sunset"
        fetchpriority="high"
        className={`absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] ${reduce ? "" : "hero-settle"}`}
      />
      {/* Readability overlay built from the brand blue */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #003B8E 0%, rgba(0,59,142,0.92) 30%, rgba(0,59,142,0.55) 58%, rgba(0,59,142,0.15) 100%), linear-gradient(180deg, rgba(0,42,102,0) 55%, rgba(0,42,102,0.85) 100%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-14 sm:pt-20 lg:px-8 lg:pb-12 lg:pt-28">
        <div className="max-w-[640px]">
          <motion.p
            {...enter(0)}
            className="font-body inline-flex items-center gap-2 rounded-md border border-[#FFFFFF]/25 bg-[#FFFFFF]/10 px-3 py-1.5 text-[13px] font-semibold text-[#FFFFFF] backdrop-blur-sm"
          >
            <ShieldCheck size={16} color="#FF8000" aria-hidden="true" />
            Quality construction, on time
          </motion.p>

          <motion.h1
            {...enter(0.08)}
            className="font-heading mt-5 text-[38px] font-bold leading-[1.02] text-[#FFFFFF] sm:text-[50px] lg:text-[66px]"
          >
            Homes built to last
          </motion.h1>

          <motion.p {...enter(0.18)} className="font-body mt-6 max-w-[540px] text-[14px] leading-[1.7] text-[#FFFFFF]/90 sm:text-[14.5px]">
            Mastervision Infra LLP builds villas, apartments and township homes on schedule, with a clear
            cost and progress update at every stage.
          </motion.p>

          <motion.ul {...enter(0.26)} className="mt-6 hidden flex-row flex-wrap gap-x-6 gap-y-2 sm:flex">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="font-body flex items-center gap-2 text-[14px] font-semibold text-[#FFFFFF]">
                <CheckCircle2 size={17} color="#FF8000" aria-hidden="true" />
                {h}
              </li>
            ))}
          </motion.ul>

          <motion.div {...enter(0.34)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#hero-quote"
              className="font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[15px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
            >
              Get a free quote
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="font-body inline-flex items-center rounded-md border border-[#FFFFFF]/70 px-6 py-3.5 text-[15px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#003B8E]"
            >
              See our completed projects
            </a>
          </motion.div>
        </div>

        {/* Quote bar sits on the photograph so the form is the first action after the headline */}
        <motion.div {...enter(0.45)} id="hero-quote" className="mt-12 scroll-mt-28 lg:mt-16">
          <QuoteBar onSubmit={onQuoteSubmit} />
        </motion.div>

    
      </div>
    </section>
  );
}
