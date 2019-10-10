import React from "react";
import groundingVideo from "../../assets/groundingVideo.mp4";
import groundingAudio from "../../assets/groundingAudio.mp4";
import pmrAudio from "../../assets/pmrAudio.m4a";

const Coping = () => {
  return (
    <section id="coping-section__container">
      <h3>Tips for coping with anxiety, panic, flashbacks and dissociation</h3>
      <video controls width="300" height="200">
        <source src={groundingVideo} type="video/mp4" />
      </video>
      <audio control>
        <source src={pmrAudio} type="audio/mp4" />
      </audio>
      <audio control>
        <source src={groundingAudio} type="audio/mp4" />
      </audio>
    </section>
  );
};

export default Coping;
