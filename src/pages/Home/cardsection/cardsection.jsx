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

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="card-section__header">
          <h2>
            {t("cards.title")}
          </h2>

          <p>
            {t("cards.subtitle")}
          </p>
        </header>


        {/* =====================================================
            PLANS
        ===================================================== */}

        <div className="card-section__plans">

          {/* ===================================================
              SOB MEDIDA
          =================================================== */}

          <article className="model-plan model-plan--light">

            <div className="model-plan__visual">

              <div className="model-plan__title">
                <span>
                  {t("cards.card1.title1")}
                </span>

          
              </div>

              <img
                src={card2Image}
                alt={t("cards.card1.alt")}
                className="model-plan__image"
              />

            </div>


            <div className="model-plan__body">

              <ul className="model-plan__list">

                <li>
                  {t("cards.card1.item1")}
                </li>

                <li>
                  {t("cards.card1.item2")}
                </li>

                <li>
                  {t("cards.card1.item3")}
                </li>

                 <li>
                  {t("cards.card1.item4")}
                </li>

                <li>
                  {t("cards.card1.item5")}
                </li>

                <li>
                  {t("cards.card1.item6")}
                </li>


              </ul>

            </div>

          </article>


          {/* ===================================================
              PADRÃO ALME
          =================================================== */}

          <article className="model-plan model-plan--brown">

            <div className="model-plan__visual">

              <div className="model-plan__title model-plan__title--brown">
                <span>
                  {t("cards.card2.title1")}
                </span>

               
              </div>

              <img
                src={card3Image}
                alt={t("cards.card2.alt")}
                className="model-plan__image model-plan__image--brown"
              />

            </div>


            <div className="model-plan__body">

              <ul className="model-plan__list model-plan__list--brown">

                <li>
                  {t("cards.card4.item1")}
                </li>

                <li>
                  {t("cards.card4.item2")}
                </li>

                <li>
                  {t("cards.card4.item3")}
                </li>

                <li>
                  {t("cards.card4.item4")}
                </li>

                <li>
                  {t("cards.card4.item5")}
                </li>

                <li>
                  {t("cards.card4.item6")}
                </li>

              </ul>


              <div className="model-plan__actions">

              

              </div>

            </div>

          </article>


          {/* ===================================================
              MODULADO
          =================================================== */}

          <article className="model-plan model-plan--light">

            <div className="model-plan__visual">

              <div className="model-plan__title">
                <span>
                  {t("cards.card6.title1")}
                </span>

           
              </div>

              <img
                src={card6Image}
                alt={t("cards.card6.alt")}
                className="model-plan__image model-plan__image--modulado"
              />

            </div>


            <div className="model-plan__body">

              <ul className="model-plan__list">

                <li>
                  {t("cards.card6.item1")}
                </li>

                <li>
                  {t("cards.card6.item2")}
                </li>

                <li>
                  {t("cards.card6.item3")}
                </li>

                <li>
                  {t("cards.card6.item4")}
                </li>

                <li>
                  {t("cards.card6.item5")}
                </li>

                <li>
                  {t("cards.card6.item6")}
                </li>

              </ul>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}