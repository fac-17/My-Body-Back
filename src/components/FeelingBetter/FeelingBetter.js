import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./FeelingBetter.css";
import Soothing from "./Partials/Soothing";
import Compassion from "./Partials/Compassion";
import Coping from "./Partials/Coping";

const FeelingBetter = () => {
  const [currentPage, setCurrentPage] = React.useState("home");

  if (currentPage === "home") {
    return (
      <section id="feeling-better__container">
        <Header />
        <section id="feeling-better__body">
          <h2>Feeling Better</h2>
          <button
            className="feeling-better__button"
            id="soothing"
            onClick={() => setCurrentPage("soothing")}
          >
            Soothing
          </button>
          <button
            className="feeling-better__button"
            id="compassion"
            onClick={() => setCurrentPage("compassion")}
          >
            Compassion
          </button>
          <button
            className="feeling-better__button"
            id="coping"
            onClick={() => setCurrentPage("coping")}
          >
            Coping
          </button>
          <Coping />
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
            home
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
            home
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
            home
          </button>
        </section>
        <Menu />
      </section>
    );
  }
};

export default FeelingBetter;
