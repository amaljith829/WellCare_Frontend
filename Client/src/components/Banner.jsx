import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate=useNavigate()

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-500 rounded-lg shadow-lg px-6 md:px-8 lg:px-10 py-4 md:py-6 my-8">
      {/* Left side */}
      <div className="flex flex-col items-start gap-3 md:w-2/3">
        <p className="text-xl md:text-2xl font-bold text-white">Book Appointment</p>
        <p className="text-lg md:text-xl text-white mb-2 leading-relaxed w-full">
          With 100+ Trusted Doctors ready to help you, book your appointment quickly and easily.
        </p>
        <button onClick={()=>{navigate('/login'),scrollTo(0,0)}} className="bg-white text-blue-500 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-300 text-sm">
          Create Account
        </button>
      </div>
      {/* Right side */}
      <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
        <img
          src={assets.appointment_img}
          alt="appointment"
          className="w-32 md:w-40 rounded-lg"
          style={{ boxShadow: 'none' }}
        />
      </div>
    </div>
  )
}

export default Banner