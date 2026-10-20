import { useState } from "react";

export default function Photo({ src, alt = "", className = "", priority = false }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return <div className={`photo-fallback ${className}`} role={alt ? "img" : undefined} aria-label={alt || undefined} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
