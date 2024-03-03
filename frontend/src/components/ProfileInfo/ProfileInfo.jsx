import React, { useState } from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
  // Додаємо стан для збереження значення тексту профілю
  const [aboutText, setAboutText] = useState('');

  // Функція для оновлення тексту профілю
  const handleEdit = () => {
    // Ось тут ви можете використовувати aboutText, щоб зробити що завгодно з введеним текстом
    console.log('Збережено новий текст профілю:', aboutText);
  };

  return (
    <div>
      <div className='pr-ns'>
        <div className='ns-info'>
          <div className="name-info">Name</div>
          <div className="surname-info">Surname</div>
        </div>
        <div className='em-info'>
          <div className="email-info">Email</div>
        </div>
        <div className='about'>
          <p>About</p>
          <div className='line'></div>
          {/* При зміні поля введення text-about викликається setAboutText для оновлення стану */}
          <input 
            type="text" 
            className='text-about' 
            placeholder='Text about' 
            value={aboutText} 
            onChange={(e) => setAboutText(e.target.value)} 
          />
          <button className='edit' onClick={handleEdit}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;