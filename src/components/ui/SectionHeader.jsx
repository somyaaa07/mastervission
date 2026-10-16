/**
 * Shared section heading: orange rule + label, large condensed title,
 * optional supporting copy and an optional action slot on the right.
 * `light` is for sections on the brand-blue background.
 */
export default function SectionHeader({ eyebrow, title, text, light = false, action = null, className = "", align = "left" }) {
  const center = align === "center";
  return (
    <div className={`flex flex-col gap-6 ${action ? "sm:flex-row sm:items-end sm:justify-between" : ""} ${center ? "items-center text-center" : ""} ${className}`}>
      <div className={center ? "mx-auto max-w-[680px]" : "max-w-[680px]"}>
        {eyebrow && (
          <p className={`font-body flex items-center gap-3 text-[13px] font-semibold ${center ? "justify-center" : ""} text-[#FF8000]`}>
            <span aria-hidden="true" className="h-[3px] w-8 bg-[#FF8000]" />
            {eyebrow}
          </p>
        )}
        <h2 className={`font-heading mt-3 text-[34px] font-bold leading-[1.05] sm:text-[44px] lg:text-[48px] ${light ? "text-[#FFFFFF]" : "text-[#003B8E]"}`}>
          {title}
        </h2>
        {text && (
          <p className={`font-body mt-4 text-[15.5px] leading-[1.7] ${light ? "text-[#FFFFFF]/85" : "text-[#003B8E]/75"}`}>{text}</p>
        )}
      </div>
      {action}
    </div>
  );
}
