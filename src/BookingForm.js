import { useState } from "react";
const BookingForm = () => {

    
    const [date, setDate]= useState(new Date().toLocaleDateString());
    const[availableTime, setAvailableTime]= useState('');
    const[number, setNumber]= useState(1);
    const[occassion, setOccassion]= useState('')

    const handleDateChange=(e)=>{
        setDate(e.target.value)
    }

    const handleTimeChange=(e)=>{
        
        setAvailableTime(e.target.value)
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
        setNumber('');
        setOccassion('')
    }
    return ( 
        <>
            <form  onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date" />

                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time " value={availableTime} onChange={handleTimeChange}>
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                            <p>You chose:{availableTime}</p>
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder={1} min={1} max={10} id="guests" />
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" value={occassion} onChange={handleOccassionChange}>
                                <option value='birthday'>Birthday</option>
                                <option value='anniversary'>Anniversary</option>
                            </select>
                            <p>You chose:{occassion}</p>
                            <input type="submit" defaultValue="Make Your reservation" />
                        </form>
        </>
     );
}
 
export default BookingForm;