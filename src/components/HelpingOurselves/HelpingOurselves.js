import React from "react";
import "./HelpingOurselves.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const HelpingOurselves = () => {
  return (
    <section id="helping-ourselves__container">
      <Header />
      <section id="helping-ourselves__body">
        <h2 id="helping-ourselves__title">Helping Ourselves</h2>
        <p>
          ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,
        </p>
        <section id="helping-ourselves__icon-container"></section>
      </section>
    </section>
  );
};

export default HelpingOurselves;
