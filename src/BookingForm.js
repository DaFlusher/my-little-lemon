import { useState } from "react";

const BookingForm = () => {

    
    const [date, setDate]= useState(new Date().toLocaleDateString());
    
    const[number, setNumber]= useState('1');
    const[occassion, setOccassion]= useState('');
    const[availableTime, setAvailableTime]= useState('');

  
    const handleTimeChange=(e)=>{
        
    setAvailableTime(e.target.value)}

    const handleDateChange=(e)=>{
        setDate(e.target.value)
    }

    const handleNumberChange=(e)=>{
        setNumber(Number(e.target.value))
    }
    
    const handleOccassionChange=(e)=>{
        setOccassion(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setAvailableTime('');
        setDate('');
        setNumber('1');
        setOccassion('')
    }
    return ( 
        <>
            <   form  onSubmit={handleSubmit} style={{ display: "grid",maWidth:'80%', gap: '20', marginLeft:'30%',marginTop:'2%'}}>
                    

                            <label htmlFor="res-date">1. Choose date</label><br/>
                            <input type="date" id="res-date" value={date} onChange={handleDateChange}  /><br/>

                            <label htmlFor="res-time">2. Choose time</label><br/>
                            <select id="res-time " value={availableTime} onChange={handleTimeChange} ><br/>
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                           
                            <label htmlFor="guests">3. Number of guests</label><br/>
                            <input type="number" min={1} max={10} id="guests" onChange={handleNumberChange} value={number} /><br/>
                            <label htmlFor="occasion">4. Occasion</label><br/>
                            <select id="occasion" value={occassion} onChange={handleOccassionChange}>
                                <option value='birthday'>Birthday</option>
                                <option value='anniversary'>Anniversary</option>
                            </select>
                            
                            <input  className="submit-btn" type="submit" defaultValue="Make Your reservation"/>
                    
            </form>
                
        </>
     );
}
 
export default BookingForm;