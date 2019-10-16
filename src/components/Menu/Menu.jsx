import React from "react";

import "./Menu.css";
import brain from "../assets/icons/brain.svg";
import wave from "../assets/icons/wave.svg";
import flower from "../assets/icons/flower.svg";

import { Link } from "react-router-dom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const Menu = () => {
  return (
    <footer className="footer">
      <nav className="menu__nav">
        <ul className="menu__list">
          <Link to="/helpingourselves">
            <img
              src={brain}
              data-testid="leftButton-menu"
              className="menu__leftbutton"
              alt="helping ourselves"
            />
          </Link>
          <span className="menu__circle"></span>
          <Link to="/feelingoverwhelmed">
            <img
              src={wave}
              data-testid="middleButton-menu"
              className="menu__middlebutton"
              alt="feeling overwhelmed"
            />
          </Link>
          <Link to="/myappointment">
            <img
              src={flower}
              data-testid="rightButton-menu"
              className="menu__rightbutton"
              alt="my appointment"
            />
          </Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Menu;
