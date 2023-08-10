import { Routes, Route, Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <>
            <nav className="navbar-grid">
                
                    <ul>
                        <Link to='/' className='nav'>Home</Link>
                        
                        <Link className="nav">About</Link>
                        <Link className="nav">Menu</Link>
                        <Link to='/reserve-a-table'className='nav'>Reservations</Link>
                        
                        <Link className="nav">Order online</Link>
                        <Link className="nav">Login</Link>
                    </ul> 
            
                  
            </nav>
        </>
     );
}
 
export default Nav;
