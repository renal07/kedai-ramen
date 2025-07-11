import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Product.css';
import { Link, useNavigate } from 'react-router-dom';

import Ramen1 from '../assets/Ramen 1.png';
import Ramen2 from '../assets/Ramen 2.png';
import Ramen3 from '../assets/Ramen 3.png';

const imageMap = {
  "Ramen1.jpg": Ramen1,
  "Ramen2.jpg": Ramen2,
  "Ramen3.jpg": Ramen3,
};

function Product() {
  const [produkList, setProdukList] = useState([]);
  const [selectedProduk, setSelectedProduk] = useState(null);
  const [newProduk, setNewProduk] = useState({
    id: '',
    nama: '',
    harga: '',
    gambar: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduk();
  }, []);

  const fetchProduk = () => {
    fetch("http://localhost/kedai-api/produk/read.php")
      .then((res) => res.json())
      .then((data) => {
        setProdukList(data);
        setSelectedProduk(data[0] || null);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduk({ ...newProduk, [name]: value });
  };

  const handleTambahProduk = () => {
    if (!newProduk.nama || !newProduk.harga || !newProduk.gambar) {
      alert("Harap lengkapi semua field.");
      return;
    }

    fetch("http://localhost/kedai-api/produk/create.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduk),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setNewProduk({ nama: '', harga: '', gambar: '' });
        fetchProduk();
      });
  };

  const handleEditProduk = (produk) => {
    setNewProduk(produk);
    setIsEditMode(true);
  };

  const handleUpdateProduk = () => {
    fetch("http://localhost/kedai-api/produk/update.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduk),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setIsEditMode(false);
        setNewProduk({ nama: '', harga: '', gambar: '' });
        fetchProduk();
      });
  };

  const handleHapusProduk = (id) => {
    if (!window.confirm("Yakin ingin menghapus produk ini?")) return;

    fetch("http://localhost/kedai-api/produk/delete.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchProduk();
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: '12px', margin: '16px 0', justifyContent: 'center' }}>
        <Link to="/admin">
          <button className="admin-btn">Kembali</button>
        </Link>
        <button className="admin-btn logout" onClick={handleLogout}>Logout</button>
      </div>
      <main className="product-main">
        <h2>Menu Ramen Kami</h2>

        <div className="form-tambah">
          <h3>{isEditMode ? 'Edit Produk' : 'Tambah Produk'}</h3>
          <input
            type="text"
            name="nama"
            value={newProduk.nama}
            onChange={handleChange}
            placeholder="Nama produk"
          />
          <input
            type="number"
            name="harga"
            value={newProduk.harga}
            onChange={handleChange}
            placeholder="Harga"
          />
          <select name="gambar" value={newProduk.gambar} onChange={handleChange}>
            <option value="">Pilih Gambar</option>
            <option value="Ramen1.jpg">Ramen1</option>
            <option value="Ramen2.jpg">Ramen2</option>
            <option value="Ramen3.jpg">Ramen3</option>
          </select>
          {isEditMode ? (
            <button onClick={handleUpdateProduk}>Simpan Perubahan</button>
          ) : (
            <button onClick={handleTambahProduk}>Tambah</button>
          )}
        </div>

        {selectedProduk && (
          <div className="featured-image">
            <img src={imageMap[selectedProduk.gambar]} alt={selectedProduk.nama} />
            <h3>{selectedProduk.nama}</h3>
            <p>Rp {parseInt(selectedProduk.harga).toLocaleString()}</p>
          </div>
        )}

        <ul className="product-list">
          {produkList.map((produk) => (
            <li key={produk.id} className="product-item">
              <span onClick={() => setSelectedProduk(produk)} style={{ cursor: 'pointer' }}>
                {produk.nama}
              </span>
              <button
                onClick={() => handleEditProduk(produk)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#ffc107',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleHapusProduk(produk.id)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#d62828',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
