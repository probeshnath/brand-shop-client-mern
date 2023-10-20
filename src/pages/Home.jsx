import React from 'react'
import Bannar from '../components/Bannar'
import Footer from '../components/Footer'
import Brands from '../components/Brands'
import OurTeam from '../components/OurTeam'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <Bannar />
      <Brands />
      <About />
      <OurTeam />
      <Footer />
    </div> 
  )
}

export default Home