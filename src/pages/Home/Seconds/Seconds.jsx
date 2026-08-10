import "./Seconds.scss";

import desenho from "../../../assets/imgs/card1home.png";

export default function Seconds() {
  return (
    <section className="seconds">

      <div className="seconds__container">

        <div className="seconds__left">

          <p>
            <strong>Alme</strong> was founded with the vision of creating a
            woodworking company that breaks away from industry standards,
            overcoming market limitations through modern solutions, smart
            processes, and truly personalized service.
          </p>

          <p>
            We design and manufacture fully custom cabinetry with premium
            craftsmanship, tailored exclusively to your project.
          </p>

          <p>
            In the United States, our service model offers greater speed and
            flexibility: your cabinetry is delivered ready for installation,
            partially pre-assembled, carefully packaged, and accompanied by
            assembly instructions and all the necessary hardware.
          </p>

          <p>
            This allows you to schedule the installation with the professional
            you trust, at the time that works best for you—without compromising
            on quality, customization, or exceptional craftsmanship.
          </p>

        </div>

        <div className="seconds__right">

          <div className="seconds__card">

            <img src={desenho} alt="Millwork" />

            <h2>
              THE FUTURE OF CUSTOM.
              <br />
              MILLWORK STARTS HERE.
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}