import { useTranslation } from "react-i18next";
import "./Values.scss";

import ball1 from "../../../assets/imgs/ball1.png";
import ball2 from "../../../assets/imgs/ball2.png";
import ball3 from "../../../assets/imgs/ball3.png";
import ball4 from "../../../assets/imgs/ball4.png";
import ball5 from "../../../assets/imgs/ball5.png";

function Values() {
  const { t } = useTranslation();

  const values = [
    {
      title: t("values.items.0.title"),
      text: t("values.items.0.text"),
      image: ball1,
    },
    {
      title: t("values.items.1.title"),
      text: t("values.items.1.text"),
      image: ball2,
    },
    {
      title: t("values.items.2.title"),
      text: t("values.items.2.text"),
      image: ball3,
    },
    {
      title: t("values.items.3.title"),
      text: t("values.items.3.text"),
      image: ball4,
    },
    {
      title: t("values.items.4.title"),
      text: t("values.items.4.text"),
      image: ball5,
    },
  ];

  return (
    <section className="values">
      <div className="values__container">
        <h2 className="values__title">
          {t("values.title")}
        </h2>

        <div className="values__list">
          {values.map((value, index) => (
            <article
              className={`values__item ${
                index % 2 !== 0
                  ? "values__item--reverse"
                  : ""
              }`}
              key={value.title}
            >
              <div className="values__image-wrapper">
                <img
                  src={value.image}
                  alt={value.title}
                  className="values__image"
                />
              </div>

              <div className="values__content">
                <h3 className="values__heading">
                  {value.title}
                </h3>

                <p className="values__text">
                  {value.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;