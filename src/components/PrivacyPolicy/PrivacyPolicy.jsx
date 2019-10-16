import React from "react";
import { Link } from "react-router-dom";
import butterfly from "../assets/icons/butterfly-first-page.svg";
import "./PrivacyPolicy.css";

const PrivacyPolicy = ({menuDisplay, setMenuDisplay}) => {
  console.log(menuDisplay)
  return (
    <div className="privacy__container">
      <h2 className="privacy__title">A note about privacy</h2>
      <p className="privacy__text">
        Welcome to the My Body Back app. Before you begin to explore, we want to
        assure you that this app does not collect any personally-identifiable
        information and does not use cookies to track users.
      </p>
      <span className="privacy__instructions">
        Click the butterfly to begin.
      </span>
      <Link to="/welcome">
        <img
          onClick={() => setMenuDisplay(true)}
          data-testid="butterfly-test-id"
          className="privacy__button"
          src={butterfly}
          alt="Go to welcome page"
        />
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
