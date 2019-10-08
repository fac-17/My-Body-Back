import React from "react";
import "./FeelingOverwhelmed.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import notesOfLove from "../assets/nol.svg";
import helpAndSupport from "../assets/has.svg";
import { Link } from "react-router-dom";

const FeelingOverwhelmed = () => {
  return (
    <section id="feeling-overwhelmed__container">
      <Header />
      <section id="feeling-overwhelmed__body">
        <h2 id="feeling-overwhelmed__title">Feeling Overwhelmed</h2>
        <p>
          This app is not about making you go for a cervical screening before
          you are ready, but about helping you to take small steps, in your own
          time. You may even decide that you don’t want to have a smear test at
          all. You have the right to make this choice.
        </p>
        <figure>
          <Link to="/notesoflove">
            <img src={notesOfLove} alt="Notes of Love" />
            <figcaption>Notes Of Love</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to="/helpandsupport">
            <img src={helpAndSupport} alt="Help and Support" />
            <figcaption>Help And Support</figcaption>
          </Link>
        </figure>
      </section>

      <Menu />
    </section>
  );
};

export default FeelingOverwhelmed;
