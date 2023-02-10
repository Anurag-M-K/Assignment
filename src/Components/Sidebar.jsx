import React, { useState } from 'react';
import CommingSoon from './CommingSoon';
import { Link }  from 'react-router-dom'
import './Css/sidebar.css';
import './Test.scss'
import Header from './Header';

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
      <Header/>
      {/* <div className="tab-content">
        {activeTab === 'posts' && (
          <div className="content">
            <h2>Posts</h2> 
            <div className='headerLine' ></div>
            <CommingSoon/>

          </div>
        )}
        {activeTab === 'gallery' && (
          <div className="content">
            <h2>Gallery</h2>
            <div className='headerLine' ></div>
            <CommingSoon/>
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
            <CommingSoon/>
          </div>
        )}
      </div> */}
    

    </div>
  );
};

export default sidebar;