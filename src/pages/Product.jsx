import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Product.css'; // file css khusus untuk product

function Product() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="product-main">
        <h2>Menu Ramen Kami</h2>
        <ul className="product-list">
          <li>Miso Ramen</li>
          <li>Shoyu Ramen</li>
          <li>Shio Ramen</li>
          <li>Spicy Ramen</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
