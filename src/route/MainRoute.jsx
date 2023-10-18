import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainRoute = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainRoute