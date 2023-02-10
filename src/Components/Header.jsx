import React from 'react';
import './Css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h3 className="header-title">My Header</h3>
      <div className='header-end-content'>

      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="sdfsdf" style={{width:"25px",height:"25px"}} /> 
      <span><p className='text-dark'>anurag</p></span>
      </div>
    </header>
  );
};

export default Header;