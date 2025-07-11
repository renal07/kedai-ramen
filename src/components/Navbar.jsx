import React from 'react';
import { Link } from 'react-router-dom'; // ✅ gunakan Link, bukan a href
import './Navbar.css';

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h6>=</h6>
      </div>

      {user ? (
        <ul className="navbar-menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button onClick={handleLogout}>
              Logout ({user.username})
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navbar-menu">
          <li><Link to="/login">Login</Link></li>
        </ul>
      )}

      <div className="navbar-brand">
        <h6>=</h6>
      </div>
    </nav>
  );
}

export default Navbar;
