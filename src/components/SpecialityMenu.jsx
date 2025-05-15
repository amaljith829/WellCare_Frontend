import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import './SpecialityMenu.css'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-6 mt-12'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
        Find by Speciality
      </h1>
      <p className='text-base md:text-lg text-center'>
        Choose from a wide range of specialities to find the right doctor for you.
      </p>
      <div className='flex overflow-x-auto gap-6 mt-6 w-full px-4 hide-scrollbar'>
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className='flex flex-col items-center gap-2  p-4 hover:scale-110 transition-transform duration-300 w-28 h-28'
          >
            <img
              src={item.image}
              alt={item.speciality}
              className='w-16 h-16 '
            />
            <p className='text-sm font-semibold text-center'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu