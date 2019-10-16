import React from "react";
import "./Header.css";
import logo from "../assets/icons/myBodyBackLogo.svg";
import butterfly from "../assets/icons/butterfly.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" data-testid="butterfly-header">
      <img
        src={logo}
        data-testid="MyBodyBack-logo"
        id="header__title"
        alt="My Body Back Logo"
      />

      <Link to="/about">
        <img
          src={butterfly}
          className="butterfly"
          data-testid="butterfly-button"
          id="header__butterfly"
          alt="Butterfly"
        />
      </Link>
    </header>
  );
};

export default Header;
