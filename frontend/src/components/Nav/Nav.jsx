import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const pathname = location.pathname;

        if (pathname === '/cab') {
            setActiveTab('tab-profile');
        } else if (pathname === '/home') {
            setActiveTab('tab-home');
        } else if (pathname === '/test') {
            setActiveTab('tab-test');
        } else if (pathname === '/labs') {
            setActiveTab('tab-labs');
        } else if (pathname === '/activities') {
            setActiveTab('tab-activities');
        }
    }, [location]);

    return (
        <div className="navbar">
            <Link to="/cab" className={activeTab === 'tab-profile' ? 'tab active' : 'tab'} id="tab-profile">Profile</Link>
            <Link to="/home" className={activeTab === 'tab-home' ? 'tab active' : 'tab'} id="tab-home">Home</Link>
            <Link to="/test" className={activeTab === 'tab-test' ? 'tab active' : 'tab'} id="tab-test">Tests</Link>
            <Link to="/labs" className={activeTab === 'tab-labs' ? 'tab active' : 'tab'} id="tab-labs">Labs</Link>
            <Link to="/activities" className={activeTab === 'tab-activities' ? 'tab active' : 'tab'} id="tab-activities">Activities</Link>
        </div>
    );
}

export default Nav;