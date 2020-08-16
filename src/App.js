import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import BreedPage from './components/BreedPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/main">
          <MainPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route path='/breed/:breed'>
          <BreedPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
