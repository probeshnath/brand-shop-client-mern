import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    console.log(product)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
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
                        <Link to={`/products/${product._id}`}><button className='btn'>Details</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Product