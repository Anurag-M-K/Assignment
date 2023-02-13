import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCard } from "../redux/features/chatCardSlice";
import { setMessageCard } from "../redux/features/privateCardStateSlice";
import { setPrivateChat } from "../redux/features/privateChatSlice";
import { setUserDetails } from "../redux/features/usersSlice";
import { IoChatboxOutline } from "react-icons/io5";
import "./Css/ChatCard.css";

const ChatCard = () => {
  const [ userData , setUserData ] = useState([]);
  const dispatch = useDispatch();
  const { cardState } = useSelector((state) => state.chatCard);
  const [ visible , setVisible ] = useState(false);
  const [ privateTab , setPrivateTab ] = useState(true)
  const { loginUserDetails } = useSelector((state) => state.user);
 

  useEffect(() => {
    const getUserData = async () => {
      const data = await axios.get("https://panorbit.in/api/users.json");
      setUserData(data.data);
      dispatch(setUserDetails(data.data));
    };
    getUserData();
  }, []);

  

  const { userDetails } = useSelector((state) => state.users);

  const showCard = () => {
    setVisible(true);
    dispatch(setCard(true));
  };
  const handleClick = () => {
    setVisible(false);
    dispatch(setCard(false));
  };

  const privateChatClick = (id)=>{
    const chatingFriend = userDetails.users.filter((friend)=> friend.id === id)[0];
    dispatch(setPrivateChat(chatingFriend))
    if(privateTab === true){
      setPrivateTab(true);
      dispatch(setMessageCard(privateTab))
    }else{
      setPrivateTab(false)
    }
  }


  const excludedValue = loginUserDetails.name

  const friendsData = userDetails.users.filter(value => value.name !==excludedValue)

  
  return (
    <>
    
      <div className="chat-card-container">
        {visible ? (
          <div className="chat-card">
            <div
              onClick={handleClick}
              className="chat-card-heading  text-light  "
            >
              <button className="btn btn-primary btn-chat text-start " style={{
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "0px" ,
                borderTopLeftRadius: "2px",
                width:"100%"
              }}>{<IoChatboxOutline className="me-2"  />}Chats</button>
            </div>
            <div
              className="chat-card-scroll"
              style={{ height: "46vh", overflowY: "scroll" }}
            >
              {friendsData?.map((user) => (
                <div onClick={()=>privateChatClick(user?.id)} className="user" key={user.id}>
                  <img src={user?.profilepicture} alt={user.name} />
                  <div className="user-name text-dark">{user.name}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="btn-card-visible" >
            <div className="btn btn-primary " onClick={showCard}>{<IoChatboxOutline style={{marginRight:"10px",    marginLeft: "-109px"}}  />}
              Chats  
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatCard;
