import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import "./Forms.scss";

import logoForms from "../../../assets/imgs/logoforms.png";

export default function Forms() {
  const { t } = useTranslation();

  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");

      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");
    }
  };

  return (
    <section className="contact-form-section">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="contact-form-header">

        <h2>
          {t("contactForm.title")}
        </h2>

        <p>
          {t("contactForm.description")}
        </p>

      </div>


      {/* =====================================================
          FORM CONTAINER
      ===================================================== */}

      <div className="contact-form-wrapper">

        {/* ===================================================
            LEFT — FORM
        =================================================== */}

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >

          {/* NAME */}

          <div className="contact-form__field">

            <label htmlFor="name">
              {t("contactForm.fields.name.label")}
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder={t("contactForm.fields.name.placeholder")}
              required
            />

          </div>


          {/* SUBJECT */}

          <div className="contact-form__field">

            <label htmlFor="subject">
              {t("contactForm.fields.subject.label")}
            </label>

            <input
              id="subject"
              type="text"
              name="subject"
              placeholder={t("contactForm.fields.subject.placeholder")}
              required
            />

          </div>


          {/* EMAIL */}

          <div className="contact-form__field">

            <label htmlFor="email">
              {t("contactForm.fields.email.label")}
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder={t("contactForm.fields.email.placeholder")}
              required
            />

          </div>


          {/* MESSAGE */}

          <div className="contact-form__field contact-form__field--message">

            <label htmlFor="message">
              {t("contactForm.fields.message.label")}
            </label>

            <textarea
              id="message"
              name="message"
              placeholder={t("contactForm.fields.message.placeholder")}
              required
            />

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="contact-form__submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? t("contactForm.button.sending")
              : t("contactForm.button.send")}
          </button>

        </form>


        {/* ===================================================
            RIGHT — LOGO
        =================================================== */}

        <div className="contact-form__logo">

          <img
            src={logoForms}
            alt="Alme Woodworks"
          />

        </div>

      </div>


      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      {status === "success" && (

        <div className="contact-success-overlay">

          <div className="contact-success-modal">

            <button
              type="button"
              className="contact-success-modal__close"
              onClick={() => setStatus("")}
              aria-label={t("contactForm.modal.close")}
            >
              ×
            </button>


            {/* CHECK ICON */}

            <div className="contact-success-modal__icon">
              ✓
            </div>


            {/* TITLE */}

            <h3>
              {t("contactForm.success.title")}
            </h3>


            {/* MESSAGE */}

            <p>
              {t("contactForm.success.messageLine1")}
              <br />
              {t("contactForm.success.messageLine2")}
            </p>


            {/* DONE BUTTON */}

            <button
              type="button"
              className="contact-success-modal__button"
              onClick={() => setStatus("")}
            >
              {t("contactForm.success.button")}
            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          ERROR POPUP
      ===================================================== */}

      {status === "error" && (

        <div className="contact-success-overlay">

          <div className="contact-success-modal">

            <button
              type="button"
              className="contact-success-modal__close"
              onClick={() => setStatus("")}
              aria-label={t("contactForm.modal.close")}
            >
              ×
            </button>


            {/* ERROR ICON */}

            <div className="contact-success-modal__icon contact-success-modal__icon--error">
              !
            </div>


            {/* TITLE */}

            <h3>
              {t("contactForm.error.title")}
            </h3>


            {/* MESSAGE */}

            <p>
              {t("contactForm.error.messageLine1")}
              <br />
              {t("contactForm.error.messageLine2")}
            </p>


            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="contact-success-modal__button"
              onClick={() => setStatus("")}
            >
              {t("contactForm.error.button")}
            </button>

          </div>

        </div>

      )}

    </section>
  );
}