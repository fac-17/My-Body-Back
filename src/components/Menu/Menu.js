import React from 'react';
import './Menu.css';

const Menu = () => {
  return(
    <nav className='nav__background'>
      <ul>
        <li data-testid='leftButton-menu'>left</li>
        <li data-testid='middleButton-menu'>middle</li>
        <li data-testid='rightButton-menu'>right</li>
      </ul>
    </nav>
  )
}

export default Menu;
