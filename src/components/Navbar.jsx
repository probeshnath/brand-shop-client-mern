import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/Provider'

const Navbar = () => {
    const { user } = useContext(AuthContext)
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
                <div className=' mr-2 ' >
                    {
                        user ?
                            <>
                                {/* <Link to="/login"><button className='border-2 border-orange-600 py-1 px-4 rounded-2xl'>Logout</button></Link> */}
                                <div className='relative'>
                                    <img onClick={()=>setOpen(!open)} className='w-[40px] h-[40px]  rounded-full' src={user?.photoURL || "https://i.ibb.co/4pHn0YL/user-244.png"} alt="" />
                                    {
                                        open &&
                                        <div className='bg-black w-[250px] z-50 absolute top-10 p-5 rounded-sm right-5'>
                                            <ul className='text-center myHover px-3 py-5 flex flex-col gap-3'>
                                                <img className='w-[50px] h-[50px] rounded-full mx-auto' src={user?.photoURL || "https://i.ibb.co/4pHn0YL/user-244.png"} alt="" />
                                                <h2 className='capitalize text-2xl font-bold -mb-3'>{user?.displayName}</h2>
                                                <p className='text-sm text-gray-400'>{user?.email}</p>
                                                <hr />
                                                {links}
                                                <li><button className='py-1 px-4 rounded-2xl'>Logout</button></li>
                                            </ul>
                                        </div>
                                    }

                                </div>
                            </>
                            :
                            <Link to="/login"><button className='border-2 border-orange-600 py-1 px-4 rounded-2xl'>Login</button></Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar