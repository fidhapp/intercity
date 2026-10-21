import { Link } from "react-router-dom";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useQuote } from "../context/QuoteContext";
import { useCount } from "../components/useCount";
import { approach, capabilities, company, images, pillars, services, stats, values, workAreas } from "../data";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const { openQuote } = useQuote();
  const [activeValue, setActiveValue] = useState(0);
  const [capIndex, setCapIndex] = useState(2);
  const [capHeld, setCapHeld] = useState(false);
  const [capLocked, setCapLocked] = useState(false);
  const statRef = useRef(null);
  const [statsOn, setStatsOn] = useState(false);
  const capability = capabilities[capIndex];

  function focusCap(index) {
    setCapLocked(true);
    setCapIndex(index);
    document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || capHeld || capLocked) return undefined;
    const timer = window.setInterval(() => {
      setCapIndex((index) => (index + 1) % capabilities.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [capHeld, capLocked]);

  useEffect(() => {
    document.title = "Intercity Development Projects LLC";
  }, []);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main id="main">
      <section className="hero">
        <HeroVisual />
        <div className="hero-shade" />
        <div className="hero-copy">
          <div className="container hero-intro">
            <p className="hero-kicker rise">{company.place}</p>
            <h1>
              <span className="rise">Intercity</span>
              <span className="rise">Development</span>
              <span className="rise">Projects LLC</span>
            </h1>
            <p className="hero-tag rise">Let’s build the next project together.</p>
            <p className="hero-lede rise">
              Earthworks, excavation, concrete, pipelines and the crews to keep a live site moving.
            </p>
            <div className="hero-actions rise">
              <Link className="btn btn-gold" to="/services">
                Explore the work
              </Link>
              <a className="btn btn-ghost" href={`tel:${company.phones[0].tel}`}>
                Call {company.phones[0].display}
              </a>
            </div>
          </div>
        </div>
        <div className="hero-dock">
          <button type="button" onClick={() => focusCap(2)}>
            <span>Earthworks</span>
            <strong>Excavation to formation</strong>
          </button>
          <button type="button" onClick={() => focusCap(1)}>
            <span>Civil</span>
            <strong>Concrete & structure</strong>
          </button>
          <button type="button" onClick={() => focusCap(5)}>
            <span>Utilities</span>
            <strong>Water pipeline networks</strong>
          </button>
          <a href={`mailto:${company.email}`}>
            <span>Talk to the team</span>
            <strong>{company.email}</strong>
          </a>
        </div>
      </section>

      <section
        className={`caps ${capLocked || capHeld ? "caps-still" : "caps-live"}`}
        id="capabilities"
        onMouseEnter={() => setCapHeld(true)}
        onMouseLeave={() => setCapHeld(false)}
      >
        <div className="caps-stage">
          <Photo key={capability.image + capability.id} src={capability.image} alt="" priority={capIndex < 2} />
          <div className="caps-card" key={capability.id}>
            <p className="kicker light">{capability.kicker}</p>
            <h2>{capability.title}</h2>
            <p>{capability.lead}</p>
            {capability.note ? <p className="caps-note">{capability.note}</p> : null}
            <ul>
              {capability.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn btn-gold btn-small" to="/services">
              Add this to a brief
            </Link>
          </div>
        </div>
        <div className="caps-switch" role="tablist" aria-label="Field capabilities">
          {capabilities.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === capIndex}
              className={index === capIndex ? "on" : ""}
              onClick={() => {
                setCapLocked(true);
                setCapIndex(index);
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>

      <section className="section overview" id="overview">
        <div className="container overview-grid">
          <Reveal>
            <p className="kicker">Company overview</p>
            <h2>{company.headline}</h2>
            {company.overview.map((paragraph) => (
              <p key={paragraph} className="lede">
                {paragraph}
              </p>
            ))}
            <div className="btn-row">
              <Link className="btn btn-navy" to="/about">
                Who we are
              </Link>
              <Link className="btn btn-line" to="/projects">
                Areas of work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="frame">
              <Photo src={images.site} alt="Construction site with cranes, structure and site activity" priority />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="who">
        <div className="who-bg" aria-hidden="true">
          <Photo src={images.earth} alt="" />
        </div>
        <div className="container who-inner">
          <Reveal>
            <p className="kicker light">Who we are</p>
            <h2>{company.partner}</h2>
            <p className="who-lead">{company.supportLead}</p>
          </Reveal>
          <div className="pillars">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80} className="pillar">
                <span className="icon-tile">
                  <Icon name={pillar.icon} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="goal">{company.goal}</div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker">Services</p>
            <h2>Eight ways a project can draw on Intercity.</h2>
            <p>Select a service to read the scope, or open the studio and add the pieces you need to a quote.</p>
          </Reveal>
          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={(index % 4) * 60} className="service-card">
                <Link to={`/services#${service.id}`}>
                  <span className="icon-tile">
                    <Icon name={service.icon} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <em>View scope</em>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="stats" ref={statRef}>
        <div className="container stats-grid">
          {stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} active={statsOn} />
          ))}
          <div className="stat">
            <strong>Oman</strong>
            <span>Based in the Sultanate of Oman</span>
          </div>
        </div>
      </section>

      <section className="vm" aria-label="Vision and mission">
        <div className="vm-top">
          <Reveal className="vm-copy">
            <h2>Our Vision</h2>
            <p>{company.vision}</p>
          </Reveal>
          <Reveal delay={100} className="vm-photo">
            <Photo src={images.city} alt="City buildings in warm evening light" />
          </Reveal>
        </div>
        <div className="vm-bar" />
        <div className="vm-bottom">
          <Reveal className="vm-copy">
            <h2>Our Mission</h2>
            <p>{company.mission}</p>
          </Reveal>
          <Reveal delay={100} className="vm-photo">
            <Photo src={images.interior} alt="Finished interior with seating and warm natural light" />
          </Reveal>
        </div>
        <div className="vm-bar" />
      </section>

      <section className="section values-preview">
        <div className="container values-layout">
          <Reveal>
            <p className="kicker">Core values</p>
            <h2>How the work is carried.</h2>
            <p className="lede">Choose a value. The same six standards sit behind every service line.</p>
            <Link className="text-link" to="/about">
              Read the full story
            </Link>
          </Reveal>
          <div className="value-picker">
            <div className="value-tabs" role="tablist" aria-label="Core values">
              {values.map((value, index) => (
                <button
                  key={value.title}
                  type="button"
                  role="tab"
                  aria-selected={activeValue === index}
                  className={activeValue === index ? "on" : ""}
                  onClick={() => setActiveValue(index)}
                >
                  {value.title}
                </button>
              ))}
            </div>
            <article className="value-detail" role="tabpanel">
              <span className="value-badge">{values[activeValue].title}</span>
              <p>{values[activeValue].text}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container section-head row-head">
          <div>
            <p className="kicker">Areas of work</p>
            <h2>The kinds of work we take on.</h2>
          </div>
          <Link className="btn btn-line" to="/projects">
            Filter all areas
          </Link>
        </div>
        <div className="work-marquee">
          <div className="work-track">
            {[0, 1].map((copy) =>
              workAreas.map((area, index) => (
                <article key={`${area.id}-${copy}`} className="work-card" style={{ "--i": index }}>
                  <Link to={`/projects#${area.id}`}>
                    <Photo src={area.image} alt="" />
                    <div>
                      <span>{area.category}</span>
                      <h3>{area.title}</h3>
                      <p>{area.text}</p>
                    </div>
                  </Link>
                </article>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="section approach">
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker">Our approach</p>
            <h2>A practical approach to every project.</h2>
          </Reveal>
          <div className="steps">
            {approach.map((step, index) => (
              <Reveal key={step.n} delay={index * 70} className="step">
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <p className="kicker light">Sultanate of Oman</p>
          <h2>Let’s build the next project together.</h2>
          <p>
            Call {company.phones[0].display} or {company.phones[1].display}, or send the brief to {company.email}.
          </p>
          <div className="btn-row">
            <Link className="btn btn-gold" to="/contact">
              Prepare a brief
            </Link>
            <button type="button" className="btn btn-ghost" onClick={() => openQuote({ service: "A combined brief" })}>
              Open the quote panel
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroVisual() {
  const frame = useRef(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });

  function onMove(event) {
    const bounds = frame.current?.getBoundingClientRect();
    if (!bounds) return;
    setShift({
      x: (event.clientX - bounds.left) / bounds.width - 0.5,
      y: (event.clientY - bounds.top) / bounds.height - 0.5,
    });
  }

  return (
    <div className="hero-media" ref={frame} onMouseMove={onMove} onMouseLeave={() => setShift({ x: 0, y: 0 })}>
      <div className="hero-shift" style={{ transform: `translate(${shift.x * -20}px, ${shift.y * -12}px)` }}>
        <img
          src={images.hero}
          alt="Yellow excavator loading earth at sunset, with a bridge and tower cranes behind"
        />
      </div>
    </div>
  );
}

function Stat({ value, label, active }) {
  const count = useCount(value, active);
  return (
    <div className="stat">
      <strong>{count}</strong>
      <span>{label}</span>
    </div>
  );
}
