import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Navbar.scss";

import logo from "../../assets/imgs/imgnavbar.png";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="/"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Alme Woodworks - Home"
        >
          <img
            src={logo}
            alt="Alme Woodworks"
          />

          <span>
            {t("nav.brand")}
          </span>
        </a>


        <div className="navbar-right">

          {/* MENU */}
          <nav
            className={`navbar-links ${menuOpen ? "active" : ""}`}
          >

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.home")}
            </a>

            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.about")}
            </a>

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.contact")}
            </a>


            {/* REQUEST A QUOTE - MOBILE */}
            <a
              href="https://wa.me/6892762034"
              className="quote-btn mobile-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("nav.quote")}
            </a>


            {/* LANGUAGE SWITCHER - MOBILE */}
            <div className="mobile-language-switcher">
              <LanguageSwitcher />
            </div>

          </nav>


          {/* LANGUAGE SWITCHER - DESKTOP */}
          <div className="language-switcher-wrapper">
            <LanguageSwitcher />
          </div>


          {/* REQUEST A QUOTE - DESKTOP */}
          <a
            href="https://wa.me/6892762034"
            className="quote-btn desktop-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("nav.quote")}
          </a>


          {/* HAMBURGER */}
          <button
            type="button"
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen
                ? t("nav.closeMenu")
                : t("nav.openMenu")
            }
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
}