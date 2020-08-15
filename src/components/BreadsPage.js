import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Dog from '../model/Dog';
import DogView from './DogView';


function BreadsPage() {
    const [gallery, setGallery] = React.useState(<p>some dogs</p>)
    const allUrl = 'https://dog.ceo/api/breeds/list/all';

    useEffect(() => {
        Axios.get(allUrl)
            .then(res => {
                let breeds = Object.keys(res.data.message);
                let dogs = breeds.map(breed => new Dog(breed));
                //let gall = breeds.map(breed =>  <DogView breed={breed}/>);
                let gall = breeds.map(breed => <DogView breed={breed} />);
                setGallery(gall);

            })
    });


    return <div>
        all bread
        {gallery}
    </div>

}

export default BreadsPage