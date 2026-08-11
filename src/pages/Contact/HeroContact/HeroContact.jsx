import "./HeroContact.scss";

import heroContact from "../../../assets/imgs/herocontact.png";
import imgNavbar from "../../../assets/imgs/imgnavbar.png";

export default function HeroContact() {
  return (
    <section className="contact-hero">

      {/* ILUSTRAÇÃO DA ESQUERDA */}
      <div className="contact-hero__illustration">
        <img
          src={heroContact}
          alt="Alme"
        />
      </div>

      {/* CONTEÚDO DA DIREITA */}
      <div className="contact-hero__content">

        <h1>Let’s create what’s next.</h1>

        <p>
          Request a quote and discover how we can transform your project
          into a fully customized solution, delivered with quality,
          precision, and a process designed around your needs.
        </p>

        {/* LOGO + BOTÃO */}
        <div className="contact-hero__cta">

          <img
            src={imgNavbar}
            alt=""
            aria-hidden="true"
          />

          <a
            href="https://wa.me/5511944956944"
            className="contact-hero__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Book a consultation</span>
          </a>

        </div>

      </div>

    </section>
  );
}