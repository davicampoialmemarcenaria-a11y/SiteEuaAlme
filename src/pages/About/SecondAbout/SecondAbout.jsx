import "./SecondAbout.scss";
import { useTranslation } from "react-i18next";

import secondAbout from "../../../assets/imgs/imgcardabout.png";

export default function SecondAbout() {
  const { t } = useTranslation();

  return (
    <section className="second-about">

      <div className="second-about__container">

        {/* ==================================================
            TEXTO
        ================================================== */}

        <div className="second-about__content">

          <p>
            {t("secondAbout.paragraph1")}
          </p>

          <p>
            {t("secondAbout.paragraph2")}
          </p>

        </div>

        {/* ==================================================
            CARD
        ================================================== */}

        <div className="second-about__visual">

          <div className="second-about__card">

            <img
              src={secondAbout}
              alt={t("secondAbout.imageAlt")}
              className="second-about__image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}