import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const increase = ReactDOM.createRoot(document.querySelector(".increase"));
// const [counter, setCounter] = useState(0);
// if(setCounter>0){
//   querySelector.increase.display
// }
// export default function Counter() {
//   const [counter, setCounter] = useState(0);

//   const increase = () => {
//     setCounter(x => x + 1);
//   };

//   const decrease = () => {
//     setCounter(x => x - 1);
//   };
// }