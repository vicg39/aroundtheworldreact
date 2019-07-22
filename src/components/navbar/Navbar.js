import React from 'react';

import './Navbar.js';
import logo from '../../components/logo.png';
import '../styles/navbar.scss';

export default function Navbar() {
    return <nav className="navbar">
            <img src={logo} alt="logo"/>
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                Home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                About
                </a>
            </li>
            <li>
                <a href="/" className="nav-link active">
                Tours
                </a>
            </li>
        </ul>
        </nav>    
    
}
