import React from "react";
import selfAudio from "../../assets/audio/selfAudio.m4a";
import focusAudio from "../../assets/audio/focusAudio.m4a";
import voiceAudio from "../../assets/video/voiceVideo.mp4";
import Fade from 'react-reveal/Fade';
import { Swipeable } from "react-swipeable";
import "./Compassion.css";

const Compassion = () => {
  const [compassionSection, setCompassionSection] = React.useState(0);
  const circleArray = [1, 2, 3, 4, 5];

  const swipingLeft = () => {
    compassionSection < 4
    ? setCompassionSection(compassionSection + 1)
    : setCompassionSection(compassionSection);
  }

  const swipingRight = () => {
    compassionSection > 0
    ? setCompassionSection(compassionSection - 1)
    : setCompassionSection(compassionSection);
  };



  return (
    <section id="compassion-section__container">

      <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
      <section id="compassion-section-page__one">
      <section
            className={
              compassionSection === 0
                ? "compassion__section_active"
                : "compassion__section"
            }
          >
        <p>
          As human beings, we all need to feel cared for, protected and valued.
          Humans have a compassionate instinct... for others. We feel good when
          we help someone else, and when someone else is kind and caring to us.
          Yet we often struggle to show compassion to ourselves. But with
          practice, we can use our natural ability to feel compassion, and
          direct it inwards. Compassion helps to create a balance between the
          threat, drive and soothing systems.
        </p>
        </section>
      </section>
     
      <section id="compassion-section-page__two">
      <section
            className={
              compassionSection === 1
                ? "compassion__section_active"
                : "compassion__section"
            }
          >
        <h3>What is Compassion?</h3>
        <p>
          Compassion is a sensitivity to suffering, others’ suffering as well as
          our own, with a commitment to relieving and preventing it. So it is
          paying attention to what is difficult, engaging with it, and then
          taking action to make things better. Compassion takes courage.
        </p>
      </section>
      </section>
      
      <section id="compassion-section-page__three">
      <section
            className={
              compassionSection === 2
                ? "compassion__section_active"
                : "compassion__section"
            }
          >
        <h3>How do we build compassion for ourselves?</h3>
        <audio controls>
          <source src={selfAudio} type="audio/mp4" />
        </audio>
        <audio controls>
          <source src={focusAudio} type="audio/mp4" />
        </audio>
      </section>
      </section>
      <section id="compassion-section-page__four">
      <section
            className={
              compassionSection === 3
                ? "compassion__section_active"
                : "compassion__section"
            }
          >
        <h3>Other Ways to Build Self Compassion</h3>
        <Fade top cascade>
        <p>
          Act with compassion – this is not just ‘being nice’ but engaging in
          activities that reduce suffering and distress. This may include asking
          for, and accepting, support, and might even mean saying ‘no’.
        </p>
        <p>
          Show yourself empathy. When you are distressed, acknowledge how you
          feel and recognise that you are doing the best you can in this moment.
          Try not to push your feelings away; instead, observe them and remind
          yourself that it is ok to feel them. It is ok to feel anxious, sad or
          angry before, during and after a cervical screening. Listening to
          these feelings might let you and your health practitioner know what
          the best way forward is.
        </p>
        <p>
          Watch out for critical thoughts and try to gently challenge them. It
          is very easy to fall into patterns of self-critical thinking,
          especially when our soothing system is being dominated by the threat
          and drive systems. This is not our fault, it is just the way the brain
          works.
        </p>
        <ul>
          Ask yourself:
          <li>
            What would I say to a friend in my situation? How would my voice
            sound? What would my wishes be for them?
          </li>
          <li>What would my friends say to me? </li>
          <li>How can I be kinder to myself?</li>
          <li>Am I expecting too much of myself?</li>
        </ul>
        <p>
          Above all, look after yourself the way you would care for someone you
          loved. Know what works best for you when you need comfort and care.
        </p>
        </Fade>
      </section>

      </section>
      <section id="compassion-section-page__five">
      <section
            className={
              compassionSection === 4
                ? "compassion__section_active"
                : "compassion__section"
            }
          >
        <audio controls>
          <source src={voiceAudio} type="audio/mp4" />
          Audio cannot be displayed
        </audio>
      </section>
      </section>

      </Swipeable>
      <div className="compassion__circle__container">
        {circleArray.map((circle, i) => (
          <span
            className={
              i == compassionSection
                ? "compassion__circle__active"
                : "compassion__circle"
            }
          />
        ))}
        </div>
        <span onClick={swipingRight} className="compassion__arrow__left"> ⟵ </span>
        <span onClick={swipingLeft} className="compassion__arrow__right"> ⟶ </span>
    </section>
  );
};

export default Compassion;
