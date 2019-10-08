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
        <section className="my-appointment__section" id="0">
          <h2>My Appointment</h2>
          <p>
            You may find that just thinking about the possibility of a smear
            test triggers some difficult memories. If these feel particularly
            distressing it is important to speak to someone you trust. Please
            check out our ‘I need help’ page for some suggestions of places you
            can contact for support. Find here some practical tips to prepare
            for your appointment.
          </p>
        </section>
        <section className="my-appointment__section" id="1">
          <h2>Preparation</h2>
          <p>
            Firstly, and most importantly, you don’t have to do anything until
            you feel ready
          </p>
        </section>
        <section className="my-appointment__section" id="2"></section>
        <section className="my-appointment__section" id="3"></section>
        <section className="my-appointment__section" id="4"></section>
      </Swipeable>
      <Menu />
    </section>
  );
};

export default MyAppointment;
