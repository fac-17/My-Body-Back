import React from "react";
import "./MyAppointment.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import afterAudio from "../assets/audio/afterAudio.mp3";
import duringAudio from "../assets/audio/duringAudio.wav";
import PreparationTips from "./Partials/PreparationTips.jsx";
import { motion } from "framer-motion";
import { content } from "./MyAppointmentCopy.json";

const MyAppointment = ({ setMenuDisplay }) => {
  React.useEffect(() => {
    setMenuDisplay(true);
  }, [setMenuDisplay]);
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
            <p>{content[0].text}</p>
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
            <p id="my-appointment__page-two">{content[1].text}</p>
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
            <p id="my-appointment__page-three">{content[2].text}</p>
          </section>

          <section
            className={
              appointmentSection === 4
                ? "my-appointment__section_active"
                : "my-appointment__section"
            }
          >
            <h2>Your Appointment</h2>
            <p id="my-appointment__page-four">{content[3].text}</p>
            <form id="my-appointment__card">
              <div className="my-appointment__card">
                <p>{content[3].cardContent.context}</p>
                <ul>
                  {content[3].cardContent.listItems.map(item => (
                    <li>{item.text}</li>
                  ))}
                </ul>
              </div>
              <button className="my-appointment__button">Download</button>
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
            <h3 className="my-appointment__subtitle">
              {" "}
              Please listen to this message from My Body Back
            </h3>
            <audio controls>
              <source src={afterAudio} type="audio/mp3" />
            </audio>

            <p className="my-appointment__notes-of-love">
              See the <Link to="/notesoflove">Notes of LOVE</Link> section for
              some encouraging messages
            </p>
          </section>
        </section>
      </Swipeable>
      <div className="my-appointment__circle__container">
        {circleArray.map((circle, i) => (
          <span
            className={
              i === appointmentSection
                ? "my-appointment__circle__active"
                : "my-appointment__circle"
            }
          />
        ))}
      </div>
      <span onClick={swipingRight} className="my-appointment__arrow__left">
        {" "}
        ⟵{" "}
      </span>
      <span onClick={swipingLeft} className="my-appointment__arrow__right">
        {" "}
        ⟶{" "}
      </span>
    </section>
  );
};

export default MyAppointment;
