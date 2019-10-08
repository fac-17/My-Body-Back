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

  React.useEffect(() => {
    const image = document.querySelectorAll(".my-appointment__section");
    const imageArray = Array.from(image);

    imageArray.forEach(element => {
      element.id === index
        ? element.classList.add("active")
        : element.classList.remove("active");
    });
  }, [index]);

  const swipingLeft = () => {
    index < 4 ? setIndex(index + 1) : setIndex(index);
    console.log(index);
  };

  const swipingRight = () => {
    index > 0 ? setIndex(index - 1) : setIndex(index);
    console.log(index);
  };

  return (
    <section id="my-appointment__container">
      <Header />
      <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
        <section className="my-appointment__section" id="0"></section>
        <section className="my-appointment__section" id="1"></section>
        <section className="my-appointment__section" id="2"></section>
        <section className="my-appointment__section" id="3"></section>
        <section className="my-appointment__section" id="4"></section>
      </Swipeable>
      <Menu />
    </section>
  );
};

export default MyAppointment;
