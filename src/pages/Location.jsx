import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Location.css';

function Location() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product');
  };

  const restoData = Array(6).fill({
    name: 'CSB Mall',
    address: 'Jl. DR. Cipto Mangunkusumo No.26, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131',
    phone: '082345678910',
  });

  return (
    <div className="location-container">
      <nav className="location-navbar">
        <div className="logo">Itadakimasu!</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/location" className="active">Location</a>
          <a href="/about">About</a>
        </div>
      </nav>

      <h2 className="select-resto">Select <span className="highlight">Resto</span></h2>

      <div className="resto-grid">
        {restoData.map((resto, index) => (
          <div className="resto-card" key={index}>
            <h3>{resto.name}</h3>
            <p>{resto.address}</p>
            <p>{resto.phone}</p>
            <button onClick={handleClick}>Click Here</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Location;
