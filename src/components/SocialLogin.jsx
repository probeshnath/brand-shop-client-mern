import React, { useContext } from 'react'
import {BsGithub, BsGoogle} from 'react-icons/bs'
import { AuthContext } from './Provider/Provider'


const SocialLogin = () => {
  const {googleLogin,githubLogin} = useContext(AuthContext);
  // console.log(name)
  const handleGoogle = () =>{
    googleLogin()
    .then((result) =>{
      console.log(result.user)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const handleGithub = () =>{
    githubLogin()
    .then((result) =>{
      console.log(result.user)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className='py-5'>
        <div className='flex items-center'>
            <hr className='bg-orange-400  h-1 w-full ' />
            <p className=' w-[400px] text-center px-2'>Or Sign In with</p>
            <hr className='bg-orange-400  h-1 w-full ' />
        </div>

        

        <div className=" pt-5 flex items-center gap-4 justify-center">
            <button onClick={handleGoogle} className='flex items-center gap-4 border-2 py-2 px-3 border-[#EA4335] rounded-lg'><BsGoogle className='text-[#EA4335]' /> Google</button>
            <button onClick={handleGithub} className='flex items-center gap-4 border-2 py-2 px-3 border-black rounded-lg'><BsGithub /> Github</button>
        </div>
    </div>
  )
}

export default SocialLogin