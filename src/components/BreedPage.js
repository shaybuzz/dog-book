import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function BreedPage(props){
    let { breed } = useParams();
    
    useEffect(()=>{
        //loading every change
        console.log(`load page ${breed}`)
    })

 


    return <div>
        the chosen breed :{breed}
    </div>

}

export default BreedPage