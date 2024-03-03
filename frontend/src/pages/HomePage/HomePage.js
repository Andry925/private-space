import React from 'react'
import Nav from '../../components/Nav/Nav'
import Home from '../../components/Home/Home'

const HomePage = () => {
  return (
    <div className='home-container'>
        <Nav/>
        <div className='profile-container'>
          <div>
            <Home/>
          </div>
        </div>
    </div>
  )
}

export default HomePage