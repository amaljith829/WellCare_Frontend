import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'


const Appointment = () => {
  const { docId } = useParams()
  const { doctors, rupee } = useContext(AppContext)
  const daysofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState("")

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getavailableSlots = async () => {
    setDocSlots([])
    //getting current date
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      //getting current date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)
      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let TimeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        //add slot to the array
        TimeSlots.push({
          datatime: new Date(currentDate),
          time: formattedTime,
        })
        //increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(pre => ([...pre, TimeSlots]))
    }
  }
  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {

    getavailableSlots()
  }, [docInfo])

  return docInfo && (
    <div className="flex flex-col items-center min-h-[60vh] py-8">
      {/* Doctor Profile */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-3xl mb-6" style={{ minHeight: '210px', height: 'auto' }}>
        {/* Left: Doctor Image */}
        <div className="bg-blue-500 flex justify-center items-center p-6 md:w-1/3">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        {/* Right: Doctor Info */}
        <div className="flex-1 p-4 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-800">{docInfo.name}</span>
            <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />
          </div>
          <div className="mb-2 flex items-center gap-3 flex-wrap">
            <p className="text-base md:text-lg font-medium text-blue-600">{docInfo.degree} - {docInfo.speciality}</p>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full ml-1">{docInfo.experience}</span>
          </div>
          <div className="mb-2">
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

      {/* Booking Slots Section - now under the profile */}
      <div className='w-full max-w-lg mx-auto'>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-base font-semibold mb-4 text-blue-600">Booking Slots</p>
          <div className='flex gap-2 items-center w-full overflow-x-auto mb-4 hide-scrollbar'>
            {docSlots.length && docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                className={`text-center py-2 px-2 min-w-12 rounded-lg cursor-pointer text-xs transition-all duration-200 ${
                  slotIndex === index
                    ? 'bg-blue-500 text-white shadow'
                    : 'border border-gray-200 bg-gray-50 text-gray-600 hover:bg-blue-100'
                }`}
                key={index}
              >
                <p className="font-bold">{item[0] && daysofweek[item[0].datatime.getDay()]}</p>
                <p>{item[0] && item[0].datatime.getDate()}</p>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-3 w-full overflow-x-auto pb-1 hide-scrollbar'>
            {docSlots.length && docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-xs font-medium flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-all duration-200 ${
                  item.time === slotTime
                    ? 'bg-blue-500 text-white shadow'
                    : 'text-gray-500 border border-gray-300 bg-gray-50 hover:bg-blue-100'
                }`}
                key={index}
                style={{ minWidth: '70px', textAlign: 'center' }}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>
          <button className='bg-blue-500 text-white text-sm font-semibold px-6 py-2 rounded-full mt-6 shadow hover:bg-blue-600 transition'>
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Appointment