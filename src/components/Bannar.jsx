import React from 'react'
import { Link } from 'react-router-dom'

const Bannar = () => {
    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zhzP25h/latest-trends-in-the-automotive-industry.png)' }}>
                <div className="hero-overlay bg-black bg-opacity-80"></div>
                <div className="hero-content justify-left text-left text-neutral-content">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <div className='w-1/2'>
                            <h1 className="mb-5 text-6xl font-bold " data-aos="fade-left">Welcome to <br /> <span className='text-red-700'>STAR automotive </span></h1>
                            <p className="mb-5 text-gray-400"> Star Automotive Shop is a trusted and reliable destination for all your automotive needs. Our facility is equipped with state-of-the-art tools and staffed by skilled technicians </p>
                            <Link to="/products" ><button data-aos="fade-up-right" className="btn bg-red-700 border-red-700 text-white hover:text-red-700">Buy Our Products</button></Link>
                        </div>
                        <div className='w-1/2'  data-aos="fade-right">
                            <img src="https://i.ibb.co/XYwJHV8/162-1621503-3d-cars-with-transparent-background-hd-png-download-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannar