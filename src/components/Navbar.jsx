import React from 'react';
import './Navbar.css'; // Pastikan link ke CSS yang benar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Ichiban</h1>
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
      <div className="navbar-brand">
        <h2>Kedai Ramen</h2>
      </div>
    </nav>
  );
}

export default Navbar;
