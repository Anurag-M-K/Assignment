import React from 'react'
import Sidebar from './Sidebar'
import Card from 'react-bootstrap/Card'; 
import Header from './Header';
import './Css/UserProfile.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserProfile() {
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
          <img style={{width:"9rem",height:"9rem"}} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="sdsdfad" />
          <h4 className=''>Anurag mk</h4>
          <h5 className=''>Username  :</h5>
          <h5 className=''>Email  :</h5>
          <h5 className=''>Phone  :</h5>
          <h5 className=''>Website :</h5>
          <div className='horizontalLine'></div>  
          <h5 className='mt-3'>Company</h5>
          <h5 className='mt-3'>Name : </h5>
          <h5 className='mt-3'>Catchphrase  :</h5>
          <h5 className='mt-3'>Bs  :</h5>
        </Col>
        <Col xs={2} md={1}>

        <div className='middleLine'></div>

        
        </Col>
        <Col xs={7} md={8}>

        <h5 className=''>Address        :</h5>
          <h5 className='ms-3'>Street :</h5>
          <h5 className='ms-3'>Suit   :</h5>
          <h5 className='ms-3'>City   :</h5>
          <h5 className='ms-3'>Zip Code  :</h5>

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