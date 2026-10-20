import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QuoteProvider } from "./context/QuoteContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuoteDrawer from "./components/QuoteDrawer";
import SelectionDock from "./components/SelectionDock";
import ScrollProgress from "./components/ScrollProgress";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Preloader() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !reduce && !sessionStorage.getItem("intercity-intro");
  });

  useEffect(() => {
    if (!show) return undefined;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("intercity-intro", "1");
      setShow(false);
    }, 1500);
    return () => window.clearTimeout(timer);
  }, [show]);

  if (!show) return null;

  return (
    <div className="preloader" role="status" aria-label="Loading Intercity">
      <Logo tone="light" />
      <p>Design · Build · Deliver</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>
        <Preloader />
        <ScrollToTop />
        <ScrollProgress />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <SelectionDock />
        <QuoteDrawer />
      </QuoteProvider>
    </BrowserRouter>
  );
}
