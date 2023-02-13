import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "../Components/Css/Todo.css";
import ChatCard from "../Components/ChatCard";
import PrivateMessage from "../Components/PrivateMessage";
import './css/ProfilePage.css'
function TodoPage() {
  return (
    <div className="container-todo">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <Header />
        <div className="coming-soon">
              <div className="chat-btn">
        
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

    </div>
  );
}

export default TodoPage;
