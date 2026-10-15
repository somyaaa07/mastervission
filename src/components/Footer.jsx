import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { NAV_LINKS } from "../constants/site";

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#003B8E]">
      <div className="mx-auto max-w-[1280px] px-5 pt-10 lg:px-8">
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between">
          <Link to="/" aria-label="Mastervision Infra LLP – Home" className="rounded-md bg-[#FFFFFF] px-3 py-2">
            <img src="/images/logo.png" alt="Mastervision Infra LLP" className="h-11 w-auto object-contain" />
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="font-body text-[13px] font-medium text-[#FFFFFF]/90 transition-colors duration-200 hover:text-[#FF8000]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFFFFF]/15 text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FF8000]"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#FFFFFF]/20 py-5 sm:flex-row">
          <p className="font-body text-[12px] text-[#FFFFFF]/80">
            &copy; {new Date().getFullYear()} Mastervision Infra LLP. All Rights Reserved.
          </p>
          <p className="font-body flex items-center gap-3 text-[12px] font-medium text-[#FFFFFF]/90">
            Build <span className="h-3 w-px bg-[#FFFFFF]/40" /> Innovate <span className="h-3 w-px bg-[#FFFFFF]/40" /> Grow
          </p>
        </div>
      </div>
    </footer>
  );
}