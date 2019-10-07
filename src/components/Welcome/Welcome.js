import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Welcome = () => {
  return (
<div>
  <Header />
    <h1 data-testid="welcome-header">Welcome</h1>
    <p> Welcome to the My Body Back app </p>
    <img src="#"/><p>This icon will take you to the "Support & Techniques" section </p>
    <img src="#"/><p>This icon will take you to the "Feeling Overwhelmed" section </p>
    <img src="#"/><p>This icon will take you to the "My Appointment" section </p>
    <Menu />
</div>
  )
}

export default Welcome;
