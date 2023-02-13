import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Css/LandingPage.css";
import { setUserDetails } from "../redux/features/usersSlice";
import { setLoginUserDetails } from "../redux/features/loginUserSlice";
import { useNavigate, Link } from "react-router-dom";

const LandingPage = () => {
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const data = await axios.get("https://panorbit.in/api/users.json");
      setUserData(data.data);
      dispatch(setUserDetails(data.data));
    };
    getUserData();
  }, []);

  const { userDetails } = useSelector((state) => state.users);
  const handleClick = (id) => {
    const loginUser = userDetails.users.filter((user) => user.id === id)[0];
    dispatch(setLoginUserDetails(loginUser));
    navigate("/profile");
  };

  return (
    <div className="card-container">
      <div className="cards">
        <div className="card-heading text-dark" >
         <div className="top-header"><h5> Select an account </h5>
          </div ></div>
        <div
          className="card-scroll"
          style={{ height: "407px", overflowY: "scroll" }}
        >
          {userDetails?.users?.map((user) => (
            <div
            onClick={() => handleClick(user?.id)}
            className="user"
            key={user.id}
            >
              <img src={user?.profilepicture} alt={user.name} />
              <div className="user-name text-dark"><h6 className="username">{user.name}</h6></div>
              
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
