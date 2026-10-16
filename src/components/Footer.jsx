
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";
import { NAV_LINKS } from "../constants/site";

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-4 border-[#FF8000] bg-[#003B8E] font-body text-white">

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
       

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              aria-label="MasterVision Infra LLP home"
              className="inline-flex rounded-md bg-white p-3"
            >
              <img
                src="/footer-logo.png"
                alt="MasterVision Infra LLP"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/80">
              MasterVision Infra LLP is committed to building quality-driven
              infrastructure through thoughtful planning, reliable execution,
              and a vision for sustainable growth.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white/75 transition-all duration-300 hover:border-[#FF8000] hover:bg-[#FF8000] hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-heading mb-6 text-[19px] font-semibold tracking-wide">
              Quick links
            </h3>

            <ul className="space-y-4">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:text-[#FF8000]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#FF8000] opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-heading mb-6 text-[19px] font-semibold tracking-wide">
              What we do
            </h3>

            <ul className="space-y-4 text-sm text-white/80">
              <li>Infrastructure Development</li>
              <li>Construction Solutions</li>
              <li>Project Management</li>
              <li>Engineering Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-heading mb-6 text-[19px] font-semibold tracking-wide">
              Get in touch
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:info@mastervisioninfra.com"
                className="group flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-[#FF8000]"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#FF8000]"
                />
                <span className="break-all">
                  info@mastervisioninfra.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/80">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#FF8000]"
                />
                <span>
                  UGA-47, Galaxy Diamond Plaza, Haibatpur, Sector 4, Greater Noida, Uttar Pradesh 201016, India
                </span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF8000] transition-colors hover:text-white"
              >
                Contact our team
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-white/70">
            © {year} MasterVision Infra LLP. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/70">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/20" />
            <Link
              to="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Scroll to top"
            className="flex h-10 w-10 items-center justify-center self-start rounded-md border border-white/25 transition-all hover:border-[#FF8000] hover:bg-[#FF8000] sm:self-auto"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}