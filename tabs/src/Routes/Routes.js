import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Pages/Home";
import Contact from "../components/Pages/Contact";
import About from "../components/Pages/About";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/About" component={About} />
      </Switch>
    </>
  );
};

export default Routes;
