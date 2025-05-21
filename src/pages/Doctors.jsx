import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()

  const applyFillter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(Doc => Doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFillter()
  }, [speciality, doctors])

  return (
    <div className="py-8 px-2 md:px-8">
      <p className="text-lg font-semibold mb-6 text-center">Browse through the doctors specialist.</p>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Example: Speciality list */}
        <div className="hidden md:flex flex-col gap-2 bg-blue-50 rounded-lg p-4 min-w-[180px]">
          <p className="font-semibold text-blue-600">Specialities</p>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatrician</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="bg-white border border-blue-100 rounded-2xl overflow-hidden cursor-pointer shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-3"
                key={index}
              >
                <img className="bg-blue-50 w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mt-2 mb-2 shadow-sm" src={item.image} alt={item.name} />
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 text-xs text-green-500 mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                    <span>Available</span>
                  </div>
                  <p className="font-semibold text-sm text-center">{item.name}</p>
                  <p className="text-xs text-gray-500 text-center">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors
