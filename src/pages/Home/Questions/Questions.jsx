import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Questions.scss";

function Questions() {
  const { t } = useTranslation();

  const questions = t("questions.items", {
    returnObjects: true,
  });

  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="questions">
      <div className="questions__container">
        {questions.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={question.number}
              className={`questions__item ${
                isOpen ? "questions__item--open" : ""
              }`}
            >
              <button
                type="button"
                className="questions__header"
                onClick={() => toggleQuestion(index)}
                aria-expanded={isOpen}
              >
                <div className="questions__heading">
                  <span className="questions__number">
                    {question.number}
                  </span>

                  <span className="questions__title">
                    {question.title}
                  </span>
                </div>

                <span
                  className="questions__icon"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className={`questions__content ${
                  isOpen ? "questions__content--open" : ""
                }`}
              >
                <div className="questions__content-inner">
                  <p>{question.text}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Questions;