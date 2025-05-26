import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter(
                (doc) => doc.speciality === speciality && doc._id !== docId
            )
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

    return (
        <div className='flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-semibold'>Related Doctors</h1>
            <p className='text-center text-sm whitespace-nowrap'>
                Simply browse through the list of related doctors
            </p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-5'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`)
                            scrollTo(0, 0)
                        }}
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
        </div>
    )
}

export default RelatedDoctors
