import React, { useContext } from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/Provider'
import { toast } from 'react-toastify'

const Register = () => {
  const {register} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleRegister = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password)


      
    if (password.length < 6) {
      return toast.error("Enter minimun 6 characters password");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return toast.error("Minimun 1 characters will be Capital leter password");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      return toast.error("Minimun 1 characters will be Special Character password");
    }


    register(email,password)
    .then((result)=>{
      toast.success("Create Your account Successfully!");
      navigate("/")
    })
    .catch((error)=>{
      toast.error(error.message);
    })
  }

  return (
    <div className='max-w-6xl py-[100px] mx-auto'>
      <div className="flex justify-center rounded-md py-7 flex-col bg-slate-200 shadow-md items-center max-h-screen">
        <h2 className='py-5 text-3xl font-semibold'>Register</h2>
        <form onSubmit={handleRegister} className='flex justify-center gap-4 w-1/2 flex-col'>
          <input type="text" name='name' placeholder="Type Full Name" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
          <input type="email" name='email' placeholder="Type Email" className=" bg-white outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
          <input type="password" name='password' placeholder="Type Password" className="outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
          <input type="text" name='photo' placeholder="Type Photo URL" className="outline-none py-2 px-3 rounded-md  w-full max-w-lg" />
        
          <button className='bg-orange-600 py-2 px-4 w-[200px] mx-auto rounded-md text-white '>Register</button>
        </form>
        <p className='pt-4 text-sm text-right'>Already have an Account? <Link to="/login"><span className='text-blue-700 font-bold'>Login</span></Link></p>
        <SocialLogin />
      </div>
    </div>
  )
}

export default Register