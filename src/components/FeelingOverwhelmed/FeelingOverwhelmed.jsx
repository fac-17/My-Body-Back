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
          Are your emotions taking over you like a wave?
          You're not alone. Here you can find support from professionals and encourage
          yourself with Notes of Love. 
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
