import "./Brasil.scss";
import { useTranslation } from "react-i18next";

import brasil from "../../../assets/imgs/brasil.png";

export default function Brasil() {
  const { t } = useTranslation();

  return (
    <section className="brasil">
      <div className="brasil__container">

        <div className="brasil__content">

          <div className="brasil__text">

            <h2>{t("brasil.title")}</h2>

            <p>{t("brasil.description")}</p>

            <a
              href="https://almemarcenaria.com"
              className="brasil__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("brasil.button")}</span>

              <span className="brasil__arrow">
                →
              </span>
            </a>

          </div>

          <div className="brasil__image">

            <img
              src={brasil}
              alt={t("brasil.imageAlt")}
            />

          </div>

        </div>

      </div>
    </section>
  );
}