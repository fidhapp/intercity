import { useEffect } from "react";
import { useQuote } from "../context/QuoteContext";
import EnquiryForm from "./EnquiryForm";

export default function QuoteDrawer() {
  const { open, closeQuote, seed, token } = useQuote();

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") closeQuote();
    };
    window.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => {
      document.getElementById("quote-name")?.focus();
    }, 220);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [open, closeQuote]);

  return (
    <div className={`drawer-root ${open ? "open" : ""}`} aria-hidden={!open}>
      <button className="drawer-back" type="button" aria-label="Close quote panel" onClick={closeQuote} />
      <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="quote-title">
        <header className="drawer-head">
          <div>
            <p className="kicker">Project brief</p>
            <h2 id="quote-title">Request a quote</h2>
          </div>
          <button type="button" className="icon-btn" onClick={closeQuote} aria-label="Close">
            ×
          </button>
        </header>
        <p className="drawer-lead">
          Tell us the service and the site need. Scopes you selected are already written into the note.
        </p>
        {open ? <EnquiryForm key={token} idPrefix="quote" compact initial={seed} /> : null}
      </aside>
    </div>
  );
}
