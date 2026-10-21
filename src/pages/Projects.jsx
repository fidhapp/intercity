import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Photo from "../components/Photo";
import { categories, services, workAreas } from "../data";
import { useQuote } from "../context/QuoteContext";

export default function Projects() {
  const location = useLocation();
  const { openQuote } = useQuote();
  const hashId = location.hash.replace("#", "");
  const hashed = workAreas.find((item) => item.id === hashId) || null;
  const [filter, setFilter] = useState(hashed?.category || "All");
  const [activeId, setActiveId] = useState(hashed?.id || null);
  const [seenHash, setSeenHash] = useState(hashId);

  if (hashId !== seenHash) {
    setSeenHash(hashId);
    if (hashed) {
      setFilter(hashed.category);
      setActiveId(hashed.id);
    }
  }

  useEffect(() => {
    document.title = "Projects · Intercity Development Projects LLC";
  }, []);

  const visible = useMemo(
    () => (filter === "All" ? workAreas : workAreas.filter((item) => item.category === filter)),
    [filter],
  );
  const active = workAreas.find((item) => item.id === activeId) || null;
  const related = active ? services.find((item) => item.id === active.serviceId) : null;

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActiveId(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <main id="main" className="subpage">
      <header className="page-hero page-hero-short">
        <div className="page-hero-media">
          <Photo src={workAreas[0].image} alt="" priority />
        </div>
        <div className="container page-hero-copy">
          <p className="kicker light">Areas of work</p>
          <h1>What a brief can ask for.</h1>
          <p>
            These are the kinds of work Intercity supports. Filter the list, open an area, and carry the related service into a quote.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Filter areas of work">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                className={filter === category ? "on" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visible.map((area) => (
              <article key={area.id} id={area.id} className="project-card">
                <button type="button" onClick={() => setActiveId(area.id)}>
                  <Photo src={area.image} alt="" />
                  <div>
                    <span>{area.category}</span>
                    <h2>{area.title}</h2>
                    <p>{area.text}</p>
                  </div>
                </button>
              </article>
            ))}
          </div>
          {visible.length === 0 ? <p>No areas in this filter.</p> : null}
        </div>
      </section>

      {active && related ? (
        <div className="modal-root">
          <button className="drawer-back" type="button" aria-label="Close details" onClick={() => setActiveId(null)} />
          <article className="modal" role="dialog" aria-modal="true" aria-labelledby="area-title">
            <div className="modal-photo">
              <Photo src={active.image} alt="" />
            </div>
            <div className="modal-copy">
              <p className="kicker">{active.category}</p>
              <h2 id="area-title">{active.title}</h2>
              <p>{active.text}</p>
              <p>{related.detail}</p>
              <div className="btn-row">
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() => {
                    setActiveId(null);
                    openQuote({
                      service: related.title,
                      message: `We would like to discuss ${active.title.toLowerCase()}.\n`,
                    });
                  }}
                >
                  Quote this area
                </button>
                <Link className="btn btn-line" to={`/services#${related.id}`} onClick={() => setActiveId(null)}>
                  See {related.title}
                </Link>
              </div>
              <button type="button" className="text-btn" onClick={() => setActiveId(null)}>
                Close
              </button>
            </div>
          </article>
        </div>
      ) : null}
    </main>
  );
}
