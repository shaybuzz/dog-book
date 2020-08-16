import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import DogsGallery from './DogsGallery';


function BreadsPage() {
    const [allBreeds, setAllBreeds] = React.useState([])
    const [breeds, setBreeds] = React.useState([])
    const [needReload, setReload] = React.useState(-1)


    const allUrl = 'https://dog.ceo/api/breeds/list/all';

    useEffect(() => {
        console.log("######### load breeds")
        initAllBreeds();
    }, [])


    function initAllBreeds() {
        Axios.get(allUrl)
            .then(res => {
                let all = Object.keys(res.data.message)
                setAllBreeds(all);
                setBreeds(all)
            });
    }

    function reloadAll() {
        setReload(Math.random())

    }

    function filter(evt) {
        let prefix = evt.target.value
        if (prefix !== undefined || prefix !== '') {
            const someBreeds = allBreeds.filter((breed) => breed.startsWith(prefix));
            setBreeds(someBreeds)
        } else {
            setBreeds(allBreeds)
        }
    }

    function onBreedSelected(breed) {
        console.log(`select ${breed}`)
        
    }

    return <div>
        all bread {needReload}
        <p><input type='text' onChange={filter} /></p>
        <Button onClick={reloadAll}>Change</Button>
        <DogsGallery onSelected={onBreedSelected} breeds={breeds} reload={needReload} />
    </div>

}

export default BreadsPage