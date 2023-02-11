import React, { useState } from 'react';
import { Link }  from 'react-router-dom'
import './Css/sidebar.css';

const sidebar = () => {

  return (
    <div className="left-sidebar">
      <div className="tabs">
        <div 
  
        >
         <Link to='/profile' style={{ 
          textDecoration: 'none' ,
          color:"#ddd"

          }}> <h6 className=' py-3 text-light'> Profile</h6></Link> 
        </div>
        <div className='line' ></div>
         <div 
      
        >
         <Link style={{ 
          textDecoration: 'none' ,
          color:"#fff"

          }} to="/posts"><h6 className=' py-3 text-light'> Posts</h6></Link>
        </div>
        <div className='line' ></div>
        <div 
    
        >
        <Link style={{ 
          textDecoration: 'none' ,
          color:"#fff"

          }} to="/gallery">  <h6 className=' text-light py-3'> Gallary</h6></Link>
        </div>
        <div className='line' ></div>
        <div 
    
        >
        <Link style={{ 
          textDecoration: 'none' ,
          color:"#fff"

          }} to="/todo" > <h6 className=' py-3 text-light'> To-Do</h6></Link>
        </div>
      </div>
    

    </div>
  );
};

export default sidebar;