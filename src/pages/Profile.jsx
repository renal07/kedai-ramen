import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Profile.css'; // file CSS untuk halaman Profile

function Profile() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="profile-main">
        <h2>Profil Pemilik Kedai Ichiban</h2>
        <div className="profile-info">
          <img
            src="https://via.placeholder.com/150"
            alt="Pemilik Kedai Ichiban"
            className="profile-img"
          />
          <p className="profile-description">
            Nama saya Ichiro Tanaka, pemilik Kedai Ramen Ichiban. Saya memiliki
            hasrat besar terhadap kuliner Jepang dan ingin memperkenalkan ramen
            autentik kepada masyarakat. Saya berharap Kedai Ichiban bisa menjadi
            tempat favorit bagi banyak orang untuk menikmati ramen lezat.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
