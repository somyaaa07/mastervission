import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "../constants/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  // Active link is derived from the current route (and hash on the home page)
  const isActive = (href) => {
    if (href === "/") return pathname === "/" && !hash;
    if (href.startsWith("/#")) return pathname === "/" && hash === href.slice(1);
    return pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#FFFFFF] transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 6px 24px rgba(0,59,142,0.08)" : "none" }}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 lg:h-[84px] lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center" aria-label="Mastervision Infra LLP – Home">
          <img
            src="/logo.png"
            alt="Mastervision Infra LLP"
            className="h-12 w-auto object-contain lg:h-[60px]"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  to={link.href}
                  className="font-body py-2 text-[14.5px] font-semibold transition-colors duration-200 hover:text-[#FF8000]"
                  style={{ color: active ? "#FF8000" : "#003B8E" }}
                >
                  {link.label}
                </Link>
                <span
                  className="absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-[#FF8000] transition-all duration-300"
                  style={{ width: active ? "100%" : "0%" }}
                />
              </li>
            );
          })}
        </ul>

        {/* Desktop right */}
        <div className="hidden items-center gap-6 lg:flex">
          <a href={PHONE_HREF} className="flex items-center gap-3">
            <Phone size={22} strokeWidth={1.8} color="#FF8000" />
            <span className="leading-tight">
              <span className="font-body block text-[14.5px] font-bold text-[#003B8E]">{PHONE_DISPLAY}</span>
              <span className="font-body block text-[11.5px] font-medium text-[#003B8E]/60">Let&apos;s Build Together</span>
            </span>
          </a>
          <Link
            to="/contact"
            className="font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-5 py-3 text-[14px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-md text-[#003B8E] lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#003B8E]/10 bg-[#FFFFFF] lg:hidden"
          >
            <ul className="flex flex-col px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body block border-b border-[#003B8E]/10 py-3.5 text-[15px] font-semibold"
                    style={{ color: isActive(link.href) ? "#FF8000" : "#003B8E" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 px-5 pb-6">
              <a href={PHONE_HREF} className="font-body flex items-center gap-3 text-[15px] font-bold text-[#003B8E]">
                <Phone size={20} color="#FF8000" />
                {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="font-body inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8000] px-5 py-3.5 text-[15px] font-semibold text-[#FFFFFF]"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}