import React from 'react';
import './Menu.css';
import brain from '../assets/brain.svg';
import wave from '../assets/wave.svg';
import flower from '../assets/flower.svg';

const Menu = () => {
  return(
    <nav className='menu__nav'>
      <ul className="menu__list">
        <img src={brain} data-testid='leftButton-menu' className='menu__leftbutton'/>
        <img src={wave} data-testid='middleButton-menu' className='menu__middlebutton'/>
        <img src={flower} data-testid='rightButton-menu' className='menu__rightbutton'/>
      </ul>
    </nav>
  )
}

export default Menu;
