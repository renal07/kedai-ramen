import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Admin() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <main className="product-main">
        <h2>Admin Panel</h2>
        <div className="admin-buttons">
          <button className="admin-btn">
            <Link to="/editor" className="admin-link">Kelola Akun</Link>
          </button>
          <button className="admin-btn">
            <Link to="/product" className="admin-link">Kelola Produk</Link>
          </button>
          <button className="admin-btn logout" onClick={handleLogout}>Logout</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Admin;
