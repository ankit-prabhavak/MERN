import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/about');
  }

  return (
    <div>
      This is my Home Page
      <br />
      <button onClick={handleClick}>
        Let's Ask Her Out
      </button>
    </div>
  )
}

export default Home
