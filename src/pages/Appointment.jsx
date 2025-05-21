import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'


const Appointment = () => {
  const { docId } = useParams()
  const { doctors, rupee } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])


  return docInfo && (
    <div className="flex justify-center items-center min-h-[60vh] py-8">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-3xl">
        {/* Left: Doctor Image */}
        <div className="bg-blue-500 flex justify-center items-center p-8 md:w-1/3">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        {/* Right: Doctor Info */}
        <div className="flex-1 p-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-800">{docInfo.name}</span>
            <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />
          </div>
          <div className="mb-2">
            <p className="text-base md:text-lg font-medium text-blue-600">{docInfo.degree} - {docInfo.speciality}</p>
            <p className="text-sm text-gray-500">{docInfo.experience}</p>
          </div>
          <div className="mb-3">
            <div className="flex items-center gap-1 mb-1">
              <span className="font-semibold text-gray-700">About</span>
              <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
            </div>
            <p className="text-sm text-gray-600">{docInfo.about}</p>
          </div>
          <p className="text-base font-semibold text-gray-800 mt-2">
            Appointment fee: <span className="text-blue-600">{rupee}{docInfo.fees}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Appointment