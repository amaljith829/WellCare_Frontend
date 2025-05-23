import React, { useContext } from 'react'
import { doctors } from '../assets/assets'
import {AppContext} from '../context/AppContext'
const MyAppointments = () => {


  const {doctors} =useContext(AppContext)
  return (
    <div>
        <p>My appoinment</p>
        <div>
{doctors.slice(0,2).map((item,index)=>(
  <div key={index}>

  </div>
))}
        </div>
    </div>
  )
}

export default MyAppointments