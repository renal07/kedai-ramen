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
        <h2>iTadaKimaSu!</h2>
        <p>
          iTadaKimaSu! adalah tempat terbaik untuk menikmati ramen autentik Jepang.
          Kami menggunakan bahan-bahan berkualitas dan resep asli dari Jepang.
        </p>
        <p>Kedai ramen otentik yang berlokasi di Majalengka ini menyajikan pengalaman kuliner khas Jepang yang menggoda selera, cocok untuk para pecinta ramen sejati. Menu andalan kami mencakup berbagai varian ramen seperti Miso Ramen dengan cita rasa gurih yang kaya, Shoyu Ramen berkuah kecap asin yang ringan namun lezat, serta Spicy Ramen untuk Anda yang menyukai tantangan pedas. </p>
        <p>Kami juga menyediakan pilihan ramen dengan topping ayam lembut, serta Original Ramen dengan kuah klasik yang nikmat.
        Tak hanya ramen, kami juga menghadirkan sushi segar sebagai pelengkap sempurna untuk menyempurnakan pengalaman bersantap Anda di RAMEN-YA.</p>
        <p>Datang dan nikmati kelezatan rasa Jepang di Majalengka hanya di iTadaKimaSu!.</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
