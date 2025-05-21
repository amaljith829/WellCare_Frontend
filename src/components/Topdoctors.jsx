import React, { use, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Topdoctors = () => {

    const navigate=useNavigate()
    const [doctors] = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-semibold'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Book an appointment with the best doctors in your area</p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-5'>
                {doctors.slice(0, 10).map((item,index) => (
                    <div
                        onClick={() => navigate(`/appointment/${item._id}`)}
                        className='bg-white border border-blue-100 rounded-xl overflow-hidden cursor-pointer shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-center'
                        key={index}
                    >
                        <img className='bg-blue-50 w-24 h-24 object-cover rounded-full mt-4' src={item.image} alt={item.name} />
                        <div className='p-3 flex flex-col items-center'>
                            <div className='flex items-center gap-2 text-xs text-green-500 mb-1'>
                                <span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span>
                                <span>Available</span>
                            </div>
                            <p className='font-semibold text-base text-center'>{item.name}</p>
                            <p className='text-xs text-gray-500 text-center'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='mt-6 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold shadow hover:bg-blue-600 transition '>
                more
            </button>
        </div>
    )
}

export default Topdoctors
