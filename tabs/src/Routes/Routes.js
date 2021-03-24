import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Pages/Home";
import Tabs from "../components/Pages/Tabs";
import About from "../components/Pages/About";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
};

export default Routes;
