import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaGoogle, FaGithub } from 'react-icons/fa'


const TeamMember = ({ member }) => {
    return (
        <div className='text-center w-[80%] md:w-full mx-auto ' style={{ position: 'relative' }}>
            <img className=' w-full h-[250px] pb-3' src={member.img} alt={member.name} />
            <h2 className='text-xl font-bold'>{member.name}</h2>
            <p className='text-gray-400'>{member.position}</p>
            <div className='hover:absolute hidden text-white bg-black bg-opacity-60 w-full bottom-[63px] py-4 transition-opacity duration-300'>
                <h2 className='text-xl  font-bold'>{member.name}</h2>
                <p className='text-gray-400'>{member.position}</p>
                <div className='flex justify-center  pt-3 text-lg gap-3'>
                    <FaFacebookF className='text-[#3b5998]' />
                    <FaTwitter className='text-[#00acee]' />
                    <FaLinkedinIn className='text-[#0072b1]' />
                    <FaGoogle className='text-[#040202]' />
                    <FaGithub />
                </div>
            </div>
        </div>
    )
}

export default TeamMember