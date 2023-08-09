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
                <div style={{textAlign:'left', marginLeft:'70px'}}>
          
                    <p>1. Name</p>
                    <input type='text' value={name} onChange={handleNameAgain} style={{width:'50%', backgroundColor:'#edefee' , height:'50px', borderRadius:'8px', border:'1px solid #495E57', textAlign:'center'}}/>
                

                    <p>1. Email</p>
                    <input type='email' value={email} onChange={handleEmail} style={{width:'50%', backgroundColor:'#edefee' , height:'50px', borderRadius:'8px', border:'1px solid #495E57', textAlign:'center'}}/>


                    
                </div>
                <div></div>
                    
            
            </div>
        )
    }

    const form3=()=>{

        return(
                
            <div style={{ display:'grid', gridTemplateColumns:' 1fr'}}>
                <div style={{textAlign:'left', marginLeft:'70px',  }}>
          
                    <p>3. Name of Card Holder</p>
                    <input type='text' value={cardName} onChange={handleCardName} style={{width:'50%', backgroundColor:'#edefee' , height:'50px', borderRadius:'8px', border:'1px solid #495E57', textAlign:'center'}}/>
                

                    <p>4. Card Number</p>
                    <input type='text' value={cardNumber} onChange={handleCardNumber} style={{width:'50%', backgroundColor:'#edefee' , height:'50px', borderRadius:'8px', border:'1px solid #495E57', textAlign:'center'}}/>

                    <p>5. Expiry date</p>
                    <input type='text' value={expiryDate} onChange={handleExpiryDate} style={{width:'20%', backgroundColor:'#edefee' , height:'50px', borderRadius:'8px', border:'1px solid #495E57', textAlign:'center'}}/>

                    <p>6. CVV</p>
                    <input type='text' value={cvv} onChange={handleCvv} style={{width:'10%', backgroundColor:'#edefee' , height:'50px', borderRadius:'8px', border:'1px solid #495E57', textAlign:'center'}}/>




                    
                </div>
                <div></div>
                    
            
            </div>
        )
    }
    
    const modal=(date,time, number)=>{
        return(<>
            <h3>Table Reserved</h3>
            <p>Date:{date.toLocaleDateString}</p>
            <p>Time:{time.toLocaleTimeString}</p>
            <p>Number of persons{number}</p>
            

        </>)}
    

   
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

              <h3 style={{margin:'20px 0'}}>CARD DETAILS</h3>
              {form3()}
              

              <p><button class='submit-btn' onSubmit={modal}>Submit</button>Pg 2 of 2</p>
        </section>
        <Footer/>
        
      </div>
     );
}
 
export default Info;