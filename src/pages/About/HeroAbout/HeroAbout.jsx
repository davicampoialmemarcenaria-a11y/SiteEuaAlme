import "./HeroAbout.scss";
import { useTranslation } from "react-i18next";

import heroAbout from "../../../assets/imgs/heroabout.png";

export default function HeroAbout() {
  const { t } = useTranslation();

  return (
    <section className="hero-about">

      <div className="hero-about__container">

        {/* ==================================================
            IMAGEM
        ================================================== */}

        <div className="hero-about__visual">

          <img
            src={heroAbout}
            alt={t("heroAbout.imageAlt")}
            className="hero-about__image"
          />

        </div>

        {/* ==================================================
            TEXTO
        ================================================== */}

        <div className="hero-about__content">

          <h1>
            {t("heroAbout.title")}
          </h1>

          <p>
            {t("heroAbout.paragraph1")}
          </p>

          <p>
            {t("heroAbout.paragraph2")}
          </p>

        </div>

      </div>

    </section>
  );
}