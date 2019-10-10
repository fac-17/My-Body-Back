import React from "react";
import selfAudio from "../../assets/selfAudio.m4a";
import focusAudio from "../../assets/focusAudio.m4a";

const Compassion = () => {
  return (
    <section id="compassion-section__container">
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
        <h3>What is Compassion?</h3>
        <p>
          Compassion is a sensitivity to suffering, others’ suffering as well as
          our own, with a commitment to relieving and preventing it. So it is
          paying attention to what is difficult, engaging with it, and then
          taking action to make things better. Compassion takes courage.
        </p>
      </section>
      <section id="compassion-section-page__three">
        <h3>How do we build compassion for ourselves?</h3>
        <audio controls>
          <source src={selfAudio} type="audio/mp4" />
        </audio>
        <audio controls>
          <source src={focusAudio} type="audio/mp4" />
        </audio>
      </section>
      <section id="compassion-section-page__four">
        <h3>Other Ways to Build Self Compassion</h3>
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
      </section>
    </section>
  );
};

export default Compassion;
