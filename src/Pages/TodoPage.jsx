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
      </div>
    </div>
  )
}

export default TodoPage