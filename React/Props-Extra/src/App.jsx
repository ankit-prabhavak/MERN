import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0);

  function Click() {
    setCount(count+1);
  }

  return (

    <div>

      <Button clickMe = {Click} text = "Click Here">
        <h1>{count}</h1>
      </Button>
      {/* <Card name="Ankit Kumar">
      <h1>Love Coding!</h1>
      <p>Hey there, I am using ReactJs!</p>
      </Card> */}
    </div>
  )
}

export default App
