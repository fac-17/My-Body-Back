import React from "react";
import selfAudio from "../../assets/selfAudio.m4a";
import focusAudio from "../../assets/focusAudio.m4a";

const Compassion = () => {
  return (
    <section id="compassion-section__container">
      <h3>Building Self Compassion</h3>
      <section id="compassion-section-page__one">
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
      <section id="compassion-section-page__two">
        <p>What is Compassion?</p>
        <p>
          Compassion is a sensitivity to suffering, others’ suffering as well as
          our own, with a commitment to relieving and preventing it. So it is
          paying attention to what is difficult, engaging with it, and then
          taking action to make things better. Compassion takes courage.
        </p>
      </section>
      <section id="compassion-section-page__three">
        <p>How do we build compassion for ourselves?</p>
        <audio controls>
          <source src={selfAudio} type="audio/mp4" />
        </audio>
        <audio controls>
          <source src={focusAudio} type="audio/mp4" />
        </audio>
      </section>
    </section>
  );
};

export default Compassion;
