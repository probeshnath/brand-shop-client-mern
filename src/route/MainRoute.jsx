import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/Provider';

const MainRoute = () => {
  const {loading} = useContext(AuthContext)

  if(loading){
    return (
      <div className='centered-container'>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    )
  }
  return (
    <div>
        <Navbar />
        <Outlet />
        <ToastContainer />
    </div>
  )
}

export default MainRoute