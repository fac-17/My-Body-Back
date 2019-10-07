import React from 'react';

const Menu = () => {
  return(
    <nav>
      <ul>
        <li data-testid='leftButton-menu'>left</li>
        <li data-testid='middleButton-menu'>middle</li>
        <li data-testid='rightButton-menu'>right</li>
      </ul>
    </nav>
  )
}

export default Menu;
