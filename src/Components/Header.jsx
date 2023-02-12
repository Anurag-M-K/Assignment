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

  const [ profileCard , setProfileCard ] = useState(false);

  const activatingCard = () => {
    if (profileCard === false) {
      setProfileCard(true);
    } else {
      setProfileCard(false);
    }
  };

  const { loginUserDetails } = useSelector((state) => state.user);
  return (
    <>
      <header className="header">
        <div className="tab-content">
          <div className="content">
            <div className="container">
              <div className="col-md-11">
                <div className="txt">
                  <h5>{routeName}</h5>
                </div>
              </div>
              <div
                onClick={activatingCard}
                className=" col-md-1 user"
                key={loginUserDetails?.id}
              >
                <img
                  style={{ width: "40px", height: "40px", marginLeft: "5px" }}
                  src={loginUserDetails?.profilepicture}
                  alt="55"
                />
                <div className="user-name text-dark">
                  {loginUserDetails?.name}
                </div>
              </div>
            </div>
            <div className="headerLine"></div>
          </div>
          <div className="body-component">
            <div className="card-component">
              {profileCard ? <ProfileCard /> : ""}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
