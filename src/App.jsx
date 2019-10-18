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

import ExtraResources from "./components/ExtraResources/ExtraResources";



import Menu from "./components/Menu/Menu";

function App() {
  const [menuDisplay, setMenuDisplay] = React.useState(false);
  const [leftDisable, setLeftDisabled] = React.useState(false);
  const [middleDisable, setMiddleDisabled] = React.useState(false);
  const [rightDisable, setRightDisabled] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PrivacyPolicy setMenuDisplay={setMenuDisplay} />}
          />
          <Route
            exact
            path="/welcome"
            render={() => <Welcome setMenuDisplay={setMenuDisplay} />}
          />
          <Route
            exact
            path="/about"
            render={() => <About setMenuDisplay={setMenuDisplay} leftDisable={leftDisable} setLeftDisabled={setLeftDisabled} middleDisable={middleDisable} setMiddleDisabled={setMiddleDisabled} rightDisable={rightDisable} setRightDisabled={setRightDisabled}/>}
          />
          <Route
            exact
            path="/feelingoverwhelmed"
            render={() => (
              <FeelingOverwhelmed setMenuDisplay={setMenuDisplay} />
            )}
          />
          <Route
            exact
            path="/helpingourselves"
            render={() => <HelpingOurselves setMenuDisplay={setMenuDisplay} />}
          />
          <Route
            exact
            path="/myappointment"
            render={() => <MyAppointment setMenuDisplay={setMenuDisplay} />}
          />
          <Route
            exact
            path="/emotions"
            render={() => <Emotions setMenuDisplay={setMenuDisplay} />}
          />
          <Route
            exact
            path="/feelingbetter"
            render={() => <FeelingBetter setMenuDisplay={setMenuDisplay} />}
          />
          <Route
            exact
            path="/helpandsupport"
            render={() => <HelpSupport setMenuDisplay={setMenuDisplay} />}
          />
          <Route
            exact
            path="/notesoflove"
            render={() => <NotesOfLove setMenuDisplay={setMenuDisplay} />}
          />
            <Route exact path="/extraresources" render={() => <ExtraResources setMenuDisplay={setMenuDisplay} />}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Menu menuDisplay={menuDisplay} leftDisable={leftDisable} setLeftDisabled={setLeftDisabled} middleDisable={middleDisable} setMiddleDisabled={setMiddleDisabled} rightDisable={rightDisable} setRightDisabled={setRightDisabled}/>
      </Router>
    </div>
  );
}

export default App;
