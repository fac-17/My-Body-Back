import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import email from "../assets/email-mbb.svg";
import call from "../assets/call-mbb.svg";

import "./HelpSupport.css";

const HelpSupport = () => {
  const copyNumber = number => {
    const numberToCopy = document.createElement("textarea");
    numberToCopy.textContent = number;
    document.body.appendChild(numberToCopy);
    numberToCopy.select();
    document.execCommand("copy");
    alert(`Number was copied to clipboard: ${numberToCopy.textContent}`);
    document.body.removeChild(numberToCopy);
  };

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


      <ul className="help-support__list">
        <li className="help-support__list-item">
          <a href="mailto:jo@samaritans.org" target="_top">
            <img
            src={email}
            className="help-support__icon"
            alt="email samaritans"/>
          </a>
          <img
            src={call}
            className="help-support__icon"
            onClick={() => copyNumber("116 123")}
            alt="call samaritans"
          />
          <a href="https://www.samaritans.org/" target="_blank">
            <h3 className="help-support__heading">The Samaritans</h3>
          </a>
          <p className="help-supoprt__text">
            The Samaritans provide free, 24-hour emotional support and
            listening.
          </p>
        </li>


        <li className="help-support__list-item">
          <a href="#">
            <img
              src={call}
              className="help-support__icon"
              onClick={() => copyNumber("0808 802 9999")}
              alt="call rapecrisis UK"
            />
          </a>
          <a href="https://rapecrisis.org.uk" target="_blank">
            <h3 className="help-support__heading">Rape Crisis</h3>
          </a>
          <p className="help-support__small-text">England & Wales</p>
          <p className="help-supoprt__text">
            Rape Crisis have 44 centres across the UK offering support,
            advocacy, information and counselling.
          </p>
        </li>


        <li className="help-support__list-item">
          <a href="mailto:support@rapecrisisscotland.org.uk" target="_top">
            <img src={email} className="help-support__icon" />
          </a>
          <a href="#">
            <img
              src={call}
              className="help-support__icon"
              onClick={() => copyNumber("08088 01 03 02")}
              alt="call rapecrisis Scotland"
            />
          </a>
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


        <li className="help-support__list-item">
          <a href="mailto:office@womanstrust.org.uk" target="_top">
            <img src={email} className="help-support__icon" />
          </a>
          <a href="#">
            <img
              src={call}
              className="help-support__icon"
              onClick={() => copyNumber("020 7034 0303")}
              alt="call womanstrust"
            />
          </a>
          <a
            href="http://womanstrust.org.uk/"
            target="_blank">
            <h3 className="help-support__heading">Women's Trust</h3>
          </a>
          <p className="help-supoprt__text">
            Woman’s Trust is a charity that provides free counselling and
            therapy for female survivors of domestic violence, emotional abuse,
            sexual abuse, and other forms of domestic abuse.
          </p>
        </li>


        <li className="help-support__list-item">
          <a href="mailto:referrals@galop.org.uk" target="_top">
            <img src={email} className="help-support__icon" />
          </a>
          <a href="#">
            <img
              src={call}
              className="help-support__icon"
              onClick={() => copyNumber("0207 704 2040")}
              alt="call galop"
            />
          </a>
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


        <li>
          <h4 className="help-support__small-heading">
            If you're outside London:
          </h4>
          <a href="mailto:help@galop.org.uk" target="_top">
            <img
            src={email}
            className="help-support__icon"
            alt="email galop" />
          </a>

          <img
            src={call}
            className="help-support__icon"
            onClick={() => copyNumber("0800 999 5428")}
            alt="call galop"
          />
        </li>
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
      <Menu />
    </div>
  );
};

export default HelpSupport;
