import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import butterfly from '../Assets/butterfly-first-page.svg';


const PrivacyPolicy = () => {
  return (
    <div>
    <h1> Privacy Policy </h1>
    <p> Welcome to the My Body Back app. Before you begin to explore, we want to assure you that this app does not collect any personally-identifiable information and does not use cookies to track users. </p>
    <Link to="/welcome" ><img src={butterfly} alt="Go to welcome page"/></Link>
    </div>
  )
}

export default PrivacyPolicy;
