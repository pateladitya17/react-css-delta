import React, { useEffect } from 'react'
import { useState } from 'react';

function Jocker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";
    const getNewJoke = async () => {
       let response = await fetch(URL);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    useEffect( () => {
        getNewJoke();
    }, []);

  return (
    <div>
        <h3>Jocker!</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewJoke}>Get a new joke</button>
    </div>
  )
   
}

export default Jocker