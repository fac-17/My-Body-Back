import React from "react";
import "./About.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about__container" data-testid="about-title">
        <h2 className="about__title">About this App</h2>
        <p className="about__text__main">
          This app is not about making you go for a cervical screening before
          you are ready, but about helping you to take
          <span className="about__text__bold">
            small steps, in your own time.
          </span>
          You may even decide that you don’t want to have a smear test at all.
          You have the right to make this choice.
        </p>
        <p className="about__text__main">
          Our app is all about helping you to be
          <span className="about__text__bold">
            more compassionate towards yourself.
          </span>
        </p>
        <p className="about__text__main">
          Many people who have experienced sexual assault
          <span className="about__text__bold">
            find the thought of going for a smear test very distressing.
          </span>
          Receiving reminder letters in the post and being asked why you haven’t
          had a screening can make people feel ashamed, embarrassed and
          uncomfortable. If you have felt this way, then please
          <span className="about__text__bold">
            remember that it is not your fault – other people find this hard
            too.
          </span>
        </p>

        <p className="about__text__main">Everything about</p>
        <Link to="/">
          <p>privacy</p>
        </Link>
      </div>
    </div>
  );
};

export default About;
