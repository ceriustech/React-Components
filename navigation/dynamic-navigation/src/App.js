import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { navItems } from "./data";
import './Styles/GenericPage.Styles.scss';


import NavigationContainer from "./components/NavigationContainer";

const App = () => {
  const pageComponentArray = navItems.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);

  return (
    <div className="App">
      <NavigationContainer />
          <Switch>
           {pageComponentArray}
          </Switch>
    
      
    </div>
  );
}

export default App;
