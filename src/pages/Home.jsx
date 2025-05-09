import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/Home.css'; // pastikan CSS di sini

import Ramen1 from '../assets/Ramen 1.png';
import Ramen2 from '../assets/Ramen 2.png';
import Ramen3 from '../assets/Ramen 3.png';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://placehold.co/400x200?text=Iklan+1',
    'https://placehold.co/400x200?text=Iklan+2',
    'https://placehold.co/400x200?text=Iklan+3',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <Header />
      <Navbar />
      <main className="home-main">
        <h2>Selamat datang!</h2>
        <p>Nikmati ramen terenak dengan kuah khas Jepang di Kedai Ichiban.</p>

        {/* Kotak Iklan */}
        <div className="ad-box">
          <button className="ad-btn" onClick={prevImage}>
            &#8592;
          </button>
          <img src={images[currentImageIndex]} alt="Iklan" className="ad-img" />
          <button className="ad-btn" onClick={nextImage}>
            &#8594;
          </button>
        </div>

        {/* Rekomendasi Menu */}
        <div className="menu-recommendations">
          <h3>Rekomendasi Menu</h3>
          <ul className="menu-list">
            <li>Ramen Miso</li>
            <li>Ramen Shoyu</li>
            <li>Ramen Spicy</li>
          </ul>
        </div>

        {/* Daftar Gambar */}
        <div className="image-gallery">
          <img src={Ramen1} alt="Menu 1" />
          <img src={Ramen2} alt="Menu 2" />
          <img src={Ramen3} alt="Menu 3" />
          <img src={Ramen2} alt="Menu 4" />
          <img src={Ramen1} alt="Menu 5" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;
