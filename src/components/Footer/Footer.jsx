import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__card">

        <h2 className="footer__title">
          Navigation
        </h2>

        <div className="footer__content">

          {/* MENU */}
          <div className="footer__column footer__menu">
            <h3>MENU</h3>

            <nav>
              <a href="/">HOME</a>
              <a href="/about">ABOUT</a>
              <a href="/contact">CONTACT</a>
            </nav>
          </div>

          {/* CHANNELS */}
          <div className="footer__column footer__channels">
            <h3>CHANNELS</h3>

            <div className="footer__channel-list">
              <p>Mon - Thu: 07:00 AM - 06:00 PM (FUSO)</p>
              <p>Fri: 07:00 AM - 05:00 PM</p>
              <p>Sat - Sun: Closed</p>
              <p>Alameda Prof. Lucas Nogueira Garcez, 5220,</p>
              <p>Atibaia - SP, Brazil</p>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer__column footer__links">
            <h3>LINKS</h3>

            <nav>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a href="mailto:">
                E-mail
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}