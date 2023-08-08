import{Route,Routes} from 'react-router-dom'

import Header from './Header';
import Nav from './navigation/Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import Reserve from './Reserve';


function App() {
  return(<Reserve/>)
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



}

export default App;
