import { useNavigate } from "react-router-dom";

import "./cardsection.scss";

import card2Image from "../../../assets/imgs/card2.png";
import card3Image from "../../../assets/imgs/card3.png";
import card6Image from "../../../assets/imgs/card6.png";

export default function CardSection() {

  const navigate = useNavigate();

  return (
    <section className="card-section">

      <div className="card-section__container">

        <div className="card-section__header">

          <h2>Our model</h2>

          <p>
            What makes our service
            <br />
            model different?
          </p>

        </div>


        <div className="card-section__grid">


          {/* =====================================================
              CARD 1
          ===================================================== */}

          <article className="model-card model-card--light card-one">

            <div className="model-card__content">

              <div className="model-card__title">
                <span>high</span>
                <span>standarts</span>
              </div>


              <button
                type="button"
                className="model-card__learn"
                onClick={() => navigate("/about")}
              >

                <div className="arrow">↗</div>

                <span>LEARN MORE</span>

              </button>

            </div>


            <ul className="model-card__list">

              <li>
                100% custom cabinetry
                <br />
                designed for your space.
              </li>

              <li>
                Premium-quality
                <br />
                manufacturing.
              </li>

              <li>
                Fast and well-
                <br />
                organized delivery.
              </li>

            </ul>

          </article>


          {/* =====================================================
              CARD 2
          ===================================================== */}

          <article className="model-card model-card--orange card-two">

            <div className="model-card__title model-card__title--white">
              <span>Long-term</span>
              <span>thinking</span>
            </div>

            <img
              src={card2Image}
              alt="Long-term thinking"
              className="model-card__image"
            />

          </article>


          {/* =====================================================
              CARD 3
          ===================================================== */}

          <article className="model-card model-card--brown card-three">

            <img
              src={card3Image}
              alt=""
              className="model-card__image model-card__image--center"
            />

          </article>


          {/* =====================================================
              CARD 4
          ===================================================== */}

          <article className="model-card model-card--light card-four">

            <ul className="model-card__list model-card__list--full">

              <li>
                Pre-assembled components for easier installation.
              </li>

              <li>
                Assembly guide and all hardware included.
              </li>

              <li>
                Freedom to install with your preferred installer.
              </li>

              <li>
                Greater convenience, time savings, and flexibility.
              </li>

            </ul>

          </article>


          {/* =====================================================
              CARD 5
          ===================================================== */}

          <article className="model-card model-card--orange card-five">

            <div className="model-card__title model-card__title--white">
              <span>Sustainable</span>
              <span>decisions</span>
            </div>

            <p className="model-card__description">
              Your unique project. Our craftsmanship.
              Installation on your schedule, with the
              professional you trust.
            </p>

          </article>


          {/* =====================================================
              CARD 6
          ===================================================== */}

          <article className="model-card model-card--brown card-six">

            <div className="model-card__title model-card__title--orange">
              <span>Promises into</span>
              <span>results</span>
            </div>


            <img
              src={card6Image}
              alt="Promises into results"
              className="model-card__image model-card__image--six"
            />


            <button
              type="button"
              className="model-card__contact"
              onClick={() => navigate("/contact")}
            >

              <div className="arrow arrow--white">
                ↗
              </div>

              <span>CONTACT</span>

            </button>

          </article>


        </div>

      </div>

    </section>
  );
}