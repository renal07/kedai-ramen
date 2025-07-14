import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav
      className="navbar navbar-expand-md"
      style={{
        backgroundColor: '#c0392b',
        padding: '10px 40px',
        borderRadius: '30px',
        margin: '20px auto',
        maxWidth: '1200px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-0">
        {/* Logo Kiri */}
        <div className="text-white fw-bold" style={{ fontSize: '22px' }}>
          🍜 iTadaKimaSu!
        </div>

        {/* Menu */}
        <ul className="navbar-nav d-flex flex-row gap-3 align-items-center mb-0">
          {user ? (
            <>
              <li className="nav-item">
                <Link to="/home" className="nav-link text-white fw-medium">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/beli" className="nav-link text-white fw-medium">Beli</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white fw-medium">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white fw-medium">Contact</Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={handleLogout}
                >
                  Logout ({user.username})
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white fw-medium">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
