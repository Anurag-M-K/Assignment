import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LandingPageBackGround from './Components/LandingPageBackGround';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Test from './Components/Test';

function App() {


  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/test' element={<LandingPageBackGround/>} />
    <Route exact path='/land' element={<LandingPage/>} />
    <Route exact path='/side' element={<Sidebar/>} />
    <Route exact path='/header' element={<Header/>}/>
    <Route exact path='/testside' element={<Test/>}/>
    
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
