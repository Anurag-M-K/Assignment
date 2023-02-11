import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import '../Components/Css/Todo.css'
function TodoPage() {
  return (
    <div className='container-todo'>
      <div className="col-md-3">
        <Sidebar/>

      </div>
      <div className="col-md-9">

        <Header/>
        <div className="coming-soon">

        <h1 style={{marginTop:"19%",fontWeight:"bold",color:"#dddd",fontSize:"70px"}}>Coming soon</h1>
</div>
      </div>
    </div>
  )
}

export default TodoPage