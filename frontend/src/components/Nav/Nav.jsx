import React, { useState } from 'react';
import './Nav.css'

function Nav() {
    const [activeTab, setActiveTab] = useState('tab-profile');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="navbar">
            <a href="/" className={activeTab === 'tab-profile' ? 'tab active' : 'tab'} id="tab-profile" onClick={() => handleTabClick('tab-profile')}>Profile</a>
            <a href="/" className={activeTab === 'tab-home' ? 'tab active' : 'tab'} id="tab-home" onClick={() => handleTabClick('tab-home')}>Home</a>
            <a href="/" className={activeTab === 'tab-test' ? 'tab active' : 'tab'} id="tab-test" onClick={() => handleTabClick('tab-test')}>Tests</a>
            <a href="/" className={activeTab === 'tab-labs' ? 'tab active' : 'tab'} id="tab-labs" onClick={() => handleTabClick('tab-labs')}>Labs</a>
            <a href="/" className={activeTab === 'tab-tasks' ? 'tab active' : 'tab'} id="tab-tasks" onClick={() => handleTabClick('tab-tasks')}>Tasks</a>
            <a href="/" className={activeTab === 'tab-activities' ? 'tab active' : 'tab'} id="tab-activities" onClick={() => handleTabClick('tab-activities')}>Activities</a>
        </div>
    );
}

export default Nav;