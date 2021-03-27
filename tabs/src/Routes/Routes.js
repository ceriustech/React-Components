import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../components/Pages/HomePage";
import TabPage from "../components/Pages/TabPage";
import AboutPage from "../components/Pages/AboutPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tabs" component={TabPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </>
  );
};

export default Routes;
