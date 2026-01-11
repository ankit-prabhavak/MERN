import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2;
  }

  const doublevalue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      Count: {count}
      <br /> <br />
      <button onClick={handleClick}>
        Increment
      </button>
      <br /><br />
      
      <input 
        placeholder='Enter Number'
        value={input}
        type="number"
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <br /><br />

      <div>
        Double: {doublevalue}
      </div>
    </div>
  );
}

export default App;
