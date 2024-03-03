import React from 'react'
import Nav from '../../components/Nav/Nav'
import image3 from '../../components/assets/image3.png'
import './LabsPage.css'

const LabsPage = () => {
  return (
    <div>
        <Nav/>
        <img className='ctf' width='450px' src={image3}/>
        <p className='tbc'>To be CATtinued...!</p>
    </div>
  )
}

export default LabsPage