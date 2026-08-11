import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Hero.scss";

import hero from "../../../assets/imgs/herohome.png";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <section className="hero">

        <div className="hero__left">

          <h1>
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
            <br />
            {t("hero.titleLine3")}
          </h1>

          <p>
            {t("hero.description")}
          </p>

          <button onClick={() => navigate("/contact")}>
            {t("hero.button")}
          </button>

        </div>

        <div className="hero__right">

          <img
            src={hero}
            alt={t("hero.imageAlt")}
          />

        </div>

      </section>
    </>
  );
}