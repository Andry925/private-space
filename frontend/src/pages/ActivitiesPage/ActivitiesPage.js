import React from 'react'
import Nav from '../../components/Nav/Nav'
import image2 from '../../components/assets/image2.png'
import './ActivitiesPage.css'

const ActivitiesPage = () => {
  return (
    <div>
        <Nav/>
        <img className='ctf' width='450px' src={image2}/>
        <p className='tbc'>To be CATtinued...!</p>
    </div>
  )
}

export default ActivitiesPage