import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className="cta-button">Call to action</button>
    </nav>
  );
}

export default Navbar;
