import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPageBackGround from './Components/LandingPageBackGround';
import Header from './Components/Header';
import PostPage from './Pages/PostPage';
import TodoPage from './Pages/TodoPage';
import GalleryPage from './Pages/GalleryPage';
import ProfilePge from './Pages/ProfilePge';
import ProfileCard from './Components/ProfileCard';
import ChatCard from './Components/ChatCard';
import Map from './Components/Map';
function App() {


  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<LandingPageBackGround/>} />
    <Route exact path='/header' element={<Header/>}/>
    <Route exact path='/profile' element={<ProfilePge/>} />
    <Route exact path='/posts' element={<PostPage/>}/>
    <Route exact path='/gallery' element={<GalleryPage/>}/>
    <Route exact path='/todo' element={<TodoPage/>}/>

    <Route exact path='/card' element={<ProfileCard/>}/>
    <Route exact path='/chat' element={<ChatCard/>}/>
    <Route exact path='/map' element={<Map/>}/>
    
   </Routes>
   </BrowserRouter> 
   
   </>
  )
}

export default App
