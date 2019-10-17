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
import Menu from "./components/Menu/Menu";
function App() {
  const [menuDisplay, setMenuDisplay] = React.useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <PrivacyPolicy {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/welcome"
            render={props => (
              <Welcome {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <About {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/feelingoverwhelmed"
            render={props => (
              <FeelingOverwhelmed {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/helpingourselves"
            render={props => (
              <HelpingOurselves {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/myappointment"
            render={props => (
              <MyAppointment {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/emotions"
            render={props => (
              <Emotions {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/feelingbetter"
            render={props => (
              <FeelingBetter {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/helpandsupport"
            render={props => (
              <HelpSupport {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/notesoflove"
            render={props => (
              <NotesOfLove {...props} setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Menu menuDisplay={menuDisplay} />
      </Router>
    </div>
  );
}

export default App;
