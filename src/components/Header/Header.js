import React from 'react';
import logo from './assets/MyBodyBackLogo.svg';
import butterfly from './assets/Butterfly.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Header = () => {
    
    return (

    <header>
        <img src={logo} data-testid="MyBodyBack-logo" alt="My Body Back Logo" />
        {/* <Link to='/About'> */}
        <img src={butterfly} data-testid="butterfly-button" alt="Butterfly" />
        {/* </Link> */}
    </header>
    
    )

};

export default Header; 