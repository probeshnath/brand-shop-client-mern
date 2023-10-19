import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaGoogle, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-gray-300'>
      <footer className='max-w-6xl mx-auto'>
        <div className="footer justify-between items-center p-10 ">
          <aside className=''>
            <img className='w-30 h-20' src="/logo.png" alt="logo" />
            <p><span className='text-2xl text-red-700 py-2'>Star Automotive Ltd</span> .<br />Star Automotive Shop is a trusted and reliable destination <br /> for all your automotive needs. Our facility is equipped with  <br /> state-of-the-art tools  and staffed by skilled technicians</p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">My Cart</a>
            <a className="link link-hover">Products</a>
          </nav>
          <nav>
            <header className="footer-title">Brand</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <div>
          <hr />
          <div className="footer justify-between items-center p-4 ">
            <aside className="items-center grid-flow-col">
              <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <div className='flex items-center gap-6 text-xl'>
              {/* soial icon */}
              <FaFacebookF className='text-[#3b5998]' />
              <FaTwitter className='text-[#00acee]' />
              <FaLinkedinIn className='text-[#0072b1]' />
              <FaYoutube className='text-[#CD201F]' />
              <FaGoogle className='text-[#EA4335]' />
              <FaGithub />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer