import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Css/ProfileCard.css";

function ProfileCard() {
  const { loginUserDetails } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.users);

  const signout = () => {
    //clearing localstorage,jwt code  here

    navigate("/");
  };

  //filter the array for exlcuding login user
  const excludedValue = loginUserDetails.name
  const friendsData = userDetails.users.filter(value => value.name !==excludedValue)
  
  return (
    <div>
      <div className="container-card">
        <div className="box">
          <div className="imgDiv">
            <img src={loginUserDetails?.profilepicture} alt="" />
          </div>
          <div className="user-content">
            <h4 className="text-center p-2">{loginUserDetails?.name}</h4>

            <h6 className="text-center ps-5 ">{loginUserDetails?.email}</h6>
            <div className="crossLine"></div>
            <div
              className="card-scroll"
              style={{ height: "100px", overflowY: "scroll" }}
            >
              {friendsData?.map((user) => (
                <div className="user" key={friendsData?.id}>
                  <img
                    style={{ width: "25px", height: "25px", marginLeft: "5px" }}
                    src={user?.profilepicture}
                    alt="55"
                  />
                  <div className="user-name text-dark">{user?.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-Div">
            <button
              className="btn btn-danger mt-3"
              style={{ borderRadius: "25px" }}
              onClick={signout}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
