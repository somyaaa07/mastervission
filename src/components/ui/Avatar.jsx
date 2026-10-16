import { useState } from "react";

const initials = (name = "") =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

/** Round or square portrait that falls back to brand-coloured initials. */
export default function Avatar({ src, name, className = "", textClass = "text-[18px]", ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span
        role="img"
        aria-label={name}
        className={`font-heading inline-flex items-center justify-center bg-[#003B8E] font-semibold tracking-wide text-[#FFFFFF] ${textClass} ${className}`}
      >
        {initials(name)}
      </span>
    );
  }
  return <img src={src} alt={name} className={className} onError={() => setFailed(true)} {...rest} />;
}
