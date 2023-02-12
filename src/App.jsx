import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPageBackGround';
import PostPage from './Pages/PostPage';
import TodoPage from './Pages/TodoPage';
import GalleryPage from './Pages/GalleryPage';
import ProfilePge from './Pages/ProfilePge';


function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<LandingPage/>} />
    <Route exact path='/profile' element={<ProfilePge/>} />
    <Route exact path='/posts' element={<PostPage/>}/>
    <Route exact path='/gallery' element={<GalleryPage/>}/>
    <Route exact path='/todo' element={<TodoPage/>}/>
   </Routes>
   </BrowserRouter> 
   
   </>
  )
}

export default App
