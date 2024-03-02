import React, { useState } from 'react';
import cosmo from '../assets/cosmo.svg';
import envelope from "../assets/envelope.svg";
import lock from "../assets/lock.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';


const Login = ({setCurrentUser}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const [selectedRole, setSelectedRole] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        // Перевіряємо чи введена пошта закінчується на "@cosmic.edu"
        if (!value.endsWith('@cosmic.edu')) {
            setErrorMessage('Hey, it should be cosmic email :)');
        } else {
            setErrorMessage('');
        }
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogin = async () => {
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/login/", {
            email,
            password,
              role: selectedRole,
          }, { withCredentials: true });
    
          if (response.status === 201 || response.status === 200) {
              localStorage.setItem('sessionId', response.data.sessionId);
              setCurrentUser(response.data.user)
            navigate('');
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
                                <button onClick={() => selectRole('Teacher')}>Teacher</button>
                                <button onClick={() => selectRole('Student')}>Student</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="inputs">
                <div className="input">
                        <img src={envelope} alt="email"/>
                        <input type="email" placeholder='Cosmic E-mail' onChange={handleEmailChange} value={email} />
                            {errorMessage && <p style={{ color: 'red', fontFamily: 'Montserrat', fontSize: '10px', fontWeight: '600' }}>{errorMessage}</p>}
                    </div>
                    <div className="input">
                        <img src={lock} alt="lock"/>
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="submit-container">
                    <button
                        className="submit"
                        onClick={handleLogin}>Let's go!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;