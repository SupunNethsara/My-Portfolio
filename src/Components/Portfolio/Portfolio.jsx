import React, { useState } from 'react';
import './Portfolio.css';
import { BrowserRouter, Routes, Route ,Link, Outlet } from 'react-router-dom';
export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='Portfolio'>
      <h2>My Work</h2>

      <div className="nav">
        <div className="mb-4">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <Link to=''>
              <button
                className={`inline-block text-sm p-4 border-b-2 rounded-t-sm ${
                  activeTab === 'profile' ? 'text-red-500 border-red-500' : 'text-gray-500 border-transparent'
                }`}
                id="profile-tab"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === 'profile'}
                onClick={() => handleTabClick('profile')}
              >
               Latest Projects
              </button>
              </Link>
            </li>
            <li className="me-2" role="presentation">
              <Link to='webapp'>
              <button
                className={`inline-block text-sm p-4 border-b-2 rounded-t-sm ${
                  activeTab === 'dashboard' ? 'text-red-500 border-red-500' : 'text-gray-500 border-transparent'
                }`}
                id="dashboard-tab"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === 'dashboard'}
                onClick={() => handleTabClick('dashboard')}
              >
               Web-Appliaction
              </button>
              </Link>
            </li>
            <li className="me-2" role="presentation">
            <Link to='website'>
              <button
               
                className={`inline-block  text-sm p-4 border-b-2 rounded-t-sm ${
                  activeTab === 'settings' ? 'text-red-500 border-red-500' : 'text-gray-500 border-transparent'
                }`}
                id="settings-tab"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === 'settings'}
                onClick={() => handleTabClick('settings')}
              >
                Web-sites
              </button>
              </Link>
            </li>
            <li role="presentation">
             <Link to='userdesign'>
              <button
                className={`inline-block text-sm p-4 border-b-2 rounded-t-sm ${
                  activeTab === 'contacts' ? 'text-red-500 border-red-500' : 'text-gray-500 border-transparent'
                }`}
                id="contacts-tab"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected={activeTab === 'contacts'}
                onClick={() => handleTabClick('contacts')}
              >
                Ui/UX Designs
              </button>
              </Link>
            </li>
          </ul>
        </div>

        
        <div id="default-tab-content">
      
          <Outlet/>
          <div className='down-right-bulb animate-pulse duration-75 '>
          <img src="/bulb.png" alt="Decorative" />
        </div>
        </div>
      </div>
    </div>
  );
};
