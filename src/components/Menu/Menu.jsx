import React from "react";

import "./Menu.css";
import brain from "../assets/icons/brain.svg";
import wave from "../assets/icons/wave.svg";
import flower from "../assets/icons/flower.svg";
import { Link } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const Menu = ({ menuDisplay, leftDisable, setLeftDisabled, middleDisable, setMiddleDisabled, rightDisable, setRightDisabled }) => {

  const disableLeftButton = () => {
    setLeftDisabled(true);
    setRightDisabled(false);
    setMiddleDisabled(false);
  };

  const disableMiddleButton = () => {
    setLeftDisabled(false);
    setMiddleDisabled(true);
    setRightDisabled(false);
  };

  const disableRightButton = () => {
    setLeftDisabled(false);
    setMiddleDisabled(false);
    setRightDisabled(true);
  };

  return (
    <footer className={menuDisplay === false ? "footer__hidden" : "footer"}>
      <nav className="menu__nav">
        <ul className="menu__list">
          <Link to="/helpingourselves">
            <img
              src={brain}
              data-testid="leftButton-menu"
              className={
                leftDisable === true
                  ? "menu__leftbutton__disabled"
                  : "menu__leftbutton"
              }
              alt="helping ourselves"
              disabled={leftDisable === true ? true : false}
              onClick={() => disableLeftButton()}
            />
          </Link>
          <span className="menu__circle"></span>
          <Link to="/feelingoverwhelmed">
            <img
              src={wave}
              data-testid="middleButton-menu"
              className={
                middleDisable === true
                  ? "menu__middlebutton__disabled"
                  : "menu__middlebutton"
              }
              alt="feeling overwhelmed"
              disabled={middleDisable === true ? true : false}
              onClick={() => disableMiddleButton()}
            />
          </Link>
          <Link to="/myappointment">
            <img
              src={flower}
              data-testid="rightButton-menu"
              className={
                rightDisable === true
                  ? "menu__rightbutton__disabled"
                  : "menu__rightbutton"
              }
              alt="my appointment"
              disabled={rightDisable === true ? true : false}
              onClick={() => disableRightButton()}
            />
          </Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Menu;
