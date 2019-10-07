import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';


function App() {
  return (
    <div className="App">
    

    <Router>
    <Route exact path="/" component={PrivacyPolicy} />
    <Route path="/welcome" component={Welcome} />
    </Router>
    <Menu />
    </div>
  );
}

export default App;
