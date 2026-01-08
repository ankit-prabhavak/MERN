import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  // create state 
  // manage state
  // change state
  // will syn the state in every child

  const [name, setName] = useState('');

  return (
    <div>
      <Card name={name} setName={setName} />
      <p>I am inside parent and the value of name is: {name}</p>

      
    </div>
    
  )
}

export default App
