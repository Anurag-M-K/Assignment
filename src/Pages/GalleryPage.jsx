import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useSelector  } from "react-redux";
import ChatCard from "../Components/ChatCard";
import "../Components/Css/Gallery.css";

function GalleryPage() {

  const { cardState } = useSelector(state=>state.chatCard)

  return (
    <>
    <div className="container-gallery">
      <div className="col-md-3">
        <Sidebar />
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
      <div className="chat-btn">

        <ChatCard/>
      </div>
       

      </div>
    

    </div>
      
    </>
  );
}

export default GalleryPage;
