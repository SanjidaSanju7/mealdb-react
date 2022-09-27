import React from 'react';
import logo from '../../Images/green-food.png';
import './Header.css'
const Header = () => {
    return (

        <nav className='header' >
            <img className='logo' src={logo} alt="" />
            <div className="menu">
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/reservation" >Reservation</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/buy now">Buy Now</a>
                <button className='btn-food'>Book a Table</button>
            </div>
        </nav>

    );
};

export default Header;