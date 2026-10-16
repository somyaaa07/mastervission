import { useState } from "react";

/**
 * <img> that degrades gracefully. If the photo fails to load (broken or
 * blocked remote URL, missing file) it swaps to `fallback`, and if that also
 * fails it renders a quiet brand-coloured block so layouts never collapse.
 */
export default function SafeImage({ src, fallback, alt, className = "", ...rest }) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed || !current) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} bg-[#003B8E]`}
        style={{ backgroundImage: "linear-gradient(135deg, #003B8E 0%, #002A66 100%)" }}
      />
    );
  }

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback);
        else setFailed(true);
      }}
      {...rest}
    />
  );
}
