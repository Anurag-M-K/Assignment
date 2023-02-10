import React, { useState } from 'react';
import CommingSoon from './CommingSoon';
import { useLocation } from 'react-router-dom'
import './Css/Header.css';

const Header = () => {
  const [state,setState] = useState("")


  const location = useLocation()
  let pathSegments = location.pathname.split('/');
  let routeName = pathSegments[pathSegments.length - 1]
  console.log(routeName,"namer ")


  return (
    <header className="header">
   <div className="tab-content">
        
          <div className="content">
            <h2>{routeName}</h2> 
            <div className='headerLine' ></div>
            <CommingSoon/>

          </div>
        
       
      
      </div> 
    </header>
  );
};

export default Header;