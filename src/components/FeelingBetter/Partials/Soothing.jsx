import React from "react";
import soothingAudio from "../../assets/audio/Soothing.m4a";
import slowDownAudio from "../../assets/audio/slow-down.m4a";
import { Swipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import "./Soothing.css";

const Soothing = () => {
  const [soothingSection, setSoothingSection] = React.useState(0);
  const circleArray = [1, 2, 3, 4];

  const swipingLeft = () => {
    soothingSection < 3
      ? setSoothingSection(soothingSection + 1)
      : setSoothingSection(soothingSection);
  };

  const swipingRight = () => {
    soothingSection > 0
      ? setSoothingSection(soothingSection - 1)
      : setSoothingSection(soothingSection);
  };

  return (
    <section id="soothing-section__container">
      <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
        <section id="soothing-section-page__one">
          <section
            className={
              soothingSection === 0
                ? "soothingSection__section_active"
                : "soothingSection__section"
            }
          >
            <p>The soothing system calms the threat system.</p>
            <p>
              When the threat system is active we feel fear, anger or disgust.
              We also feel strong physical sensations like nausea, a racing
              heart and an urge to fight or run away. This is not our fault – it
              is just how our minds and bodies work. But when this happens, we
              need to boost the soothing system emotionally and physically so
              that we’re able to slow down and feel safe, and not so
              overwhelmed.{" "}
            </p>
            <Link to="/emotions">
              {" "}
              <p> click here to learn more about our enotions systems.</p>{" "}
            </Link>
          </section>
        </section>
        <section id="soothing-section-page__two">
          <section
            className={
              soothingSection === 1
                ? "soothingSection__section_active"
                : "soothingSection__section"
            }
          >
            <p>
              Have there been any times in the past when you were able to
              activate your soothing system? What did you do? Perhaps you used
              meditation or yoga, remembered to breathe… or connected with a
              friend or loved one? Make a list of any self-soothing skills you
              already use.
            </p>
          </section>
        </section>
        <section id="soothing-section-page__three">
          <section
            className={
              soothingSection === 2
                ? "soothingSection__section_active"
                : "soothingSection__section"
            }
          >
            <p>
              Before you begin the process of arranging your cervical screening,
              consider spending some time practicing skills to activate your
              soothing system. Thinking about the test can trigger your threat
              system, so it is important to have these skills ready. We would
              recommend that you try to practice the exercises on the next page
              regularly (at least once a day) for the next two weeks.
            </p>
          </section>
        </section>

        <section id="soothing-section-page__four">
          <section
            className={
              soothingSection === 3
                ? "soothingSection__section_active"
                : "soothingSection__section"
            }
          >
            <h3 className="soothingSection__subtitle">
              Soothing rhythm breathing
            </h3>
            <audio controls className="soothingSection__audio">
              <source src={soothingAudio} type="audio/mp4" />
            </audio>
            <h3 className="soothingSection__subtitle">Learning to slow down</h3>
            <audio controls className="soothingSection__audio">
              <source src={slowDownAudio} type="audio/mp4" />
            </audio>
          </section>
        </section>
      </Swipeable>
      <div className="sooting-section__circle__container">
        {circleArray.map((circle, i) => (
          <span
            className={
              i === soothingSection
                ? "soothing-section__circle__active"
                : "soothing-section__circle"
            }
          />
        ))}
      </div>
      <div>
        <span onClick={swipingRight} className="soothing__arrow__left">
          {" "}
          ⟵{" "}
        </span>
        <span onClick={swipingLeft} className="soothing__arrow__right">
          {" "}
          ⟶{" "}
        </span>
      </div>
    </section>
  );
};

export default Soothing;
