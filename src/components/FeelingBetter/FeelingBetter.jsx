import React from "react";
import Header from "../Header/Header.jsx";
import Menu from "../Menu/Menu";
import "./FeelingBetter.css";
import Soothing from "./Partials/Soothing";
import Compassion from "./Partials/Compassion";
import Coping from "./Partials/Coping";
import Fade from "react-reveal/Fade";


const FeelingBetter = () => {
  const [currentPage, setCurrentPage] = React.useState("home");

  if (currentPage === "home") {
    return (
      <section id="feeling-better__container">
        <Header />
        <section id="feeling-better__body">
          <h2>Feeling Better</h2>
          <Fade bottom>
          <button
            className="feeling-better__button"
            id="soothing"
            onClick={() => setCurrentPage("soothing")}
          >
            Soothing
          </button>
          </Fade>
          <Fade delay={0.500}>
          <button
            className="feeling-better__button"
            id="compassion"
            onClick={() => setCurrentPage("compassion")}
          >
            Compassion
          </button>
          </Fade>
          <Fade top>
          <button
            className="feeling-better__button"
            id="coping"
            onClick={() => setCurrentPage("coping")}
          >
            Coping
          </button>
          </Fade>
        </section>
        <Menu />
      </section>
    );
  } else if (currentPage === "soothing") {
    return (
      <section id="feeling-better__container">
        <Header />
        <section id="feeling-better__body">
          <h2>Activating your Soothing System</h2>
          <button
            className="feeling-better__button"
            id="home"
            onClick={() => setCurrentPage("home")}
          >
            Feeling better
          </button>
          <Soothing />
        </section>
        <Menu />
      </section>
    );
  } else if (currentPage === "compassion") {
    return (
      <section id="feeling-better__container">
        <Header />
        <section id="feeling-better__body">
          <h2>Building Self-Compassion</h2>
          <button
            className="feeling-better__button"
            id="home"
            onClick={() => setCurrentPage("home")}
          >
            Feeling better
          </button>
          <Compassion />
        </section>
        <Menu />
      </section>
    );
  } else if (currentPage === "coping") {
    return (
      <section id="feeling-better__container">
        <Header />
        <section id="feeling-better__body">
          <h2>
            Tips for coping with anxiety, panic, flashbacks and dissociation
          </h2>
          <button
            className="feeling-better__button"
            id="home"
            onClick={() => setCurrentPage("home")}
          >
            Feeling better
          </button>
          <Coping />
        </section>
        <Menu />
      </section>
    );
  }
};

export default FeelingBetter;
