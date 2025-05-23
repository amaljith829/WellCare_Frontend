import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div className='px-6 py-10'>
      <div className='text-center text-2xl font-semibold text-gray-700 mb-10 tracking-wide'>
        <p>ABOUT<span className='text-black font-medium'>US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto'>
        <div className='md:w-1/2 w-full flex justify-center md:justify-start order-2 md:order-1'>
          <img src={assets.about_image} alt="About Us" className='w-full md:w-[400px] h-auto object-cover rounded-lg shadow-lg' />
        </div>
        <div className='md:w-1/2 w-full text-gray-700 space-y-6 text-sm leading-relaxed md:text-left text-center order-1 md:order-2'>

          <p className='text-2xl font-semibold'>Your Health, Simplified.</p>
          <br />
          <p>At WellCare, we believe that taking care of your health should be easy, accessible, and stress-free. That’s why we created a smarter way to find trusted healthcare providers and book appointments—all from the convenience of your phone.</p>
          <p>Whether you're looking for a general physician, a specialist, or a telehealth consultation, WellCare connects you with qualified doctors across a wide range of specialties. Our intuitive app lets you browse doctor profiles, check availability, read verified reviews, and schedule appointments in just a few taps.</p>

          <p>We’re here to help you take charge of your health—anytime, anywhere.
            <br />
            <strong>WellCare:</strong>Healthcare that fits your life.</p>

        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficency:</b>
          <p>Streamlind appoinment sheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health. </p>
        </div>
      </div>

    </div>
  )
}

export default About