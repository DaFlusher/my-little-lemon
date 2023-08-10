import{Route,Routes} from 'react-router-dom'
import { useState } from 'react';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import ReserveTable from './ReserveTable';
import BookingForm from './BookingForm';
import Info from './Info';
import Home from './Home';


function App() {

  return(
  <>

    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/reserve-a-table' element={<ReserveTable/>}/>
    </Routes>
      
  </>);

}
  
  /*return (
    <>
      <div className='grids' style={{}}>
        <div className='nav-head-grid'>
          
            <Header/>
        
          
            <Nav/>
        
          
          
        </div>

        <div className='main'>
            <Main/>
        </div>

        <div className='footer'>
            <Footer/>
        </div>
       
        
      </div>
      
    </>
  )*/





export default App;
