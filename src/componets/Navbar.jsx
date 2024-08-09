import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className='mb-20  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img className='mx-2 w-10' src={logo} alt=""></img> */}
        </div>
        <div className='m-8 bg-whit flex items-center justify-center gap-4 text-2xl'>
        < FaLinkedinIn/>
        < FaGithub/>
        < FaSquareXTwitter/>
        < FaInstagram/>



        </div>
    </div>
  )
}

export default Navbar