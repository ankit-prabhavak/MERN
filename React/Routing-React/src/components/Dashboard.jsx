import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      This is my Dashboard
      <Outlet />
    </div>
  )
}

export default Dashboard
