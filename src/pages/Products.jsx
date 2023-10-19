import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from '../components/Product'

const Products = () => {
    const loadProducts = useLoaderData()
    console.log(loadProducts)
    return (
        <div className='max-w-6xl mx-auto pt-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    loadProducts?.map((product) => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products