import React from 'react';
import './Header.css'; // nanti kita buat file CSS ini

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">🍜 Kedai Ramen RAMEN-YA</h1>
      <p className="header-tagline">Rasa Jepang Asli, Harga Bersahabat</p>
    </header>
  );
}

export default Header;
