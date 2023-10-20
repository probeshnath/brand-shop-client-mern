import React from 'react'

const About = () => {
  const services = [
    {
      "id": 1,
      "img": "https://i.ibb.co/8sR7LkG/car-service-black-vector-icon-260nw-1661439136-removebg-preview.png",
      "service": "Oil Change",
      "description": "Routine oil change service to keep your engine running smoothly."
    },
    {
      "id": 2,
      "img": "https://i.ibb.co/9sg7xDJ/963363-200-removebg-preview.png",
      "service": "Brake Inspection",
      "description": "Thorough brake system inspection to ensure safe stopping."
    },
    {
      "id": 3,
      "img": "https://i.ibb.co/s3D5vm2/black-car-service-icon-set-vector-9418159-removebg-preview.png",
      "service": "Tire Rotation",
      "description": "Tire rotation to extend tire life and maintain even wear."
    },
    {
      "id": 4,
      "img": "https://i.ibb.co/hYVSLPk/images-removebg-preview-1.png",
      "service": "Performance Tuning",
      "description": "Enhance your vehicle's performance with custom tuning."
    },
    {
      "id": 5,
      "img": "https://i.ibb.co/9sg7xDJ/963363-200-removebg-preview.png",
      "service": "Car Detailing",
      "description": "Professional car detailing to restore and maintain your vehicle's appearance."
    },
    {
      "id": 6,
      "img": "https://i.ibb.co/1Mj3Hn7/istockphoto-1286554812-612x612-removebg-preview.png",
      "service": "Battery Replacement",
      "description": "Replace your car's battery for reliable starting and electrical performance."
    }
  ]

  return (
    <div className='bg-orange-50 py-10'>
      <div className="max-w-6xl mx-auto px-3 lg:flex justify-between gap-5">
        <div className=" pb-5">
          <h2 className='text-3xl uppercase font-bold pb-4'>who we are</h2>
          <img className='' src="https://i.ibb.co/L6DfWbk/Toyota-Tesla-Toyoda-Musk-1674789307388-1674789307560-1674789307560.jpg" alt="" />
          <p className='text-gray-600 pt-4 pb-2'>An automotive brand shop is a specialized retail establishment that focuses on selling automotive products, parts, accessories, and possibly offering related services. These shops cater to automotive enthusiasts, vehicle owners, and professionals in the automotive industry.</p>
          <button className='border-2 border-black py-2 px-4 rounded-md'>Read More</button>
        </div>
        <div className="">
          <h2 className='text-3xl uppercase font-bold pb-4'>what we do</h2>
          <p className='text-gray-600 pt-4 pb-2'>A strong brand identity with an eye-catching logo and distinctive store signage sets the tone for this retail experience. A comprehensive marketing strategy encompasses both online and offline channels, featuring a professionally designed website and active social media profiles. </p>
          <div className='grid grid-cols-2 gap-4'>
            {/* single div */}
            {
              services.map((service) => (
                <div className='flex gap-2'>
                  <img className='w-20 h-20' src={service.img} alt={service.service} />
                  <div>
                    <h3 className='text-lg font-bold'>{service.service}</h3>
                    <p className='text-sm text-gray-400'>{service.description}</p>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About