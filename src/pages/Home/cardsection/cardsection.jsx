import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./cardsection.scss";

import card2Image from "../../../assets/imgs/card2.png";
import card3Image from "../../../assets/imgs/card3.png";
import card6Image from "../../../assets/imgs/card6.png";

export default function CardSection() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="card-section">
      <div className="card-section__container">
        <div className="card-section__header">
          <h2>{t("cards.title")}</h2>

          <p>{t("cards.subtitle")}</p>
        </div>

        <div className="card-section__grid">

          {/* =====================================================
              CARD 1
          ===================================================== */}

          <article className="model-card model-card--light card-one">
            <div className="model-card__content">
              <div className="model-card__title">
                <span>{t("cards.card1.title1")}</span>
                <span>{t("cards.card1.title2")}</span>
              </div>

              <button
                type="button"
                className="model-card__learn"
                onClick={() => navigate("/about")}
              >
                <div className="arrow">↗</div>

                <span>{t("cards.learnMore")}</span>
              </button>
            </div>

            <ul className="model-card__list">
              <li>{t("cards.card1.item1")}</li>

              <li>{t("cards.card1.item2")}</li>

              <li>{t("cards.card1.item3")}</li>
            </ul>
          </article>

          {/* =====================================================
              CARD 2
          ===================================================== */}

          <article className="model-card model-card--orange card-two">
            <div className="model-card__title model-card__title--white">
              <span>{t("cards.card2.title1")}</span>
              <span>{t("cards.card2.title2")}</span>
            </div>

            <img
              src={card2Image}
              alt={t("cards.card2.alt")}
              className="model-card__image"
            />
          </article>

          {/* =====================================================
              CARD 3
          ===================================================== */}

          <article className="model-card model-card--brown card-three">
            <img
              src={card3Image}
              alt={t("cards.card3.alt")}
              className="model-card__image model-card__image--center"
            />
          </article>

          {/* =====================================================
              CARD 4
          ===================================================== */}

          <article className="model-card model-card--light card-four">
            <ul className="model-card__list model-card__list--full">
              <li>{t("cards.card4.item1")}</li>

              <li>{t("cards.card4.item2")}</li>

              <li>{t("cards.card4.item3")}</li>

              <li>{t("cards.card4.item4")}</li>
            </ul>
          </article>

          {/* =====================================================
              CARD 5
          ===================================================== */}

          <article className="model-card model-card--orange card-five">
            <div className="model-card__title model-card__title--white">
              <span>{t("cards.card5.title1")}</span>
              <span>{t("cards.card5.title2")}</span>
            </div>

            <p className="model-card__description">
              {t("cards.card5.description")}
            </p>
          </article>

          {/* =====================================================
              CARD 6
          ===================================================== */}

          <article className="model-card model-card--brown card-six">
            <div className="model-card__title model-card__title--orange">
              <span>{t("cards.card6.title1")}</span>
              <span>{t("cards.card6.title2")}</span>
            </div>

            <img
              src={card6Image}
              alt={t("cards.card6.alt")}
              className="model-card__image model-card__image--six"
            />

            <button
              type="button"
              className="model-card__contact"
              onClick={() => navigate("/contact")}
            >
              <div className="arrow arrow--white">↗</div>

              <span>{t("cards.contact")}</span>
            </button>
          </article>

        </div>
      </div>
    </section>
  );
}