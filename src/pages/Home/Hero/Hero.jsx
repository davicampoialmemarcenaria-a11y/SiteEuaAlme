import "./Hero.scss";


import hero from "../../../assets/imgs/herohome.png";

export default function Home() {
  return (
    <>
     

      <section className="hero">

        <div className="hero__left">

          <h1>
            CUSTOM
            <br />
            FURNITURE, BUILT
            <br />
            ON TRUST.
          </h1>

          <p>
            Our way of working combines premium quality manufacturing,
            smart logistics, and a service approach designed to make
            the entire process simpler and more efficient.
          </p>

          <button>
            Book a consultation
          </button>

        </div>

        <div className="hero__right">

          <img src={hero} alt="Hero"/>

        </div>

      </section>

    </>
  );
}