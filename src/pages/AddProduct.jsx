import React from 'react'

const AddProduct = () => {
  return (
    <div className='max-w-6xl mx-auto mt-[100px]'>
      <div className='bg-slate-100 py-4 rounded-md'>
        <h2 className='text-center text-4xl pb-3'>Add Product</h2>
        <form className='flex gap-4 flex-col justify-center text-center mx-auto w-1/2'>
          <input type="name" name='name' placeholder="Product Full Name" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
          <textarea name="description" id="" placeholder='Product description' className='bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg' rows="5"></textarea>
          <input type="text" name='img' placeholder="Type Photo Url" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
          <input type="text" name='price' placeholder="Type Price" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
          <select className="select select-bordered w-full max-w-lg">
            <option disabled selected>Brand Name</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>BMW</option>
            <option>Mercedes-Benz</option>
            <option>Tesla</option>
            <option>Honda</option>
          </select>
          <select className="select select-bordered w-full max-w-lg">
            <option disabled selected>Rating</option>
            <option>Rating-1</option>
            <option>Rating-2</option>
            <option>Rating-3</option>
            <option>Rating-4</option>
            <option>Rating-5</option>
          </select>
          <select className="select select-bordered w-full max-w-lg">
            <option disabled selected>Product Category</option>
            <option>Rating-1</option>
            <option>Rating-2</option>
            <option>Rating-3</option>
            <option>Rating-4</option>
            <option>Rating-5</option>
          </select>
          <button className='font-bold py-2 px-4 bg-orange-700 text-white w-full max-w-lg rounded-md'>Create Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct