import { useState } from 'react'
import './App.css'
import ChildComp from './components/ChildComp';
import { useCallback } from 'react';
import ExpensiveComp from './components/ExpensiveComp';

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount(count+1);
  // }, []);

  return (
    <div>
      <ExpensiveComp />
      {/* <div>
        count is {count}
      </div>
      <br />
      <div>
        <button onClick={handleClick}>
          Click Me!
        </button>
      </div>
      <br />
      <div>
        <ChildComp 
         buttonName=' Hello Ji! '
         handleClick={handleClick}
        />
      </div> */}
    </div>
  )
}

export default App
