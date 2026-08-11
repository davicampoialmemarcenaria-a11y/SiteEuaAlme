import { useNavigate } from "react-router-dom";

import "./Vem.scss";
import imgAboutContact from "../../../assets/imgs/imgaboutcontact.png";

function Vem() {

  const navigate = useNavigate();

  return (
    <section className="vem">

      <div className="vem__container">

        <div className="vem__content">

          <h2 className="vem__title">
            Let’s make things happen
          </h2>

          <p className="vem__description">
            Every great project begins with the right decision.
            Get in touch with our team and discover what’s possible.
          </p>

          <button
            type="button"
            className="vem__button"
            onClick={() => navigate("/contact")}
          >
            Get your free proposal
          </button>

        </div>


        <div className="vem__visual">

          <img
            src={imgAboutContact}
            alt="Our woodworking process"
            className="vem__image"
          />

        </div>

      </div>

    </section>
  );
}

export default Vem;