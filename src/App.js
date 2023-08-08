import{Route,Routes} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Nav from './navigation/Nav';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <>
      <div className='grids'>
        <div className='nav-head-grid'>
          
            <Header/>
        
          
            <Nav/>
        
          
          
        </div>
        <Main/>
        <Footer/>
      </div> 
      
    </>
  )



}

export default App;
