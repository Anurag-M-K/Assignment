import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Css/ProfileCard.css';

function ProfileCard() {
  const { loginUserDetails } = useSelector(state=>state.user)
  const navigate = useNavigate()


  const signout = ()=>{
    //clear  localstorage,jwt here

    navigate("/")
  }

  return (
    <div>
        <div className="container-card">
            <div className="box">
<div className='imgDiv'>

<img  src={loginUserDetails?.profilepicture} alt="" />   
</div>
<div className='user-content'>
    <h4 className='text-center p-2'>{loginUserDetails?.name}</h4>

    <h6 className='text-center ps-5 '>{loginUserDetails?.email}</h6>
    <div className='crossLine'></div>
    <div style={{ display: 'flex', alignItems: 'center',justifyContent:"center" }}>
      <img style={{width:"25px" , height:"25px"}} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="Your Image" />
      <span style={{ marginLeft: '10px' }}>Your Name</span>
    </div>
    <div className='crossLine'></div>
    <div style={{ display: 'flex', alignItems: 'center',justifyContent:"center" }}>
      <img style={{width:"25px" , height:"25px"}} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="Your Image" />
      <span style={{ marginLeft: '10px' }}>Your Name</span>
    </div>
</div>
<div className='btn-Div'>

       <button className='btn btn-danger mt-3' style={{borderRadius:"25px"}} onClick={signout}>Sign out</button>
</div>
</div>
        </div>
    </div>
  )
}

export default ProfileCard