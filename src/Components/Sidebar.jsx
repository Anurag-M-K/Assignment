import React from "react";
import { Link } from "react-router-dom";
import "./Css/sidebar.css";

const sidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="tabs">
        <div>
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              color: "#ddd",
            }}
          >
            <h6 className=" py-3 text-light sidebar-tabs" > Profile</h6>
          </Link>
        </div>
        <div className="line bg-light"></div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            to="/posts"
          >
            <h6 className=" py-3 text-light sidebar-tabs"> Posts</h6>
          </Link>
        </div>
        <div className="line bg-light"></div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            to="/gallery"
          >
            <h6 className=" text-light py-3 sidebar-tabs"> Gallary</h6>
          </Link>
        </div>
        <div className="line bg-light"></div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            to="/todo"
          >
            <h6 className=" py-3 text-light sidebar-tabs"> To-Do</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
