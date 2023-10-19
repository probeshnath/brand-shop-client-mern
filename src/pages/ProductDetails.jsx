import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const ProductDetails = () => {
    const product = useLoaderData();
    // console.log("product details",product)
  return (
    <div className='max-w-6xl mx-auto pt-[100px]'>
         <figure><img src={product.productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.brandName}</p>
                    <p>{product.category}</p>
                    <p>{product.rating}</p>
                    <div>
                        <Link to={`/update/${product._id}`} ><button className='btn'>Update</button></Link>
                        <Link to={`/products/${product._id}`}><button className='btn'>Buy Product</button></Link>
                    </div>
                    
                </div>
    </div>
  )
}

export default ProductDetails