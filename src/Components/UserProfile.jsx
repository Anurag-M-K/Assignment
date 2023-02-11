import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import './Css/UserProfile.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GoogleMap , useLoadScript ,Marker} from '@react-google-maps/api';

function UserProfile() {

  const { id } = useParams()
console.log(id)
  const { loginUserDetails } = useSelector(state=> state.user)
  const { isLoaded }= useLoadScript({ googleMapsApiKey:"AIzaSyDRX0D21tjCpNmpABQp8bnfNyA99pscQrM"});

  if(!isLoaded) return <div>Loading ...</div>

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

          <GoogleMap zoom={10} cenrer={{lat:-37.3159, lng: 81.1496 }}
          mapContainerClassName="map-container"
          ></GoogleMap>

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