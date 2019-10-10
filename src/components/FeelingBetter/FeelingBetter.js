import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./FeelingBetter.css";

const FeelingBetter = () => {
  return (
    <section id="feeling-better__container">
      <Header />
      <section id="feeling-better__body">
        <h2>Feeling Better</h2>
      </section>
      <Menu />
    </section>
  );
};

export default FeelingBetter;
