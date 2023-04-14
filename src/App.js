import React, { useState } from 'react';

import './App.css';
import Square from './Square';


function App() {
  const [squares, setSquares] = useState(['','','','','','','','',''])
  const [player, setPlayer] = useState(true)

  const handleClick = () => {
    setSquares(['','','','','','','','',''])
    setPlayer(true)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
      <div className='container'>
        {squares.map((val, index) => {
          return (
            <Square 
            index={index}
            squares={squares}
            squareValue={val}
            setSquares={setSquares}
            player={player}
            setPlayer={setPlayer}
          />
          )
        })}
      </div>
    </div>
  );
}

export default App;
