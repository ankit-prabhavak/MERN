import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/dashboard')
    }
  return (
    <div>
      This is my about page
      <br/>
      <button onClick={handleClick}>She says no!</button>
    </div>
  )
}

export default About
