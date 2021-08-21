import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavigationContainer from "./components/NavigationContainer";

const App = () => {
  return (
    <div className="App">
      <NavigationContainer />
    </div>
  );
}

export default App;
