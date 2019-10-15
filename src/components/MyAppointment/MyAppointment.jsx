import React from "react";
import "./MyAppointment.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import afterAudio from "../assets/audio/afterAudio.mp3";
import duringAudio from "../assets/audio/duringAudio.wav";
import PreparationTips from "./Partials/PreparationTips.jsx";
import MyAppointmentCopy from "./MyAppointmentCopy.json";

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
            <p>{MyAppointmentCopy.pageOneContent[0].text}</p>
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
              {MyAppointmentCopy.pageTwoContent[0].text}
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
              {MyAppointmentCopy.pageThreeContent[0].text}
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
              {MyAppointmentCopy.pageFourContent[0].text}
            </p>
            <form id="my-appointment__card">
              <div className="my-appointment__card">
                <p>
                  {MyAppointmentCopy.pageFourContent[0].cardContent[0].context}
                </p>
                <ul>
                  {MyAppointmentCopy.pageFourContent[0].cardContent[0].listItems.map(
                    item => (
                      <li>{item.text}</li>
                    )
                  )}
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
