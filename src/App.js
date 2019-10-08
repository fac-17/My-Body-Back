import React from "react";
import "./App.css";
import { Redirect, BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Menu from "./components/Menu/Menu";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import FeelingOverwhelmed from "./components/FeelingOverwhelmed/FeelingOverwhelmed";
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={PrivacyPolicy} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/feelingoverwhelmed" component={FeelingOverwhelmed} />
        <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
