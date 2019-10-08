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

  const swipingLeft = () => {
    setIndex(index + 1);
    console.log(index);
  };

  const swipingRight = () => {
    setIndex(index - 1);
    console.log(index);
  };

  return (
    <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
      You can swipe here <p>Index is {index}</p>
    </Swipeable>
  );
};

export default MyAppointment;
