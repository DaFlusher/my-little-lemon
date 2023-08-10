import { Routes, Route, Link } from "react-router-dom";
const Main = () => {
    const heading='Little Lemon';
    const location='Chicago';

    const intro= "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."

    const specials="This week'specials"
    return (
        <>
            <main>
                <section className='hero-image'>
                    <h1 className="heading">{heading}</h1>
                    <h2 className="location">{location}</h2>
                    <section style={{display:'flex',justifyContent:'space-between',alignContent:'center'}}>
                            
                        
                    
                        <p className="description">{intro}<br/>
                        
                        <Link to='/reserve-a-table' >
                        <button className='reserve-table' role='button'>Reserve a table</button>
                        </Link>
                        </p>
                
                        <img src={require('./images/dinner3.jpg') }  role='image' alt='little-lemon logo' style={{borderRadius:'8px', marginRight:'25%'}}/>
                    </section>

                </section>
                <section className="weeks-special">
                    <h3 className='week'>{specials}</h3>
                    <button className='online-menu'>Online Menu</button>
                    
                </section>

                <section className='dishes'>
                    <div className='greek-dessert'>
                        <img  style={{width:'100%',borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}} src={require('./images/greek sald.jpg')} height={200} alt='a greek salad'/>
                        <h4 className='price-flex'>
                            <h5 className='dish'>Greek Salad </h5>
                            <p class='price'>$12.99</p>
                        </h4>
                        <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus iusto odio doloremque suscipit asperiores sed numquam, reprehenderit quidem? Quod aspernatur iusto non dolor.</p>
                        <p className='order'>Order a delivery &#128690;<img src={require('./Cycling.png')} alt='' height={20}/></p>
                    </div>


                    <div className="bruchetta">
                        <img  style={{width:'100%', borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}} src={require('./images/bruchetta.jpg')} height={200} alt='a bruchetta'/>
                        <h4 className='price-flex'>
                            <h5 className='dish'>Bruchetta </h5>
                            <p class='price'>$5.99</p>
                        </h4>
                        <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus iusto odio doloremque suscipit asperiores sed numquam, reprehenderit quidem? Quod aspernatur iusto non dolor.</p>
                        <p className='order'>Order a delivery &#128690;<img src={require('./Cycling.png')} alt='' height={20}/></p>
                    </div>


                    <div className="lemon-dessert">
                        <img style={{width:'100%',borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}} src={require('./images/lemon-dessert.jpg')}height={200} alt='a lemon-dessert'/>
                        <h4 className='price-flex'>
                            <h5 className='dish'>Lemon Dessert </h5>
                            <p class='price'>$5.00</p>
                        </h4>
                        <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus iusto odio doloremque suscipit asperiores sed numquam, reprehenderit quidem? Quod aspernatur iusto non dolor.</p>
                        <p className='order'>Order a delivery &#128690;<img src={require('./Cycling.png')} alt='' height={20}/></p>
                    </div>
                </section>
            </main>
        </>
      );
}
 
export default Main;
