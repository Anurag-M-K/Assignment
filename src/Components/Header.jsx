import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Css/Header.css";
import ProfileCard from "./ProfileCard";

const Header = () => {
  //extracting url name from current url
  const location = useLocation();
  let pathSegments = location.pathname.split("/");
  let routeName = pathSegments[pathSegments.length - 1].toUpperCase();

  const [profileCard,setProfileCard] = useState(false)

  const activatingCard = ()=>{
if(profileCard===false){
  setProfileCard(true)
}    else{
  setProfileCard(false)
}
  }

  const { loginUserDetails } = useSelector(state=>state.user)
  return (
    <>
    <header className="header">
      <div className="tab-content">
        <div className="content">
          <div className="container">

          <div className="col-md-10">
          <div className="txt"><h5>{routeName}</h5></div>

          </div>
          <div className="col-md-2"><span onClick={activatingCard}> <h6 className="text-dark">{loginUserDetails?.name}</h6></span></div>
          </div>
          <div className="headerLine"></div>
        </div>
        <div className="body-component">

        <div className="card-component">
          {profileCard ?  <ProfileCard/> : ""}
        </div>
        </div>
      </div>
      
    </header>
    </>
  );
};

export default Header;
