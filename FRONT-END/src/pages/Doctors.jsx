import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showfilter, setShowFilter] = useState(false)
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
  }, [doctors, speciality])

  return (
    <div className="py-8 px-2 md:px-8">
      <p className="text-gray-600 font-semibold mb-6">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showfilter ? 'bg-blue-500 text-white' : ''} `} onClick={() => setShowFilter(prev => !prev)}>filters</button>
        {/* Speciality list */}
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showfilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatrician' ? 'bg-indigo-100 text-black' : ''}`}>Pediatrician</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black' : ''}`}>Gastroenterologist</p>
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
