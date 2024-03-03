import React from 'react'
import Nav from '../../components/Nav/Nav'
import Home from '../../components/Home/Home'
import Rating from '../../components/Rating/Rating'

const HomePage = () => {
  return (
    <div className='home-container'>
        <Nav/>
        <div className='profile-container'>
          <div>
            <Home/>
          </div>
        </div>
        <div>
            <Rating/>
          </div>
    </div>
  )
}

export default HomePage