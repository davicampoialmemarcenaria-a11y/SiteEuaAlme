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
            <button className="quote-btn mobile-btn">
              Request a quote
            </button>


          </nav>


          {/* Botão apenas no desktop */}
          <button className="quote-btn desktop-btn">
            Request a quote
          </button>


          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>


        </div>


      </div>

    </header>

  );
}