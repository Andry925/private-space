import React, { useState } from 'react';
import cosmo from '../assets/cosmo.svg';
import envelope from "../assets/envelope.svg";
import lock from "../assets/lock.svg";
import user from "../assets/user.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedRole, setSelectedRole] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    // const handleEmailChange = (e) => {
    //     const value = e.target.value;
    //     setEmail(value);

    //     if (!value.endsWith('@cosmic.edu')) {
    //         setErrorMessage('Hey, it should be cosmic email :)');
    //     } else {
    //         setErrorMessage('');
    //     }
    // };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSignup = async () => {
        try {

            const response = await axios.post("http://127.0.0.1:8000/signup", {
                name,
                surname,
                email,
                password,
                role: selectedRole
            });

            if (response.status === 201 || response.status === 200) {
                const dashboardPath = selectedRole === 'Teacher' ? '/teacher-cab' : '/student-cab';
                navigate(dashboardPath);
            }
        } catch (error) {
            console.error("Error during signup:", error);
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
                <p className='login-caption'>Sign Up</p>
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
                    <div className='ns-container'>
                        <div className="ns-f1">
                            <img src={user} alt="user"/>
                            <input type="user" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="ns">
                            <img src={user} alt="user"/>
                            <input type="user" placeholder='Surname' onChange={(e) => setSurname(e.target.value)}/>
                        </div>
                    </div>
                    <div className="input">
                        <img src={envelope} alt="email"/>
                        <input type="email" placeholder='Cosmic E-mail' 
                        // onChange={handleEmailChange} 
                        value={email} />
                        {/* {errorMessage && <p style={{ color: 'red', fontFamily: 'Montserrat', fontSize: '10px', fontWeight: '600' }}>{errorMessage}</p>} */}
                    </div>
                    <div className="input">
                        <img src={lock} alt="lock"/>
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="submit-container">
                    <a href="/login">
                            <button className="submit" 
                            onClick={handleSignup}
                        >Let's go!</button>
                        </a>
                </div> 
            </div>
        </div>
    );
};

export default Signup;