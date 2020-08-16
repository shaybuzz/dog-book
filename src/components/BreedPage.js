import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import DogView from './DogView';

function BreedPage(props) {
    //url params
    let { breed } = useParams();
    const [dogs, setDogs] = useState([])
    const cardCount = 4
    const breedUrl = `https://dog.ceo/api/breed/${breed}/images/random/${cardCount}`

    useEffect(() => {
        //loading every change url
        console.log('#####load')
        Axios.get(breedUrl)
            .then(res => {
                let theDogs = res.data.message.map(url => <DogView image={url} />)
                setDogs(theDogs)
            });
    }, [breedUrl])


    return <div>
        the chosen breed :{breed}
        <p>{dogs}</p>
    </div>

}

export default BreedPage