import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileInfo.css';

const ProfileInfo = () => {
  const [user, setUser] = useState('');
  const [aboutText, setAboutText] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/user/');
      setUser(response.data.user);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = () => {
    console.log('Edit button clicked');
  };

  return (
    <div>
      <div className='pr-ns'>
        <div className='ns-info'>
          <div className='name-info'>{user && user.first_name}</div>
          <div className='surname-info'>{user && user.last_name}</div>
        </div>
        <div className='em-info'>
          <div className='email-info'>{user && user.email}</div>
        </div>
        <div className='about'>
          <p>About</p>
          <div className='line'></div>
          <input
            type='text'
            className='text-about'
            placeholder='Text about'
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
          />
          <button className='edit' onClick={handleEditClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;