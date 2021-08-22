import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import './Styles/GenericPage.Styles.scss';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import AccountPage from './pages/AccountPage';
import NavigationContainer from "./components/NavigationContainer";

const App = () => {
  return (
    <div className="App">
      <NavigationContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/account" component={AccountPage} />
      </Switch>
    </div>
  );
}

export default App;
