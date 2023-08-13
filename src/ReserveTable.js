
import { hover } from '@testing-library/user-event/dist/hover';
import Header from './Header';
import Nav from './Nav';
import { useState } from 'react';
import Footer from './Footer';
import BookingForm from './BookingForm';



const ReserveTable = (props) => {
    
    
    return (
            
            
            <div className='grids' style={{}}>
              <div className='nav-head-grid'>
                
                  <Header/>
              
                
                  <Nav/>
              </div>
              <section style={{textAlign:"center", backgroundColor:'#edefee', alignItems:'center'}}>
                    <h1 className='table-head'>Reserve a Table</h1>
                    <h2 className='table-subhead'>Please enter your dining info below</h2>

                    <BookingForm availableTime={props.availableTime} setAvailableTime={props.setAvailableTime} handleTimeChange={props.handleTimeChange} />
                    
              </section>
              <Footer/>
              
            </div>

        
      );
}
 
export default ReserveTable;