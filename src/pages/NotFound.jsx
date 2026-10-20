import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found · Intercity Development Projects LLC";
  }, []);

  return (
    <main id="main" className="not-found">
      <p className="kicker">404</p>
      <h1>This page is not on the site.</h1>
      <p>The work itself is still here: services, values and a project brief.</p>
      <Link className="btn btn-gold" to="/">
        Back to the homepage
      </Link>
    </main>
  );
}
