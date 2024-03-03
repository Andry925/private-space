import React from 'react'
import Nav from '../../components/Nav/Nav'
import image1 from '../../components/assets/image1.png'
import './TestPage.css'

const TestPage = () => {
  return (
    <div>
        <Nav/>
        <img className='ctf' width='450px' src={image1}/>
        <p className='tbc'>To be CATtinued...!</p>
    </div>
  )
}

export default TestPage