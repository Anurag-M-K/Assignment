import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Css/UserProfile.css';

function UserProfile({ userId }) {
  const { id } = useParams()
  const [ user, setUser] = useState([])


 
    const { loginUserDetails } = useSelector(state=>state.user)

    console.log("user ", [loginUserDetails])
console.log(loginUserDetails.name)
  return (
    <>

  <div className="container-fluid">
    <div className="row">
    
      <div className="col-md-3">
        <Sidebar/>
      </div>
      <div className="col-md-9">
      <Header/>
      <Row>
        <Col xs={3} md={3}>

  <img style={{width:"11rem",height:"11rem",borderRadius:"91px"}} src={loginUserDetails?.profilepicture} alt="profilepic" />
          <h4 >{loginUserDetails.name}</h4>
          <h6 className='ms-1'>Username  :   {loginUserDetails.username}</h6> 
          <h6 className='ms-1'>Email  :   {loginUserDetails.email} </h6>
          <h6 className='ms-1'>Phone  :   {loginUserDetails.phone}</h6>
          <h6 className='ms-1'>Website :   {loginUserDetails.website}</h6>
          <div className='horizontalLine'></div>  
          <h6 className='mt-3 ms-1'>Company</h6>
          <h6 className='mt-3 ms-1'>Name :    {loginUserDetails?.company?.name}</h6>
          <h6 className='mt-3 ms-1'>Catchphrase  :   {loginUserDetails?.company?.catchPhrase}</h6>
          <h6 className='mt-3 ms-1'>Bs  :   {loginUserDetails?.company?.bs}</h6>
        </Col>
        <Col xs={2} md={1}>

        <div className='middleLine'></div>

        
        </Col>
        <Col xs={7} md={8}>

        <h6 className=''>Address        :    </h6>
          <h6 className='ms-3'>Street :   {loginUserDetails?.address?.street}</h6>
          <h6 className='ms-3'>Suite   :   {loginUserDetails?.address?.suite}</h6>
          <h6 className='ms-3'>City   :   {loginUserDetails?.address?.city}</h6>
          <h6 className='ms-3'>Zip Code  :   {loginUserDetails?.address?.zipcode}</h6>

          

        </Col>
      
      </Row>
     

    

      </div>
      <div className="col-md-3">
        
      </div>
    </div>
  </div>
    </>
  )
}

export default UserProfile