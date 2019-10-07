import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">

    <Router>
    <Route exact path="/" component={PrivacyPolicy} />
    </Router>
    <Menu />
    </div>
  );
}

export default App;
