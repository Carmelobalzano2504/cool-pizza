import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavImage from '../../static/images/CoolPizza.png';



function Navbar() {
    return (
        
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-title'>
                    <h1>COOL PIZZA</h1>
                    </Link>
                
                    <Link to='/menu' className="navbar-logo">
                      <img src={NavImage} width='150' height='150' alt='retro_nav_picture' />
                      <div className="logo_tooltip">Click to see our menu</div>
                    </Link>
                    <div className="links">
                    <div className="nav-link">
                    <Link to='/aboutUs'className="nav-link">About Us</Link>
                    </div>
                    <div className="nav-link">
                    <Link to='/contactUs' className="nav-link">Contact Us</Link>
                    </div>
                    <div className="nav-link">
                    <Link to='/menu' className="nav-link">Menu</Link>
                    </div>
                    </div>
                </div>
            </nav>
        
    )
}

export default Navbar;