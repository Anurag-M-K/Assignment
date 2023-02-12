import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Css/UserProfile.css';
import Map from './Map';
import ChatCard from './ChatCard';
import { setCard } from '../redux/features/chatCardSlice';

function UserProfile({ userId }) {
  const { id } = useParams()
  const [ user, setUser] = useState([])
  const [ visible , setVisible ] = useState(false)
  const dispatch = useDispatch()
  const { cardState } = useSelector(state=>state.chatCard)


 
    const { loginUserDetails } = useSelector(state=>state.user)

              
    const handleClick = ()=>{
    
      if(visible === false){
        dispatch(setCard(true))
      }
    }
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
          <h6 className='ms-1'>Username  :  <span className='text-dark'> {loginUserDetails.username}</span></h6> 
          <h6 className='ms-1'>Email  : <span className='text-dark'> {loginUserDetails.email}</span>  </h6>
          <h6 className='ms-1'>Phone  :  <span className='text-dark'> {loginUserDetails.phone}</span></h6>
          <h6 className='ms-1'>Website :  <span className='text-dark'> {loginUserDetails.website}</span></h6>
          <div className='horizontalLine'></div>  
          <h6 className='mt-3 ms-1'>Company</h6>
          <h6 className='mt-3 ms-1'>Name :    <span className='text-dark'>{loginUserDetails?.company?.name}</span></h6>
          <h6 className='mt-3 ms-1'>Catchphrase  :  <span className='text-dark'> {loginUserDetails?.company?.catchPhrase}</span></h6>
          <h6 className='mt-3 ms-1'>Bs  :   <span className='text-dark'>{loginUserDetails?.company?.bs}</span></h6>
        </Col>
        <Col xs={2} md={1}>

        <div className='middleLine'></div>

        
        </Col>
        <Col xs={7} md={8}>

        <h6 className=''>Address        :    </h6>
          <h6 className='ms-3'>Street :   <span className='text-dark'>{loginUserDetails?.address?.street}</span></h6>
          <h6 className='ms-3'>Suite   :   <span className='text-dark'>{loginUserDetails?.address?.suite}</span></h6>
          <h6 className='ms-3'>City   :   <span className='text-dark'>{loginUserDetails?.address?.city}</span></h6>
          <h6 className='ms-3'>Zip Code  :   <span className='text-dark'>{loginUserDetails?.address?.zipcode}</span></h6>

       {cardState ?  <ChatCard />  : "" }
          
        <Map/>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
    <a   onClick={handleClick} style={{
      
    }} class="btn btn-primary btn-md active" role="button" aria-pressed="true">Chats</a>
    </div>


        </Col>
      
      </Row>
     

    

      </div>
   
    </div>
  </div>
    </>
  )
}

export default UserProfile