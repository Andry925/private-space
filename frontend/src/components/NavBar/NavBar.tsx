import React, { useState } from 'react';

function NavBar() {
    const [activeTab, setActiveTab] = useState('tab-home');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="navbar">
            <a href="/" className={activeTab === 'tab-home' ? 'tab active' : 'tab'} id="tab-home" onClick={() => handleTabClick('tab-home')}>Profile</a>
            <a href="/" className={activeTab === 'tab-about' ? 'tab active' : 'tab'} id="tab-about" onClick={() => handleTabClick('tab-about')}>Home</a>
            <a href="/" className={activeTab === 'tab-services' ? 'tab active' : 'tab'} id="tab-services" onClick={() => handleTabClick('tab-services')}>Tests</a>
            <a href="/" className={activeTab === 'tab-portfolio' ? 'tab active' : 'tab'} id="tab-portfolio" onClick={() => handleTabClick('tab-portfolio')}>Labs</a>
            <a href="/" className={activeTab === 'tab-contact' ? 'tab active' : 'tab'} id="tab-contact" onClick={() => handleTabClick('tab-contact')}>Tasks</a>
            <a href="/" className={activeTab === 'tab-blog' ? 'tab active' : 'tab'} id="tab-blog" onClick={() => handleTabClick('tab-blog')}>Activities</a>
        </div>
    );
}

export default NavBar;