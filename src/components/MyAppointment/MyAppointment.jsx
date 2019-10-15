import React from "react";
import "./MyAppointment.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import afterAudio from "../assets/audio/afterAudio.mp3";
import duringAudio from "../assets/audio/duringAudio.wav";
import PreparationTips from "./Partials/PreparationTips.jsx";
import { motion } from "framer-motion";

const MyAppointment = () => {
  const [appointmentSection, setAppointmentSection] = React.useState(0);
  const circleArray = [1, 2, 3, 4, 5, 6];

  const swipingLeft = () => {
    appointmentSection < 5
      ? setAppointmentSection(appointmentSection + 1)
      : setAppointmentSection(appointmentSection);
  };

  const swipingRight = () => {
    appointmentSection > 0
      ? setAppointmentSection(appointmentSection - 1)
      : setAppointmentSection(appointmentSection);
  };

  return (
    <section id="my-appointment__container">
      <Header />
      <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
        <section className="my-appointment__body">
          <section
            className={
              appointmentSection === 0
                ? "my-appointment__section_active"
                : "my-appointment__section"
            }
          >
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
          <section
            className={
              appointmentSection === 1
                ? "my-appointment__section_active"
                : "my-appointment__section"
            }
          >
            <h2>Preparation</h2>
            <PreparationTips />
            <p>Tap for next Tip</p>
          </section>
          <section
            className={
              appointmentSection === 2
                ? "my-appointment__section_active"
                : "my-appointment__section"
            }
          >
            <h2>During Your Appointment</h2>
            <p id="my-appointment__page-two">
              Louise Cadman, Nurse Specialist outlines some practical tips for
              your screening appointment.
            </p>
            <audio controls>
              <source src={duringAudio} type="audio/wav" />
            </audio>
          </section>
          <section
            className={
              appointmentSection === 3
                ? "my-appointment__section_active"
                : "my-appointment__section"
            }
          >
            <h2>Your Appointment</h2>
            <p id="my-appointment__page-three">
              If you would like the smear taker to know that you have been
              sexually assaulted, but don’t want to say it out loud, then you
              could show them our appointment card on your phone. If these words
              aren’t right for you, you’ll be able to edit it and save it to
              your device.
            </p>
          </section>

          <section
            className={
              appointmentSection === 4
                ? "my-appointment__section_active"
                : "my-appointment__section"
            }
          >
            <h2>Your Appointment</h2>
            <p id="my-appointment__page-four">
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
              <motion.button className="my-appointment__button"
    style={MyAppointment.css}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
  >Download
              {/* <button className="my-appointment__button">Download</button> */}
              </motion.button>
            </form>
          </section>

          <section
            className={
              appointmentSection === 5
                ? "my-appointment__section_active"
                : "my-appointment__section"
            }
          >
            <h2>After your appointment</h2>
            <audio controls>
              <source src={afterAudio} type="audio/mp3" />
            </audio>

            <p>
              See the <Link to="/notesoflove">Notes of LOVE</Link> section
              before your appointment
            </p>
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
          />
        ))}
      </div>
      <Menu />
    </section>
  );
};

export default MyAppointment;
