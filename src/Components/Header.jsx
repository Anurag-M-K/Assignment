import React from "react";
import { useLocation } from "react-router-dom";
import "./Css/Header.css";

const Header = () => {
  //extracting url name from current url
  const location = useLocation();
  let pathSegments = location.pathname.split("/");
  let routeName = pathSegments[pathSegments.length - 1].toUpperCase();

  return (
    <header className="header">
      <div className="tab-content">
        <div className="content">
          <h5>{routeName}</h5>
          <div className="headerLine"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
