import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Css/LandingPage.css";
import { setUserDetails } from "../redux/features/usersSlice";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [ userData, setUserData ] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("before")
    const getUserData = async () => {
      const data = await axios.get("https://panorbit.in/api/users.json");
      console.log("fetch dat ",data)
      setUserData(data.data);
      dispatch(setUserDetails(data.data));
    };
    getUserData();
  }, []);

  const {userDetails} = useSelector(state=>state.users)
  console.log("data ",userData)
  console.log("slice ",userDetails)

  
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-heading text-dark">Select a User</div>
        <div className="card-scroll" style={{ height: "500px", overflowY: "scroll" }}>
          {userDetails?.users?.map(user => (
            
            <Link style={{ textDecoration: 'none' }} to={`/profile/${user?.id}`} > <div className="user" key={user.id}>
              <img src={user?.profilepicture} alt={user.name} />
              <div className="user-name text-dark">{user.name}</div>
              
            </div></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
