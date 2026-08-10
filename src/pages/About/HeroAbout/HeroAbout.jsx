import "./HeroAbout.scss";

import heroAbout from "../../../assets/imgs/heroabout.png";

export default function HeroAbout() {
  return (
    <section className="hero-about">

      <div className="hero-about__container">

        {/* ==================================================
            IMAGEM
        ================================================== */}

        <div className="hero-about__visual">

          <img
            src={heroAbout}
            alt="ALME custom millwork process illustration"
            className="hero-about__image"
          />

        </div>


        {/* ==================================================
            TEXTO
        ================================================== */}

        <div className="hero-about__content">

          <h1>
            Get to know us!
          </h1>

          <p>
            Every project represents a dream, an investment, and the
            expectation of transforming a space into something truly
            unique. That’s why we believe custom millwork should go
            beyond technical execution—it should provide security,
            transparency, and confidence at every stage of the process.
          </p>

          <p>
            It is with this vision that we have built our story.
          </p>

        </div>

      </div>

    </section>
  );
}