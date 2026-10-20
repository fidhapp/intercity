import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollProgress() {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}
