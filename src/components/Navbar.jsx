import React from 'react';
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
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>

        {/* Tampilkan Logout jika user login */}
        {user && (
          <li>
            <button onClick={handleLogout}>
              Logout ({user.username})
            </button>
          </li>
        )}
      </ul>
      <div className="navbar-brand">
        <h6>=</h6>
      </div>
    </nav>
  );
}

export default Navbar;
