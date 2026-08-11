import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Forms.scss";

import logoForms from "../../../assets/imgs/logoforms.png";

export default function Forms() {
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

        <h2>Contact Us</h2>

        <p>
          Want to learn more about how our service model works in the
          United States? Fill out the form, and our team will get in
          touch to walk you through the process, answer your questions,
          and show you how we can build a successful partnership together.
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
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />

          </div>


          {/* SUBJECT */}

          <div className="contact-form__field">

            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

          </div>


          {/* EMAIL */}

          <div className="contact-form__field">

            <label htmlFor="email">
              Email*
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />

          </div>


          {/* MESSAGE */}

          <div className="contact-form__field contact-form__field--message">

            <label htmlFor="message">
              Message*
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Message"
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
              ? "Sending..."
              : "Send Message"}
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
              aria-label="Close"
            >
              ×
            </button>


            {/* CHECK ICON */}

            <div className="contact-success-modal__icon">
              ✓
            </div>


            {/* TITLE */}

            <h3>
              Message sent!
            </h3>


            {/* MESSAGE */}

            <p>
              Thank you for reaching out to us.
              <br />
              Our team will get back to you soon.
            </p>


            {/* DONE BUTTON */}

            <button
              type="button"
              className="contact-success-modal__button"
              onClick={() => setStatus("")}
            >
              Done
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
              aria-label="Close"
            >
              ×
            </button>


            {/* ERROR ICON */}

            <div className="contact-success-modal__icon contact-success-modal__icon--error">
              !
            </div>


            {/* TITLE */}

            <h3>
              Something went wrong
            </h3>


            {/* MESSAGE */}

            <p>
              We couldn't send your message.
              <br />
              Please try again in a moment.
            </p>


            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="contact-success-modal__button"
              onClick={() => setStatus("")}
            >
              Try Again
            </button>

          </div>

        </div>
      )}

    </section>
  );
}