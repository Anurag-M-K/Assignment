import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { setMessageCard } from "../redux/features/privateCardStateSlice";
import "./Css/PrivateMessage.css";

const PrivateMessage = () => {
    
    const dispatch = useDispatch()

      
        const { privateMessageState  } = useSelector((state) => state.privateChat)
    console.log("privat maessage ",privateMessageState)

    const { messageCardState } = useSelector((state)=>state.messageCard)
    console.log("messagecarsttate ",messageCardState)

 const messageHide = () =>{
    dispatch(setMessageCard(false))
 }


  return (
    <>
    {messageCardState ? (
      <div className="privateChat-card-container">
        
          <div className="privateChat-card">
            <div
              className="chat-card-heading bg-primary text-light"
            >
              <button onClick={messageHide} className="btn btn-primary btn-message"> <div className="user">
                  <img src={privateMessageState?.profilepicture} alt='' />
                  <div className="user-name text-light pt-2">{privateMessageState?.name}</div>
                </div></button>
            </div>  
            <div
              className="message-card-scroll"
              style={{ height: "0", overflowY: "scroll" }}
            >
              
            
              
            </div>
            
            <div

            
              className="privateChat-card-scroll"
              style={{ height: "180px", overflowY: "scroll",borderBottom:"1px solid #ddd" }}
            >
              <div  className="user-message-card" >
                  <small >Hit how are you? 
                     </small>
                  <div className="user-name text-dark"></div>
                </div>
                <div ><small className="align-items-end justify-content-end">fine thanks..</small></div>
               
              <div  className="user" >
                  <small >Hit how are you? 
                     </small>
                  <div className="user-name text-dark"></div>
                </div>
                <div ><small className="align-items-end justify-content-end">fine thanks..</small></div>
               
              <div  className="user" >
                  <small >Hit how are you? 
                     </small>
                  <div className="user-name text-dark"></div>
                </div>
                <div ><small className="align-items-end justify-content-end">fine thanks..</small></div>
               
              <div  className="user" >
                  <small >Hit how are you? 
                     </small>
                  <div className="user-name text-dark"></div>
                </div>
                <div ><small className="align-items-end justify-content-end">fine thanks..</small></div>
               
              <div  className="user" >
                  <small >Hit how are you? 
                     </small>
                  <div className="user-name text-dark"></div>
                </div>
                <div ><small className="align-items-end justify-content-end">fine thanks..</small></div>
               
              
            </div> 
            
          </div>
      
      
      </div>
    ) : " "}
    </>
  );
};

export default PrivateMessage;
