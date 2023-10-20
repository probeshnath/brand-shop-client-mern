import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {

    console.log(product)

    const handleDelete = (id) => {
        console.log("id for delete", id)

        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
            .then((res => res.json()))
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={product.productImg} alt={product.productName} /></figure>
                <div className="card-body">
                    <h2 className="text-2xl text-orange-500 font-bold text-center">{product.productName}</h2>
                    {/* <p>{product.description}</p> */}
                    <div className='grid grid-cols-2 text-center '>
                        <p className='font-bold'>Price: <span className='text-red-700'>${product.price}</span></p>
                        <p className='font-bold'>Brand: <span className='text-red-700'>{product.brandName}</span> </p>
                        <p className='font-bold'>Category: <span className='text-red-700'>{product.category}</span> </p>
                        <p className='font-bold'>Rating: <span className='text-red-700'>{product.rating}</span> </p>
                    </div>
                    <div className='flex justify-around'>
                        <Link to={`/update/${product._id}`} ><button className='btn'>Update</button></Link>
                        <Link to={`/products/${product._id}`}><button className='btn'>Details</button></Link>
                        <button className='btn' onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product