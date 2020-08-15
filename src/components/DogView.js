import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function DogView(progs) {
    const { breed } = progs;
    const [image, setImage] = React.useState('');

    function loadRandImage() {
        Axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => {
                let img = res.data.message;
                console.log(img)
                if (img !== undefined) {
                    setImage(img)
                }
            })
    }



    useEffect(() => {
        loadRandImage();
    });






    return <div>
        <div>DOG VIEW</div>
        <span>{breed}</span>
        <img src={image} width='200'></img>
        <div>DOG VIEW</div>
        <br></br>

    </div>

}

export default DogView