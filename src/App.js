import React from "react";
import About from "./pages/About";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import WorkExperiance from "./pages/WorkExperiance";
import EducationAndSkills from "./pages/EducationAndSkills";
import { Switch, Route } from "react-router-dom";
import WorkDetail from "./pages/WorkDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/workexperiance" exact>
          <WorkExperiance />
        </Route>
        <Route path="/work/:id">
          <WorkDetail />
        </Route>
        <Route path="/educationandskills">
          <EducationAndSkills />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
