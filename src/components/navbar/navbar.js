import React, { Component } from 'react';
import { Route } from 'react-router';

class Navbar extends Component {

    handleOnClick = (aboutUs) => {
        console.log('hello');
    }

    render() {
        return (
            <div className='navbar'>
                <div className='navbar-links'>
                    <a className='about' to='/aboutUs' onClick={() => this.handleOnClick()}>About Us</a>
                    <a to='contactUs' to='/contactUs'>Contact Us</a>
                    <a to='menu' to='/menu'>Menu</a>
                </div>

                        {/* In the middle of trying to pass the route to about us through onClick */}


            </div>
        )
    }
}

export default Navbar;