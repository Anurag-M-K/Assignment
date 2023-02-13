import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useSelector } from "react-redux";
import ChatCard from "../Components/ChatCard";
import "./css/GalleryPage.css";

function GalleryPage() {
  const { cardState } = useSelector((state) => state.chatCard);

  return (
    <>
      <div className="container-gallery">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Header />
          <div className="coming-soon">
            <div className="chat-btn">
              <ChatCard />
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
    </>
  );
}

export default GalleryPage;
