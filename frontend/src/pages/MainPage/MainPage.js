import React from 'react';
import MainAside from '../../components/MainAside/MainAside';
import MainCosmic from '../../components/MainCosmic/MainCosmic';
import './MainPage.css'



const MainPage = () => {
    return (
        <div className='main-page-container'>
            <div className='mainAside'>
              <MainAside />  
            </div>
            <div className='mainCosmic'>
              <MainCosmic />  
            </div>
        </div>
    );
};

export default MainPage;