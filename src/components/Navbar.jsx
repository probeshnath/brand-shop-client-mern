import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isActive ? "border-b-2 font-bold text-white  border-orange-600"  : ""} > Home </NavLink>  </li>
        <li><NavLink to="/about" className={({ isActive, isPending }) => isActive ? "border-b-2 font-bold text-white border-orange-600"  : ""} > About </NavLink>  </li>
        <li><NavLink to="/products" className={({ isActive, isPending }) => isActive ? "border-b-2 font-bold text-white border-orange-600"  : ""} > Products </NavLink>  </li>
        <li><NavLink to="/cart" className={({ isActive, isPending }) => isActive ? "border-b-2 font-bold text-white border-orange-600"  : ""} > My cart </NavLink>  </li>
        <li><NavLink to="/addproduct" className={({ isActive }) => isActive ? "border-b-2 font-bold text-white border-orange-600"  : ""} > Add Product </NavLink>  </li>

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
                    <ul className='flex gap-5 items-center'>
                        {links}
                    </ul>
                </div>
                {/* user || login */}
                <div className=' mr-2 ' >
                    <Link to="/login"><button className='border-2 border-orange-600 py-1 px-4 rounded-2xl'>Login</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar