import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./Css/ChatCard.css";
import { setUserDetails } from "../redux/features/usersSlice";
import { Link } from 'react-router-dom';
import './Css/ChatCard.css'


const ChatCard = () => {
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
    

  
  return (
    <div className="card-container">
      <div className="card" style={{marginTop:"0"}}>
        <div className="card-heading bg-primary text-dark">Select a User</div>
        <div className="card-scroll" style={{ height: "500px", overflowY: "scroll" }}>
          {userDetails?.users?.map(user => (
            
            <div className="user" key={user.id}>
              <img src={user?.profilepicture} alt={user.name} />
              <div className="user-name text-dark">{user.name}</div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
