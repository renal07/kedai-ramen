import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Profile.css';

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
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-user-2344772019.jpg"
              alt="Khoirunisha Salsabila"
              className="profile-img"
              width="150"
              height="150"
            />
            <h3>Khoirunisha Salsabila</h3>
            <p>
              Mahasiswa yang ahli dalam desain, terutama menggunakan Figma.
            </p>
          </div>
          <div className="profile-card">
            <img
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-user-2344772019.jpg"
              alt="Muhammad Rajwa"
              className="profile-img"
              width="150"
              height="150"
            />
            <h3>Muhammad Rajwa</h3>
            <p>
              Mahasiswa yang ahli dalam mengumpulkan data dan referensi.
            </p>
          </div>
          <div className="profile-card">
            <img
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-user-2344772019.jpg"
              alt="Reinal Fahrizi"
              className="profile-img"
              width="150"
              height="150"
            />
            <h3>Reinal Fahrizi</h3>
            <p>
              Mahasiswa yang ahli dalam pemrograman.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
