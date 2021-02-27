import React from "react";
import About from "./pages/About";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import WorkExperiance from "./pages/WorkExperiance";
import EducationAndSkills from "./pages/EducationAndSkills";
import { Switch, Route, useLocation } from "react-router-dom";
import WorkDetail from "./pages/WorkDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  window.onload = function (){
    setTimeout(function() {
      window.scrollTo(0,0);
    }, 1);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/Iman-Portfolio/" exact>
            <About />
          </Route>
          <Route path="/Iman-Portfolio/workexperiance" exact>
            <WorkExperiance />
          </Route>
          <Route path="/Iman-Portfolio/work/:id">
            <WorkDetail />
          </Route>
          <Route path="/Iman-Portfolio/educationandskills">
            <EducationAndSkills />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
