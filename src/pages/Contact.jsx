import { useEffect, useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import { briefText } from "../brief";
import { company, faqs } from "../data";
import { useQuote } from "../context/QuoteContext";

export default function Contact() {
  const { picks, openQuote } = useQuote();
  const [draft, setDraft] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const preset = picks.length
    ? {
        service: picks.length > 1 ? "A combined brief" : picks[0].service,
        message: `We would like support with:\n${picks.map((item) => `• ${item.service}: ${item.scope}`).join("\n")}\n`,
      }
    : { service: "", message: "" };

  useEffect(() => {
    document.title = "Contact · Intercity Development Projects LLC";
  }, []);

  return (
    <main id="main" className="subpage">
      <header className="contact-hero">
        <div className="container">
          <p className="kicker">Contact</p>
          <h1>Prepare a project brief.</h1>
          <p className="lede">
            Share the service, the site and what you need from Intercity. {company.place}.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <EnquiryForm idPrefix="contact" initial={preset} onChange={setDraft} />
            {picks.length > 0 ? (
              <button type="button" className="text-btn" onClick={() => openQuote(preset)}>
                Open this brief in the side panel
              </button>
            ) : null}
          </div>
          <aside className="brief-card">
            <p className="kicker">Live preview</p>
            <h2>The note as it stands</h2>
            <pre>{draft ? briefText({ ...preset, ...draft }) : "Start typing to see the brief."}</pre>
            <div className="visit-card">
              <span>Sultanate of Oman</span>
              <strong>Talk to Intercity</strong>
              <div className="contact-lines">
                {company.phones.map((phone) => (
                  <a key={phone.tel} href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                ))}
                <a href={`mailto:${company.email}`}>{company.email}</a>
                <a href={company.web}>{company.webLabel}</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container faq-wrap">
          <h2>Practical questions</h2>
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
        </div>
      </section>
    </main>
  );
}
