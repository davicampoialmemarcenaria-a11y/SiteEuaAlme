import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/imgs/imgnavbar.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-brand">
          <img
            src={logo}
            alt="Alme Woodworks"
          />

          <span>
            ALME WOODWORKS
          </span>
        </div>

        <div className="navbar-right">

          <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>

            <a href="/">
              Home
            </a>

            <a href="/about">
              About us
            </a>

            <a href="/contact">
              Contact
            </a>

            {/* Botão apenas no mobile */}
            <a
              href="https://wa.me/5511944956944"
              className="quote-btn mobile-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a quote
            </a>

          </nav>

          {/* Botão apenas no desktop */}
          <a
            href="https://wa.me/5511944956944"
            className="quote-btn desktop-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a quote
          </a>

          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}