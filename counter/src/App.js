
import './App.css';
import { React, useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(x => x + 1);
  };

  const decrease = () => {
    setCounter(x => x - 1);
  };
 
  return (
    <div className="counter">
      <div className="left-counter">
        <button onClick={decrease}>Decrease</button>
      </div>
      <div className="number">
        <span>{counter}</span>
      </div>
      <div className="right-counter">
        <button  className='increase' onClick={increase}>Increase</button>

      </div>
    </div>
  );
}










