import React from "react";
import Header from "../Components/Header";
import "../Components/Css/Posts.css";

import Posts from "../Components/Posts";
import ChatCard from "../Components/ChatCard";
import PrivateMessage from "../Components/PrivateMessage";
import './css/ProfilePage.css'

function PostPage() {
  return (
    <div className="container-posts">
      <div className="col-md-3">
        <Posts />
      </div>
      <div className="col-md-9">
        <Header />
        <div className="coming-soon">
             
              <div className="posts-outer-div-chatCard">
            
            <ChatCard/>
            </div>
          <h1 
            style={{
              fontWeight: "bold",
              color: "#dddd",
              fontSize: "70px",
            }}
          >
            Coming soon
          </h1>
        </div>
      
       
      </div>

      <div className="col-md-10 privateMessageCard">
<PrivateMessage/>

</div>
    </div>
    
    
  );
}

export default PostPage;
