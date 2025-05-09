import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css'; // CSS terpisah

function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="about-main">
        <h2>RAMEN-YA!</h2>
        <p>
          RAMEN-YA! adalah tempat terbaik untuk menikmati ramen autentik Jepang.
          Kami menggunakan bahan-bahan berkualitas dan resep asli dari Jepang.
        </p>
        <p>masukin pararafnya yang rada nyambung kan nanti masuk di editnyanh</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
