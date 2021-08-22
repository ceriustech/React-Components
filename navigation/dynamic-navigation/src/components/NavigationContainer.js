import React from "react";

import NavigationListItems from "./NavigationListItems/NavigationListItems";
import "../Styles/NavigationContainer.Styles.scss"
import { navItems } from "../data";


const NavigationContainer = () => (
  <div className="nav-container">
    {navItems.map((item) => (
      <NavigationListItems data={item} />
    ))}
  </div>
);

export default NavigationContainer;