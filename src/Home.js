
import{Route,Routes} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

const Home = () => {
    return (

        <>
            
            <div className='grids'>
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
      );
}
 
export default Home;





