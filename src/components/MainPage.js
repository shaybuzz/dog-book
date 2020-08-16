import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationComp from './NavigationComp';
import AboutPage from './AboutPage';
import BreedsPage from './BreedsPage';

function MainPage() {


  return <div>
    <p>NAVIGATUIN</p>
    <NavigationComp/>
  <Router>

      <Switch>
        <Route path="/main">
          <BreedsPage/>
        </Route>
        <Route  path="/about">
          <AboutPage/>
        </Route>
      </Switch>


    </Router>

  </div>

}

export default MainPage