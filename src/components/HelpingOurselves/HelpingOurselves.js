import React from "react";
import "./HelpingOurselves.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import emotions from "../assets/emotions.svg";
import feelingbetter from "../assets/feelingbetter.svg";

const HelpingOurselves = () => {
  return (
    <section id="helping-ourselves__container">
      <Header />
      <section id="helping-ourselves__body">
        <h2 id="helping-ourselves__title">Helping Ourselves</h2>
        <p>
          ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,
        </p>
        <section id="helping-ourselves__icon-container">
          <Link to="/">
            <figure>
              <img
                src={emotions}
                alt="our emotions"
                className="helping-ourselves__icon"
              />
              <figcaption>Our Emotions</figcaption>
            </figure>
          </Link>
          <Link to="/">
            <figure>
              <img
                src={feelingbetter}
                alt="feeling better"
                className="helping-ourselves__icon"
              />
              <figcaption>Feeling Better</figcaption>
            </figure>
          </Link>
        </section>
      </section>
      <Menu />
    </section>
  );
};

export default HelpingOurselves;
