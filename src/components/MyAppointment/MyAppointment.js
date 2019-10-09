import React from "react";
import "./MyAppointment.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
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
      element.id == index
        ? element.classList.add("my-appointment__section-active")
        : element.classList.remove("my-appointment__section-active");
    });
  }, [index]);

  const swipingLeft = () => {
    index < 4 ? setIndex(index + 1) : setIndex(index);
  };

  const swipingRight = () => {
    index > 0 ? setIndex(index - 1) : setIndex(index);
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
        <section className="my-appointment__section" id="2">
          <h2>Your Appointment</h2>
          <p>
            If you would like the smear taker to know that you have been
            sexually assaulted, but don’t want to say it out loud, then you
            could show them our appointment card on your phone. If these words
            aren’t right for you, you’ll be able to edit it and save it to your
            device.
          </p>
        </section>
        <section className="my-appointment__section" id="3">
          <h2>Your Appointment</h2>
          <p>
            This appointment may be difficult for me. I’ve sought information
            from My Body Back Project, which works with people who have
            experienced sexual assault to access healthcare. What might be
            helpful for me today:
          </p>
          <form id="my-appointment__card">
            <p>
              Please ask me what I need: - I may need more time than usual.
              Please take this slowly. Please stop if I say stop. - I have been
              practising some strategies that may help with this appointment. -
              If I look really scared or upset, please stop and ask how and if
              we should continue. - At the end, please check that I’m safe to
              go. - If I am very upset, please help me to call a friend or
              family member."
            </p>
            <button>Download</button>
          </form>
        </section>
        <section className="my-appointment__section" id="4">
          <h2>After your appointment</h2>
          <audio>Audio here</audio>
          <p>See the Notes of LOVE section before your appointment</p>
        </section>
      </Swipeable>
      <Menu />
    </section>
  );
};

export default MyAppointment;
