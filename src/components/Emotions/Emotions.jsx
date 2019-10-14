import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import traumaVideo from "../assets/Trauma.mp4";
import emotionsVideo from "../assets/Emotions.mp4";
import "./Emotions.css";

const Emotions = () => {
  return (
    <section id="emotions__container">
      <Header />
      <section id="emotions__body">
        <h2> Trauma, the Brain and our Emotions </h2>
        <section id="emotions__section-one">
          <h3>Why is this so difficult?!</h3>
          <figure className="emotions__figure">
            <div className="emotions__video-wrapper">
              <video className="emotions__video" controls>
                <source src={traumaVideo} type="video/mp4" />
                Your browser does not support video.
              </video>
            </div>
            <figcaption>
              A video about what happens in the brain when you are faced with a
              triggering situation, like thinking about a cervical screening.
            </figcaption>
          </figure>
        </section>

        <section id="emotions__section-two">
          <h3>How our emotions work</h3>
          <figure className="emotions__figure">
            <div className="emotions__video-wrapper">
              <video className="emotions__video" controls>
                <source src={emotionsVideo} type="video/mp4" />
                Your browser does not support video.
              </video>
            </div>
            <figcaption>
              Clinical Psychologist Dr Jane Vosper talks about the brain’s
              emotion systems.
            </figcaption>
          </figure>
        </section>
      </section>
      <Menu />
    </section>
  );
};

export default Emotions;
