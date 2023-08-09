import { hover } from '@testing-library/user-event/dist/hover';
import Header from './Header';
import Nav from './navigation/Nav';
import { useState } from 'react';
import Footer from './Footer';

const Info = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const[cardName, setCardName]= useState('');
    const[cardNumber, setCardNumber]=useState('000 000 000 000 000');
    const[expiryDate, setExpiryDate]= useState('08/23');
    const[cvv, setCvv]= useState('000');

    const handleNameAgain=(event)=>{
            setName(event.target.value)
    }

    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }

    const handleCardName=(event)=>{
        setCardName(event.target.value)
    }

    const handleCardNumber=(event)=>{
        setCardNumber(event.target.value)
    }

    const handleExpiryDate=(event)=>{
        setExpiryDate(event.target.value)
    }

    const handleCvv=(event)=>{
        setCvv(event.target.value)
    }

    const form2=()=>{

        return(
                
            <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', alignItems:'center'}}>
                <div style={{textAlign:'left', marginLeft:'70px',}}>
          
                    <p>1. Name</p>
                    <input type='text' value={name} onChange={handleNameAgain} style={{width:'50%', backgroundColor:'#edefee' , height:'50px', borderRadius:'8px'}}/>
                    <p>You chose:{}</p>
                </div>
            </div>
        )
    }
    return ( 
        <div className='grids' style={{}}>
        <div className='nav-head-grid'>
          
            <Header/>
        
          
            <Nav/>
        </div>
        <section style={{textAlign:"center", width:'100%', backgroundColor:'#edefee'}}>
              <h1 className='table-head'>Reserve a Table</h1>
              <h2 className='table-subhead'>Please enter your Personal Info below</h2>
              {form2()}

              <p><a href='#' style={{marginRight:'4%', fontSize:'18px'}}>Next Page</a>Pg 1 of 2</p>
        </section>
        <Footer/>
        
      </div>
     );
}
 
export default Info;