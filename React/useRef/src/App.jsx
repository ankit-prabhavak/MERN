import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';


// function App() {
//   const [count, setCount] = useState(0);
//   let val = useRef(1); // This variable will always persist its value
  
//   let buttonRef = useRef();

//   function handleIncrement() {
//     val.current = val.current + 1;
//     console.log("Value of Val: ", val.current);
//     setCount(count+1);
//   }

//   function changeColor() {
//     buttonRef.current.style.backgroundColor = "red";

//   }

//   useEffect(() => {
//     console.log("Render Successful!");
//   })

//   return (
//     <div>
//       ---Penetration Testing---
//       <br/>
//       Vulnerability: {count}
//       <br/>
//       <button 
//       ref = {buttonRef}
//       onClick={handleIncrement}>
//         Increment
//       </button>
//       <br/>
//       <br/>
//       <button onClick={changeColor}>
//         Toggle
//       </button>
//     </div>
//   )
// }

function App() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    // prevent multiple intervals
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div className='container'>
      <h2>⏱️ Timer Started: {time} sec</h2>

      <button onClick={startTimer}>Start</button>
      <br /><br />

      <button onClick={stopTimer}>Stop</button>
      <br /><br />

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App
