import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function Beli() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="about-main">
        <h2>Halaman Beli</h2>
        <p>Silakan kunjungi kedai kami untuk melakukan pembelian langsung.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Beli;
