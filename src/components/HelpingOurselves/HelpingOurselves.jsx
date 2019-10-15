import React from "react";
import "./HelpingOurselves.css";
import Header from "../Header/Header.jsx";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import emotions from "../assets/icons/emotions.svg";
import feelingbetter from "../assets/icons/feelingbetter.svg";
import { Swipeable } from "react-swipeable";



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
        <p className="helping-ourselves__text">
        In this section we explain a bit about what happens in the brain when you are faced with a triggering situation, like thinking about a cervical screening.
It's normal to find it difficult to attend a smear test. No-one likes going for their cervical screening and after experiencing sexual assault, your emotions and body may react strongly against it.
        </p>
        <section id="helping-ourselves__icon-container">
          <Link to="/emotions">
            <figure>
              <img
                src={emotions}
                alt="our emotions"
                className="helping-ourselves__icon__right"
              />
              <figcaption className="helping-ourselves__image-text">Our Emotions</figcaption>
            </figure>


          </Link>
          <Link to="/feelingbetter">
            <figure>
              <img
                src={feelingbetter}
                alt="feeling better"
                className="helping-ourselves__icon__left"
              />
              <figcaption className="helping-ourselves__image-text" >Feeling Better</figcaption>
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
