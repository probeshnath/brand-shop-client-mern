import React from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='max-w-6xl py-[100px] mx-auto'>
      <div className="flex justify-center rounded-md py-7 flex-col bg-slate-200 shadow-md items-center max-h-screen">
        <h2 className='py-5 text-3xl font-semibold'>Login</h2>
        <form className='flex justify-center gap-4 w-1/2 flex-col'>
          <input type="email" name='email' placeholder="Type Email" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
          <input type="password" name='password' placeholder="Type Password" className="outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
          <p className='text-gray-400 text-right  w-full max-w-lg cursor-pointer text-sm'>Forget Password</p>
          <button className='bg-orange-600 py-2 px-4 w-[200px] mx-auto rounded-md text-white '>Login</button>
        </form>
       <p className='pt-4 text-sm text-right'>Don't have an Account? <Link to="/register"><span className='text-blue-700 font-bold'>Register</span></Link></p>
        <SocialLogin />
      </div>
    </div>
  )
}

export default Login