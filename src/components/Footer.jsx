import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*left section*/}
        <div>
          <img  src={assets.logo} alt="logo" className='w-40 mb-5' />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Thank you for choosing WellCare — Your health, our priority.</p>
        </div>

        {/*middle section*/}

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
           <NavLink
                              to='/'
                              className={({ isActive }) => isActive ? 'underline text-blue-500' : ''}
                          >
                              <li className='py-1'>HOME</li>
                          </NavLink>
                          
                          <NavLink
                              to='/about'
                              className={({ isActive }) => isActive ? 'underline text-blue-500' : ''}
                          >
                              <li className='py-1'>ABOUT</li>
                          </NavLink>
                          <NavLink
                              to='/contact'
                              className={({ isActive }) => isActive ? 'underline text-blue-500' : ''}
                          >
                              <li className='py-1'>CONTACT</li>
                          </NavLink>
                          <NavLink
                              to='/doctors'
                              className={({ isActive }) => isActive ? 'underline text-blue-500' : ''}
                          >
                              <li className='py-1'>PRIVACY POLICY</li>
                          </NavLink>
          </ul>
        </div>
        {/*right section*/}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
          <ul className='flex flex-col gap-2 text-gray-600'>
          <li>+125-551-789</li>
          <li>wellcare@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*--------copyright section--------*/}
      <hr/>
      <p className='py-5 text-sm text-center'>Copyright 2025@WellCare - All Right Reserved.</p>
      <div>

      </div>
    </div>
  )
}

export default Footer