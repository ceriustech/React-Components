import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import NavigationListItems from "./NavigationListItems/NavigationListItems";
import { navItems } from "../data";


const NavigationContainer = () => (
  <div>
    {navItems.map((item) => (
      <NavigationListItems data={item} />
    ))}
  </div>
);

export default NavigationContainer;