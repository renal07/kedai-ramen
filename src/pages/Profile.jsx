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
        <h2>Profil Pembuat Web</h2>
        <div className="profile-info">
          <div className="profile-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Khoirunisha Salsabila"
              className="profile-img"
            />
            <h3>Khoirunisha Salsabila</h3>
            <p className="profile-description">
              Khoirunisha Salsabila, Mahasiswa yang Ahli dalam Mendesain terutama Figma.
            </p>
          </div>

          <div className="profile-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Muhammad Rajwa"
              className="profile-img"
            />
            <h3>Muhammad Rajwa</h3>
            <p className="profile-description">
              Muhammad Rajwa, Mahasiswa yang Ahli dalam mengumpulkan data dan referensi.
            </p>
          </div>

          <div className="profile-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Reinal Fahrizi"
              className="profile-img"
            />
            <h3>Reinal Fahrizi</h3>
            <p className="profile-description">
              Reinal Fahrizi, Mahasiswa yang Ahli dalam Program.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
