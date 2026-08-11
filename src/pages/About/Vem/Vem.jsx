import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Vem.scss";
import imgAboutContact from "../../../assets/imgs/imgaboutcontact.png";

function Vem() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="vem">

      <div className="vem__container">

        <div className="vem__content">

          <h2 className="vem__title">
            {t("vem.title")}
          </h2>

          <p className="vem__description">
            {t("vem.description")}
          </p>

          <button
            type="button"
            className="vem__button"
            onClick={() => navigate("/contact")}
          >
            {t("vem.button")}
          </button>

        </div>

        <div className="vem__visual">

          <img
            src={imgAboutContact}
            alt={t("vem.imageAlt")}
            className="vem__image"
          />

        </div>

      </div>

    </section>
  );
}

export default Vem;