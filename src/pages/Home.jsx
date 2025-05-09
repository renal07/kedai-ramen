import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css'; // import css

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="home-main">
        <h2>Selamat datang!</h2>
        <p>Nikmati ramen terenak dengan kuah khas Jepang di Kedai Ichiban.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
