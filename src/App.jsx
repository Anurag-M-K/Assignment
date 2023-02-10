import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPageBackGround from './Components/LandingPageBackGround';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Test from './Components/Test';
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts'
import Galllery from './Components/Galllery';
import Todo from './Components/Todo';

function App() {


  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/land' element={<LandingPageBackGround/>} />
    <Route exact path='/side' element={<Sidebar/>} />
    <Route exact path='/header' element={<Header/>}/>
    <Route exact path='/test' element={<Test/>}/>
    <Route exact path='/profile' element={<UserProfile/>} />
    <Route exact path='/posts' element={<Posts/>}/>
    <Route exact path='/gallery' element={<Galllery/>}/>
    <Route exact path='/todo' element={<Todo/>}/>
    
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
