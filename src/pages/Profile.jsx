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
        <h2>Profil Pembuat</h2>
        <div className="profile-info">
          <div className="profile-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Khoirunisha Salsabila"
              className="profile-img"
            />
            <h3>Khoirunisha Salsabila</h3>
            <p className="profile-description">
              Khoirunisha Salsabila, pemilik Kedai Ramen Ichiban. Saya memiliki
              hasrat besar terhadap kuliner Jepang dan ingin memperkenalkan ramen
              autentik kepada masyarakat.
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
              Muhammad Rajwa adalah salah satu chef utama di Kedai Ichiban. Dengan pengalaman
              bertahun-tahun di dunia kuliner, dia bertanggung jawab untuk menciptakan rasa
              ramen yang khas di kedai kami.
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
              Reinal Fahrizi adalah manajer operasional di Kedai Ichiban, memastikan semuanya
              berjalan lancar dan memberikan pelayanan terbaik bagi pelanggan kami.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
