import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DogView(props) {
    const dogPlaceHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAG1BMVEXr6+vY2Njp6ena2trd3d3g4ODj4+Pm5ubW1tbKf8WKAAADqklEQVR4nO3a25biIBBGYUMOzPs/8aiQSOAHk8zYTbn2d9m0LsqC4pDcbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY9w83S2u1u5D+0926f+ah2jyqnkZY/Mom/vnpuFF5OlNswFpBMMwZ61u3DVbDHEZhlYM+/iHsTpXu5Xl6G432ea8Nc9x/4oQhjFpzRNsMYlFCnfjtN1qgitDSNJUpvC+ovxmdy9QMbzSNInGsfV1HSqnYRKEV42DsYkoI1zLqW78igjjkiDqzLdEGKqJqkLfEmGoprIKmYtQR9GK0Fot1eUy5Kk1gg1pVJNmFbJDLerNCM2dgvVkq0dobRqq09PQrDTmpqHOVAhDViFja8WTCGOuthhMoUxidV9q5/zr054WM7F+tkiXCt9tVXXzM6TXBXBRbLau50vJFqCP39FlkH6LZ1xPulnRfM21bO+95tZN23d0uP7vRt4U0+hHEcfD8va/+ys9+4G3Vo7k3nvaFZMk42u6soz3djOVr+JbwpYpzs7sA3HWjvMaeF5+eiuvRd1MRpnzurO7v5d7oL6SKPZoJztY7tT7moliq3luK/3PX/BpajN9quCrffqnOnuJivBMqZAHqs9194L2Ffd78kbgc929QEZ4fCLpW50P9ve8xon+CAOnfi+H2eFhKj/d12qh+3i4msoR0NnmW46zMgvOe7HBkdf8vb2CImtFFuH98Bfk7xDpCH+w94eo+9E0wrjT3prSDMkI+9qW3t4+uJ7LK41XjPKR+C/E8IaoNVuEiy6W21j9YyCFcibGXjp9w5+EUf4AnS0VQVlOwzjUa+UukNpHe5OnKkwl/Rxm+59nKEX++wywOAY/x2A7wDWY7MfpbLFPTEU3q1Nw/0Psfpze1vqdZM14TrEDAYYQk8nadYC3beELd2uHAoxZjHdvBt6Jds4v8dHDwQDjXLx/bqncyvXqbZHJQjSn8tqM1Nv17yGVN58qutzDtMnn+A39LoE1JyZhYG0qVt6JaujwuNR0cow+9L8Qps7U0S2JpurphRTaKjany0xgKImXUmhpJp4vpIGdcnpxkBpaEy8OUju1pnX11GZld3plMQysTMTrEfb1ULSOCImwf/Va+nh2OI31Umulllbu2MY5XqU5r59FGdq2iRuMac4e+y7iZzCTwmKcjrPajvl8c2dlRxPE10rvM2+S4QV+Xt97HvMkG+Ae7114967fz/9SL2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX+wvqtkVJSpt2GwAAAAASUVORK5CYII='
    const { breed, image, needReload, onViewSelected } = props;
    const [dogImage, setDogImage] = React.useState(image !== undefined ? image : dogPlaceHolder);
    let breedTitle = breed !== undefined ? <span>{breed}</span> : null

    useEffect(() => {
        console.log(`loading dog view ${breed}`)
        Axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => {
                let img = res.data.message;
                setDogImage(img !== undefined ? img : dogPlaceHolder)
            })
    }, [needReload]);


    function onViewClick() {
        if (onViewSelected !== undefined) {
            onViewSelected(breed)
        }

    }

    return <div>
        <div>DOG VIEW {needReload} VIEW </div>
        {breedTitle}
        <img src={dogImage} height='100' onClick={onViewClick}></img>
        <div>DOG VIEW</div>
        <br></br>

    </div>

}

export default DogView