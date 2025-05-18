import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Topdoctors from '../components/Topdoctors'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <Topdoctors/>
    </div>
  )
}

export default Home