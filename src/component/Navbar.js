import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ()=>{
    return(
            <nav className="nav-wrapper navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="text-success nav-link align-left"><i className="fas fa-store"></i> Bhiwandi Store</Link>
                    
                    <ul className="right navbar-nav ml-auto">
                        <li className="nav-item m-1 nav-link"><Link to="/">Shop</Link></li>
                        <li className="nav-item m-1 nav-link"><Link to="/cart">My cart</Link></li>
                        <li className="nav-item m-1 nav-link"><Link to="/cart"><i className="fas fa-shopping-cart"></i> cart</Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;