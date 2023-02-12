import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCard } from "../redux/features/chatCardSlice";
import { setUserDetails } from "../redux/features/usersSlice";
import './Css/ChatCard.css'


const ChatCard = () => {
  const [ userData, setUserData ] = useState([]);
  const dispatch = useDispatch();
const { cardState } = useSelector(state=>state.chatCard)
console.log('fom mishdul ',cardState)

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
    const handleClick = ()=>{
     dispatch(setCard(false))
    }

  
  return (  
    <div className="chat-card-container">
      <div className="chat-card" >
        <div  onClick={handleClick} className="chat-card-heading bg-primary text-light"><button className="btn btn-primary btn-chat">Chats</button></div>
        <div className="chat-card-scroll" style={{ height: "200px", overflowY: "scroll" }}>
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
