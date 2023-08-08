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
                    
                    <p className="description">{intro}</p>
                    <img src={require('./logo.png') } height={200} role='image' alt='little-lemon logo'/>

                </section>
                <section className="weeks-special">
                    <h3 className='week'>{specials}</h3>
                    <button className='online-menu'>Online Menu</button>
                    
                </section>

                <section className='dishes'>
                    <div className='greek-dessert'>
                        <img src={require('./images/greek sald.jpg')} height={200} alt='a greek salad'/>
                        <h4 className='price-flex'>
                            <h5 className='dish'>Greek Salad </h5>
                            <p class='price'>$12.99</p>
                        </h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus iusto odio doloremque suscipit asperiores sed numquam, reprehenderit quidem? Quod aspernatur iusto non dolor.</p>
                        <p className='order'>Order a delivery<img src={require('./Cycling.png')} alt='' height={20}/></p>
                    </div>
                    <div className="bruchetta">
                        <img src={require('./images/bruchetta.jpg')} height={200} alt='a bruchetta'/>
                    </div>
                    <div className="lemon-dessert">
                        <img src={require('./images/lemon-dessert.jpg')}height={200} alt='a lemon-dessert'/>
                    </div>
                </section>
            </main>
        </>
      );
}
 
export default Main;
<>
    <main></main>
</>