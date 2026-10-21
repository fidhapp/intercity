import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import { approach, company, faqs, images, orgChart, values } from "../data";

export default function About() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "About · Intercity Development Projects LLC";
  }, []);

  return (
    <main id="main" className="subpage">
      <header className="page-hero">
        <div className="page-hero-media">
          <Photo src={images.hero} alt="Excavator on a construction site at sunset" priority />
        </div>
        <div className="container page-hero-copy">
          <p className="kicker light">About</p>
          <h1>A multidisciplinary partner for work in Oman.</h1>
          <p>
            Construction, infrastructure, utility, maintenance and development, carried by one company with a practical view of the site.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="kicker">Company overview</p>
            <h2>{company.headline}</h2>
          </Reveal>
          <Reveal delay={80}>
            {company.overview.map((paragraph) => (
              <p key={paragraph} className="lede">
                {paragraph}
              </p>
            ))}
            <p className="lede">
              {company.partner}. {company.supportLead} construction, infrastructure, project support and procurement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="vm" aria-label="Vision and mission">
        <div className="vm-top">
          <div className="vm-copy">
            <h2>Our Vision</h2>
            <p>{company.vision}</p>
          </div>
          <div className="vm-photo">
            <Photo src={images.city} alt="Urban buildings in warm light" />
          </div>
        </div>
        <div className="vm-bar" />
        <div className="vm-bottom">
          <div className="vm-copy">
            <h2>Our Mission</h2>
            <p>{company.mission}</p>
          </div>
          <div className="vm-photo">
            <Photo src={images.interior} alt="Interior living space with warm finishes" />
          </div>
        </div>
        <div className="vm-bar" />
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker">Core values</p>
            <h2>Six standards. Select one to read it.</h2>
          </Reveal>
          <div className="values-board">
            {values.map((value, index) => (
              <button
                key={value.title}
                type="button"
                className={`values-card ${active === index ? "on" : ""}`}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
              >
                <span className="value-badge">{value.title}</span>
                <p>{active === index ? value.text : "Read this value"}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach alt">
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker">Our approach</p>
            <h2>A practical approach to every project.</h2>
          </Reveal>
          <ol className="steps">
            {approach.map((step) => (
              <li key={step.n} className="step">
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="goal goal-inset">{company.goal}</div>
        </div>
      </section>

      <section className="section org">
        <div className="container">
          <div className="org-head">
            <p className="kicker light">How the company is organised</p>
            <h2>From the board to the site crew.</h2>
            <p>Select a branch to bring its trades forward.</p>
          </div>
          <OrgChart />
        </div>
      </section>

      <section className="section">
        <div className="container faq-wrap">
          <Reveal>
            <p className="kicker">Questions</p>
            <h2>Before you write.</h2>
          </Reveal>
          <div className="faq">
            {faqs.map((item, index) => {
              const open = openFaq === index;
              return (
                <div key={item.q} className={`faq-item ${open ? "open" : ""}`}>
                  <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : index)}>
                    {item.q}
                    <span>{open ? "–" : "+"}</span>
                  </button>
                  {open ? <p>{item.a}</p> : null}
                </div>
              );
            })}
          </div>
          <Link className="btn btn-navy" to="/contact">
            Prepare a brief
          </Link>
        </div>
      </section>
    </main>
  );
}

function OrgChart() {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className="org-top">
        <div className="org-node gold">{orgChart.board}</div>
        <div className="org-line" />
        <div className="org-row">
          {orgChart.directors.map((name) => (
            <div key={name} className="org-node">
              {name}
            </div>
          ))}
        </div>
        <div className="org-line" />
        {orgChart.chain.map((name) => (
          <div key={name} className="org-stack">
            <div className={`org-node ${name === "CEO" ? "gold" : ""}`}>{name}</div>
            <div className="org-line" />
          </div>
        ))}
        <div className="org-row">
          {orgChart.flank.map((name) => (
            <div key={name} className="org-node">
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="org-branches">
        {orgChart.branches.map((branch, index) => (
          <article key={branch.id} className={`org-branch ${active === index ? "on" : ""}`}>
            <button type="button" className="org-role lead" onClick={() => setActive(index)}>
              {branch.lead}
            </button>
            <h3>{branch.skilled}</h3>
            {branch.roles.map((role) => (
              <div key={role} className="org-role">
                {role}
              </div>
            ))}
            <div className="org-role">{branch.support}</div>
            <div className="org-helpers">
              {branch.helpers.map((helper) => (
                <span key={helper}>{helper}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
