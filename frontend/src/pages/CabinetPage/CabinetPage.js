import React from 'react'
import Nav from '../../components/Nav/Nav'
import Cosmic from '../../components/Cosmic/Cosmic'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

const CabinetPage = () => {
  return (
    <div>
        <Nav/>
        <div className='profile-container'>
          <Cosmic/>
          <ProfileInfo/>
        </div>
    </div>
  )
}

export default CabinetPage