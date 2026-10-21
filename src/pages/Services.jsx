import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Photo from "../components/Photo";
import Icon from "../components/Icon";
import { useQuote } from "../context/QuoteContext";
import { company, services } from "../data";

export default function Services() {
  const location = useLocation();
  const navigate = useNavigate();
  const { togglePick, isPicked, openWithPicks, picks } = useQuote();
  const hashId = location.hash.replace("#", "");
  const [manualId, setManualId] = useState(services[0].id);
  const activeId = services.some((item) => item.id === hashId) ? hashId : manualId;

  useEffect(() => {
    document.title = "Services · Intercity Development Projects LLC";
  }, []);

  useEffect(() => {
    if (!hashId || !services.some((item) => item.id === hashId)) return;
    const node = document.getElementById("service-studio");
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.45 && rect.bottom > 140;
    if (!inView) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hashId]);

  const active = useMemo(() => services.find((item) => item.id === activeId) || services[0], [activeId]);

  return (
    <main id="main" className="subpage">
      <header className="page-hero page-hero-short">
        <div className="page-hero-media">
          <Photo src={services[0].image} alt="" priority />
        </div>
        <div className="container page-hero-copy">
          <p className="kicker light">Services</p>
          <h1>Construction through to maintenance.</h1>
          <p>
            {company.supportLead} building and civil works, infrastructure, equipment, manpower, procurement and interior finishing. Open a service and add the scopes you need.
          </p>
        </div>
      </header>

      <section className="section" id="service-studio">
        <div className="container studio">
          <div className="studio-list" role="tablist" aria-label="Services" aria-orientation="vertical">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={service.id === active.id}
                className={service.id === active.id ? "on" : ""}
                onClick={() => {
                  setManualId(service.id);
                  navigate(`/services#${service.id}`, { replace: true });
                }}
              >
                <Icon name={service.icon} size={22} />
                <span>
                  <strong>{service.title}</strong>
                  <small>{service.summary}</small>
                </span>
              </button>
            ))}
          </div>

          <article className="studio-detail" role="tabpanel">
            <div className="studio-photo">
              <Photo key={active.image} src={active.image} alt="" />
            </div>
            <p className="kicker">{active.category}</p>
            <h2>{active.title}</h2>
            <p className="lede">{active.detail}</p>
            <h3>Add a scope to your brief</h3>
            <ul className="scope-list">
              {active.scopes.map((scope) => {
                const id = `${active.id}:${scope}`;
                const on = isPicked(id);
                return (
                  <li key={scope}>
                    <button
                      type="button"
                      className={`scope-btn ${on ? "on" : ""}`}
                      aria-pressed={on}
                      onClick={() => togglePick({ id, service: active.title, scope })}
                    >
                      <span>{on ? "Added" : "Add"}</span>
                      {scope}
                    </button>
                  </li>
                );
              })}
            </ul>
            <button type="button" className="btn btn-navy" onClick={openWithPicks} disabled={picks.length === 0}>
              {picks.length ? `Review ${picks.length} in the quote` : "Select a scope to continue"}
            </button>
          </article>
        </div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...services, ...services].map((service, index) => (
            <span key={`${service.id}-${index}`}>
              {service.title}
              <i />
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
