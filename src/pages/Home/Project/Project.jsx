
import { useState } from "react";
import "./Project.scss";

import user from "../../../assets/imgs/user.png";
import config from "../../../assets/imgs/config.png";
import point from "../../../assets/imgs/point.png";
import more from "../../../assets/imgs/more.png";

import projeto1 from "../../../assets/imgs/1.jpg";
import projeto2 from "../../../assets/imgs/2.jpg";
import projeto3 from "../../../assets/imgs/3.jpg";
import projeto4 from "../../../assets/imgs/4.jpg";

export default function Project() {
  const [active, setActive] = useState(0);

  const projetos = [
    {
      titulo: "Banheiros",
      subtitulo: "Design elegante e funcional.",
      imagem: projeto2,
      icone: config,
    },
    {
      titulo: "Projetos em lero lero",
      subtitulo: "Conheça nossos ambientes exclusivos.",
      imagem: projeto1,
      icone: user,
    },
    {
      titulo: "Closets",
      subtitulo: "Soluções sob medida.",
      imagem: projeto3,
      icone: point,
    },
    {
      titulo: "Veja mais",
      subtitulo: "Conheça todos os projetos.",
      imagem: projeto4,
      icone: more,
    },
  ];

  return (
    <section className="project">
      <div className="project__container">
        <div className="project__content">

          <div className="project__left">
            <h2>
              Featured
              <br />
              projects
            </h2>

            <p>
              Every project tells a story. Get inspired by spaces that
              reflect the quality and essence of our craftsmanship.
            </p>
          </div>

          <div className="project__right">
            {projetos.map((item, index) => (
              <div
                key={index}
                className={`option ${
                  active === index ? "active" : ""
                }`}
                onClick={() => setActive(index)}
                style={{
                  backgroundImage: `url(${item.imagem})`,
                }}
              >
                <div className="shadow" />

                <div className="label">
                  <div className="icon">
                    <img src={item.icone} alt="" />
                  </div>

                  <div className="info">
                    <div className="main">
                      {item.titulo}
                    </div>

                    <div className="sub">
                      {item.subtitulo}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

