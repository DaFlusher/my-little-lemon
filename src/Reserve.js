
import { hover } from '@testing-library/user-event/dist/hover';
import Header from './Header';
import Nav from './navigation/Nav';
import { useState } from 'react';
import Footer from './Footer';



const Reserve = () => {
    
    const [date, setDate]= useState(new Date().toLocaleDateString());
    const[time, setTime]= useState(new Date().toLocaleTimeString());
    const[number, setNumber]= useState(2);

    const handleDateChange=(e)=>{
        setDate(e.target.value)
    }

    const handleTimeChange=(e)=>{
        setTime(e.target.value)
    }

    const handleNumberChange=(e)=>{
        setNumber(Number(e.target.value))
    }
    const form=()=>{
        return(

            <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', alignItems:'center'}}>
                <div style={{textAlign:'left', marginLeft:'70px',}}>
          
                    <p>1. What date would you like to reserve?</p>
                    <input type='date' value={date} onChange={handleDateChange} style={{width:'50%', backgroundColor:'#edefee' , height:'50px', borderRadius:'8px'}}/>
                    <p>You chose:{date}</p>

                    <p>2. What time would you like to reserve?</p>
                    <input type='time'  value={time} onChange={handleTimeChange} style={{width:'50%', backgroundColor:'#edefee', height:'50px', borderRadius:'8px'}}/>
                    <p>You chose: {time}</p>

                    <p>3. How many persons will be dining?</p>
                    <input type='text' value={number} onChange={handleNumberChange} style={{width:'50%', backgroundColor:'#edefee', height:'50px', borderRadius:'8px'}}/>
                    <p>You chose: {number}</p>

                </div>

                <div>
                    <img src={require('./images/dinner3.jpg') } style={{backgroundColor:'green',  marginRight:'70px', borderRadius:'8px'}}/>
                </div>
            </div>)
            
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
                    {form()}

                    <p><a href='#' style={{marginRight:'4%', fontSize:'18px'}}>Next Page</a>Pg 1 of 2</p>
              </section>
              <Footer/>
              
            </div>

        
      );
}
 
export default Reserve;