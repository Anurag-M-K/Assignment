import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPageBackGround from './Components/LandingPageBackGround';
// import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
// import Test from './Components/Test';
import PostPage from './Pages/PostPage';
import TodoPage from './Pages/TodoPage';
import GalleryPage from './Pages/GalleryPage';
import UserProfile from './Components/UserProfile'
import ProfilePge from './Pages/ProfilePge';
function App() {


  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/land' element={<LandingPageBackGround/>} />
    {/* <Route exact path='/side' element={<Sidebar/>} /> */}
    <Route exact path='/header' element={<Header/>}/>
    <Route exact path='/profile' element={<ProfilePge/>} />
    <Route exact path='/posts' element={<PostPage/>}/>
    <Route exact path='/gallery' element={<GalleryPage/>}/>
    <Route exact path='/todo' element={<TodoPage/>}/>

    {/* <Route exact path='/test' element={<Test/>}/> */}
    
   </Routes>
   </BrowserRouter> 
   
   </>
  )
}

export default App
