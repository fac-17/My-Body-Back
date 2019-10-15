import React from "react";
import "./FeelingOverwhelmed.css";
import Header from "../Header/Header.jsx";
import Menu from "../Menu/Menu";
import notesOfLove from "../assets/icons/nol.svg";
import helpAndSupport from "../assets/icons/has.svg";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";

const FeelingOverwhelmed = () => {

  const swipingLeft = () => {
    window.location.assign("/helpandsupport");
  };
  const swipingRight = () => {
   window.location.assign("/notesoflove");
  };
  return (
    <section id="feeling-overwhelmed__container">
      <Header />
      <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
      <section id="feeling-overwhelmed__body">
        <h2 id="feeling-overwhelmed__title">Feeling Overwhelmed</h2>
        <p>
          This app is not about making you go for a cervical screening before
          you are ready, but about helping you to take small steps, in your own
          time. You may even decide that you don’t want to have a smear test at
          all. You have the right to make this choice.
        </p>
        <section id="feeling-overwhelmed__icon-container">
          <figure>
            <Link to="/notesoflove">
              <img
                src={notesOfLove}
                alt="Notes of Love"
                className="feeling-overwhelmed__icon"
              />
              <figcaption>Notes Of Love</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/helpandsupport">
              <img
                src={helpAndSupport}
                alt="Help and Support"
                className="feeling-overwhelmed__icon"
              />
              <figcaption>Help & Support</figcaption>
            </Link>
          </figure>
        </section>
      </section>
      </Swipeable>

      <Menu />
    </section>
  );
};

export default FeelingOverwhelmed;
