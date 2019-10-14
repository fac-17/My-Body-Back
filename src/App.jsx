import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import FeelingOverwhelmed from "./components/FeelingOverwhelmed/FeelingOverwhelmed";
import HelpingOurselves from "./components/HelpingOurselves/HelpingOurselves";
import MyAppointment from "./components/MyAppointment/MyAppointment";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Emotions from "./components/Emotions/Emotions";
import FeelingBetter from "./components/FeelingBetter/FeelingBetter";
import HelpSupport from "./components/HelpSupport/HelpSupport";
import NotesOfLove from "./components/NotesOfLove/NotesOfLove";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PrivacyPolicy} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/feelingoverwhelmed"
            component={FeelingOverwhelmed}
          />
          <Route exact path="/helpingourselves" component={HelpingOurselves} />
          <Route exact path="/myappointment" component={MyAppointment} />
          <Route exact path="/emotions" component={Emotions} />
          <Route exact path="/feelingbetter" component={FeelingBetter} />
          <Route exact path="/helpandsupport" component={HelpSupport} />
          <Route exact path="/notesoflove" component={NotesOfLove} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;