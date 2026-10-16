import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Inner-page banner: full-bleed photo (or looping video), brand-blue
 * reading overlay on the left, breadcrumb, headline, copy, actions and an
 * optional strip of key facts along the bottom edge.
 */
export default function PageHero({ image, video, imageAlt = "", position = "object-[70%_center]", crumb, title, text, actions, facts }) {
  const reduce = useReducedMotion();
  const enter = (d) =>
    reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d, ease: "easeOut" } };

  return (
    <section className="relative isolate overflow-hidden bg-[#003B8E]">
      {video ? (
        <video
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className={`absolute inset-0 -z-20 h-full w-full object-cover ${position}`}
        />
      ) : (
        <img src={image} alt={imageAlt} fetchpriority="high" className={`absolute inset-0 -z-20 h-full w-full object-cover ${position}`} />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #003B8E 0%, rgba(0,59,142,0.93) 32%, rgba(0,59,142,0.55) 60%, rgba(0,59,142,0.12) 100%), linear-gradient(180deg, rgba(0,42,102,0) 60%, rgba(0,42,102,0.7) 100%)",
        }}
      />

      <div className="mx-auto flex min-h-[420px] max-w-[1280px] flex-col justify-center px-5 pb-12 pt-10 sm:min-h-[460px] lg:min-h-[520px] lg:px-8">
        <motion.nav {...enter(0)} aria-label="Breadcrumb">
          <ol className="font-body flex items-center gap-2 text-[13px] font-medium text-[#FFFFFF]/85">
            <li>
              <Link to="/" className="transition-colors hover:text-[#FF8000]">Home</Link>
            </li>
            <ChevronRight size={14} aria-hidden="true" />
            <li aria-current="page" className="font-semibold text-[#FFFFFF]">{crumb}</li>
          </ol>
        </motion.nav>

        <div className="mt-8 max-w-[640px]">
          <motion.h1 {...enter(0.08)} className="font-heading text-[42px] font-bold leading-[1.02] text-[#FFFFFF] sm:text-[58px] lg:text-[68px]">
            {title}
          </motion.h1>
          <motion.p {...enter(0.16)} className="font-body mt-5 max-w-[540px] text-[16px] leading-[1.7] text-[#FFFFFF]/90 sm:text-[17px]">
            {text}
          </motion.p>
          {actions && (
            <motion.div {...enter(0.24)} className="mt-8 flex flex-wrap gap-3">
              {actions}
            </motion.div>
          )}
        </div>

        {facts && (
          <ul className="mt-10 grid max-w-[640px] grid-cols-3 border-t border-[#FFFFFF]/25 pt-5">
            {facts.map((f, i) => (
              <li key={f} className={`font-body px-3 text-[13px] font-semibold text-[#FFFFFF] sm:px-6 sm:text-[14px] ${i === 0 ? "pl-0" : "border-l border-[#FFFFFF]/25"}`}>
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div aria-hidden="true" className="h-1 w-full bg-[#FF8000]" />
    </section>
  );
}

/* Matching button styles so every hero uses the same actions */
export const heroBtnPrimary =
  "font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[15px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]";
export const heroBtnGhost =
  "font-body inline-flex items-center gap-2 rounded-md border border-[#FFFFFF]/70 px-6 py-3.5 text-[15px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#003B8E]";
