import React from 'react';
import logo from '../Assets/MyBodyBackLogo.svg';
import butterfly from '../Assets/Butterfly.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Header = () => {
    
    return (

    <header className="header">
        <img src={logo} data-testid="MyBodyBack-logo" id="header__title" alt="My Body Back Logo" />
        <Link to='/about'>
        <img src={butterfly} data-testid="butterfly-button" id="header__butterfly" alt="Butterfly" />
        </Link>
    </header>
    
    )

};

export default Header; 
