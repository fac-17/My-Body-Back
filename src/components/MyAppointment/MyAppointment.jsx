import React from "react";
import "./MyAppointment.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import { preparationContent } from "./preparationTips.json";

const MyAppointment = () => {
  console.log(preparationContent[0]);
  const [appointmentSection, setAppointmentSection] = React.useState(0);
  let currentPreparationTipIndex = 0;

  React.useEffect(() => {
    const image = document.querySelectorAll(".my-appointment__section");
    const imageArray = Array.from(image);

    imageArray.forEach(element => {
      element.id == appointmentSection
        ? element.classList.add("my-appointment__section-active")
        : element.classList.remove("my-appointment__section-active");
    });
  }, [appointmentSection]);

  // const imageArray = [ notesOfLove, helpAndSupport, emotions, feelingbetter];
  const circleArray = [1, 2, 3, 4, 5];

  const swipingLeft = () => {
    appointmentSection < 4
      ? setAppointmentSection(appointmentSection + 1)
      : setAppointmentSection(appointmentSection);
  };

  const swipingRight = () => {
    appointmentSection > 0
      ? setAppointmentSection(appointmentSection - 1)
      : setAppointmentSection(appointmentSection);
  };

  const nextTip = () => {
    if (currentPreparationTipIndex < preparationContent.length) {
      currentPreparationTipIndex++;
    } else {
      currentPreparationTipIndex = 0;
    }
    console.log(preparationContent[currentPreparationTipIndex].tip);
  };

  return (
    <section id="my-appointment__container">
      <Header />
      <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
        <section className="my-appointment__body">
          <section className="my-appointment__section" id="0">
            <h2>My Appointment</h2>
            <p>
              You may find that just thinking about the possibility of a smear
              test triggers some difficult memories. If these feel particularly
              distressing it is important to speak to someone you trust. Please
              check out our ‘I need help’ page for some suggestions of places
              you can contact for support. Find here some practical tips to
              prepare for your appointment.
            </p>
          </section>
          <section className="my-appointment__section" id="1">
            <h2>Preparation</h2>
            <div id="my-appointment__page-one" onClick={nextTip}>
              <p>{preparationContent[currentPreparationTipIndex].tip}</p>
            </div>
          </section>
          <section className="my-appointment__section" id="2">
            <h2>Your Appointment</h2>
            <p id="my-appointment__page-two">
              If you would like the smear taker to know that you have been
              sexually assaulted, but don’t want to say it out loud, then you
              could show them our appointment card on your phone. If these words
              aren’t right for you, you’ll be able to edit it and save it to
              your device.
            </p>
          </section>

          <section className="my-appointment__section" id="3">
            <h2>Your Appointment</h2>
            <p id="my-appointment__page-three">
              This appointment may be difficult for me. I’ve sought information
              from My Body Back Project, which works with people who have
              experienced sexual assault to access healthcare. What might be
              helpful for me today:
            </p>
            <form id="my-appointment__card">
              <div className="my-appointment__card">
                <p>Please ask me what I need:</p>
                <ul>
                  <li>I may need more time than usual</li>
                  <li>Please take this slowly. Please stop if I say stop</li>
                  <li>
                    I have been practising some strategies that may help with
                    this appointment
                  </li>
                  If I look really scared or upset, please stop and ask how and
                  if we should continue.
                  <li>At the end, please check that I’m safe to go.</li>
                  <li>
                    If I am very upset, please help me to call a friend or
                    family member
                  </li>
                </ul>
              </div>
              <button className="my-appointment__button">Download</button>
            </form>
          </section>

          <section className="my-appointment__section" id="4">
            <h2>After your appointment</h2>
            <audio>Audio here</audio>
            <Link to="/notesoflove">
              <p>See the Notes of LOVE section before your appointment</p>
            </Link>
          </section>
        </section>
      </Swipeable>
      <div className="my-appointment__circle__container">
        {circleArray.map((circle, i) => (
          <span
            className={
              i == appointmentSection
                ? "my-appointment__circle__active"
                : "my-appointment__circle"
            }
          ></span>
        ))}
      </div>
      <Menu />
    </section>
  );
};

export default MyAppointment;
