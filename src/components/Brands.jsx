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
                    <p className='text-sm aftertag uppercase pt-2 relative'>The autos we deals in</p>
                </div>

                <div className='flex justify-between items-center '>
                    {
                        brands?.map((brand) => (
                            <Link to={`/${brand.brand_name}`}>
                                <div className='text-center'>
                                    <img className='w-20 h-20' src={brand['bg-img']} alt="" />
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