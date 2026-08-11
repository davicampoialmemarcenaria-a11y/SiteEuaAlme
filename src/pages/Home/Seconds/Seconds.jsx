import { useTranslation } from "react-i18next";

import "./Seconds.scss";

import desenho from "../../../assets/imgs/card1home.png";

export default function Seconds() {
  const { t } = useTranslation();

  return (
    <section className="seconds">

      <div className="seconds__container">

        <div className="seconds__left">

          <p>
            {t("seconds.paragraph1.before")}
            <strong>{t("seconds.paragraph1.brand")}</strong>
            {t("seconds.paragraph1.after")}
          </p>

          <p>
            {t("seconds.paragraph2")}
          </p>

          <p>
            {t("seconds.paragraph3")}
          </p>

          <p>
            {t("seconds.paragraph4")}
          </p>

        </div>

        <div className="seconds__right">

          <div className="seconds__card">

            <img
              src={desenho}
              alt={t("seconds.imageAlt")}
            />

            <h2>
              {t("seconds.cardTitleLine1")}
              <br />
              {t("seconds.cardTitleLine2")}
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}