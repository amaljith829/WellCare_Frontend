import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'


const Appointment = () => {
  const { docid } = useParams()
  const { doctors } = useContext(AppContext)

  const [docInfo,setDocInfo] = useState (null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docid)
    setDocInfo(docInfo)
    console.log(docInfo);
    
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docid])
  return docInfo && (
    <div>
        {/*.........doctors details.........*/}
        <div>
          <img src={docInfo.image} alt={docInfo.name}/>
        </div>
        <div>
          {/*........docinfo details.........*/}
          <p>{docInfo.name} <img src={assets.verified_icon} alt=''/></p>
        </div>
    </div>
  )
}

export default Appointment