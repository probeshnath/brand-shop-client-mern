import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Brands = () => {
    const brands = useLoaderData();
    console.log(brands)
    return (
        <div className='bg-gray-200 py-10'>
            <div className='max-w-6xl mx-auto'>

                <div className='text-center pb-8'>
                    <h2 className='text-4xl text-red-700'>Our Brands</h2>
                    <p className='text-sm lg:aftertag uppercase pt-2 relative'>The autos we deals in</p>
                </div>

                <div className=' grid grid-cols-2 px-2 md:grid-cols-3  text-center  items-center '>
                    {
                        brands?.map((brand) => (
                            <Link to={`/product/${brand.brand_name}`}>
                                <div className='text-center border-2  border-white p-2'>
                                    <img className='w-20 h-20 mx-auto' src={brand['bg-img']} alt="" />
                                    <h2>{brand.brand_name}</h2>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Brands