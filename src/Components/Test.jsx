import React, { useState } from 'react';
import './Test.css';
import './Test.scss'

const Test = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="left-sidebar">
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`} 
          onClick={() => setActiveTab('profile')}
        >
         <h6> Profile</h6> 
        </div>
        <div className='line' ></div>
         <div 
          className={`tab ${activeTab === 'posts' ? 'active' : ''}`} 
          onClick={() => setActiveTab('posts')}
        >
         <h6> Posts</h6>
        </div>
        <div className='line' ></div>
        <div 
          className={`tab ${activeTab === 'gallery' ? 'active' : ''}`} 
          onClick={() => setActiveTab('gallery')}
        >
         <h6> Gallary</h6>
        </div>
        <div className='line' ></div>
        <div 
          className={`tab ${activeTab === 'todo' ? 'active' : ''}`} 
          onClick={() => setActiveTab('todo')}
        >
         <h6> To-Do</h6>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'posts' && (
          <div className="content">
            <h2>Posts</h2>
            <div className='headerLine' ></div>

          </div>
        )}
        {activeTab === 'gallery' && (
          <div className="content">
            <h2>Gallery</h2>
            <div className='headerLine' ></div>
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="content">
           <span> <h2>Profile</h2></span> 
            <div className='headerLine' ></div>
            
          </div>
        )}
        {activeTab === 'todo' && (
          <div className="content">
            <h2>To-Do</h2>
            <div className='headerLine' ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;