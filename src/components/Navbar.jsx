import React from 'react';
import './Navbar.css'; // import css

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/about">About</a></li>
        <li className="navbar-item"><a href="/product">Product</a></li>
        <li className="navbar-item"><a href="/contact">Contact</a></li>
        <li className="navbar-item"><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
