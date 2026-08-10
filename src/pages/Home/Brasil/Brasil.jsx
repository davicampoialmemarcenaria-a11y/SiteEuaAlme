import "./Brasil.scss";

import brasil from "../../../assets/imgs/brasil.png";

export default function Brasil() {
  return (
    <section className="brasil">
      <div className="brasil__container">

        <div className="brasil__content">

          {/* =====================================================
              TEXTO
          ===================================================== */}

          <div className="brasil__text">

            <h2>OUR ROOTS</h2>

            <p>
              Get to know the story behind Alme and discover a
              complete custom millwork experience designed for
              the Brazilian market.
            </p>

            <a
              href="#"
              className="brasil__button"
            >
              <span>Visit our local site</span>

              <span className="brasil__arrow">
                →
              </span>
            </a>

          </div>


          {/* =====================================================
              IMAGEM
          ===================================================== */}

          <div className="brasil__image">

            <img
              src={brasil}
              alt="Brazilian flag illustration"
            />

          </div>

        </div>

      </div>
    </section>
  );
}