import React from 'react';
import logo from './assets/MyBodyBackLogo.svg';
import butterfly from './assets/Butterfly.svg';

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