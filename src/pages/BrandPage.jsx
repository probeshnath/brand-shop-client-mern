import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Product from '../components/Product';



const BrandPage = () => {
  const [selectbrand, setSelectBrand] = useState(null);
  const [products, setProducts] = useState(null)
  const { brand } = useParams();

  // fetch form db
  const allProduct = useLoaderData();
  console.log("all data", allProduct)

  useEffect(() => {
    const brandProducts = allProduct.filter((product) => product.brandName === brand)
    console.log("brand Product", brandProducts)
    setProducts(brandProducts);
  }, [])



  // brand slider pic fetch from json file
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const brands = data.find(item => item.brand_name == brand)
        console.log("brands", brands)

        setSelectBrand(brands)
      })
  }, [])
  console.log(selectbrand)
  return (
    <div className='max-w-6xl mx-auto pt-[80px]'>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={selectbrand?.img[0]} className="w-full h-[300px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={selectbrand?.img[1]} className="w-full  h-[300px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={selectbrand?.img[2]} className="w-full  h-[300px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/* <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> */}
      </div>
      {/* description */}

      {/*  */}
      <div>
        <h1 className='text-5xl text-center text-red-800 py-5'>Brand:{selectbrand?.brand_name} </h1>

        <div className='grid grid-cols-1 gap-4 px-3 md:grid-cols-2 lg:grid-cols-3'>
          {
          products &&  products?.map((product) => (
              <Product key={product._id} product={product} />
            ))
          }
        </div>
          {
            products?.length <= 0 &&   <div>
              <img src="https://i.ibb.co/VmwcX2M/oops.png" alt="" />
            <h2 className='text-3xl text-center w-full text-orange-600 font-bold'>No Products in this Brand</h2>
          </div>
          }

      </div>


    </div>
  )
}

export default BrandPage