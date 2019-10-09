import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import email from "../assets/email-mbb.svg";
import call from "../assets/call-mbb.svg";

import './HelpSupport.css';

const HelpSupport = () => {
  return (
    <div className="help-support__container">
      <Header />
      <h2> Help & Support </h2>
      <p className="help-support__main-text">
        Please see your GP if you feel that you need support with any aspect of
        your mental or physical health.
      </p>
      <p className="help-support__sub-text">
        If you're having any thoughts of hurting yourself or someone else,
        please see your GP urgently. In an immediate crisis, you can seek
        help by calling 999 or going to the A&E
        department.
      </p>
      <p className="help-support__small-text">
        Below you’ll find a list of other trusted services you may find useful.
      </p>
      <ul className="help-support__list">
        <li className="help-support__list-item">
          <span className="help-supoprt__text" />
          <a href="#">
            <img src="#" className="help-support__icon" />
          </a>
        </li>
      </ul>
      <Menu />
    </div>
  );
};

export default HelpSupport;
