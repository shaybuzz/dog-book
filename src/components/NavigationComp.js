import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavigationComp() {


    return <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/main">All Bread</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>


    </div>

}

export default NavigationComp