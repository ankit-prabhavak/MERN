import React, { useEffect, useCallback, useState, useRef } from 'react';

const ExpensiveComp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const prevFunction = useRef(null); // moved inside component

  const expensiveCalculation = useCallback(() => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, [count]); // depends on count

  useEffect(() => {
    if (prevFunction.current) {
      if (prevFunction.current === expensiveCalculation) {
        console.log("Function not recreated");
      } else {
        console.log("Function got recreated");
      }
    } 
    prevFunction.current = expensiveCalculation;
  }, [expensiveCalculation]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <p>Expensive calculation result: {expensiveCalculation()}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default ExpensiveComp;
