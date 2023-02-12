import React from "react";
import Header from "../Components/Header";
import "../Components/Css/Posts.css";

import Posts from "../Components/Posts";
import ChatCard from "../Components/ChatCard";

function PostPage() {
  return (
    <div className="container-posts">
      <div className="col-md-3">
        <Posts />
      </div>
      <div className="col-md-9">
        <Header />
        <div className="coming-soon">
          <h1
            style={{
              marginTop: "14%",
              fontWeight: "bold",
              color: "#dddd",
              fontSize: "70px",
              marginRight: "200px",
            }}
          >
            Coming soon
          </h1>
        </div>
        <ChatCard/>
       
      </div>
    </div>
  );
}

export default PostPage;
