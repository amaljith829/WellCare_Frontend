import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext} from '../context/AppContext'

const Doctors = () => {
  const {speciality} = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const {doctors} = useContext(AppContext)
  const applyFillter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(Doc => Doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFillter()
  }, [speciality, doctors])

  return (

    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatrician</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div className='w-full grid-cols-auto gap-4 gap-y-6'>
{
  filterDoc.map((item, index) => (
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
))
}

        </div>
      </div>
    </div>
  )
}

export default Doctors
