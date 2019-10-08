import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import brain from "../assets/brain.svg";
import wave from "../assets/wave.svg";
import flower from "../assets/flower.svg";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome__container">
      <Header />
      <h2 className="welcome__header" data-testid="welcome-header">
        Welcome
      </h2>
      <p className="welcome__text__main">
        {" "}
        Welcome to the My Body Back app! Here's an overview of how to navigate
        the site.{" "}
      </p>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={brain} />
        <p className="welcome__text">
          This icon will take you to the "Support & Techniques" section{" "}
        </p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={wave} />
        <p className="welcome__text">
          This icon will take you to the "Feeling Overwhelmed" section{" "}
        </p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={flower} />
        <p className="welcome__text">
          This icon will take you to the "My Appointment" section{" "}
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Welcome;
