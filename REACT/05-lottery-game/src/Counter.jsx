import { useState, useEffect } from "react";

export default function Counter () {
    let [count, setCount] = useState(0);

    useEffect(function printSomething() {
        console.log("this is a side effect");
    }, [count]);
    // if we nothing pass in dependency array, it will run after every render
    // if pass any value in dependency array, it will run only when that value changes
    // if we write empty array, it will run only once after the initial render

    return (
        <div>
            <h2>Counter: {count}</h2> 
            <button onClick={() => setCount((currCount) => currCount + 1)}>Increment</button>
        </div>
    );
}