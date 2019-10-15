import React from "react";
import { Swipeable } from "react-swipeable";
import "./Coping.css";
import groundingVideo from "../../assets/video/groundingVideo.mp4";
import groundingAudio from "../../assets/audio/groundingAudio.mp4";
import pmrAudio from "../../assets/audio/pmrAudio.m4a";


const Coping = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const video = document.querySelectorAll(".coping__section");
    const videoArray = Array.from(video);

    videoArray.forEach(element => {
      console.log(videoArray)
      element.id == index
      ? element.classList.add(".coping__section-active")
      : element.classList.remove(".coping__section-active");
  });
}, [index]);

  const swipingLeft = () => {
  index < 3 ? setIndex(index + 1) : setIndex(index);
};

const swipingRight = () => {
  index > 0 ? setIndex(index - 1) : setIndex(index);
};


  return (
  
  <section id="coping-section__container">
        <h3>Tips for coping with anxiety, panic, flashbacks and dissociation</h3>
        <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
      
        <section className="coping__section" id="0">
          <video controls width="300" height="200">
            <source src={groundingVideo} type="video/mp4" />
          </video>
        </section>

      <section className="coping__section" id="1">
      <audio controls>
        <source src={pmrAudio} type="audio/mp4" />
      </audio>
      </section>

      <section className="coping__section" id="2">
      <audio controls>
        <source src={groundingAudio} type="audio/mp4" />
      </audio>
      </section>

    </Swipeable>
    </section>
  );
};

export default Coping;
