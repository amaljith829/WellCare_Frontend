import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-blue-500 text-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 max-w-5xl mx-auto'>
      {/* Left Side */}
      <div className='md:w-1/2 flex flex-col items-start gap-4'>
        <p className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
          Book Appointment <br /> With the Best Doctors
        </p>
        <div className='flex items-center gap-3'>
          <img src={assets.group_profiles} alt="Group Profiles" />
          <p className='text-base md:text-lg'>
            Simply browse through our list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className='bg-white text-blue-500 font-semibold px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 hover:text-white transition duration-300'
        >
          Book Appointment
          <img className='w-4' src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* Right Side */}
      <div className='md:w-1/2 flex items-center justify-center'>
        <img className='w-full max-w-sm' src={assets.header_img} alt="Doctor" />
      </div>
    </div>
  )
}

export default Header