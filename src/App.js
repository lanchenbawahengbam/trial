import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Academics from "./Components/Academics";
import Vice_chancellor from "./Components/Adminstration/Vice_chancellor";
import Civil from "./Components/Department/Civil";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Academics">
            <Academics />
          </Route>
          <Route path="/Vice_chancellor">
            <Vice_chancellor />
          </Route>
          <Route path="/Civil">
            <Civil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
