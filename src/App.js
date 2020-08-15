import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route} from "react-router-dom";
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';

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
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
