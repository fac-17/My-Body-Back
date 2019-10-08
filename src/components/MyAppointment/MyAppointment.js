import React from "react";
import "./MyAppointment.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { useSwipeable, Swipeable } from "react-swipeable";
import notesOfLove from "../assets/nol.svg";
import helpAndSupport from "../assets/has.svg";
import emotions from "../assets/emotions.svg";
import feelingbetter from "../assets/feelingbetter.svg";

const MyAppointment = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(
    () => {
      const image = document.querySelectorAll(".image-carousel");
      const imageArray = Array.from(image);

      imageArray.forEach(element => {
        element.id == index
          ? element.classList.add("image-carousel-active")
          : element.classList.remove("image-carousel-active");
      });
    },
    [index]
  );

  const swipingLeft = () => {
    index < 5 ? setIndex(index + 1) : setIndex(index);
    console.log(index);
  };

  const swipingRight = () => {
    index > 0 ? setIndex(index - 1) : setIndex(index);
    console.log(index);
  };

  return (
    <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
      <img className="image-carousel" id="0" src={notesOfLove} />
      <img className="image-carousel" id="1" src={helpAndSupport} />
      <img className="image-carousel" id="2" src={emotions} />
      <img className="image-carousel" id="3" src={feelingbetter} />
    </Swipeable>
  );
};

export default MyAppointment;
