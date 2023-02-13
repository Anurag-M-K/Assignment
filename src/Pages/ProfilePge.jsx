import React from "react";
import UserProfile from "../Components/UserProfile";
import ChatCard from '../Components/ChatCard';
import './css/ProfilePage.css'
import './css/ProfilePage.css'
import PrivateMessage from "../Components/PrivateMessage";

function ProfilePge() {
  return (
    <>
<div className="col-md-12">

      <UserProfile />
</div>
<div className="col-md-12 card-div">
  <div className="outer-div-chatCard">

<ChatCard/>
  </div>
</div>
<div className="col-md-10 privateMessageCard">
<PrivateMessage/>

</div>


      
    </>
  );
}

export default ProfilePge;
