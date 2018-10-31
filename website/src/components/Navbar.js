import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/program'>Programs</NavLink></li>
                    <li><NavLink to='/event'>Events</NavLink></li>
                    <li><NavLink to='/volunteer'>Volunteer</NavLink></li>
                    <li><NavLink to='/news'>News</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;