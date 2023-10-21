import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import {AuthContext} from '../Provider/Provider'
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const product = useLoaderData();
    console.log("product details",product)
    const {user} =useContext(AuthContext)

    const addtoCart = (product) =>{
      const cartData = {
        email: user.email,
        product
      }
      fetch("https://brand-shop-server-2e0xnfvom-probeshnath.vercel.app/cart",{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body: JSON.stringify(cartData)
      })
      .then(res => res.json())
      .then((data)=> {
        console.log(data)
        if(data.insertedId){
          toast("Product Added your Cart")
        }
      })
    }

    // const rating = product.rating.splite(" ")
    // console.log(rating)

  return (
    <div className='max-w-6xl mx-auto pt-[100px]'>
         <figure><img src={product.productImg} alt={product.productName} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl text-red-600">{product.productName}</h2>
                    <p className='text-gray-600'>{product.description}</p>
                    <div className='grid grid-cols-2 text-center py-3 '>
                        <p className='font-bold'>Price: <span className='text-red-700'>${product.price}</span></p>
                        <p className='font-bold'>Brand: <span className='text-red-700'>{product.brandName}</span> </p>
                        <p className='font-bold'>Category: <span className='text-red-700'>{product.category}</span> </p>
                        <p className='font-bold'>Rating: <span className='text-red-700'>{
                      product.rating
                        }</span> </p>
                    </div>
                    <div className=' flex justify-center gap-5'>
                        <Link to={`/update/${product._id}`} ><button className='btn'>Update</button></Link>
                        <button onClick={()=> addtoCart(product)} className='btn'>Add to Cart</button>
                    </div>
                    
                </div>
    </div>
  )
}

export default ProductDetails