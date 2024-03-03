import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cosmo from '../assets/cosmo.svg';
import envelope from "../assets/envelope.svg";
import lock from "../assets/lock.svg";
import user from "../assets/user.svg";
import axios from 'axios';

import './Signup.css';

axios.defaults.withCredentials = true;

const Signup = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [last_name, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setSelectedRole] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const registration = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", {
        email,
        first_name,
        last_name,
        role,
        password,
      });

      if (response.status === 201 || response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error("Failed registration", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectRole = (selectedRole) => {
    setSelectedRole(selectedRole);
    setDropdownVisible(false);
  };

  return (
    <div className='login-container'>
      <div className='login-items'>
        <img src={cosmo} alt="Cosmo Logo" className='cosmoLogo' />
        <p className='login-caption'>Sign Up</p>
        <div className='dropdown'>
          <p className='as'>as</p>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              {role ? role : 'Choose Role'}
            </button>
            {dropdownVisible && (
              <div className="dropdown-content" id="dropdownContent">
                <a href="#" onClick={() => selectRole('Teacher')}>Teacher</a>
                <a href="#" onClick={() => selectRole('Student')}>Student</a>
              </div>
            )}
          </div>
        </div>
        <div className="inputs">
          <div className='ns-container'>
            <div className="ns-f1">
              <img src={user} alt="user" />
              <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="ns">
              <img src={user} alt="user" />
              <input type="text" placeholder='Surname' onChange={(e) => setSurname(e.target.value)} />
            </div>
          </div>
          <div className="input">
            <img src={envelope} alt="email" />
            <input type="email" placeholder='Cosmic E-mail' onChange={handleEmailChange} value={email} />
            {errorMessage && <p style={{ color: 'red', fontFamily: 'Montserrat', fontSize: '10px', fontWeight: '600' }}>{errorMessage}</p>}
          </div>
          <div className="input">
            <img src={lock} alt="lock" />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" onClick={registration}>Let's go!</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;