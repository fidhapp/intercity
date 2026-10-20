import { Link } from "react-router-dom";
import Logo from "./Logo";
import { company, serviceStrip } from "../data";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo tone="light" />
          <p className="footer-motto">{company.motto}</p>
          <p>{company.line}</p>
          <p className="footer-place">{company.place}</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/about">About the company</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Areas of work</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Services</h3>
          {serviceStrip.map((item) => (
            <Link key={item} to="/services">
              {item}
            </Link>
          ))}
        </div>
        <div>
          <h3>Talk to us</h3>
          <div className="contact-lines">
            {company.phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`}>
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.web}>{company.webLabel}</a>
          </div>
          <p className="footer-place">{company.place}</p>
        </div>
      </div>
      <div className="container footer-base">
        <span>© {year} {company.name}</span>
        <span>{company.place}</span>
      </div>
    </footer>
  );
}
