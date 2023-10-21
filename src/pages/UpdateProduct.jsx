import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

const UpdateProduct = () => {
    const product = useLoaderData();
    console.log("update",product)
    const navigate = useNavigate();

    const handleUpdateProduct = (e) =>{
        e.preventDefault();
        console.log("Hi")
        const form = e.target;
        const productName = form.name.value;
        const description = form.description.value;
        const productImg = form.img.value;
        const price = form.price.value;
        const brandName = form.brandName.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const updateProduct = {
          productName,
          description,
          productImg,
          price,
          brandName,
          rating,
          category
        }
        console.log(updateProduct)
    
        fetch(`http://localhost:5000/products/${product?._id}`,{
          method:"PUT",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then((data => {
          console.log(data)
          if(data.modifiedCount> 0){

            toast.success("Product Updated Successfully!");
            navigate("/products")
          }
        }))
    
      }

  return (
    <div className='max-w-6xl mx-auto mt-[100px]'>
    <div className='bg-slate-100 py-4 rounded-md'>
      <h2 className='text-center text-4xl pb-3'>Update Product</h2>

      <form onSubmit={handleUpdateProduct} className='flex gap-4 flex-col justify-center text-center mx-auto w-1/2'>
        <input type="name" name='name' defaultValue={product.productName}  placeholder="Product Full Name" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
        <textarea name="description"  defaultValue={product.description} placeholder='Product description' className='bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg' rows="5"></textarea>
        <input type="text" name='img' defaultValue={product.productImg}   placeholder="Type Photo Url" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
        <input type="text" name='price'  defaultValue={product.price} placeholder="Type Price" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
        <select defaultValue={product.brandName} name='brandName' className="select select-bordered w-full max-w-lg">
          <option disabled selected>Brand Name</option>
          <option>Toyota</option>
          <option>Ford</option>
          <option>BMW</option>
          <option>Mercedes-Benz</option>
          <option>Tesla</option>
          <option>Honda</option>
        </select>
        <select defaultValue={product.rating} name='rating' className="select select-bordered w-full max-w-lg">
          <option disabled selected>Rating</option>
          <option>1 Star</option>
          <option>2 Star</option>
          <option>3 Star</option>
          <option>4 Star</option>
          <option>5 Star</option>
        </select>
        <select defaultValue={product.category} name='category' className="select select-bordered w-full max-w-lg">
          <option disabled selected>Product Category</option>
          <option>Tv</option>
          <option>Car</option>
          <option>Bike</option>
          <option>Mobile</option>
        </select>
        <button className='font-bold py-2 px-4 bg-orange-700 text-white w-full max-w-lg rounded-md'>Update Product</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateProduct