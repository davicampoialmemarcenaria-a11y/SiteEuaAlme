import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const projetos = [
    {
      titulo: t("projects.cards.0.title"),
      subtitulo: t("projects.cards.0.subtitle"),
      imagem: projeto2,
      icone: config,
    },
    {
      titulo: t("projects.cards.1.title"),
      subtitulo: t("projects.cards.1.subtitle"),
      imagem: projeto1,
      icone: user,
    },
    {
      titulo: t("projects.cards.2.title"),
      subtitulo: t("projects.cards.2.subtitle"),
      imagem: projeto3,
      icone: point,
    },
    {
      titulo: t("projects.cards.3.title"),
      subtitulo: t("projects.cards.3.subtitle"),
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
              {t("projects.titleLine1")}
              <br />
              {t("projects.titleLine2")}
            </h2>

            <p>
              {t("projects.description")}
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
                    <img
                      src={item.icone}
                      alt=""
                    />
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