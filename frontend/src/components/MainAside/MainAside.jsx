import React from 'react'
import './MainAside.css'

const MainAside = () => {
  return (
    <div>
        <div className='main-login-container'>
          <div className='main-login'>
            <p className='login-text'>Log in</p>
            <p className='yps-text'>your Private Space</p>
            <a href="/login">
              <button className='lets-go'>Let's go!</button>
            </a>
            
        <p className='idh-acc'>I don't have an account :(</p>
          </div>
        </div>
    </div>
  )
}

export default MainAside