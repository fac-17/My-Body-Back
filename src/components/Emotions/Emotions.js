import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import traumaVideo from "../assets/Trauma.mp4";

const Emotions = () => {
  return (
    <section id="emotions__container">
      <Header />
      <section id="emotions__body">
        <h2> Trauma, the Brain and our Emotions </h2>
        <section id="emotions__section-one">
          <h3>Why is this so difficult?!</h3>
          <figure>
            <video width="800" height="600" controls>
              <source src={traumaVideo} type="video/mp4" />
              Your browser does not support video.
            </video>
            <figcaption>
              A video about what happens in the brain when you are faced with a
              triggering situation, like thinking about a cervical screening
            </figcaption>
          </figure>
        </section>
      </section>
      <Menu />
    </section>
  );
};

export default Emotions;
