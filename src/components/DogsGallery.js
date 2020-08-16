import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Dog from '../model/Dog';
import DogView from './DogView';


function DogsGallery(pros) {
    const {breeds, reload} =  pros

    let dogsViews = breeds.map(breed => toDogView(breed));

    function toDogView(breed) {
        return <DogView  breed={breed} needReload={reload} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToc5qlABWPX0gLRHAPLo_EvO2eMeIFmgdQ7kCA6Zq5z2VRzE87&s'/>// needReload 
    }


    return <div>
        Gallery:
        <p>curr relaod {reload}</p>
       {dogsViews} 
       
    </div>
    
}

export default DogsGallery



