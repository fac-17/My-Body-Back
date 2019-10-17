import React from "react";
import Header from "../Header/Header";
import brain from "../assets/icons/brain.svg";
import wave from "../assets/icons/wave.svg";
import flower from "../assets/icons/flower.svg";
import butterfly from "../assets/icons/butterfly.svg";

import "./Welcome.css";

const Welcome = ({ setMenuDisplay }) => {
  React.useEffect(() => {
    setMenuDisplay(true);
  }, [setMenuDisplay]);
  return (
    <div className="welcome__container">
      <Header />
      <h2 className="welcome__title" data-testid="welcome-title">
        Welcome
      </h2>
      <p className="welcome__text__main">
        Welcome to the My Body Back app. Here's an overview of how to navigate
        the site.
      </p>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={brain} alt="brain" />
        <p className="welcome__text">The "Helping Ourselves" section</p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={wave} alt="wave" />
        <p className="welcome__text">The "Feeling Overwhelmed" section</p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={flower} alt="flower" />
        <p className="welcome__text">The "My Appointment" section</p>
      </div>
      <div className="welcome__icon__container">
        <img
          className="welcome__icon welcome__icon__butterfly"
          src={butterfly}
          alt="butterly"
        />
        <p className="welcome__text">Find out more abot the app here</p>
      </div>
    </div>
  );
};

export default Welcome;
