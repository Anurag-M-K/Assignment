import React, { useState } from 'react';
import { Link }  from 'react-router-dom'
import './Css/sidebar.css';

const sidebar = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="left-sidebar">
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`} 
          onClick={() => setActiveTab('profile')}
        >
         <Link to='/profile' style={{ 
          textDecoration: 'none' ,
          color:"#fff"

          }}> <h6> Profile</h6></Link> 
        </div>
        <div className='line' ></div>
         <div 
          className={`tab ${activeTab === 'posts' ? 'active' : ''}`} 
          onClick={() => setActiveTab('posts')}
        >
         <Link style={{ 
          textDecoration: 'none' ,
          color:"#fff"

          }} to="/posts"><h6> Posts</h6></Link>
        </div>
        <div className='line' ></div>
        <div 
          className={`tab ${activeTab === 'gallery' ? 'active' : ''}`} 
          onClick={() => setActiveTab('gallery')}
        >
        <Link style={{ 
          textDecoration: 'none' ,
          color:"#fff"

          }} to="/gallery">  <h6> Gallary</h6></Link>
        </div>
        <div className='line' ></div>
        <div 
          className={`tab ${activeTab === 'todo' ? 'active' : ''}`} 
          onClick={() => setActiveTab('todo')}
        >
        <Link style={{ 
          textDecoration: 'none' ,
          color:"#fff"

          }} to="/todo" > <h6> To-Do</h6></Link>
        </div>
      </div>
    

    </div>
  );
};

export default sidebar;