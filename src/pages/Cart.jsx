import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../Provider/Provider';
import { toast } from 'react-toastify';

const Cart = () => {
  const [carts, setCart] = useState(null)
  const allDataCart = useLoaderData();
  console.log("first data", allDataCart)

  const { user } = useContext(AuthContext)

  useEffect(() => {
    const myCart = allDataCart.filter((data) => data.email === user.email);
    setCart(myCart)
  }, [allDataCart, user])

  console.log("my cart item ---", carts)

  const deleteCart = (productId) => {
    

    fetch(`http://localhost:5000/cart/${productId}`, {
            method: "DELETE"
        })
            .then((res => res.json()))
            .then((data) => {
                console.log(data)
                if(data.deletedCount > 0){
                  toast.success("Delete this product from Cart")
                  const updatedCart = carts.filter((cart) => cart.product._id !== productId);
                  setCart(updatedCart);
                }
            })


  }

  return (
    <div className='max-w-6xl mx-auto pt-[100px]'>
      <h2 className='text-3xl text-center font-bold text-red-600 pb-20'>My Cart</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5 px-3'>
        {
          carts?.map((cart) => (
            <div className="card bg-base-100 py-3 shadow-xl">
              <figure><img className='w-[300px] h-[100px]' src={cart.product.productImg} alt={cart.productName} /></figure>
              <div className="card-body">
                <h2 className="text-2xl text-orange-500 font-bold text-center">{cart.product.productName}</h2>

                <div className='grid grid-cols-2 text-center '>
                  <p className='font-bold'>Price: <span className='text-red-700'>${cart.product.price}</span></p>
                  <p className='font-bold'>Brand: <span className='text-red-700'>{cart.product.brandName}</span> </p>
                  <p className='font-bold'>Category: <span className='text-red-700'>{cart.product.category}</span> </p>
                  <p className='font-bold'>Rating: <span className='text-red-700'>{cart.product.rating}</span> </p>
                </div>
                <div className='flex justify-around'>
                  <button onClick={() => deleteCart(cart.product._id)} className='btn'>Delete</button>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart