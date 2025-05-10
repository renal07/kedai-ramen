import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Ramen1 from '../assets/Ramen 1.png';
import Ramen2 from '../assets/Ramen 2.png';
import Ramen3 from '../assets/Ramen 3.png';
import './Product.css';

const ramenList = [
  { name: 'Yokohama Ramen', image: Ramen1 },
  { name: 'Nakamoto', image: Ramen2 },
  { name: 'Shibuya Ramen', image: Ramen3 },
  { name: 'Donburiya', image: Ramen2 },
  { name: 'Sushi Salmon', image: Ramen1 },
];

function Product() {
  const [selectedRamen, setSelectedRamen] = useState(ramenList[0]);

  return (
    <div>
      <Header />
      <Navbar />
      <main className="product-main">
        <h2>Menu Ramen Kami</h2>

        <div className="featured-image">
          <img src={selectedRamen.image} alt={selectedRamen.name} />
          <h3>{selectedRamen.name}</h3>
        </div>

        <ul className="product-list">
          {ramenList.map((ramen, index) => (
            <li key={index} onClick={() => setSelectedRamen(ramen)} className="product-item">
              {ramen.name}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
