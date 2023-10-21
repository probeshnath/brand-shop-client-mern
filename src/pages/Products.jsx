import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from '../components/Product'
import { toast } from 'react-toastify'

const Products = () => {
    const loadProducts = useLoaderData()
    const [products, setProducts]= useState(loadProducts)
    // console.log(loadProducts)

    const handleDelete = (id) => {
        console.log("id for delete", id)

        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
            .then((res => res.json()))
            .then((data) => {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success("Delete this product from Cart")
                    const updatedCart = products.filter((p) => p._id !== id);
                    setProducts(updatedCart);
                  }
            })
    }
    return (
        <div className='max-w-6xl mx-auto pt-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products?.map((product) => (
                        <Product handleDelete={handleDelete} key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products