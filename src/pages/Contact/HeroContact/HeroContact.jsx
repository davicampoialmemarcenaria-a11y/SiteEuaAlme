import { useTranslation } from "react-i18next";

import "./HeroContact.scss";

import heroContact from "../../../assets/imgs/herocontact.png";
import imgNavbar from "../../../assets/imgs/imgnavbar.png";

export default function HeroContact() {
  const { t } = useTranslation();

  return (
    <section className="contact-hero">

      {/* ILUSTRAÇÃO DA ESQUERDA */}
      <div className="contact-hero__illustration">
        <img
          src={heroContact}
          alt={t("contactHero.imageAlt")}
        />
      </div>

      {/* CONTEÚDO DA DIREITA */}
      <div className="contact-hero__content">

        <h1>{t("contactHero.title")}</h1>

        <p>
          {t("contactHero.description")}
        </p>

        {/* LOGO + BOTÃO */}
        <div className="contact-hero__cta">

          <img
            src={imgNavbar}
            alt=""
            aria-hidden="true"
          />

          <a
            href="https://wa.me/16892762034"
            className="contact-hero__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t("contactHero.button")}</span>
          </a>

        </div>

      </div>

    </section>
  );
}