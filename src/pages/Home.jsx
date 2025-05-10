import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Iklan1 from '../assets/Iklan.png';
import Ramen1 from '../assets/Ramen 1.png';
import Ramen2 from '../assets/Ramen 2.png';
import Ramen3 from '../assets/Ramen 3.png';

import '../pages/Home.css';

function Home() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/product');
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {Iklan1},
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
        <p>Nikmati ramen terenak dengan kuah khas Jepang di Kedai Ramen iTadaKimaSu!</p>

        <div className="ad-wrapper">
          <div className="ad-box">
            <button className="ad-btn" onClick={prevImage}>
              &#8592;
            </button>
            <img src={images[currentImageIndex]} alt="Iklan" className="ad-img" />
            <button className="ad-btn" onClick={nextImage}>
              &#8594;
            </button>
          </div>
        </div>

        <div className="recommendation-wrapper">
          <h2>Rekomendasi Menu:</h2>
          <div className="image-gallery">
            {[Ramen1, Ramen2, Ramen3, Ramen2, Ramen1].map((img, index) => (
              <div
                className="menu-item"
                key={index}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                <img src={img} alt={`Menu ${index + 1}`} />
                <p>{['Yokohama Ramen', 'Nakamoto', 'Shibuya Ramen', 'Donburiya', 'Sushi Salmon', 'Tuna Takaki', ][index]}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default Home;
