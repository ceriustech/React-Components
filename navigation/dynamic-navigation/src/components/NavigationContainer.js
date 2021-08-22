import React from "react";

import NavigationListItems from "./NavigationListItems/NavigationListItems";
import "../Styles/NavigationContainer.Styles.scss"
import { navItems } from "../data";


const NavigationContainer = () => (
  <nav className="nav-container">
    {navItems.map((item) => (
      <NavigationListItems data={item} />
    ))}
  </nav>
);

export default NavigationContainer;