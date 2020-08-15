import React from 'react';
import { useHistory } from "react-router-dom";


function HomePage() {
    const history = useHistory();

    function handleClick() {
        history.push("/main");
    }

    return <div>
        home
        <button onClick={handleClick} >woof</button>
    </div>
}


export default HomePage




