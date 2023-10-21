import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/Provider'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    // window.onclick(setOpen(!open))
    console.log(user)
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isActive ? "border-b-2 font-bold text-white  border-orange-600" : ""} > Home </NavLink>  </li>
        {/* <li><NavLink to="/about" className={({ isActive, isPending }) => isActive ? "border-b-2 font-bold text-white border-orange-600" : ""} > About </NavLink>  </li> */}
        <li><NavLink to="/products" className={({ isActive, isPending }) => isActive ? "border-b-2 font-bold text-white border-orange-600" : ""} > Products </NavLink>  </li>
        <li><NavLink to="/cart" className={({ isActive, isPending }) => isActive ? "border-b-2 font-bold text-white border-orange-600" : ""} > My cart </NavLink>  </li>
        <li><NavLink to="/addproduct" className={({ isActive }) => isActive ? "border-b-2 font-bold text-white border-orange-600" : ""} > Add Product </NavLink>  </li>

    </>

    const handleLogout = () => {
        logout()
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    const handleToggle = (e) =>{
        if(e.target.checked){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    // theeme
    const [theme,setTheme]= useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" )
    useEffect(()=>{
        localStorage.setItem("theme",theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    },[theme])

    return (
        <div className='bg-black bg-opacity-40 text-white absolute top-0 left-0 w-full'>
            <div className=' max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo */}
                <div>
                    <img src="/logo.png" alt="Logo" className='w-30 h-20' />

                </div>
                {/* menu list */}
                <div>
                    <ul className='hidden md:flex gap-5 items-center'>
                        {links}
                    </ul>
                </div>
                {/* user || login */}
                <div className='flex items-center gap-10 mr-2 ' >
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    {
                        user ?
                            <>
                                {/* <Link to="/login"><button className='border-2 border-orange-600 py-1 px-4 rounded-2xl'>Logout</button></Link> */}
                                <div className='relative'>
                                    <img onClick={() => setOpen(!open)} className='w-[40px] h-[40px]  rounded-full' src={user?.photoURL || "https://i.ibb.co/4pHn0YL/user-244.png"} alt="" />
                                    {
                                        open &&
                                        <div className='bg-black w-[250px] z-50 absolute top-10 p-5 rounded-sm right-5'>
                                            <ul className='text-center myHover px-3 py-5 flex flex-col gap-3'>
                                                <img className='w-[50px] h-[50px] rounded-full mx-auto' src={user?.photoURL || "https://i.ibb.co/4pHn0YL/user-244.png"} alt="" />
                                                <h2 className='capitalize text-2xl font-bold -mb-3'>{user?.displayName}</h2>
                                                <p className='text-sm text-gray-400'>{user?.email}</p>
                                                <hr />
                                                {links}
                                                <li><button onClick={handleLogout} className='py-1 px-4 rounded-2xl'>Logout</button></li>
                                            </ul>
                                        </div>
                                    }

                                </div>
                            </>
                            : <>

                                <Link to="/login"><button className='border-2 border-orange-600 py-1 px-4 rounded-2xl'>Login</button></Link>

                            </>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar