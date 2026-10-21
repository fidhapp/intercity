import { useEffect } from "react";
import { useQuote } from "../context/QuoteContext";

export default function SelectionDock() {
  const { picks, clearPicks, openWithPicks, open } = useQuote();

  useEffect(() => {
    document.body.classList.toggle("has-dock", picks.length > 0);
    return () => document.body.classList.remove("has-dock");
  }, [picks.length]);

  return (
    <div className={`dock ${picks.length && !open ? "show" : ""}`} role="region" aria-label="Selected scopes" aria-hidden={!picks.length || open}>
      <div>
        <strong>{picks.length}</strong>
        <span>{picks.length === 1 ? "scope in your brief" : "scopes in your brief"}</span>
      </div>
      <div className="dock-actions">
        <button type="button" className="btn btn-line btn-small" onClick={clearPicks}>
          Clear
        </button>
        <button type="button" className="btn btn-gold btn-small" onClick={openWithPicks}>
          Review quote
        </button>
      </div>
    </div>
  );
}
