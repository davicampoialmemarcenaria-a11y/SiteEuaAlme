import { useState } from "react";
import "./Questions.scss";

const questions = [
  {
    number: "01",
    title: "Contact",
    text: "Every great project starts with a conversation. Our team is ready to understand your project’s needs, answer your questions, and learn the details that make all the difference in the final result. During this stage, we align expectations, review the initial information, and gather everything needed to prepare your quote.",
  },
  {
    number: "02",
    title: "Estimate",
    text: "Once we understand your project, our team reviews all the information provided and develops a detailed estimate based on your needs, specifications, materials, and desired results.",
  },
  {
    number: "03",
    title: "Proposal & Agreement",
    text: "After the estimate is approved, we prepare the proposal and agreement, clearly outlining the scope, specifications, timelines, responsibilities, and conditions of the project.",
  },
  {
    number: "04",
    title: "Project approval",
    text: "With the proposal and agreement finalized, the project moves into the approval stage. We review all details together to ensure everything is aligned before production begins.",
  },
  {
    number: "05",
    title: "Pre-assembly",
    text: "Before delivery, every component goes through a careful pre-assembly process. This allows our team to verify measurements, finishes, fittings, and overall quality before the project reaches its final destination.",
  },
  {
    number: "06",
    title: "Shipping & Delivery",
    text: "Once everything has been checked and approved, your project is carefully prepared for shipping and delivery, ensuring that every component arrives safely and ready for the next stage.",
  },
];

function Questions() {
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

                <span className="questions__icon" aria-hidden="true">
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