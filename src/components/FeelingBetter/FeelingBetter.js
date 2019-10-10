import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./FeelingBetter.css";

const FeelingBetter = () => {
  const [currentPage, setCurrentPage] = React.useState("home");

  if (currentPage === "home") {
    return (
      <section id="feeling-better__container">
        <Header />
        <section id="feeling-better__body">
          <h2>Feeling Better</h2>
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
        </section>
        <Menu />
      </section>
    );
  }
};

export default FeelingBetter;
