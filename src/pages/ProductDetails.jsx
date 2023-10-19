import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import {AuthContext} from '../Provider/Provider'

const ProductDetails = () => {
    const product = useLoaderData();
    // console.log("product details",product)
    const {user} =useContext(AuthContext)

    const addtoCart = (product) =>{
      const cartData = {
        email: user.email,
        product
      }
      fetch("http://localhost:5000/cart",{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body: JSON.stringify(cartData)
      })
      .then(res => res.json())
      .then((data)=> {
        console.log(data)
      })
    }

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
                        <button onClick={()=> addtoCart(product)} className='btn'>Add to Cart</button>
                    </div>
                    
                </div>
    </div>
  )
}

export default ProductDetails