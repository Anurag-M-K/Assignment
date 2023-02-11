import React from 'react'
import Header from '../Components/Header'
import '../Components/Css/Posts.css'

import Posts from '../Components/Posts'

function PostPage() {
  return (
    <div className='container-posts'>
      <div className="col-md-3">
        <Posts/>
      </div>
      <div className="col-md-9">
        <Header/>
      </div>
        
        
      

    </div>
  )
}

export default PostPage