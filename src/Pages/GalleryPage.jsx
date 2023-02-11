import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import '../Components/Css/Gallery.css';

function GalleryPage() {
  return (
    <div className='container-gallery'>
      <div className="col-md-3">
        <Sidebar/>

      </div>
      <div className="col-md-9">

        <Header/>
      </div>
    </div>
  )
}

export default GalleryPage