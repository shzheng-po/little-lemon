// import {Routes, Route, Link} from "react-router-dom"
// import Main from "./Main"
// import Specials from "./Specials"
// import Chicago from "./Chicago";
// import CallToAction from "./CallToAction";
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                {/* <li className='/Home'><a href='#'>Home</a></li>
                <li className='/About'><a href='#'>About</a></li>
                <li className="/Menu"><a href='#'>Menu</a></li>
                <li className="/Order"><a href="#">Order Online</a></li>
                <li className="/Reservation"><a href="#">Reservation</a></li>
                <li className="/Login"><a href="#">Login</a></li> */}
                <li>
                    <Link to="/" className='nav-item'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='nav-item'>About</Link>
                </li>
                <li>
                    <Link to="/menu" className='nav-item'>Menu</Link>
                </li>
                <li>
                    <Link to="/order" className='nav-item'>Order</Link>
                </li>
                <li>
                    <Link to="/reservation" className='nav-item'>Reservation</Link>
                </li>
                <li>
                    <Link to="/login" className='nav-item'>Login</Link>
                </li>
            </ul>
                {/* <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/reservation" className="nav-item">Reservation</Link>
                <Link to="/specials" className="nav-item">Specials</Link>
                <Link to="/order" className="nav-item">Order Online</Link>
                <Link to="/login" className="nav-item">Login</Link> */}
        </nav>
    );
}

export default Nav;