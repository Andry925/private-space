import React from 'react' 
import { useState } from 'react';
import './Home.css'
import search from '../assets/search.svg';
import filter from '../assets/filter.svg';


const Home = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleApplyFilters = () => {
      setIsFilterOpen(false);
    };
  
    const handleSearch = () => {
    };

  return (
      <div className="search-container">
        <div className='search-box'>
          <input type="text" className="search-box-text" placeholder='...Find student/teacher' />
          <a onClick={handleSearch}>
              <img src={search} alt="search" className='search' />
          </a>
        </div>
        <div className='filter-container'>
          <div className='filter-box' onClick={() => setIsFilterOpen(true)}>
            <img src={filter} alt="filter" className="filter" />
          </div> {isFilterOpen && (
            <div className='filter-window'>
              <p>Sort by Roles</p>
              <button className='use-filter' onClick={handleApplyFilters}>Застосувати</button>
            </div>
          )}
        </div>
    </div>
    
  )
}

export default Home