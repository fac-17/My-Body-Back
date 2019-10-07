import React from 'react';
import logo from './assets/MyBodyBackLogo.svg';
import butterfly from './assets/Butterfly.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Header = () => {
    
    return (

    <header>
        <img src={logo} alt="My Body Back Logo" />
        <Link to='/About'>
        <img src={butterfly} alt="Butterfly" />
        </Link>
    </header>
    
    )

};

export default Header; 