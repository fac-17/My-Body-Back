import React from "react";
import "./FeelingOverwhelmed.css";
import Header from "../Header/Header.jsx";
import notesOfLove from "../assets/icons/nol.svg";
import helpAndSupport from "../assets/icons/has.svg";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";

const FeelingOverwhelmed = ({ setMenuDisplay }) => {
  React.useEffect(() => {
    setMenuDisplay(true);
  }, [setMenuDisplay]);

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
          <h2 id="feeling-overwhelmed__title">Feeling Overwhelmed?</h2>
          <p>
            This app is not about making you go for a cervical screening before
            you're ready, but intends to help you to take small steps. You may
            even decide that you don’t want to have a smear test at all. You
            have the right to make this choice.
          </p>
          <section id="feeling-overwhelmed__icon-container">
            <Link to="/notesoflove" class="page-link">
              <figure>
                <img
                  src={notesOfLove}
                  alt="Notes of Love"
                  className="feeling-overwhelmed__icon"
                />
                <figcaption className="feeling-overwhelmed__image-text">
                  Notes Of Love
                </figcaption>
                <span className="feeling-overwhelmed__arrow"> ⟵ </span>
              </figure>
            </Link>
            <Link to="/helpandsupport" class="page-link">
              <figure>
                <img
                  src={helpAndSupport}
                  alt="Help and Support"
                  className="feeling-overwhelmed__icon"
                />
                <figcaption className="feeling-overwhelmed__image-text">
                  Help & Support
                </figcaption>
                <span className="feeling-overwhelmed__arrow"> ⟶ </span>
              </figure>
            </Link>
          </section>
        </section>
      </Swipeable>
    </section>
  );
};

export default FeelingOverwhelmed;
