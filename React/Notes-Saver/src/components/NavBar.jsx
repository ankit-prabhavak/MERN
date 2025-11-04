import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navigation'>
      <NavLink
       to='/'
      >
        Home
      </NavLink>
      <NavLink
       to='/pastes'
      >
        Pastes
      </NavLink>
    </div>
  )
}

export default NavBar
