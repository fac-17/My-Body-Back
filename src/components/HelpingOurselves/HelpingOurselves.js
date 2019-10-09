import React from "react";
import "./HelpingOurselves.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import emotions from "../assets/emotions.svg";
import feelingbetter from "../assets/feelingbetter.svg";
import { useSwipeable, Swipeable } from "react-swipeable";


const HelpingOurselves = () => {

const leftLink = () => {
  window.location.assign("/feelingbetter")
};
const rightLink = () => {
  window.location.assign("/emotions")
};

  return (
    <div>
      <Swipeable onSwipedLeft={leftLink} onSwipedRight={rightLink}>
    <section id="helping-ourselves__container">
      <Header />
      <section id="helping-ourselves__body">
        <h2 id="helping-ourselves__title">Helping Ourselves</h2>
        <p>
          ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,
        </p>
        <section id="helping-ourselves__icon-container">
          <Link to="/emotions">
            <figure>
              <img
                src={emotions}
                alt="our emotions"
                className="helping-ourselves__icon"
              />
              <figcaption>Our Emotions</figcaption>
            </figure>
          </Link>
          <Link to="/feelingbetter">
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
    </section>
      </Swipeable>
      <Menu />
</div>
  );
};

export default HelpingOurselves;
