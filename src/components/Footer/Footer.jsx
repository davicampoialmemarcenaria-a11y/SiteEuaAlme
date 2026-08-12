import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__card">

        <h2 className="footer__title">
          {t("footer.title")}
        </h2>

        <div className="footer__content">

          {/* MENU */}
          <div className="footer__column footer__menu">

            <h3>
              {t("footer.menu.title")}
            </h3>

            <nav>
              <Link to="/">
                {t("footer.menu.home")}
              </Link>

              <Link to="/about">
                {t("footer.menu.about")}
              </Link>

              <Link to="/contact">
                {t("footer.menu.contact")}
              </Link>
            </nav>

          </div>

          {/* CHANNELS */}
          <div className="footer__column footer__channels">

            <h3>
              {t("footer.channels.title")}
            </h3>

            <div className="footer__channel-list">

              <p>
                {t("footer.channels.hours.week")}
              </p>

              <p>
                {t("footer.channels.hours.friday")}
              </p>

              <p>
                {t("footer.channels.hours.weekend")}
              </p>

              <p>
                {t("footer.channels.address.line1")}
              </p>

              <p>
                {t("footer.channels.address.line2")}
              </p>

            </div>

          </div>

          {/* LINKS */}
          <div className="footer__column footer__links">

            <h3>
              {t("footer.links.title")}
            </h3>

            <nav>

              <a
                href="https://wa.me/16892762034"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.links.whatsapp")}
              </a>

              <a
                href="https://www.instagram.com/alme.woodworks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.links.instagram")}
              </a>

              <a href="mailto:contact@almewoodworks.com">
                {t("footer.links.email")}
              </a>

          

            </nav>

          </div>

        </div>

      </div>
    </footer>
  );
}