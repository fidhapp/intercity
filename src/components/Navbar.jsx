import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useQuote } from "../context/QuoteContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { openQuote } = useQuote();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMenu(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${menu ? "menu-open" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="Intercity home">
          <Logo tone="light" />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-tools">
          <button type="button" className="btn btn-gold btn-small" onClick={() => openQuote()}>
            Request a quote
          </button>
          <button
            type="button"
            className={`burger ${menu ? "on" : ""}`}
            aria-expanded={menu}
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`nav-panel ${menu ? "show" : ""}`}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setMenu(false)}>
            {link.label}
          </NavLink>
        ))}
        <button
          type="button"
          className="btn btn-gold"
          onClick={() => {
            setMenu(false);
            openQuote();
          }}
        >
          Request a quote
        </button>
      </div>
    </header>
  );
}
