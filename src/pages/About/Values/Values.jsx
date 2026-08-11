import "./Values.scss";

import ball1 from "../../../assets/imgs/ball1.png";
import ball2 from "../../../assets/imgs/ball2.png";
import ball3 from "../../../assets/imgs/ball3.png";
import ball4 from "../../../assets/imgs/ball4.png";
import ball5 from "../../../assets/imgs/ball5.png";

const values = [
    {
        title: "EXCELLENCE",
        text: "We pursue the highest standards in everything we do, delivering an exceptional experience and setting the benchmark at every stage of the project. From planning and technical coordination to production and final delivery, we pay close attention to every detail, ensuring precision, consistency, and uncompromising quality that exceed expectations.",
        image: ball1,
    },
    {
        title: "COMMITMENT",
        text: "We stand by our word with responsibility, transparency, and respect, turning promises into results. We build trust through clear communication, accountability, and reliable execution, fostering long-term relationships with clients, architects, partners, and everyone involved in each project.",
        image: ball2,
    },
    {
        title: "CONTINUOUS IMPROVEMENT",
        text: "We are constantly learning, refining our processes, and embracing innovation to keep evolving. By challenging ourselves to improve every day, we enhance efficiency, strengthen collaboration, and deliver increasingly smarter, more reliable, and higher-quality solutions.",
        image: ball3,
    },
    {
        title: "LONGEVITY",
        text: "We think long-term, building lasting relationships and making sustainable decisions that stand the test of time. We value consistency, durability, and trust, creating partnerships and solutions designed to generate lasting value for both our clients and our business.",
        image: ball4,
    },
    {
        title: "GROWTH",
        text: "We believe in shared success, creating opportunities and generating value for our clients, team members, and partners. By growing together, encouraging collaboration, and investing in people and innovation, we create a stronger ecosystem where everyone has the opportunity to thrive and prosper.",
        image: ball5,
    },
];

function Values() {
    return (
        <section className="values">

            <div className="values__container">

                <h2 className="values__title">
                    Our values
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
                                    alt=""
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