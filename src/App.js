import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';


function App() {
  return (
    <div className="App">
    

    <Router>
    <Route exact path="/" component={PrivacyPolicy} />
    
    </Router>
    </div>
  );
}

export default App;
