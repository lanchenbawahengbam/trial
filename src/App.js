import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Academics from "./Components/Academics";
import Vice_chancellor from "./Components/Adminstration/Vice_chancellor";
import Civil from "./Components/Department/Civil";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";



function App() {
  return (
    <>
      <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Academics" component={Academics} />
        <Route exact path="/Vice_chancellor" component={Vice_chancellor} />
        <Route exact path="/Civil" component={Civil} />
        </Switch>
    </>
  );
}

export default App;
