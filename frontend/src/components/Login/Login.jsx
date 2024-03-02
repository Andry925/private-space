import React, { useState } from 'react';
import cosmo from '../assets/cosmo.svg';
import envelope from "../assets/envelope.svg";
import lock from "../assets/lock.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [selectedRole, setSelectedRole] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogin = async () => {
        try {
          const response = await axios.post("http://127.0.0.1:8000/login", {
            email,
            password,
          }, { withCredentials: true });
    
          if (response.status === 201 || response.status === 200) {
              localStorage.setItem('sessionId', response.data.sessionId);
            navigate('/c');
          }
        } catch (error) {
          console.error("Such user does not exist", error);
        }
      }

    const selectRole = (role) => {
        setSelectedRole(role);
        setDropdownVisible(false); 
    };

    return (
        <div className='login-container'>
            <div className='login-items'>
                <img src={cosmo} alt="Cosmo Logo" className='cosmoLogo'/>
                <p className='login-caption'>Log in</p>
                <div className='dropdown'>
                    <p className='as'>as</p>
                    <div className="dropdown">
                    <button className="dropdown-btn" onClick={toggleDropdown}>
                        {selectedRole ? selectedRole : 'Choose Role'}
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
                        <div className="input">
                            <img src={envelope} alt="email"/>
                            <input type="email" placeholder='Cosmic E-mail' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input">
                            <img src={lock} alt="lock"/>
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="submit-container">
                        <button
                            className="submit">Увійти
                        </button>
                    </div> 
                </div>
        </div>
    );
};

export default Login;