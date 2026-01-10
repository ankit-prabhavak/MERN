import './App.css'
import { useEffect, useEffectEvent, useState } from 'react'
import Timmer from './components/Timmer';
import DataFetcher from './components/DataFetcher';

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // first -> side effect function- what we want to perform
  // second -> clean-up function
  // third -> comma separated dependicies list on the basis of which everthing works in side effect

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // There can be different types of variations of useEffect functionality
  
  // variation: 1
  // runs on every render

  // useEffect(() => {
  //   alert("I will run on each render") 
  // })

  // Variation: 2
  // that runs on only first render only

  // useEffect(() => {
  //   alert("I will run on only first render!")

  // }, [])

  // variation: 3
  // runs when anything get updated

  // useEffect(() => {

  //   alert("I will run everytime the count is updated!")

  // }, [count])

  // variation: 4
  // It will run everytime any of the dependencies get updated

  // useEffect(() => {

  //   alert("I will run everytime the count or total is updated!")

  // }, [count, total])

  // variatoin: 5
  // using clean up function

  // useEffect(() => {

  //   alert("I will run everytime the count is updated!")
    
  //   return (
  //     alert("Count is unmounted from the UI!")
  //   )

  // }, [count])



  function handleCount() {
    setCount(count+1);
  }
  
  function handleTotal() {
    setCount(total+1);
  }

  return (
    <div>
      {/* <p>Lets Learn useEffect!</p>
      <br />
      <button onClick={handleCount}>
        Update Count
      </button>
      <br />
      Count = {count}


      <br />
      <button onClick={handleTotal}>
        Update Total
      </button>
      <br />
      Total = {total} */}

      {/* <Timmer></Timmer> */}

      <DataFetcher></DataFetcher>
    </div>
  )
}

export default App
