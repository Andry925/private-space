import React from 'react'
import Nav from '../../components/Nav/Nav'
import Cosmic from '../../components/Cosmic/Cosmic'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import './CabinetPage.css'

const CabinetPage = () => {
  return (
    <div className='cabinet-container'>
        <Nav/>
        <div className='profile-container'>
          <div>
            <Cosmic/>
          </div>
          <div class='profile-info'>
            <ProfileInfo/>
          </div>
        </div>
    </div>
  )
}

export default CabinetPage