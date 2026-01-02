import { useState } from 'react';

export default function Ludo() {
  const [moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});
  const [arr, setArr] = useState(["no moves"]);

  const handleMove = (color) => {
    setMoves((prevMoves) => ({ ...prevMoves, [color]: prevMoves[color] + 1 }));

    setArr((prevArr) => {
        if (prevArr[0] === "no moves") {
            return [`${color} moved`];
        }
        return [...prevArr, `${color} moved`];
    });

  }

  return (
    <div>
      <h1>Ludo Game</h1>
      <div>
        <p>{arr}</p>
        <p>blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleMove('blue')}>+1</button>
        <p>red moves = {moves.red}</p>
        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleMove('red')}>+1</button>
        <p>green moves = {moves.green}</p>
        <button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleMove('green')}>+1</button>
        <p>yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={() => handleMove('yellow')}>+1</button>
      </div>
    </div>
  );
}