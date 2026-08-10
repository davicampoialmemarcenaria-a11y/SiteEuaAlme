import "./SecondAbout.scss";

import secondAbout from "../../../assets/imgs/imgcardabout.png";

export default function SecondAbout() {
  return (
    <section className="second-about">

      <div className="second-about__container">

        {/* ==================================================
            TEXTO
        ================================================== */}

        <div className="second-about__content">

          <p>
            Alme Custom Millwork was founded in 2020 by two childhood
            friends with the goal of providing a safer, more organized,
            and more reliable approach to custom millwork projects.
            From the very beginning, our commitment has been to turn
            challenges into well-managed processes, ensuring peace of
            mind for both clients and partners.
          </p>

          <p>
            More than delivering custom millwork, we strive to build
            trust. We want our clients to feel supported, confident,
            and cared for throughout the entire journey, knowing their
            project is in good hands.
          </p>

        </div>


        {/* ==================================================
            CARD
        ================================================== */}

        <div className="second-about__visual">

          <div className="second-about__card">

            <img
              src={secondAbout}
              alt="Custom millwork illustration"
              className="second-about__image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}