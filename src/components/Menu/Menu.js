import React from 'react';

import './Menu.css';
import brain from '../assets/brain.svg';
import wave from '../assets/wave.svg';
import flower from '../assets/flower.svg';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const Menu = () => {
  return(
    <nav className='menu__nav'>
      <ul className="menu__list">
      <Link to="/"><img src={brain} data-testid='leftButton-menu' className='menu__leftbutton'/></Link>
        <span className="menu__circle"></span>
        <Link to="/"><img src={wave} data-testid='middleButton-menu' className='menu__middlebutton'/></Link>
        <Link to="/"><img src={flower} data-testid='rightButton-menu' className='menu__rightbutton'/></Link>
      </ul>
    </nav>
  )
}

export default Menu;
