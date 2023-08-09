
import { hover } from '@testing-library/user-event/dist/hover';
import Header from './Header';
import Nav from './navigation/Nav';
import { useState } from 'react';
import Footer from './Footer';



const ReserveTable = () => {
    
    const [date, setDate]= useState(new Date().toLocaleDateString());
    const[availabletime, setAvailableTime]= useState('');
    const[number, setNumber]= useState(1);

    const handleDateChange=(e)=>{
        setDate(e.target.value)
    }

    const handleTimeChange=(e)=>{
        setAvailableTime(e.target.value)
    }

    const handleNumberChange=(e)=>{
        setNumber(Number(e.target.value))
    }
    
    return (
            
            
            <div className='grids' style={{}}>
              <div className='nav-head-grid'>
                
                  <Header/>
              
                
                  <Nav/>
              </div>
              <section style={{textAlign:"center", width:'100%', backgroundColor:'#edefee'}}>
                    <h1 className='table-head'>Reserve a Table</h1>
                    <h2 className='table-subhead'>Please enter your dining info below</h2>
                    
                    <section>
                        <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date" />
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time ">
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder={1} min={1} max={10} id="guests" />
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            <input type="submit" defaultValue="Make Your reservation" />
                        </form>

                    </section>

                    <p><a href='#' style={{marginRight:'4%', fontSize:'18px'}}>Next Page</a>Pg 1 of 2</p>
              </section>
              <Footer/>
              
            </div>

        
      );
}
 
export default ReserveTable;