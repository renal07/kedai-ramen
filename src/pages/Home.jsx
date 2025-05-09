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

        <h2>Rekomendasi Menu:</h2>

        <div className="image-gallery">
          <div className="menu-item">
            <img src={Ramen1} alt="Menu 1" />
            <p>Ramen Original</p>
          </div>
          <div className="menu-item">
            <img src={Ramen2} alt="Menu 2" />
            <p>Ramen Shoyu</p>
          </div>
          <div className="menu-item">
            <img src={Ramen3} alt="Menu 3" />
            <p>Ramen Spicy</p>
          </div>
          <div className="menu-item">
            <img src={Ramen2} alt="Menu 4" />
            <p>Ramen Ayam</p>
          </div>
          <div className="menu-item">
            <img src={Ramen1} alt="Menu 5" />
            <p>Ramen Miso</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;
