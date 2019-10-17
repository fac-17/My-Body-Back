import React from "react";
import Header from "../Header/Header.jsx";
import email from "../assets/icons/email-mbb.svg";
import call from "../assets/icons/call-mbb.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./HelpSupport.css";

const HelpSupport = ({ setMenuDisplay }) => {
  React.useEffect(() => {
    setMenuDisplay(true);
  }, [setMenuDisplay]);
  return (
    <div className="help-support__container">
      <Header />
      <h2> Help & Support </h2>
      <p className="help-support__main-text">
        Please see your GP if you feel that you need support with any aspect of
        your mental or physical health.
      </p>
      <p className="help-support__sub-text">
        If you're having any thoughts of hurting yourself or someone else,
        please see your GP urgently. In an immediate crisis, you can seek help
        by calling 999 or going to the A&E department.
      </p>
      <p className="help-support__small-text">
        Below you’ll find a list of other trusted services you may find useful.
      </p>
      
      <section className="Help-support-list__container">
      <ul className="help-support__list">
        <section className="help-support-list__item">
        <li className="help-support__list-item">
          <a href="mailto:jo@samaritans.org" target="_top">
            <img
              src={email}
              className="help-support__icon"
              alt="email samaritans"
            />
          </a>

          <CopyToClipboard text="116 123">
            <img
              onClick={() => alert("number copied to clipboard")}
              src={call}
              className="help-support__icon"
              alt="call samaritans"
            />
          </CopyToClipboard>

          <a href="https://www.samaritans.org/" target="_blank">
            <h3 className="help-support__heading">The Samaritans</h3>
          </a>
          <p className="help-supoprt__text">
            The Samaritans provide free, 24-hour emotional support and
            listening.
          </p>
        </li>
        </section>


        <section className="help-support-list__item">
        <li className="help-support__list-item">
            <CopyToClipboard text="0808 802 9999">
              <img
                onClick={() => alert("number copied to clipboard")}
                src={call}
                className="help-support__icon"
                alt="call rapecrisis UK"
              />
            </CopyToClipboard>
          <a href="https://rapecrisis.org.uk" target="_blank">
            <h3 className="help-support__heading">Rape Crisis</h3>
          </a>
          <p className="help-support__small-text">England & Wales</p>
          <p className="help-supoprt__text">
            Rape Crisis have 44 centres across the UK offering support,
            advocacy, information and counselling.
          </p>
        </li>
        </section>

        <section className="help-support-list__item">
        <li className="help-support__list-item">
          <a href="mailto:support@rapecrisisscotland.org.uk" target="_top">
            <img src={email} className="help-support__icon" />
          </a>
            <CopyToClipboard text="08088 01 03 02">
              <img
                onClick={() => alert("number copied to clipboard")}
                src={call}
                className="help-support__icon"
                alt="call rapecrisis Scotland"
              />
            </CopyToClipboard>
          <a href="https://www.rapecrisisscotland.org.uk/" target="_blank">
            <h3 className="help-support__heading">Rape Crisis</h3>
          </a>
          <p className="help-support__small-text">Scotland</p>
          <p className="help-supoprt__text">
            Rape Crisis Scotland provides a national rape crisis helpline and
            email support for anyone affected by sexual violence. There are also
            member centres across Scotland.
          </p>
        </li>
        </section>

        <section className="help-support-list__item">
        <li className="help-support__list-item">
          <a href="mailto:office@womanstrust.org.uk" target="_top">
            <img src={email} className="help-support__icon" />
          </a>
            <CopyToClipboard text="020 7034 0303">
              <img
                onClick={() => alert("number copied to clipboard")}
                src={call}
                className="help-support__icon"
                alt="call womanstrust"
              />
            </CopyToClipboard>
          <a href="http://womanstrust.org.uk/" target="_blank">
            <h3 className="help-support__heading">Woman's Trust</h3>
          </a>
          <p className="help-supoprt__text">
            Woman’s Trust is a charity that provides free counselling and
            therapy for female survivors of domestic violence, emotional abuse,
            sexual abuse, and other forms of domestic abuse.
          </p>
        </li>
        </section>

        <section className="help-support-list__item">
        <li className="help-support__list-item">
          <a href="mailto:referrals@galop.org.uk" target="_top">
            <img src={email} className="help-support__icon" />
          </a>
            <CopyToClipboard text="0207 704 2040">
              <img
                onClick={() => alert("number copied to clipboard")}
                src={call}
                className="help-support__icon"
                alt="call galop"
              />
            </CopyToClipboard>
          <a href="http://www.galop.org.uk/domesticabuse/" target="_blank">
            <h3 className="help-support__heading">
              London LGBT Domestic Abuse Partnership
            </h3>
          </a>
          <p className="help-support__text">
            London LGBT Domestic Abuse Partnership offer practical, emotional
            and legal advice and signposting to LGBT + individuals who have
            experienced domestic abuse.
          </p>
        </li>
        </section>

        <li>
          <h4 className="help-support__small-heading">
            If you're outside London:
          </h4>
          <a href="mailto:help@galop.org.uk" target="_top">
            <img src={email} className="help-support__icon" alt="email galop" />
          </a>
          <CopyToClipboard text="0800 999 5428">
            <img
              onClick={() => alert("number copied to clipboard")}
              src={call}
              className="help-support__icon"
              alt="call galop"
            />
          </CopyToClipboard>
        </li>
        <p> - - - </p>
        <h3 className="help-support__final-header">
          NHS Psychological Therapy
        </h3>

        <p className="help-supoprt__text">
          {" "}
          If you are experiencing emotional distress and would like to access
          psychological therapy, you can find your local NHS Improving Access to
          Psychological Therapies service online <a href="#">here.</a>
        </p>

        <p className="help-support__small-text">
          {" "}
          many of these services accept self-referrals{" "}
        </p>
      </ul>
      
      </section>
    </div>
  );
};

export default HelpSupport;
